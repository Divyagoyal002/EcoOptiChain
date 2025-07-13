import React from "react";
import Navbar from "../components/LandingPage/Navbar/Navbar";
import SubNavbar from "../components/LandingPage/Navbar/SubNavbar";
import Footer from "../components/LandingPage/Footer";
import ProductImageGallery from "../components/Product/ProductImageGallery";
import ProductDetails from "../components/Product/ProductDetails";
import ProductEcoRewards from "../components/Product/ProductEcoRewards";

const EcoAlternativesCarousel = () => {
  const ecoProducts = [
    {
      id: 1,
      image:
        "https://i5.walmartimages.com/seo/Earth-Breeze-Laundry-Detergent-Sheets-Fresh-Scent-No-Plastic-Jug-60-Loads-30-Sheets-Liquidless-Technology_024fcb1a-950c-41e6-8cfa-f0f3dc824886.e24cb4edacdcd743f05946e93c27087b.jpeg?odnHeight=640&odnWidth=640&odnBg=FFFFFF",
      title: "Earth Breeze Laundry Sheets",
      price: "$13.99",
      originalPrice: "$15.99",
      savings: "$2.00",
      ecoPoints: "50 pts",
      carbonReduction: "2.1 kg CO₂ saved",
      description: "Plastic-free, biodegradable laundry sheets",
    },
    {
      id: 2,
      image:
        "https://i5.walmartimages.com/seo/NATUREZWAY-Bamboo-Disposable-Paper-Towels_3550dc12-ebcd-4ff6-929d-8cb1d62435f4.2959ab6d20cdb739b25f70032467bc46.jpeg?odnHeight=640&odnWidth=640&odnBg=FFFFFF",
      title: "NATUREZWAY Bamboo Paper Towels",
      price: "$24.99",
      originalPrice: "$29.99",
      savings: "$5.00",
      ecoPoints: "75 pts",
      carbonReduction: "3.2 kg CO₂ saved",
      description: "Fast-growing bamboo fiber, biodegradable",
    },
    {
      id: 3,
      image:
        "https://i5.walmartimages.com/seo/Glass-Food-Storage-Containers-Bamboo-Lids-Eco-Friendly-Meal-Prep-Glass-Containers-Reusable-BPA-Free-Bento-Lunch-Box-Airtight-Plastic-Free-Glass-Conta_8a9ef8fb-eeac-4915-8538-bc14251a340e.a122762e23748c8ccd03212db826587c.jpeg?odnHeight=640&odnWidth=640&odnBg=FFFFFF",
      title: "Glass Food Storage with Bamboo Lids",
      price: "$29.99",
      originalPrice: "$35.99",
      savings: "$6.00",
      ecoPoints: "100 pts",
      carbonReduction: "4.5 kg CO₂ saved",
      description: "Borosilicate glass, airtight, chemical-free",
    },
    {
      id: 4,
      image:
        "https://i5.walmartimages.com/seo/WUSI-Compostable-Trash-Bags-2-6-Gallon-Small-Disposable-Compost-Bags-100-Count-Garbage-Bags-Made-PSM-Starch-Based-Kitchen-Bathroom-Bedroom-Office-Tra_5a497218-562a-4197-9929-3aaf775f83f9.59cfd7a944cbbb17cd28da50c9fb261d.jpeg?odnHeight=640&odnWidth=640&odnBg=FFFFFF",
      title: "WUSI Compostable Trash Bags",
      price: "$19.99",
      originalPrice: "$24.99",
      savings: "$5.00",
      ecoPoints: "65 pts",
      carbonReduction: "2.8 kg CO₂ saved",
      description: "Plant-based materials, compostable in 90 days",
    },
  ];

  return (
    <div style={{ margin: "40px auto", maxWidth: 1400, padding: "0 32px" }}>
      <div style={{ textAlign: "center", marginBottom: 32 }}>
        <h2
          style={{
            fontSize: 32,
            fontWeight: 700,
            color: "#2d5a27",
            marginBottom: 8,
          }}
        >
          🌱 Eco-Friendly Alternatives
        </h2>
        <p
          style={{
            fontSize: 16,
            color: "#666",
            maxWidth: 600,
            margin: "0 auto",
          }}
        >
          Switch to sustainable options and earn rewards while protecting our
          planet
        </p>
      </div>

      <div
        style={{
          display: "flex",
          gap: 24,
          overflowX: "auto",
          padding: "16px 0",
          scrollbarWidth: "thin",
        }}
      >
        {ecoProducts.map((product) => (
          <div
            key={product.id}
            style={{
              minWidth: 280,
              backgroundColor: "#fff",
              borderRadius: 12,
              padding: 20,
              boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
              border: "2px solid #e8f5e8",
              transition: "transform 0.3s ease, box-shadow 0.3s ease",
              cursor: "pointer",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-4px)";
              e.currentTarget.style.boxShadow = "0 8px 24px rgba(0,0,0,0.15)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "0 4px 12px rgba(0,0,0,0.1)";
            }}
          >
            <div style={{ textAlign: "center", marginBottom: 16 }}>
              <img
                src={product.image}
                alt={product.title}
                style={{
                  width: "100%",
                  height: 180,
                  objectFit: "cover",
                  borderRadius: 8,
                  marginBottom: 12,
                }}
              />
              <h3
                style={{
                  fontSize: 16,
                  fontWeight: 600,
                  color: "#333",
                  marginBottom: 8,
                  lineHeight: "1.3",
                }}
              >
                {product.title}
              </h3>
              <p
                style={{
                  fontSize: 14,
                  color: "#666",
                  marginBottom: 12,
                  lineHeight: "1.4",
                }}
              >
                {product.description}
              </p>
            </div>

            <div style={{ marginBottom: 16 }}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                  marginBottom: 8,
                }}
              >
                <span
                  style={{ fontSize: 18, fontWeight: 700, color: "#2d5a27" }}
                >
                  {product.price}
                </span>
                <span
                  style={{
                    fontSize: 14,
                    color: "#999",
                    textDecoration: "line-through",
                  }}
                >
                  {product.originalPrice}
                </span>
                <span
                  style={{
                    fontSize: 12,
                    color: "#e53e3e",
                    fontWeight: 600,
                    backgroundColor: "#fed7d7",
                    padding: "2px 6px",
                    borderRadius: 4,
                  }}
                >
                  Save {product.savings}
                </span>
              </div>

              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                  marginBottom: 8,
                }}
              >
                <span
                  style={{
                    fontSize: 12,
                    color: "#2d5a27",
                    fontWeight: 600,
                    backgroundColor: "#e8f5e8",
                    padding: "4px 8px",
                    borderRadius: 12,
                  }}
                >
                  🌟 {product.ecoPoints}
                </span>
                <span
                  style={{
                    fontSize: 12,
                    color: "#0071dc",
                    fontWeight: 500,
                  }}
                >
                  💨 {product.carbonReduction}
                </span>
              </div>
            </div>

            <button
              style={{
                width: "100%",
                padding: "12px 16px",
                backgroundColor: "#2d5a27",
                color: "white",
                border: "none",
                borderRadius: 8,
                fontSize: 14,
                fontWeight: 600,
                cursor: "pointer",
                transition: "background-color 0.3s ease",
              }}
              onMouseEnter={(e) => (e.target.style.backgroundColor = "#1a3319")}
              onMouseLeave={(e) => (e.target.style.backgroundColor = "#2d5a27")}
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

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
      <EcoAlternativesCarousel />
    </main>
    <Footer />
  </>
);

export default ProductPage;
