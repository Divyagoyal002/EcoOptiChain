import React from "react";

const ProductTitleSection = () => (
  <section style={{ marginBottom: 24 }}>
    <a
      href="#"
      style={{ color: "#0071dc", fontSize: 14, textDecoration: "underline" }}
    >
      Visit the S&T INC. Store
    </a>
    <h2 style={{ fontSize: 20, margin: "4px 0", fontWeight: 700 }}>
      S&T INC. Microfiber Cleaning Cloths, 5 Pack, Multi-Purpose Cloths, 12 in.
      x 12 in., Assorted Colors
    </h2>
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: 8,
        margin: "6px 0 0 0",
      }}
    >
      <span
        style={{
          color: "#ffc120",
          fontSize: 18,
          display: "flex",
          alignItems: "center",
          gap: 1,
        }}
      >
        {[...Array(4)].map((_, i) => (
          <span key={i} style={{ fontSize: 18 }}>
            ★
          </span>
        ))}
        <span style={{ color: "#ccc", fontSize: 18 }}>★</span>
      </span>
      <span
        style={{ color: "#222", fontSize: 14, fontWeight: 500, marginLeft: 2 }}
      >
        (4.6)
      </span>
      <a
        href="#"
        style={{
          color: "#0071dc",
          fontSize: 14,
          textDecoration: "underline",
          marginLeft: 4,
        }}
      >
        78 ratings
      </a>
    </div>
  </section>
);

export default ProductTitleSection;
