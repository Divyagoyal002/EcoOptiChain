import React, { useState } from 'react';
import { Leaf, Globe, TrendingUp, BarChart3, CheckCircle, Users, Award, ShoppingCart, Star, ArrowUpRight, ArrowDownLeft, Sparkle } from 'lucide-react';

const sustainableProducts = [
  {
    id: 1,
    name: "EcoFresh Organic Apples",
    brand: "GreenPod Labs",
    image: "https://images.unsplash.com/photo-1502741338009-cac2772e18bc?auto=format&fit=crop&w=400&q=80",
    sustainabilityScore: 4.9,
    carbonSaved: 1.2,
    waterSaved: 18,
    recycledPackaging: true,
    globalImpact: "Reduced 2.5 tons CO₂ globally",
    stats: {
      sold: 12000,
      repeatBuyers: 3200,
      rating: 4.8,
      reviews: 1123
    }
  },
  {
    id: 2,
    name: "BioPack Compostable Plates",
    brand: "BioPack",
    image: "https://images.unsplash.com/photo-1519864600265-abb23847ef2c?auto=format&fit=crop&w=400&q=80",
    sustainabilityScore: 4.7,
    carbonSaved: 0.8,
    waterSaved: 12,
    recycledPackaging: true,
    globalImpact: "Saved 1.2M liters water",
    stats: {
      sold: 8500,
      repeatBuyers: 2100,
      rating: 4.7,
      reviews: 876
    }
  },
  {
    id: 3,
    name: "SolarCharge LED Bulb",
    brand: "EcoLite",
    image: "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=80",
    sustainabilityScore: 4.8,
    carbonSaved: 2.1,
    waterSaved: 5,
    recycledPackaging: false,
    globalImpact: "Powered 500 homes with clean energy",
    stats: {
      sold: 15000,
      repeatBuyers: 4100,
      rating: 4.9,
      reviews: 1342
    }
  }
];

