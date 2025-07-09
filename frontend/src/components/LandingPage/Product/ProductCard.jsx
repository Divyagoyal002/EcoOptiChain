import React from 'react';

const ProductCard = ({
  image,
  price,
  oldPrice,
  unit,
  title,
  description,
  rating,
  reviews,
  isAvailable,
  options,
  isOption,
  isDeal,
  isFavorite,
  onAdd,
  onFavorite,
  delivery,
  pickup,
  colors,
}) => (
  <div className="bg-white rounded-lg shadow-sm p-6 flex flex-col items-start w-full min-h-[370px] relative">
    {/* Favorite icon */}
    <button className="absolute top-3 right-3 text-gray-400 hover:text-red-500">
      <svg width="22" height="22" fill={isFavorite ? "#e60023" : "none"} stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41 0.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
      </svg>
    </button>
    {/* Product image */}
    <img src={image} alt={title} className="h-24 mx-auto mb-2 object-contain" />
    {/* Color options */}
    {colors && (
      <div className="flex space-x-1 mb-2">
        {colors.map((color, idx) => (
          <span key={idx} className="w-4 h-4 rounded-full border" style={{ background: color }} />
        ))}
      </div>
    )}
    {/* Price */}
    <div className="flex items-center mb-1">
      {isDeal && <span className="text-green-600 font-bold mr-2">Now</span>}
      <span className="text-lg font-bold">{price}</span>
      {unit && <span className="text-xs text-gray-500 ml-1">{unit}</span>}
      {oldPrice && <span className="text-xs text-gray-400 line-through ml-2">{oldPrice}</span>}
    </div>
    {/* Title */}
    <div className="text-sm font-medium mb-1">{title}</div>
    {/* Description */}
    <div className="text-xs text-gray-600 mb-2">{description}</div>
    {/* Rating */}
    {rating && (
      <div className="flex items-center mb-2">
        <span className="text-yellow-400 mr-1">★</span>
        <span className="text-xs font-semibold">{rating}</span>
        <span className="text-xs text-gray-500 ml-1">({reviews})</span>
      </div>
    )}
    {/* Add/Options Button */}
    <button className={`rounded-full px-4 py-1 text-white font-bold text-sm mb-2 ${isOption ? 'bg-gray-400' : 'bg-[#0071dc]'}`}>
      {isOption ? 'Options' : '+ Add'}
    </button>
    {/* Delivery/Pickup */}
    <div className="text-xs text-gray-500">
      {pickup && <div>Pickup: <span className="font-semibold">{pickup}</span></div>}
      {delivery && <div>Delivery: <span className="font-semibold">{delivery}</span></div>}
    </div>
  </div>
);

export default ProductCard;