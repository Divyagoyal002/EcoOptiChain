import React from "react";
import Navbar from "../components/LandingPage/Navbar/Navbar";
import SubNavbar from "../components/LandingPage/Navbar/SubNavbar";
import Footer from "../components/LandingPage/Footer";
import ProductImageGallery from "../components/Product/ProductImageGallery";
import ProductDetails from "../components/Product/ProductDetails";
import ProductEcoRewards from "../components/Product/ProductEcoRewards";

const ImpactMessage = () => (
  <div style={{ textAlign: "center", margin: "32px 0 8px 0" }}>
    <div
      style={{
        color: "#219653",
        fontWeight: 700,
        fontSize: 26,
        marginBottom: 8,
      }}
    >
      “Congrats on saving $6 – and in return, you added 1.3 kg of CO₂, polluted
      oceans, and harmed marine life.”
    </div>
    <div
      style={{
        color: "#0071dc",
        fontWeight: 500,
        fontSize: 16,
        marginBottom: 8,
        textDecoration: "underline",
        cursor: "pointer",
      }}
    >
      Flip the script— go green, earn rewards, and wear your impact like a
      badge...Walmart got you covered !
    </div>
  </div>
);

const ProductPage = () => (
  <>
    <Navbar />
    <SubNavbar />
    <main>
      <div
        style={{
          display: "flex",
          gap: 40,
          justifyContent: "center",
          alignItems: "flex-start",
          margin: "40px auto",
          maxWidth: 1400,
          padding: "0 32px",
        }}
      >
        <ProductImageGallery />
        <div style={{ flex: 1, minWidth: 420, maxWidth: 600 }}>
          <ProductDetails />
        </div>
        <div style={{ minWidth: 340, maxWidth: 380 }}>
          <ProductEcoRewards />
        </div>
      </div>
      <ImpactMessage />
      <div
        style={{
          display: "flex",
          gap: 40,
          justifyContent: "center",
          alignItems: "flex-start",
          margin: "40px auto",
          maxWidth: 1400,
          padding: "0 32px",
        }}
      >
        <ProductImageGallery />
        <div style={{ flex: 1, minWidth: 420, maxWidth: 600 }}>
          <ProductDetails />
        </div>
        <div style={{ minWidth: 340, maxWidth: 380 }}>
          <ProductEcoRewards />
        </div>
      </div>
    </main>
    <Footer />
  </>
);

export default ProductPage;
