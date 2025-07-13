import React, { useState } from "react";

const badgeIcons = [
  {
    src: "/src/assets/images/badges/black-forest.png",
    alt: "Green Spark",
    name: "Green Spark",
    style: { top: "18%", left: "18%" },
    stats: {
      co2Saved: "15.2 kg",
      points: 250,
      description: "Switched to eco-friendly cleaning products",
      globalRank: "#1,247"
    }
  },
  {
    src: "/src/assets/images/badges/timber.png",
    alt: "Eco Rider",
    name: "Eco Rider",
    style: { top: "30%", left: "60%" },
    stats: {
      co2Saved: "23.7 kg",
      points: 380,
      description: "Chose sustainable transportation options",
      globalRank: "#892"
    }
  },
  {
    src: "/src/assets/images/badges/planet-pal.png",
    alt: "Planet Pal",
    name: "Planet Pal",
    style: { top: "10%", left: "50%" },
    stats: {
      co2Saved: "41.3 kg",
      points: 650,
      description: "Consistent eco-friendly shopping habits",
      globalRank: "#324"
    }
  },
  {
    src: "/src/assets/images/badges/elk-lager.png",
    alt: "Earth Keeper",
    name: "Earth Keeper",
    style: { top: "40%", left: "80%" },
    stats: {
      co2Saved: "32.8 kg",
      points: 520,
      description: "Reduced plastic waste significantly",
      globalRank: "#567"
    }
  },
  {
    src: "/src/assets/images/badges/north-east.png",
    alt: "Captain Carbon",
    name: "Captain Carbon",
    style: { top: "60%", left: "30%" },
    stats: {
      co2Saved: "67.4 kg",
      points: 890,
      description: "Carbon footprint reduction champion",
      globalRank: "#42"
    }
  },
  {
    src: "/src/assets/images/badges/black-forest.png",
    alt: "Green Spark",
    name: "Green Spark",
    style: { top: "55%", left: "70%" },
    stats: {
      co2Saved: "19.6 kg",
      points: 310,
      description: "Energy-efficient appliance choices",
      globalRank: "#1,089"
    }
  },
  {
    src: "/src/assets/images/badges/timber.png",
    alt: "Eco Rider",
    name: "Eco Rider",
    style: { top: "25%", left: "35%" },
    stats: {
      co2Saved: "28.1 kg",
      points: 450,
      description: "Sustainable packaging preferences",
      globalRank: "#734"
    }
  },
  {
    src: "/src/assets/images/badges/planet-pal.png",
    alt: "Planet Pal",
    name: "Planet Pal",
    style: { top: "65%", left: "55%" },
    stats: {
      co2Saved: "35.9 kg",
      points: 570,
      description: "Organic and local product supporter",
      globalRank: "#445"
    }
  },
  {
    src: "/src/assets/images/badges/elk-lager.png",
    alt: "Earth Keeper",
    name: "Earth Keeper",
    style: { top: "35%", left: "15%" },
    stats: {
      co2Saved: "44.2 kg",
      points: 720,
      description: "Zero-waste lifestyle advocate",
      globalRank: "#178"
    }
  },
  {
    src: "/src/assets/images/badges/north-east.png",
    alt: "Captain Carbon",
    name: "Captain Carbon",
    style: { top: "15%", left: "75%" },
    stats: {
      co2Saved: "52.6 kg",
      points: 840,
      description: "Renewable energy enthusiast",
      globalRank: "#89"
    }
  },
];

