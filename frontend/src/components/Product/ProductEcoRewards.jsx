import React from "react";
import ProductPriceBox from "./ProductPriceBox";
import EcoRewardCard from "./EcoRewardCard";

const ecoRewards = [
  {
    icon: "planet",
    title: "Thanks for warming the planet",
    desc: "+1.3 kg of CO₂, Released per Pack",
  },
  {
    icon: "marine",
    title: "Favor for harming over 20 marine species",
    desc: "Polluted 12 Litres of Ocean Water",
  },
  {
    icon: "petro",
    title: "Thanks for Keeping Petro-Chem Plastics Alive",
    desc: "These materials take 400+ years to decompose.",
  },
  {
    icon: "asthma",
    title: "Enjoy the asthma surge in your neighborhood.",
    desc: "Your pick just supported VOC emissions",
  },
  {
    icon: "lungs",
    title: "Your choice just left a gift for your great-grandkids' lungs.",
    desc: "Your impact? Still zero. Your profile? Still empty.",
  },
];

const ProductEcoRewards = () => (
  <aside style={{ maxWidth: 340, margin: "0 auto" }}>
    <ProductPriceBox />
    <h4 style={{ fontWeight: 600, fontSize: 18, margin: "24px 0 16px 0" }}>
      Your Rewards for Choosing Green
    </h4>
    <div>
      {ecoRewards.map((r, i) => (
        <EcoRewardCard key={i} icon={r.icon} title={r.title} desc={r.desc} />
      ))}
    </div>
  </aside>
);

export default ProductEcoRewards;
