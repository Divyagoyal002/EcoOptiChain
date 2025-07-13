def estimate_carbon_kgs(distance_km, vehicle_type="van"):
    factors = {
        "van": 0.18,
        "ev": 0.06,
        "drone": 0.02
    }
    return round(distance_km * factors.get(vehicle_type, 0.18), 2)







"""
This lets you calculate CO₂ emissions based on:

Vehicle type (diesel van vs electric vs drone)

Route distance (computed using Haversine formula)"""