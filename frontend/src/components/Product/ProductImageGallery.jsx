import React, { useState } from "react";

const images = [
  "https://i5.walmartimages.com/seo/S-T-INC-Microfiber-Cleaning-Cloths-5-Pack-Multi-Purpose-Cloths-12-in-x-12-in-Assorted-Colors_98f49aeb-c81e-4493-a43c-cb456337775a.07c11fa29d916d2d37c4be3b7a4b8683.jpeg?odnHeight=640&odnWidth=640&odnBg=FFFFFF", // Replace with actual product images
  "https://i5.walmartimages.com/asr/79251b74-49c5-4e9f-882f-bec99bb6e1f1.b22aff324692347578e0aa23ae1933c6.jpeg?odnHeight=640&odnWidth=640&odnBg=FFFFFF",
  "https://i5.walmartimages.com/asr/83c0a87b-e371-4728-9308-8fc06b9cc905.212e7bf2dc1f4e5d02eb53c226182a20.jpeg?odnHeight=640&odnWidth=640&odnBg=FFFFFF",
  "https://i5.walmartimages.com/asr/a66fcdf9-60a9-4516-912a-0d0ed7f4df68.3b8e4dd3d63ba85ef48b6f6f73232053.jpeg?odnHeight=640&odnWidth=640&odnBg=FFFFFF",
  "https://i5.walmartimages.com/asr/fc1f322d-83a8-4bcd-a008-025800a7a403.6b48afe5054fe76797a8fb387dbf724a.jpeg?odnHeight=640&odnWidth=640&odnBg=FFFFFF",
];

const iconStyle = {
  background: "#fff",
  borderRadius: "50%",
  boxShadow: "0 1px 4px rgba(0,0,0,0.08)",
  width: 36,
  height: 36,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  marginBottom: 10,
  cursor: "pointer",
  fontSize: 18,
};

const ProductImageGallery = () => {
  const [current, setCurrent] = useState(0);
  const total = images.length;

  const handlePrev = () =>
    setCurrent((prev) => (prev === 0 ? total - 1 : prev - 1));
  const handleNext = () =>
    setCurrent((prev) => (prev === total - 1 ? 0 : prev + 1));

  return (
    <div
      style={{
        position: "relative",
        width: 340,
        height: 420,
        background: "#fff",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 12,
        boxShadow: "0 2px 8px rgba(0,0,0,0.03)",
      }}
    >
      <img
        src={images[current]}
        alt="S&T INC. Microfiber Cleaning Cloths"
        style={{
          width: 300,
          height: 300,
          objectFit: "contain",
          borderRadius: 8,
          display: "block",
        }}
      />
      {/* Vertical action buttons */}
      <div
        style={{
          position: "absolute",
          top: 40,
          right: 16,
          display: "flex",
          flexDirection: "column",
          zIndex: 2,
        }}
      >
        <div style={iconStyle} title="Favorite">
          <span role="img" aria-label="favorite">
            ♡
          </span>
        </div>
        <div style={iconStyle} title="Share">
          <span role="img" aria-label="share">
            ⇪
          </span>
        </div>
        <div style={iconStyle} title="Zoom">
          <span role="img" aria-label="zoom">
            🔍
          </span>
        </div>
      </div>
      {/* Carousel arrows */}
      <button
        onClick={handlePrev}
        style={{
          position: "absolute",
          left: 8,
          top: "50%",
          transform: "translateY(-50%)",
          background: "#fff",
          border: "none",
          borderRadius: "50%",
          boxShadow: "0 1px 4px rgba(0,0,0,0.08)",
          width: 36,
          height: 36,
          cursor: "pointer",
          fontSize: 20,
        }}
        aria-label="Previous image"
      >
        ‹
      </button>
      <button
        onClick={handleNext}
        style={{
          position: "absolute",
          right: 8,
          top: "50%",
          transform: "translateY(-50%)",
          background: "#fff",
          border: "none",
          borderRadius: "50%",
          boxShadow: "0 1px 4px rgba(0,0,0,0.08)",
          width: 36,
          height: 36,
          cursor: "pointer",
          fontSize: 20,
        }}
        aria-label="Next image"
      >
        ›
      </button>
    </div>
  );
};

export default ProductImageGallery;
