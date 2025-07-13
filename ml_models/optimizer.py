from ortools.constraint_solver import pywrapcp, routing_enums_pb2
from math import radians, sin, cos, sqrt, atan2
from priority_utils import compute_priority_score
from carbon_estimator import estimate_carbon_kgs
from datetime import datetime, timedelta
from collections import defaultdict
from sklearn.cluster import DBSCAN
import numpy as np

def batch_deliveries(deliveries, batch_days=15):
    eco_orders = [d.copy() for d in deliveries if d.get("eco_delivery", False)]
    normal_orders = [d for d in deliveries if not d.get("eco_delivery", False)]

    # Add datetime object to each eco order
    for d in eco_orders:
        if "requested_date" not in d:
            raise ValueError(f"Missing 'requested_date' for eco order ID: {d.get('id')}")
        d["requested_date_dt"] = datetime.fromisoformat(d["requested_date"])

    if not eco_orders:
        return normal_orders, []

    min_date = min(d["requested_date_dt"] for d in eco_orders)
    max_date = max(d["requested_date_dt"] for d in eco_orders)

    batches = []
    current_start = min_date

    while current_start <= max_date:
        window_end = current_start + timedelta(days=batch_days)
        window_orders = [d for d in eco_orders if current_start <= d["requested_date_dt"] < window_end]

        if window_orders:
            coords = np.array([[d["lat"], d["lng"]] for d in window_orders])
            if len(coords) > 1:
                clustering = DBSCAN(eps=0.05, min_samples=1).fit(coords)
                cluster_map = defaultdict(list)
                for label, order in zip(clustering.labels_, window_orders):
                    cluster_map[label].append(order)
                for batch_orders in cluster_map.values():
                    batches.append(batch_orders)
            else:
                batches.append(window_orders)

        current_start = window_end

    return normal_orders, batches



def haversine(lat1, lon1, lat2, lon2):
    R = 6371
    dlat, dlon = radians(lat2 - lat1), radians(lon2 - lon1)
    a = sin(dlat/2)**2 + cos(radians(lat1)) * cos(radians(lat2)) * sin(dlon/2)**2
    return R * 2 * atan2(sqrt(a), sqrt(1 - a))

def create_data_model(deliveries, depot):
    locations = [depot] + [[d["lat"], d["lng"]] for d in deliveries]
    distance_matrix = [
        [haversine(a[0], a[1], b[0], b[1]) for b in locations] for a in locations
    ]
    priority_scores = [0] + [compute_priority_score(d["priority"]) for d in deliveries]
    return {
        "distance_matrix": distance_matrix,
        "priority_scores": priority_scores,
        "num_vehicles": 1,
        "depot": 0
    }

def optimize_route(data_json):
    deliveries = data_json["deliveries"]
    depot = data_json["depot"]
    vehicle_type = data_json.get("vehicle_type", "van")

    data = create_data_model(deliveries, depot)
    manager = pywrapcp.RoutingIndexManager(len(data["distance_matrix"]), data["num_vehicles"], data["depot"])
    routing = pywrapcp.RoutingModel(manager)

    def cost_callback(from_idx, to_idx):
        from_node = manager.IndexToNode(from_idx)
        to_node = manager.IndexToNode(to_idx)
        distance = data["distance_matrix"][from_node][to_node]
        priority_penalty = 10 - data["priority_scores"][to_node]  # Higher priority = lower cost
        return int((distance + priority_penalty) * 100)

    transit_callback_index = routing.RegisterTransitCallback(cost_callback)
    routing.SetArcCostEvaluatorOfAllVehicles(transit_callback_index)

    search_params = pywrapcp.DefaultRoutingSearchParameters()
    search_params.first_solution_strategy = routing_enums_pb2.FirstSolutionStrategy.PATH_CHEAPEST_ARC
    solution = routing.SolveWithParameters(search_params)

    if not solution:
        return {"error": "No solution found"}

    route, total_distance = [], 0
    index = routing.Start(0)
    while not routing.IsEnd(index):
        node_idx = manager.IndexToNode(index)
        if node_idx != 0:
            delivery = deliveries[node_idx - 1]
            route.append({
                "id": delivery["id"],
                "lat": delivery["lat"],
                "lng": delivery["lng"],
                "priority": delivery["priority"]
            })
        next_index = solution.Value(routing.NextVar(index))
        total_distance += data["distance_matrix"][node_idx][manager.IndexToNode(next_index)]
        index = next_index

    carbon_stats = {
        vt: estimate_carbon_kgs(total_distance, vt)
        for vt in ["van", "ev", "drone"]
    }

    return {
        "optimized_route": route,
        "total_distance_km": round(total_distance, 2),
        "carbon_emission_kg": {
            "van": carbon_stats["van"],
            "ev": carbon_stats["ev"],
            "drone": carbon_stats["drone"]
        },
        "carbon_savings_kg": {
            "ev_vs_van": round(carbon_stats["van"] - carbon_stats["ev"], 2),
            "drone_vs_van": round(carbon_stats["van"] - carbon_stats["drone"], 2)
        }
    }
def optimize_with_batching(data_json):
    deliveries = data_json["deliveries"]
    depot = data_json["depot"]
    vehicle_type = data_json.get("vehicle_type", "van")
    batch_days = data_json.get("batch_days", 15)

    normal_deliveries, eco_batches = batch_deliveries(deliveries, batch_days)

    all_routes = []
    total_distance = 0

    # ✅ Optimize normal deliveries
    if normal_deliveries:
        result = optimize_route({
            "deliveries": normal_deliveries,
            "depot": depot,
            "vehicle_type": vehicle_type
        })
        all_routes.append({
            "type": "normal",
            "is_eco": False,
            "route": result.get("optimized_route", []),
            "distance_km": result.get("total_distance_km", 0),
            "carbon_emission_kg": result.get("carbon_emission_kg", {})
        })
        total_distance += result.get("total_distance_km", 0)

    # ✅ Optimize each eco batch
    for i, batch in enumerate(eco_batches):
        result = optimize_route({
            "deliveries": batch,
            "depot": depot,
            "vehicle_type": vehicle_type
        })
        all_routes.append({
            "type": f"eco_batch_{i+1}",
            "is_eco": True,
            "route": result.get("optimized_route", []),
            "distance_km": result.get("total_distance_km", 0),
            "carbon_emission_kg": result.get("carbon_emission_kg", {})
        })
        total_distance += result.get("total_distance_km", 0)

    return {
        "total_distance_km_all_batches": round(total_distance, 2),
        "routes": all_routes
    }

