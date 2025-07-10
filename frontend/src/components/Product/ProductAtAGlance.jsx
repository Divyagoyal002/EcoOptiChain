import React from "react";

const glanceData = [
  { label: "Brand", value: "S&T INC." },
  { label: "Count", value: "5" },
  { label: "Features", value: "All Purpose, Multipurpose, Multi-Use" },
  { label: "Condition", value: "New" },
  { label: "Form", value: "Sheets" },
  { label: "Retail packaging", value: "Set" },
];

const ProductAtAGlance = () => (
  <section style={{ marginBottom: 24 }}>
    <h3 style={{ fontWeight: 600, fontSize: 16, marginBottom: 8 }}>
      At a glance
    </h3>
    <div style={{ display: "flex", flexWrap: "wrap", gap: 12 }}>
      {glanceData.map((item) => (
        <div
          key={item.label}
          style={{
            background: "#f6f8fa",
            borderRadius: 8,
            padding: "12px 18px",
            minWidth: 120,
            textAlign: "center",
            flex: "1 0 120px",
          }}
        >
          <div style={{ fontWeight: 700, fontSize: 15 }}>{item.label}</div>
          <div style={{ fontSize: 14 }}>{item.value}</div>
        </div>
      ))}
    </div>
    <a
      href="#"
      style={{ color: "#0071dc", fontSize: 13, display: "block", marginTop: 8 }}
    >
      View all specifications
    </a>
  </section>
);

export default ProductAtAGlance;
