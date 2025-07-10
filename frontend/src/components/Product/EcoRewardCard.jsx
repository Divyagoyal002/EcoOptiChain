import React from "react";

const iconMap = {
  planet: "🌎",
  marine: "🌊",
  petro: "🏭",
  asthma: "🧑‍⚕️",
  lungs: "👨‍👩‍👧‍👦",
};

const EcoRewardCard = ({ icon, title, desc }) => (
  <div
    style={{
      display: "flex",
      alignItems: "center",
      background: "#eaf6ff",
      borderRadius: 10,
      padding: 14,
      marginBottom: 12,
    }}
  >
    <span style={{ fontSize: 32, marginRight: 16 }}>{iconMap[icon]}</span>
    <div>
      <div style={{ fontWeight: 600, fontSize: 15 }}>{title}</div>
      <div style={{ fontSize: 13, color: "#444" }}>{desc}</div>
    </div>
  </div>
);

export default EcoRewardCard;
