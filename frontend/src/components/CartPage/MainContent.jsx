import React, { useState } from 'react';

const MainContent = () => {
  const [items, setItems] = useState([
    {
      id: 1,
      name: "Full Circle Organic Cotton Cleaning Cloths",
      price: 12.99,
      image: "https://i5.walmartimages.com/seo/Full-Circle-Tidy-Organic-Cotton-Kitchen-Scrubbing-Dish-Cloths-12-x-12-Set-of-3-Multicolor_854a53dc-e3ce-47bd-8389-cecc9256ecab.c199fe8198b3205ae802ce678d83bb22.jpeg?odnHeight=640&odnWidth=640&odnBg=FFFFFF",
      quantity: 1,
      freeReturns: true,
      giftEligible: true,
      sellerId: "Greenmart",
      arrivalDate: "Fri, Jul 11"
    },
    {
      id: 2,
      name: "Leodye Eco-Friendly Air Freshener",
      price: 8.99,
      image: "https://i5.walmartimages.com/seo/Small-Spaces-Air-Freshener-for-Home-Lavender-Scent-6-Pack_a4b6a16f-cc84-4aa1-b041-b8d51c707976.2132e8fc63c48c8da69498464f6a3243.jpeg?odnHeight=640&odnWidth=640&odnBg=FFFFFF",
      quantity: 1,
      freeReturns: true,
      protectionPlan: true,
      sellerId: "Greenmart",
      arrivalDate: "Sun, Jul 13"
    }
  ]);

  const [showProtectionPlan, setShowProtectionPlan] = useState(false);

  const updateQuantity = (id, newQuantity) => {
    if (newQuantity < 1) return;
    setItems(items.map(item => 
      item.id === id ? { ...item, quantity: newQuantity } : item
    ));
  };

  const removeItem = (id) => {
    setItems(items.filter(item => item.id !== id));
  };

  const subtotal = items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="max-w-7xl mx-auto p-4 bg-white">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column - Cart Items */}
        <div className="lg:col-span-2">
          {/* Cart Header */}
          <div className="mb-6">
            <h1 className="text-2xl font-semibold text-gray-900 mb-4">
              Cart ({totalItems} items)
            </h1>
            
            {/* Pickup and Delivery Options */}
            <div className="border border-gray-200 rounded-lg p-4 mb-6">
              <div className="flex items-center mb-3">
                <div className="w-6 h-6 bg-blue-600 rounded mr-3 flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-blue-600 font-medium">Pickup and delivery options</span>
                <svg className="w-5 h-5 ml-2 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </div>
              
              {/* Free Shipping Info */}
              <div className="flex items-center bg-blue-50 p-3 rounded-lg">
                <div className="w-8 h-8 bg-blue-600 rounded mr-3 flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                  </svg>
                </div>
                <div>
                  <div className="font-medium text-gray-900">Free shipping, arrives between Thu, Jul 10 - Sat, Jul 12</div>
                  <div className="text-sm text-blue-600 underline cursor-pointer">95829</div>
                </div>
              </div>
            </div>

            {/* Items List */}
            <div className="space-y-6">
              {items.map((item) => (
                <div key={item.id} className="border-b border-gray-200 pb-6">
                  <div className="flex items-start justify-between mb-2">
                    <div className="text-sm text-gray-600">
                      Arrives by {item.arrivalDate}
                    </div>
                    <div className="text-sm text-gray-600">1 item</div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <img 
                      src={item.image} 
                      alt={item.name}
                      className="w-20 h-20 object-cover rounded-lg"
                    />
                    
                    <div className="flex-1">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="text-sm font-medium text-gray-900 line-clamp-3">
                          {item.name}
                        </h3>
                        <div className="text-lg font-semibold text-gray-900 ml-4">
                          ${item.price.toFixed(2)}
                        </div>
                      </div>
                      
                      <div className="flex items-center space-x-4 mb-2">
                        {item.freeReturns && (
                          <span className="text-sm text-green-600 flex items-center">
                            <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                            </svg>
                            Free 90-day returns
                          </span>
                        )}
                        {item.giftEligible && (
                          <span className="text-sm text-blue-600 flex items-center">
                            <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
                            </svg>
                            Gift-eligible, original packaging
                          </span>
                        )}
                      </div>
                      
                      <div className="text-sm text-gray-600 mb-3">
                        Sold and shipped by <span className="font-medium">{item.sellerId}</span>
                      </div>
                      
                      {item.protectionPlan && (
                        <div className="mb-3">
                          <div className="flex items-center mb-2">
                            <svg className="w-4 h-4 text-gray-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <span className="text-sm font-medium">Greenmart Protection Plan by Allstate</span>
                          </div>
                          <div className="text-sm text-blue-600 underline cursor-pointer mb-2">View details</div>
                          <div className="text-xs text-gray-500 mb-2">(Only one option can be selected at a time.)</div>
                          <div className="space-y-1">
                          
                          </div>
                        </div>
                      )}
                      
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4">
                          <button 
                            onClick={() => removeItem(item.id)}
                            className="text-sm text-blue-600 hover:underline"
                          >
                            Remove
                          </button>
                          <button className="text-sm text-blue-600 hover:underline">
                            Save for later
                          </button>
                        </div>
                        
                        <div className="flex items-center space-x-2">
                          <button 
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="w-8 h-8 border border-gray-300 rounded-full flex items-center justify-center hover:bg-gray-100"
                          >
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 12H4" />
                            </svg>
                          </button>
                          <span className="w-8 text-center">{item.quantity}</span>
                          <button 
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="w-8 h-8 border border-gray-300 rounded-full flex items-center justify-center hover:bg-gray-100"
                          >
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                            </svg>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column - Order Summary */}
        <div className="lg:col-span-1">
          <div className="sticky top-4">
            {/* Continue to Checkout Button */}
            <button className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg font-medium hover:bg-blue-700 mb-4">
              Continue to checkout
            </button>
            
            <div className="text-sm text-gray-600 mb-6 text-center">
              For the best shopping experience, <span className="text-blue-600 underline cursor-pointer">sign in</span>
            </div>
            
            {/* Order Summary */}
            <div className="space-y-3 mb-6">
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Subtotal ({totalItems} items)</span>
                <span className="font-medium">${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Shipping</span>
                <span className="font-medium text-green-600">Free</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Taxes</span>
                <span className="font-medium">Calculated at checkout</span>
              </div>
              <div className="border-t pt-3">
                <div className="flex justify-between items-center">
                  <span className="text-lg font-medium">Estimated total</span>
                  <span className="text-lg font-bold">${subtotal.toFixed(2)}</span>
                </div>
              </div>
            </div>
            
            {/* Payment Options */}
            <div className="text-sm text-gray-600 mb-6">
              as low as <span className="font-medium">$16/mo</span> with <span className="font-medium">Affirm</span>
              <div className="text-blue-600 underline cursor-pointer">Learn how</div>
            </div>
            
            {/* Greenmart+ Offer */}
            <div className="border-2 border-blue-600 rounded-lg p-4 mb-4">
              <div className="flex items-center mb-3">
                <img src="/api/placeholder/80/20" alt="Greenmart+" className="h-5 mr-2" />
                <span className="text-blue-600 font-medium">Limited time only</span>
              </div>
              <div className="flex items-center mb-3">
                <input type="checkbox" className="mr-2" />
                <span className="text-sm">Get 50% off a year of Greenmart+. T&C apply.</span>
              </div>
              <div className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center">
                <span className="text-lg">🎁</span>
              </div>
            </div>
            
            {/* Gift Option */}
            <div className="flex items-center">
              <input type="checkbox" className="mr-2" />
              <span className="text-sm">This order is a gift</span>
              <svg className="w-4 h-4 ml-1 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center ml-2">
                <span className="text-white text-lg">🎁</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainContent;