import React from "react";

const EcoBadgeCard = ({ image, title, earned, rewards }) => (
  <div
    style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      background: "linear-gradient(135deg, #f6fcff 0%, #eaf6ff 100%)",
      borderRadius: 16,
      padding: 20,
      minWidth: 220,
      maxWidth: 240,
      margin: "0 10px",
      boxShadow: "0 4px 16px rgba(0,0,0,0.08)",
      border: "1px solid rgba(34, 150, 83, 0.1)",
      transition: "all 0.3s ease",
    }}
    onMouseEnter={(e) => {
      e.currentTarget.style.transform = "translateY(-4px)";
      e.currentTarget.style.boxShadow = "0 8px 24px rgba(34, 150, 83, 0.15)";
    }}
    onMouseLeave={(e) => {
      e.currentTarget.style.transform = "translateY(0)";
      e.currentTarget.style.boxShadow = "0 4px 16px rgba(0,0,0,0.08)";
    }}
  >
    <img
      src={image}
      alt={title}
      style={{ 
        width: 68, 
        height: 68, 
        marginBottom: 12,
        filter: "drop-shadow(0 2px 4px rgba(0,0,0,0.1))"
      }}
    />
    <div
      style={{
        color: "#219653",
        fontWeight: 700,
        fontSize: 20,
        marginBottom: 8,
        textAlign: "center"
      }}
    >
      {title}
    </div>
    
    {/* Earned at section */}
    <div
      style={{
        background: "rgba(34, 150, 83, 0.1)",
        borderRadius: 8,
        padding: "8px 12px",
        marginBottom: 16,
        width: "100%",
        textAlign: "center"
      }}
    >
      <div style={{ fontSize: 12, color: "#666", marginBottom: 2 }}>Unlock at</div>
      <div style={{ fontWeight: 600, color: "#219653", fontSize: 14 }}>
        🪙 {earned}
      </div>
    </div>

    {/* Enhanced rewards section */}
    <div style={{ width: "100%" }}>
      <div style={{ 
        fontSize: 13, 
        fontWeight: 600, 
        color: "#e67e22", 
        marginBottom: 12,
        textAlign: "center",
        background: "rgba(230, 126, 34, 0.1)",
        padding: "6px 8px",
        borderRadius: 6
      }}>
        🎁 Your Rewards
      </div>
      
      <div style={{ fontSize: 12, lineHeight: 1.4 }}>
        {rewards.map((reward, i) => {
          const isPhysicalReward = reward.includes("You will get");
          
          return (
            <div 
              key={i} 
              style={{ 
                marginBottom: i < rewards.length - 1 ? 10 : 0,
                padding: "6px 8px",
                borderRadius: 6,
                background: isPhysicalReward ? "rgba(34, 150, 83, 0.08)" : "rgba(0, 113, 220, 0.08)"
              }}
            >
              {isPhysicalReward ? (
                <div style={{ 
                  display: "flex", 
                  alignItems: "flex-start",
                  color: "#219653",
                  fontWeight: 500
                }}>
                  <span style={{ marginRight: 6, marginTop: 1 }}>🎁</span>
                  <span>{reward.replace("You will get ", "").replace("You will get a ", "")}</span>
                </div>
              ) : (
                <div style={{ 
                  display: "flex", 
                  alignItems: "flex-start",
                  color: "#0071dc",
                  fontStyle: "italic"
                }}>
                  <span style={{ marginRight: 6, marginTop: 1 }}>🌍</span>
                  <span>{reward}</span>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  </div>
);

export default EcoBadgeCard;
