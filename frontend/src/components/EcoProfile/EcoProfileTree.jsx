import React from "react";

const badgeIcons = [
  {
    src: "/src/assets/images/badges/black-forest.png",
    alt: "Green Spark",
    style: { top: "18%", left: "18%" },
  },
  {
    src: "/src/assets/images/badges/timber.png",
    alt: "Eco Rider",
    style: { top: "30%", left: "60%" },
  },
  {
    src: "/src/assets/images/badges/planet-pal.png",
    alt: "Planet Pal",
    style: { top: "10%", left: "50%" },
  },
  {
    src: "/src/assets/images/badges/elk-lager.png",
    alt: "Earth Keeper",
    style: { top: "40%", left: "80%" },
  },
  {
    src: "/src/assets/images/badges/north-east.png",
    alt: "Captain Carbon",
    style: { top: "60%", left: "30%" },
  },
  {
    src: "/src/assets/images/badges/black-forest.png",
    alt: "Green Spark",
    style: { top: "55%", left: "70%" },
  },
  {
    src: "/src/assets/images/badges/timber.png",
    alt: "Eco Rider",
    style: { top: "25%", left: "35%" },
  },
  {
    src: "/src/assets/images/badges/planet-pal.png",
    alt: "Planet Pal",
    style: { top: "65%", left: "55%" },
  },
  {
    src: "/src/assets/images/badges/elk-lager.png",
    alt: "Earth Keeper",
    style: { top: "35%", left: "15%" },
  },
  {
    src: "/src/assets/images/badges/north-east.png",
    alt: "Captain Carbon",
    style: { top: "15%", left: "75%" },
  },
];

const EcoProfileTree = () => (
  <section style={{ margin: "60px 0 40px 0", textAlign: "center" }}>
    <h2 style={{ fontWeight: 600, fontSize: 26, marginBottom: 4 }}>
      This Tree Breathes Because of You
    </h2>
    <div style={{ color: "#555", fontSize: 16, marginBottom: 24 }}>
      Your carbon coins built it. Your legacy lives here.
    </div>
    <div
      style={{
        position: "relative",
        width: 420,
        height: 500,
        margin: "0 auto",
      }}
    >
      <img
        src="/src/assets/images/tree.png"
        alt="Eco Tree"
        style={{ width: "100%", height: "auto", display: "block" }}
      />
      {badgeIcons.map((badge, i) => (
        <img
          key={i}
          src={badge.src}
          alt={badge.alt}
          style={{
            position: "absolute",
            width: 48,
            height: 48,
            ...badge.style,
            transform: "translate(-50%, -50%)",
            borderRadius: "50%",
            background: "#fff",
            boxShadow: "0 2px 8px rgba(0,0,0,0.10)",
            border: "2px solid #eaf6ff",
          }}
        />
      ))}
    </div>
  </section>
);

export default EcoProfileTree;
