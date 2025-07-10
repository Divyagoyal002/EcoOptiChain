import React from "react";

const ProductPriceSelector = () => (
  <div style={{ margin: "16px 0" }}>
    <div style={{ fontWeight: 600, marginBottom: 4 }}>
      Multipack Quantity: 1
    </div>
    <div style={{ display: "flex", gap: 16 }}>
      <div
        style={{
          border: "1px solid #e0e0e0",
          borderRadius: 8,
          padding: 12,
          minWidth: 80,
          textAlign: "center",
        }}
      >
        <div style={{ fontWeight: 600 }}>1</div>
        <div>$4.72</div>
        <div style={{ fontSize: 12, color: "#888" }}>$94.40/100 ct</div>
      </div>
      <div
        style={{
          border: "1px solid #e0e0e0",
          borderRadius: 8,
          padding: 12,
          minWidth: 80,
          textAlign: "center",
        }}
      >
        <div style={{ fontWeight: 600 }}>2</div>
        <div>$9.44</div>
        <div style={{ fontSize: 12, color: "#888" }}>$94.40/100 ct</div>
      </div>
    </div>
  </div>
);

export default ProductPriceSelector;
