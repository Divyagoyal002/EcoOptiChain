import React from "react";

const EcoBadgeCard = ({ image, title, earned, rewards }) => (
  <div
    style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      background: "#f6fcff",
      borderRadius: 16,
      padding: 18,
      minWidth: 200,
      maxWidth: 220,
      margin: "0 10px",
      boxShadow: "0 2px 8px rgba(0,0,0,0.03)",
    }}
  >
    <img
      src={image}
      alt={title}
      style={{ width: 64, height: 64, marginBottom: 10 }}
    />
    <div
      style={{
        color: "#219653",
        fontWeight: 700,
        fontSize: 20,
        marginBottom: 8,
      }}
    >
      {title}
    </div>
    <ul
      style={{
        padding: 0,
        margin: 0,
        listStyle: "none",
        fontSize: 15,
        color: "#222",
        textAlign: "left",
      }}
    >
      <li style={{ marginBottom: 4 }}>
        <span style={{ color: "#888" }}>🏅</span> <b>Earned at:</b> {earned}
      </li>
      {rewards.map((r, i) => (
        <li key={i} style={{ marginBottom: 4 }}>
          {r}
        </li>
      ))}
    </ul>
  </div>
);

export default EcoBadgeCard;
