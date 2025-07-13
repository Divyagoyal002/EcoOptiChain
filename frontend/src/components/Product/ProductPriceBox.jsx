import React, { useState } from "react";

const ComparisonModal = ({ isOpen, onClose }) => {
  const [selectedChoice, setSelectedChoice] = useState('regular'); // 'regular' or 'eco'

  const regularProduct = {
    title: "S-T INC Microfiber Cleaning Cloths",
    price: "$4.72",
    image: "https://i5.walmartimages.com/seo/S-T-INC-Microfiber-Cleaning-Cloths-5-Pack-Multi-Purpose-Cloths-12-in-x-12-in-Assorted-Colors_98f49aeb-c81e-4493-a43c-cb456337775a.07c11fa29d916d2d37c4be3b7a4b8683.jpeg?odnHeight=640&odnWidth=640&odnBg=FFFFFF",
    description: "5-Pack multi-purpose cloths, lint-free cleaning."
  };

  const ecoProduct = {
    title: "Full Circle Organic Cotton Cleaning Cloths",
    price: "$12.99",
    image: "https://i5.walmartimages.com/seo/Full-Circle-Tidy-Organic-Cotton-Kitchen-Scrubbing-Dish-Cloths-12-x-12-Set-of-3-Multicolor_854a53dc-e3ce-47bd-8389-cecc9256ecab.c199fe8198b3205ae802ce678d83bb22.jpeg?odnHeight=640&odnWidth=640&odnBg=FFFFFF",
    description: "100% organic cotton, naturally antibacterial."
  };

  const negativeImpact = (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h3 style={{ color: "#e53e3e", fontSize: 24, fontWeight: 700, marginBottom: 20 }}>
        Your Rewards for Not Choosing Green
      </h3>
      
      <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
        <div style={{ backgroundColor: "#fed7d7", padding: 16, borderRadius: 8 }}>
          <div style={{ fontSize: 32, marginBottom: 8 }}>🌎</div>
          <div style={{ fontWeight: 600, color: "#c53030" }}>Thanks for warming the planet</div>
          <div style={{ fontSize: 14, color: "#744210" }}>+1.3 kg of CO₂ Released per Pack</div>
        </div>
        
        <div style={{ backgroundColor: "#bee3f8", padding: 16, borderRadius: 8 }}>
          <div style={{ fontSize: 32, marginBottom: 8 }}>🌊</div>
          <div style={{ fontWeight: 600, color: "#2c5282" }}>Favor for harming 20+ marine species</div>
          <div style={{ fontSize: 14, color: "#2c5282" }}>Polluted 12 Litres of Ocean Water</div>
        </div>
        
        <div style={{ backgroundColor: "#e2e8f0", padding: 16, borderRadius: 8 }}>
          <div style={{ fontSize: 32, marginBottom: 8 }}>👨‍👩‍👧‍👦</div>
          <div style={{ fontWeight: 600, color: "#4a5568" }}>Gift for your great-grandkids' lungs</div>
          <div style={{ fontSize: 14, color: "#4a5568" }}>Your impact? Still zero. Profile? Still empty.</div>
        </div>
      </div>
    </div>
  );

  const positiveImpact = (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h3 style={{ color: "#2d5a27", fontSize: 24, fontWeight: 700, marginBottom: 20 }}>
        Your Green Impact Rewards! 🌟
      </h3>
      
      <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
        <div style={{ backgroundColor: "#c6f6d5", padding: 16, borderRadius: 8 }}>
          <div style={{ fontSize: 32, marginBottom: 8 }}>🌍</div>
          <div style={{ fontWeight: 600, color: "#2f855a" }}>Planet Earth Says Thank You!</div>
          <div style={{ fontSize: 14, color: "#2f855a" }}>-2.1 kg of CO₂ Prevented per Pack</div>
        </div>
        
        <div style={{ backgroundColor: "#bee3f8", padding: 16, borderRadius: 8 }}>
          <div style={{ fontSize: 32, marginBottom: 8 }}>�</div>
          <div style={{ fontWeight: 600, color: "#2c5282" }}>Marine Life Celebrates Your Choice!</div>
          <div style={{ fontSize: 14, color: "#2c5282" }}>Protected 15+ Species & 20L Clean Water</div>
        </div>
        
        <div style={{ backgroundColor: "#e8f5e8", padding: 16, borderRadius: 8 }}>
          <div style={{ fontSize: 32, marginBottom: 8 }}>👶</div>
          <div style={{ fontWeight: 600, color: "#2d5a27" }}>Future Generations Applaud You!</div>
          <div style={{ fontSize: 14, color: "#2d5a27" }}>+50 Eco Points! Your green profile grows! 🌱</div>
        </div>
      </div>
    </div>
  );

  if (!isOpen) return null;

  return (
    <div style={{
      position: "fixed",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: "rgba(0,0,0,0.7)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      zIndex: 1000,
      padding: 20
    }}>
      <div style={{
        backgroundColor: "white",
        borderRadius: 16,
        maxWidth: 1200,
        width: "100%",
        maxHeight: "90vh",
        overflow: "auto",
        position: "relative"
      }}>
        <button
          onClick={onClose}
          style={{
            position: "absolute",
            top: 16,
            right: 16,
            background: "none",
            border: "none",
            fontSize: 24,
            cursor: "pointer",
            zIndex: 1001,
            color: "#666"
          }}
        >
          ✕
        </button>
        
        <div style={{ padding: "32px 24px" }}>
          <h2 style={{ 
            textAlign: "center", 
            marginBottom: 32, 
            fontSize: 28, 
            fontWeight: 700,
            color: selectedChoice === 'regular' ? "#e53e3e" : "#2d5a27"
          }}>
            {selectedChoice === 'regular' ? "Are you sure? 🤔" : "Great Choice! 🌱"}
          </h2>
          
          <div style={{ display: "flex", gap: 24, alignItems: "stretch" }}>
            {/* Left - Regular Product (Clickable) */}
            <div 
              onClick={() => setSelectedChoice('regular')}
              style={{ 
                flex: 1, 
                padding: 20, 
                border: selectedChoice === 'regular' ? "3px solid #2d5a27" : "2px solid #ddd",
                borderRadius: 12,
                backgroundColor: selectedChoice === 'regular' ? "#e8f5e8" : "#f8f9fa",
                cursor: "pointer",
                transition: "all 0.3s ease",
                transform: selectedChoice === 'regular' ? "scale(1.02)" : "scale(1)"
              }}
            >
              <h3 style={{ 
                textAlign: "center", 
                marginBottom: 16, 
                color: selectedChoice === 'regular' ? "#2d5a27" : "#666",
                fontSize: 18,
                fontWeight: 600
              }}>
                {selectedChoice === 'regular' ? "✓ Your Current Choice" : "Regular Option"}
              </h3>
              <img
                src={regularProduct.image}
                alt={regularProduct.title}
                style={{
                  width: "100%",
                  height: 200,
                  objectFit: "cover",
                  borderRadius: 8,
                  marginBottom: 12
                }}
              />
              <h4 style={{ fontSize: 16, fontWeight: 600, marginBottom: 8 }}>{regularProduct.title}</h4>
              <p style={{ fontSize: 14, color: "#666", marginBottom: 8 }}>{regularProduct.description}</p>
              <p style={{ fontSize: 18, fontWeight: 700, color: "#2d5a27" }}>{regularProduct.price}</p>
            </div>
            
            {/* Middle - Dynamic Impact */}
            <div style={{ flex: 1.5 }}>
              {selectedChoice === 'regular' ? negativeImpact : positiveImpact}
            </div>
            
            {/* Right - Eco Product (Clickable) */}
            <div 
              onClick={() => setSelectedChoice('eco')}
              style={{ 
                flex: 1, 
                padding: 20, 
                border: selectedChoice === 'eco' ? "3px solid #2d5a27" : "2px solid #ddd",
                borderRadius: 12,
                backgroundColor: selectedChoice === 'eco' ? "#e8f5e8" : "#f8f9fa",
                cursor: "pointer",
                transition: "all 0.3s ease",
                transform: selectedChoice === 'eco' ? "scale(1.02)" : "scale(1)"
              }}
            >
              <h3 style={{ 
                textAlign: "center", 
                marginBottom: 16, 
                color: selectedChoice === 'eco' ? "#2d5a27" : "#666",
                fontSize: 18,
                fontWeight: 600
              }}>
                {selectedChoice === 'eco' ? "✓ Your Eco Choice" : "Eco Alternative"}
              </h3>
              <img
                src={ecoProduct.image}
                alt={ecoProduct.title}
                style={{
                  width: "100%",
                  height: 200,
                  objectFit: "cover",
                  borderRadius: 8,
                  marginBottom: 12
                }}
              />
              <h4 style={{ fontSize: 16, fontWeight: 600, marginBottom: 8 }}>{ecoProduct.title}</h4>
              <p style={{ fontSize: 14, color: "#666", marginBottom: 8 }}>{ecoProduct.description}</p>
              <p style={{ fontSize: 18, fontWeight: 700, color: "#2d5a27" }}>{ecoProduct.price}</p>
            </div>
          </div>
          
          <div style={{ 
            display: "flex", 
            justifyContent: "center", 
            marginTop: 32 
          }}>
            <button
              onClick={onClose}
              style={{
                padding: "16px 48px",
                backgroundColor: selectedChoice === 'eco' ? "#2d5a27" : "#0071dc",
                color: "white",
                border: "none",
                borderRadius: 8,
                fontSize: 18,
                fontWeight: 600,
                cursor: "pointer",
                transition: "background-color 0.3s ease"
              }}
            >
              Add to Cart - {selectedChoice === 'eco' ? ecoProduct.title : regularProduct.title}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const ProductPriceBox = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const handleAddToCart = () => {
    setModalOpen(true);
  };

  return (
    <>
      <div
        style={{
          border: "2px solid #bde0fe",
          borderRadius: 12,
          padding: 20,
          marginBottom: 24,
          background: "#fff",
          maxWidth: 340,
        }}
      >
        <div style={{ fontWeight: 700, fontSize: 24 }}>
          $4.72{" "}
          <span style={{ fontWeight: 400, fontSize: 14, color: "#888" }}>
            $94.40/100 ct
          </span>
        </div>
        <div style={{ fontSize: 13, color: "#555", margin: "8px 0 4px 0" }}>
          Price when purchased online{" "}
          <span title="Info" style={{ cursor: "pointer", color: "#888" }}>
            ⓘ
          </span>
        </div>
        <div style={{ fontSize: 13, color: "#555", marginBottom: 12 }}>
          <span style={{ display: "inline-flex", alignItems: "center", gap: 4 }}>
            <span style={{ color: "#0071dc", fontSize: 16 }}>●</span> Free 90-day
            returns
          </span>
        </div>
        <button
          onClick={handleAddToCart}
          style={{
            width: "100%",
            background: "#0071dc",
            color: "#fff",
            fontWeight: 600,
            border: "none",
            borderRadius: 6,
            padding: "12px 0",
            fontSize: 16,
            cursor: "pointer",
          }}
        >
          Add to cart
        </button>
      </div>
      
      <ComparisonModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
      />
    </>
  );
};

export default ProductPriceBox;
