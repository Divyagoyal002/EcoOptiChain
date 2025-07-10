import React from "react";
import ProductBadges from "./ProductBadges";
import ProductTitleSection from "./ProductTitleSection";
import ProductPriceSelector from "./ProductPriceSelector";
import ProductAbout from "./ProductAbout";
import ProductAtAGlance from "./ProductAtAGlance";

const SectionBreak = () => (
  <hr
    style={{
      border: 0,
      borderTop: "1px solid #e4e7eb",
      margin: "24px 0 20px 0",
    }}
  />
);

const ProductDetails = () => (
  <div
    className="product-details"
    style={{ maxWidth: 540, background: "#fff" }}
  >
    <ProductBadges />
    <ProductTitleSection />
    <SectionBreak />
    <ProductPriceSelector />
    <SectionBreak />
    <ProductAbout />
    <SectionBreak />
    <ProductAtAGlance />
  </div>
);

export default ProductDetails;
