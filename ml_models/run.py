import json
from optimizer import optimize_route
from optimizer import optimize_with_batching
if __name__ == "__main__":
    with open("sample_data.json") as f:
        input_data = json.load(f)
        
    del_type = input("Enter delivery type:\n1) Regular Delivery\n2) Eco Delivery\n")

    if del_type == "1":
        result = optimize_route(input_data)
    elif del_type == "2":
        result = optimize_with_batching(input_data)
    else:
        result = "❌ Invalid delivery type selected."

    print(json.dumps(result, indent=2))




