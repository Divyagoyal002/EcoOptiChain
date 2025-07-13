import React from "react";

const EcoHowItWorksSection = () => (
  <section
    style={{ 
      background: "linear-gradient(135deg, #f6fcff 0%, #eaf6ff 100%)", 
      padding: "50px 0", 
      margin: "40px 0",
      position: "relative"
    }}
  >
    {/* Background decoration */}
    <div
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: "radial-gradient(circle at 20% 80%, rgba(34, 150, 83, 0.05) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(0, 113, 220, 0.05) 0%, transparent 50%)",
        pointerEvents: "none"
      }}
    />
    
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        gap: 60,
        maxWidth: 1200,
        margin: "0 auto",
        flexWrap: "wrap",
        position: "relative",
        zIndex: 1
      }}
    >
      <div style={{ position: "relative" }}>
        <img
          src="/src/assets/images/how-it-works.png"
          alt="How it works"
          style={{
            width: 360,
            height: 320,
            objectFit: "cover",
            borderRadius: 16,
            boxShadow: "0 8px 24px rgba(0,0,0,0.12)",
            border: "3px solid rgba(34, 150, 83, 0.1)"
          }}
        />
        <div
          style={{
            position: "absolute",
            top: -10,
            right: -10,
            background: "#219653",
            color: "white",
            borderRadius: "50%",
            width: 40,
            height: 40,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: 18,
            fontWeight: 700,
            boxShadow: "0 4px 12px rgba(34, 150, 83, 0.3)"
          }}
        >
          ?
        </div>
      </div>
      
      <div style={{ maxWidth: 480 }}>
        <h2 style={{ 
          fontWeight: 700, 
          fontSize: 32, 
          marginBottom: 8,
          color: "#219653",
          display: "flex",
          alignItems: "center",
          gap: 12
        }}>
          <span>🌱</span> How it Works
        </h2>
        <p style={{ 
          fontSize: 16, 
          color: "#666", 
          marginBottom: 24,
          lineHeight: 1.5
        }}>
          Transform your shopping into environmental impact with our gamified eco-system
        </p>
        
        <div style={{ color: "#333", fontSize: 16, lineHeight: 1.6 }}>
          <div style={{ marginBottom: 16 }}>
            <div style={{ 
              display: "flex", 
              alignItems: "flex-start", 
              marginBottom: 12,
              padding: "12px 0"
            }}>
              <span style={{ 
                fontSize: 20, 
                marginRight: 12, 
                color: "#219653",
                minWidth: 24
              }}>🛒</span>
              <div>
                <strong style={{ color: "#219653" }}>Shop Sustainably:</strong>
                <span style={{ color: "#555", marginLeft: 8 }}>
                  Every eco-friendly product you choose earns you Carbon Coins
                </span>
              </div>
            </div>
          </div>

          <div style={{ marginBottom: 16 }}>
            <div style={{ 
              display: "flex", 
              alignItems: "flex-start", 
              marginBottom: 12,
              padding: "12px 0"
            }}>
              <span style={{ 
                fontSize: 20, 
                marginRight: 12, 
                color: "#0071dc",
                minWidth: 24
              }}>🏆</span>
              <div>
                <strong style={{ color: "#0071dc" }}>Unlock Badges:</strong>
                <span style={{ color: "#555", marginLeft: 8 }}>
                  Collect coins to earn exclusive eco-badges and real rewards
                </span>
              </div>
            </div>
          </div>

          <div style={{ marginBottom: 16 }}>
            <div style={{ 
              display: "flex", 
              alignItems: "flex-start", 
              marginBottom: 12,
              padding: "12px 0"
            }}>
              <span style={{ 
                fontSize: 20, 
                marginRight: 12, 
                color: "#22c55e",
                minWidth: 24
              }}>🌳</span>
              <div>
                <strong style={{ color: "#22c55e" }}>Grow Your Tree:</strong>
                <span style={{ color: "#555", marginLeft: 8 }}>
                  Each badge adds a leaf to your personal Impact Tree
                </span>
              </div>
            </div>
          </div>

          <div style={{ marginBottom: 16 }}>
            <div style={{ 
              display: "flex", 
              alignItems: "flex-start", 
              marginBottom: 12,
              padding: "12px 0"
            }}>
              <span style={{ 
                fontSize: 20, 
                marginRight: 12, 
                color: "#f59e0b",
                minWidth: 24
              }}>📈</span>
              <div>
                <strong style={{ color: "#f59e0b" }}>Level Up:</strong>
                <span style={{ color: "#555", marginLeft: 8 }}>
                  Leaf colors evolve from light to dark green as you progress
                </span>
              </div>
            </div>
          </div>

          <div style={{ marginBottom: 16 }}>
            <div style={{ 
              display: "flex", 
              alignItems: "flex-start", 
              marginBottom: 12,
              padding: "12px 0"
            }}>
              <span style={{ 
                fontSize: 20, 
                marginRight: 12, 
                color: "#8b5cf6",
                minWidth: 24
              }}>🌍</span>
              <div>
                <strong style={{ color: "#8b5cf6" }}>Track Impact:</strong>
                <span style={{ color: "#555", marginLeft: 8 }}>
                  See your real environmental impact and global ranking
                </span>
              </div>
            </div>
          </div>

          <div style={{ 
            background: "rgba(34, 150, 83, 0.1)",
            borderRadius: 12,
            padding: "16px",
            marginTop: 20,
            border: "1px solid rgba(34, 150, 83, 0.2)"
          }}>
            <div style={{ 
              display: "flex", 
              alignItems: "center", 
              marginBottom: 8,
              color: "#219653",
              fontWeight: 600
            }}>
              <span style={{ marginRight: 8 }}>💡</span>
              Pro Tip
            </div>
            <p style={{ 
              margin: 0, 
              fontSize: 14, 
              color: "#555",
              fontStyle: "italic"
            }}>
              Tap any leaf on your tree to see detailed impact metrics and share your eco-achievements with friends!
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default EcoHowItWorksSection;
