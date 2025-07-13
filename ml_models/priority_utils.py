def compute_priority_score(priority_tag):
    base = 1
    if priority_tag == "vip":
        return base + 5
    elif priority_tag == "perishable":
        return base + 3
    elif priority_tag == "high":
        return base + 2
    return base


"""
This function mimics basic AI reasoning by assigning custom weights to delivery types based on real-world needs
These scores are then used inside optimizer.py to influence the route calculation 
high priority = lower cost path in the optimization, meaning it gets delivered earlier."""