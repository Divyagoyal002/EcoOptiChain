import React from "react";

const ProductBadges = () => (
  <div style={{ display: "flex", gap: 8, marginBottom: 8 }}>
    <span
      style={{
        background: "#e6f1ff",
        color: "#0071dc",
        fontWeight: 600,
        borderRadius: 4,
        padding: "2px 8px",
        fontSize: 12,
      }}
    >
      500+ bought since yesterday
    </span>
    <span
      style={{
        background: "#ffe7b2",
        color: "#b7791f",
        fontWeight: 600,
        borderRadius: 4,
        padding: "2px 8px",
        fontSize: 12,
      }}
    >
      Best seller
    </span>
    <span
      style={{
        background: "#e6f1ff",
        color: "#0071dc",
        fontWeight: 600,
        borderRadius: 4,
        padding: "2px 8px",
        fontSize: 12,
      }}
    >
      Popular pick
    </span>
  </div>
);

export default ProductBadges;