const SustainableProductMonitor = () => {
  const [selectedProduct, setSelectedProduct] = useState(sustainableProducts[0]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-blue-100 to-blue-200 flex flex-col items-center py-8 px-2 relative overflow-x-hidden">
      {/* Sparkle Animation */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="animate-pulse absolute top-10 left-10 w-8 h-8 opacity-30">
          <Sparkle className="w-full h-full text-blue-300" />
        </div>
        <div className="animate-pulse absolute bottom-10 right-10 w-10 h-10 opacity-30">
          <Sparkle className="w-full h-full text-blue-300" />
        </div>
        <div className="animate-pulse absolute top-1/2 left-1/4 w-6 h-6 opacity-20">
          <Sparkle className="w-full h-full text-blue-200" />
        </div>
        <div className="animate-pulse absolute bottom-1/3 right-1/3 w-7 h-7 opacity-20">
          <Sparkle className="w-full h-full text-blue-200" />
        </div>
      </div>
      {/* Header */}
      <div className="w-full max-w-6xl mb-10 z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <Leaf className="w-12 h-12 text-blue-600 drop-shadow-lg animate-spin-slow" />
            <h1 className="text-4xl md:text-5xl font-extrabold text-blue-900 tracking-tight flex items-center gap-2">
              Sustainable Product Monitor
              <span className="bg-gradient-to-r from-blue-400 to-blue-600 text-white px-3 py-1 rounded-full text-lg font-bold shadow-lg animate-bounce">Live</span>
            </h1>
          </div>
          <div className="flex items-center gap-2 bg-blue-100 px-6 py-3 rounded-2xl shadow-lg">
            <Globe className="w-6 h-6 text-blue-600" />
            <span className="text-blue-700 font-semibold text-base">Global Impact Dashboard</span>
          </div>
        </div>
        <p className="mt-4 text-blue-700 text-xl font-medium text-center md:text-left">Track your contribution to a greener planet with every sustainable purchase. See stats, impact, and join the movement!</p>
      </div>

      {/* Product Selector */}
      <div className="w-full max-w-6xl mb-10 z-10">
        <div className="flex flex-wrap gap-6 justify-center">
          {sustainableProducts.map(product => (
            <button
              key={product.id}
              onClick={() => setSelectedProduct(product)}
              className={`flex flex-col items-center p-6 rounded-3xl shadow-2xl border-2 transition-all duration-300 ${
                selectedProduct.id === product.id
                  ? 'border-blue-500 bg-gradient-to-br from-blue-100 to-blue-200 scale-105 ring-4 ring-blue-200'
                  : 'border-blue-200 bg-white hover:scale-105 hover:border-blue-400'
              }`}
              style={{ minWidth: 200 }}
            >
              <img src={product.image} alt={product.name} className="w-28 h-28 object-cover rounded-2xl mb-3 shadow-lg border-4 border-blue-100" />
              <span className="font-extrabold text-xl text-blue-900">{product.name}</span>
              <span className="text-sm text-blue-500 font-semibold">{product.brand}</span>
              <div className="flex items-center gap-1 mt-2">
                <Star className="w-5 h-5 text-yellow-400" />
                <span className="font-bold text-yellow-700">{product.sustainabilityScore}</span>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Product Details & Impact */}
      <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-10 z-10">
        {/* Product Card */}
        <div className="bg-white rounded-3xl shadow-2xl border border-blue-100 p-10 flex flex-col items-center relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-blue-400 to-blue-200 rounded-t-3xl" />
          <img src={selectedProduct.image} alt={selectedProduct.name} className="w-44 h-44 object-cover rounded-2xl mb-6 border-4 border-blue-200 shadow-xl" />
          <h2 className="text-3xl font-extrabold text-blue-900 mb-2">{selectedProduct.name}</h2>
          <span className="text-lg text-blue-600 mb-2 font-semibold">{selectedProduct.brand}</span>
          <div className="flex items-center gap-2 mb-6">
            <CheckCircle className="w-6 h-6 text-blue-600" />
            <span className="text-blue-700 font-bold text-lg">Sustainably Certified</span>
          </div>
          <div className="flex flex-wrap gap-4 justify-center mb-6">
            <div className="flex items-center gap-2 bg-blue-50 px-4 py-3 rounded-xl shadow">
              <BarChart3 className="w-6 h-6 text-blue-600" />
              <span className="font-bold text-blue-700">{selectedProduct.carbonSaved} kg CO₂ saved</span>
            </div>
            <div className="flex items-center gap-2 bg-blue-100 px-4 py-3 rounded-xl shadow">
              <TrendingUp className="w-6 h-6 text-blue-600" />
              <span className="font-bold text-blue-700">{selectedProduct.waterSaved}L water saved</span>
            </div>
            <div className={`flex items-center gap-2 px-4 py-3 rounded-xl shadow ${selectedProduct.recycledPackaging ? 'bg-blue-200' : 'bg-gray-100'}`}>
              <Award className="w-6 h-6 text-blue-600" />
              <span className={`font-bold ${selectedProduct.recycledPackaging ? 'text-blue-700' : 'text-gray-700'}`}>
                {selectedProduct.recycledPackaging ? 'Recycled Packaging' : 'Standard Packaging'}
              </span>
            </div>
          </div>
          <div className="bg-gradient-to-r from-blue-100 to-blue-200 px-6 py-3 rounded-xl mt-2 text-center text-lg font-semibold text-blue-700 shadow">
            {selectedProduct.globalImpact}
          </div>
        </div>

        {/* Stats & Contribution */}
        <div className="bg-white rounded-3xl shadow-2xl border border-blue-100 p-10 flex flex-col justify-center relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-blue-400 to-blue-200 rounded-t-3xl" />
          <h3 className="text-2xl font-extrabold text-blue-900 mb-6 flex items-center gap-3">
            <ShoppingCart className="w-7 h-7 text-blue-600" />
            Your Sustainable Impact
          </h3>
          <div className="grid grid-cols-2 gap-8 mb-8">
            <div className="flex flex-col items-center">
              <span className="text-4xl font-extrabold text-blue-700">{selectedProduct.stats.sold.toLocaleString()}</span>
              <span className="text-base text-blue-600 font-semibold">Units Sold</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-4xl font-extrabold text-blue-700">{selectedProduct.stats.repeatBuyers.toLocaleString()}</span>
              <span className="text-base text-blue-600 font-semibold">Repeat Buyers</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-4xl font-extrabold text-yellow-700">{selectedProduct.stats.rating}</span>
              <span className="text-base text-blue-600 font-semibold">Avg. Rating</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-4xl font-extrabold text-indigo-700">{selectedProduct.stats.reviews.toLocaleString()}</span>
              <span className="text-base text-blue-600 font-semibold">Reviews</span>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <ArrowUpRight className="w-6 h-6 text-blue-600" />
              <span className="text-blue-700 font-bold text-lg">Buying this product helps reduce global emissions and supports sustainable farming.</span>
            </div>
            <div className="flex items-center gap-3">
              <ArrowDownLeft className="w-6 h-6 text-blue-600" />
              <span className="text-blue-700 font-bold text-lg">Join {selectedProduct.stats.repeatBuyers.toLocaleString()} others making a difference!</span>
            </div>
          </div>
        </div>
      </div>
      {/* Footer */}
      <div className="w-full max-w-6xl mt-12 mb-4 text-center z-10">
        <div className="flex flex-col md:flex-row items-center justify-center gap-4">
          <span className="text-blue-600 font-semibold text-lg">Powered by Walmart Sustainability AI</span>
          <span className="text-blue-400">|</span>
          <span className="text-blue-600 font-semibold text-lg">Together for a Greener Future</span>
        </div>
      </div>
    </div>
  );
};

export default SustainableProductMonitor;