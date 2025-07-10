import React from "react";

const EcoHowItWorksSection = () => (
  <section
    style={{ background: "#f6fcff", padding: "40px 0", margin: "40px 0" }}
  >
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        gap: 48,
        maxWidth: 1100,
        margin: "0 auto",
        flexWrap: "wrap",
      }}
    >
      <img
        src="/src/assets/images/how-it-works.png"
        alt="How it works"
        style={{
          width: 340,
          height: 300,
          objectFit: "cover",
          borderRadius: 12,
          boxShadow: "0 2px 8px rgba(0,0,0,0.06)",
        }}
      />
      <div style={{ maxWidth: 420 }}>
        <h2 style={{ fontWeight: 700, fontSize: 28, marginBottom: 12 }}>
          How it Works ?
        </h2>
        <div style={{ color: "#222", fontSize: 17, lineHeight: 1.7 }}>
          Every time you choose a sustainable product, you earn Carbon Coins.
          <br />
          As you collect more coins, you unlock badges.
          <br />
          Each badge you earn adds a leaf with your logo on the Impact Tree.
          <br />
          The more you contribute, the higher your leaf grows on the tree.
          <br />
          Leaf color changes as you level up — from light green to Darker and
          darker.
          <br />
          Your leaf shows your name, total CO₂ saved, and your global rank.
          <br />
          Tap on a leaf to see the real impact you’ve made — and even share it!
        </div>
      </div>
    </div>
  </section>
);

export default EcoHowItWorksSection;
