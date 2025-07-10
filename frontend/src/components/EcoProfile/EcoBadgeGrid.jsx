import React from "react";
import EcoBadgeCard from "./EcoBadgeCard";

const badgeData = [
  {
    image: "/src/assets/images/badges/black-forest.png",
    title: "Green Spark",
    earned: "500 Carbon Coins",
    rewards: [
      "You will get a Seed packet",
      "Avoided 0.5 kg CO₂ per product. Equal to powering bulb for 12 hours",
    ],
  },
  {
    image: "/src/assets/images/badges/timber.png",
    title: "Eco Rider",
    earned: "1000 Carbon Coins",
    rewards: [
      "You will get a Cotton tote bag/Bamboo cutlery",
      "Stopped 3 plastic items from entering oceans",
    ],
  },
  {
    image: "/src/assets/images/badges/planet-pal.png",
    title: "Planet Pal",
    earned: "2000 Carbon Coins",
    rewards: [
      "You will get Mini plant delivered/Limited edition metal badge",
      "Saved 12.3 kg CO₂. Equal to 60 km of car travel avoided",
    ],
  },
  {
    image: "/src/assets/images/badges/elk-lager.png",
    title: "Earth Keeper",
    earned: "3000 Carbon Coins",
    rewards: [
      "You will get GreenBox with 5 sustainable daily-use items",
      "Cut VOCs by 65%. Stopped ~18L of water pollution",
    ],
  },
  {
    image: "/src/assets/images/badges/north-east.png",
    title: "Captain Carbon",
    earned: "5000 Carbon Coins",
    rewards: [
      "You will get Tree planted in your name. Certificate + personalized green gift",
      "Absorbs 22 kg CO₂/year. Listed in Top 5% Global Eco-Savers",
    ],
  },
];

const EcoBadgeGrid = () => (
  <div
    style={{
      background: "#eaf6ff",
      borderRadius: 18,
      padding: "32px 16px",
      display: "flex",
      flexWrap: "nowrap",
      justifyContent: "center",
      gap: 24,
      minWidth: 1100,
      maxWidth: 1300,
      margin: "0 auto",
      overflowX: "auto",
    }}
  >
    {badgeData.map((badge, i) => (
      <EcoBadgeCard key={i} {...badge} />
    ))}
  </div>
);

export default EcoBadgeGrid;