const EcoProfileTree = () => {
  const [hoveredBadge, setHoveredBadge] = useState(null);
  const [tooltipPosition, setTooltipPosition] = useState({ x: 0, y: 0 });

  // User's own badge data
  const userBadgeData = {
    name: "Captain Carbon",
    stats: {
      co2Saved: "389.2 kg",
      points: 5580,
      description: "Ultimate eco-champion with comprehensive sustainability achievements",
      globalRank: "#42"
    }
  };

  const handleBadgeHover = (badge, event, index) => {
    const rect = event.target.getBoundingClientRect();
    setTooltipPosition({
      x: rect.left + rect.width / 2,
      y: rect.top - 10
    });
    setHoveredBadge({ ...badge, index });
  };

  const handleUserBadgeHover = (event) => {
    const rect = event.target.getBoundingClientRect();
    setTooltipPosition({
      x: rect.left + rect.width / 2,
      y: rect.top - 10
    });
    setHoveredBadge({ ...userBadgeData, index: 'user', isUser: true });
  };

  const handleBadgeLeave = () => {
    setHoveredBadge(null);
  };

  return (
    <>
      <style>
        {`
          @keyframes pulse {
            0% {
              box-shadow: 0 0 0 0 rgba(0, 113, 220, 0.4);
              transform: translate(-50%, -50%) scale(1);
            }
            50% {
              box-shadow: 0 0 0 15px rgba(0, 113, 220, 0);
              transform: translate(-50%, -50%) scale(1.05);
            }
            100% {
              box-shadow: 0 0 0 0 rgba(0, 113, 220, 0);
              transform: translate(-50%, -50%) scale(1);
            }
          }
          
          @keyframes treeGrow {
            0% { 
              transform: scale(0.8) translateY(20px);
              opacity: 0.7;
            }
            100% { 
              transform: scale(1) translateY(0px);
              opacity: 1;
            }
          }
          
          @keyframes leafShimmer {
            0%, 100% { 
              filter: brightness(1) saturate(1);
            }
            50% { 
              filter: brightness(1.2) saturate(1.3);
            }
          }
          
          @keyframes floatingLeaf {
            0% {
              transform: translateY(0px) translateX(0px) rotate(0deg);
              opacity: 0;
            }
            10% {
              opacity: 1;
            }
            90% {
              opacity: 1;
            }
            100% {
              transform: translateY(-100px) translateX(30px) rotate(360deg);
              opacity: 0;
            }
          }
          
          @keyframes energyFlow {
            0% {
              opacity: 0;
              transform: translateY(50px) scale(0.5);
            }
            50% {
              opacity: 1;
              transform: translateY(-20px) scale(1);
            }
            100% {
              opacity: 0;
              transform: translateY(-100px) scale(0.5);
            }
          }
          
          @keyframes gentleSway {
            0%, 100% { transform: rotate(0deg); }
            25% { transform: rotate(0.5deg); }
            75% { transform: rotate(-0.5deg); }
          }
          
          .tree-main {
            animation: treeGrow 2s ease-out, leafShimmer 4s ease-in-out infinite 2s, gentleSway 8s ease-in-out infinite 4s;
            transform-origin: center bottom;
          }
          
          .floating-leaf {
            animation: floatingLeaf 8s linear infinite;
            position: absolute;
            width: 8px;
            height: 8px;
            background: linear-gradient(45deg, #22c55e, #16a34a);
            border-radius: 50% 0;
            z-index: 2;
          }
          
          .energy-particle {
            animation: energyFlow 3s ease-in-out infinite;
            position: absolute;
            width: 4px;
            height: 4px;
            background: radial-gradient(circle, #fbbf24, #f59e0b);
            border-radius: 50%;
            z-index: 3;
          }
          
          .badge-enhanced {
            transition: all 0.3s ease;
          }
          
          .badge-enhanced:hover {
            transform: translate(-50%, -50%) scale(1.1) !important;
            z-index: 15 !important;
          }
        `}
      </style>
      <section style={{ margin: "60px 0 40px 0", textAlign: "center", position: "relative" }}>
      <h2 style={{ fontWeight: 600, fontSize: 26, marginBottom: 4 }}>
        This Tree Breathes Because of You
      </h2>
      <div style={{ color: "#555", fontSize: 16, marginBottom: 32 }}>
        Your carbon coins built it. Your legacy lives here.
      </div>
      
      {/* User Info */}
      <div style={{ 
        display: "inline-flex", 
        alignItems: "center", 
        gap: 12, 
        backgroundColor: "#f0f9ff", 
        padding: "12px 24px", 
        borderRadius: 25, 
        marginBottom: 32,
        border: "2px solid #0071dc"
      }}>
        <div style={{ 
          width: 40, 
          height: 40, 
          borderRadius: "50%", 
          backgroundColor: "#0071dc", 
          display: "flex", 
          alignItems: "center", 
          justifyContent: "center", 
          color: "white", 
          fontWeight: 600,
          fontSize: 16
        }}>
          You
        </div>
        <div>
          <div style={{ fontWeight: 600, fontSize: 18, color: "#0071dc" }}>
            Alex Green • Captain Carbon
          </div>
          <div style={{ color: "#666", fontSize: 14, marginBottom: 2 }}>
            🌟 Total Points: 5,580
          </div>
          <div style={{ color: "#e53e3e", fontSize: 12, fontWeight: 600 }}>
            🏆 Global Rank: #42 of 28,347 eco-warriors
          </div>
        </div>
      </div>

      <div
        style={{
          position: "relative",
          width: 700,
          height: 800,
          margin: "0 auto",
          overflow: "hidden",
        }}
      >
        {/* Energy particles flowing upward */}
        {[...Array(8)].map((_, i) => (
          <div
            key={`energy-${i}`}
            className="energy-particle"
            style={{
              bottom: "10%",
              left: `${45 + (i * 2)}%`,
              animationDelay: `${i * 0.6}s`,
            }}
          />
        ))}
        
        {/* Floating leaves */}
        {[...Array(6)].map((_, i) => (
          <div
            key={`leaf-${i}`}
            className="floating-leaf"
            style={{
              bottom: "30%",
              left: `${20 + (i * 12)}%`,
              animationDelay: `${i * 1.3}s`,
            }}
          />
        ))}
        
        {/* Main tree with enhanced animations */}
        <div className="tree-main" style={{ position: "relative", zIndex: 4 }}>
          <img
            src="/src/assets/images/tree.png"
            alt="Eco Tree"
            style={{ 
              width: "100%", 
              height: "auto", 
              display: "block",
              filter: "drop-shadow(0 8px 16px rgba(0,0,0,0.15)) saturate(1.1) contrast(1.05)"
            }}
          />
        </div>
        
        {/* Magical glow overlay */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: "radial-gradient(ellipse at center 60%, rgba(34, 197, 94, 0.1) 0%, transparent 70%)",
            pointerEvents: "none",
            zIndex: 1,
            animation: "leafShimmer 6s ease-in-out infinite",
          }}
        />
        
        {/* User Position Indicator */}
        <div
          style={{
            position: "absolute",
            top: "45%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            zIndex: 20,
          }}
        >
          {/* Pulsing indicator with user badge */}
          <div
            style={{
              width: 90,
              height: 90,
              borderRadius: "50%",
              backgroundColor: "rgba(0, 113, 220, 0.2)",
              border: "4px solid #0071dc",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              animation: "pulse 2s infinite",
              marginBottom: 8,
              position: "relative",
              cursor: "pointer",
            }}
            onMouseEnter={handleUserBadgeHover}
            onMouseLeave={handleBadgeLeave}
          >
            {/* User's main badge - using the highest achievement badge */}
            <img
              src="/src/assets/images/badges/north-east.png"
              alt="Your Current Badge"
              style={{
                width: 60,
                height: 60,
                borderRadius: "50%",
                background: "#fff",
                border: "3px solid #0071dc",
                boxShadow: hoveredBadge?.isUser ? "0 8px 24px rgba(0, 113, 220, 0.4)" : "0 4px 16px rgba(0, 113, 220, 0.3)",
                transition: "all 0.3s ease",
              }}
            />
            
            {/* "You" indicator overlay */}
            <div
              style={{
                position: "absolute",
                bottom: -5,
                right: -5,
                width: 28,
                height: 28,
                borderRadius: "50%",
                backgroundColor: "#0071dc",
                border: "2px solid white",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "white",
                fontWeight: 700,
                fontSize: 10,
                boxShadow: "0 2px 8px rgba(0, 113, 220, 0.4)",
              }}
            >
              You
            </div>
          </div>
          
          {/* "You are here" label */}
          <div
            style={{
              backgroundColor: "#0071dc",
              color: "white",
              padding: "6px 12px",
              borderRadius: 15,
              fontSize: 12,
              fontWeight: 600,
              boxShadow: "0 4px 12px rgba(0, 113, 220, 0.3)",
              position: "relative",
            }}
          >
            📍 You are here
            {/* Arrow pointing up */}
            <div
              style={{
                position: "absolute",
                top: "-6px",
                left: "50%",
                transform: "translateX(-50%)",
                width: 0,
                height: 0,
                borderLeft: "6px solid transparent",
                borderRight: "6px solid transparent",
                borderBottom: "6px solid #0071dc",
              }}
            />
          </div>
        </div>

        {badgeIcons.map((badge, i) => (
          <img
            key={i}
            src={badge.src}
            alt={badge.alt}
            className="badge-enhanced"
            style={{
              position: "absolute",
              width: 64,
              height: 64,
              ...badge.style,
              transform: "translate(-50%, -50%)",
              borderRadius: "50%",
              background: "#fff",
              boxShadow: hoveredBadge?.index === i 
                ? "0 12px 32px rgba(34, 197, 94, 0.4), 0 0 20px rgba(34, 197, 94, 0.3)" 
                : "0 6px 16px rgba(0,0,0,0.15), 0 0 8px rgba(34, 197, 94, 0.1)",
              border: hoveredBadge?.index === i 
                ? "3px solid #22c55e" 
                : "3px solid #eaf6ff",
              cursor: "pointer",
              transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
              zIndex: hoveredBadge?.index === i ? 15 : 10,
              animation: i % 4 === 0 ? "energyFlow 4s ease-in-out infinite" : "none",
              animationDelay: `${i * 0.5}s`,
            }}
            onMouseEnter={(e) => handleBadgeHover(badge, e, i)}
            onMouseLeave={handleBadgeLeave}
          />
        ))}
      </div>

      {/* Tooltip */}
      {hoveredBadge && (
        <div
          style={{
            position: "fixed",
            left: tooltipPosition.x,
            top: tooltipPosition.y,
            transform: "translateX(-50%) translateY(-100%)",
            backgroundColor: "#fff",
            padding: "16px 20px",
            borderRadius: 12,
            boxShadow: "0 8px 32px rgba(0,0,0,0.15)",
            border: "2px solid #e8f5e8",
            zIndex: 1000,
            minWidth: 280,
            textAlign: "left",
            pointerEvents: "none"
          }}
        >
          <div style={{ 
            fontWeight: 700, 
            fontSize: 16, 
            color: hoveredBadge?.isUser ? "#0071dc" : "#2d5a27", 
            marginBottom: 8,
            display: "flex",
            alignItems: "center",
            gap: 8
          }}>
            <span>{hoveredBadge?.isUser ? "👑" : "🏆"}</span>
            {hoveredBadge.name}
            {hoveredBadge?.isUser && <span style={{ fontSize: 12, color: "#0071dc" }}>(You)</span>}
          </div>
          <div style={{ 
            fontSize: 14, 
            color: "#666", 
            marginBottom: 12,
            lineHeight: "1.4"
          }}>
            {hoveredBadge.stats.description}
          </div>
          
          {/* Global Rank Display */}
          <div style={{
            backgroundColor: hoveredBadge?.isUser ? "#e6f3ff" : "#fff3cd",
            border: hoveredBadge?.isUser ? "1px solid #0071dc" : "1px solid #ffeaa7",
            padding: "8px 12px",
            borderRadius: 8,
            marginBottom: 12,
            textAlign: "center"
          }}>
            <div style={{ fontSize: 12, color: hoveredBadge?.isUser ? "#0071dc" : "#856404", marginBottom: 2 }}>
              {hoveredBadge?.isUser ? "Your Global Rank" : "Global Rank"}
            </div>
            <div style={{ fontWeight: 700, color: hoveredBadge?.isUser ? "#0071dc" : "#b45309", fontSize: 16 }}>
              🏆 {hoveredBadge.stats.globalRank}
            </div>
          </div>
          
          <div style={{ display: "flex", justifyContent: "space-between", gap: 16 }}>
            <div style={{
              backgroundColor: "#f0f9ff",
              padding: "8px 12px",
              borderRadius: 8,
              flex: 1,
              textAlign: "center"
            }}>
              <div style={{ fontSize: 12, color: "#666", marginBottom: 2 }}>CO₂ Saved</div>
              <div style={{ fontWeight: 600, color: "#0071dc", fontSize: 14 }}>
                💨 {hoveredBadge.stats.co2Saved}
              </div>
            </div>
            <div style={{
              backgroundColor: "#f0fdf4",
              padding: "8px 12px",
              borderRadius: 8,
              flex: 1,
              textAlign: "center"
            }}>
              <div style={{ fontSize: 12, color: "#666", marginBottom: 2 }}>Points Earned</div>
              <div style={{ fontWeight: 600, color: "#2d5a27", fontSize: 14 }}>
                ⭐ {hoveredBadge.stats.points}
              </div>
            </div>
          </div>
          {/* Tooltip arrow */}
          <div style={{
            position: "absolute",
            bottom: "-8px",
            left: "50%",
            transform: "translateX(-50%)",
            width: 0,
            height: 0,
            borderLeft: "8px solid transparent",
            borderRight: "8px solid transparent",
            borderTop: "8px solid #fff"
          }} />
        </div>
      )}
    </section>
    </>
  );
};

export default EcoProfileTree;
