import React from "react";

const ProductPriceBox = () => (
  <div
    style={{
      border: "2px solid #bde0fe",
      borderRadius: 12,
      padding: 20,
      marginBottom: 24,
      background: "#fff",
      maxWidth: 340,
    }}
  >
    <div style={{ fontWeight: 700, fontSize: 24 }}>
      $4.72{" "}
      <span style={{ fontWeight: 400, fontSize: 14, color: "#888" }}>
        $94.40/100 ct
      </span>
    </div>
    <div style={{ fontSize: 13, color: "#555", margin: "8px 0 4px 0" }}>
      Price when purchased online{" "}
      <span title="Info" style={{ cursor: "pointer", color: "#888" }}>
        ⓘ
      </span>
    </div>
    <div style={{ fontSize: 13, color: "#555", marginBottom: 12 }}>
      <span style={{ display: "inline-flex", alignItems: "center", gap: 4 }}>
        <span style={{ color: "#0071dc", fontSize: 16 }}>●</span> Free 90-day
        returns
      </span>
    </div>
    <button
      style={{
        width: "100%",
        background: "#0071dc",
        color: "#fff",
        fontWeight: 600,
        border: "none",
        borderRadius: 6,
        padding: "12px 0",
        fontSize: 16,
        cursor: "pointer",
      }}
    >
      Add to cart
    </button>
  </div>
);

export default ProductPriceBox;
