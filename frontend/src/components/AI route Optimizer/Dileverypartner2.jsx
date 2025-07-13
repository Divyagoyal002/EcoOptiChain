import React, { useState } from 'react';
import { Truck, MapPin, Clock, Package, Route, ChevronDown, ChevronUp, Settings, User, Bell, Search, Filter, Calendar, TrendingUp, Zap, Navigation } from 'lucide-react';

const Deliverypartner = () => {
  const [expandedRoute, setExpandedRoute] = useState(null);
  const [selectedTab, setSelectedTab] = useState('active');
  const [showRouteDetails, setShowRouteDetails] = useState(false);

  const routes = [
    {
      id: 'route-1',
      name: 'Route 2',
      status: 'optimal',
      efficiency: '41% shorter',
      fuelSaved: '0.2L less fuel',
      trafficRating: '4.5/5',
      co2Reduced: '0.3 kg',
      totalValue: '$167.98',
      deliveryDate: 'Fri, Jul 11',
      warehouseCode: 'Sector55, New Delhi Warehouse-123D76',
      orders: [
        {
          id: 1,
          customer: 'Mainstays by Becky G. & Alejandra',
          product: '8.5" Blue Stripe Ceramic Pitcher Vase',
          price: '$9.98',
          image: '/api/placeholder/80/80',
          rating: 4.8,
          reviews: 1247,
          seller: 'Greenmart',
          shipping: 'Free shipping',
          returns: 'Free 90-day returns',
          giftEligible: true,
          priority: 'standard'
        },
        {
          id: 2,
          customer: 'Tech Solutions Inc.',
          product: 'Sceptre 43" Class 1080P FHD LED TV X435BV-F',
          price: '$158.00',
          image: '/api/placeholder/80/80',
          rating: 4.6,
          reviews: 892,
          seller: 'Greenmart',
          shipping: 'Free shipping',
          returns: 'Free 90-day returns',
          giftEligible: false,
          priority: 'express'
        }
      ]
    },
    {
      id: 'route-2',
      name: 'Route 3',
      status: 'good',
      efficiency: '28% shorter',
      fuelSaved: '0.15L less fuel',
      trafficRating: '4.2/5',
      co2Reduced: '0.2 kg',
      totalValue: '$284.50',
      deliveryDate: 'Sat, Jul 12',
      warehouseCode: 'Sector42, New Delhi Warehouse-456A89',
      orders: [
        {
          id: 3,
          customer: 'Home Essentials Co.',
          product: 'Kitchen Appliance Set - 5 Piece',
          price: '$149.99',
          image: '/api/placeholder/80/80',
          rating: 4.7,
          reviews: 634,
          seller: 'Greenmart',
          shipping: 'Free shipping',
          returns: 'Free 90-day returns',
          giftEligible: true,
          priority: 'standard'
        }
      ]
    }
  ];

  const getStatusColor = (status) => {
    switch(status) {
      case 'optimal': return 'bg-emerald-500';
      case 'good': return 'bg-blue-500';
      case 'warning': return 'bg-amber-500';
      default: return 'bg-gray-500';
    }
  };

  const getPriorityColor = (priority) => {
    switch(priority) {
      case 'express': return 'bg-red-100 text-red-800';
      case 'standard': return 'bg-blue-100 text-blue-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Header */}
     
      {/* Stats Cards */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 hover:shadow-md transition-shadow">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Active Routes</p>
                <p className="text-2xl font-bold text-gray-900">12</p>
                <p className="text-sm text-emerald-600 flex items-center mt-1">
                  <TrendingUp className="w-3 h-3 mr-1" />
                  +8% from yesterday
                </p>
              </div>
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                <Route className="w-6 h-6 text-blue-600" />
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 hover:shadow-md transition-shadow">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Total Orders</p>
                <p className="text-2xl font-bold text-gray-900">47</p>
                <p className="text-sm text-emerald-600 flex items-center mt-1">
                  <Package className="w-3 h-3 mr-1" />
                  23 pending delivery
                </p>
              </div>
              <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center">
                <Package className="w-6 h-6 text-emerald-600" />
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 hover:shadow-md transition-shadow">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Fuel Saved</p>
                <p className="text-2xl font-bold text-gray-900">2.8L</p>
                <p className="text-sm text-emerald-600 flex items-center mt-1">
                  <Zap className="w-3 h-3 mr-1" />
                  15% efficiency gain
                </p>
              </div>
              <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center">
                <Zap className="w-6 h-6 text-amber-600" />
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 hover:shadow-md transition-shadow">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">On-Time Rate</p>
                <p className="text-2xl font-bold text-gray-900">94%</p>
                <p className="text-sm text-emerald-600 flex items-center mt-1">
                  <Clock className="w-3 h-3 mr-1" />
                  Above target
                </p>
              </div>
              <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center">
                <Clock className="w-6 h-6 text-indigo-600" />
              </div>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 mb-6">
          <div className="border-b border-gray-200">
            <nav className="flex space-x-8 px-6">
              {['active', 'completed', 'scheduled'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setSelectedTab(tab)}
                  className={`py-4 px-1 border-b-2 font-medium text-sm capitalize transition-colors ${
                    selectedTab === tab
                      ? 'border-blue-500 text-blue-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                >
                  {tab} Routes
                </button>
              ))}
            </nav>
          </div>
        </div>

        {/* Routes List */}
        <div className="space-y-6">
          {routes.map((route) => (
            <div key={route.id} className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden hover:shadow-md transition-shadow">
              {/* Route Header */}
              <div className="p-6 border-b border-gray-100">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className={`w-3 h-3 rounded-full ${getStatusColor(route.status)}`}></div>
                    <h3 className="text-lg font-semibold text-gray-900">{route.name}</h3>
                    <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded-full">
                      Optimized
                    </span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="text-right">
                      <p className="text-lg font-bold text-gray-900">{route.totalValue}</p>
                      <p className="text-sm text-gray-500">{route.orders.length} orders</p>
                    </div>
                    <button
                      onClick={() => setExpandedRoute(expandedRoute === route.id ? null : route.id)}
                      className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                    >
                      {expandedRoute === route.id ? 
                        <ChevronUp className="w-5 h-5 text-gray-600" /> : 
                        <ChevronDown className="w-5 h-5 text-gray-600" />
                      }
                    </button>
                  </div>
                </div>

                {/* Route Optimization Info */}
                <div className="bg-gradient-to-r from-emerald-50 to-blue-50 rounded-lg p-4 mb-4">
                  <div className="flex items-center space-x-2 mb-3">
                    <Navigation className="w-5 h-5 text-emerald-600" />
                    <span className="font-medium text-emerald-800">Route Optimization Benefits</span>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-sm">
                    <div className="flex items-center space-x-2">
                      <Route className="w-4 h-4 text-blue-600" />
                      <span className="text-gray-700">{route.efficiency} distance</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Zap className="w-4 h-4 text-amber-600" />
                      <span className="text-gray-700">{route.fuelSaved} fuel</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <TrendingUp className="w-4 h-4 text-emerald-600" />
                      <span className="text-gray-700">Traffic: {route.trafficRating}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-4 h-4 bg-green-500 rounded-full"></div>
                      <span className="text-gray-700">-{route.co2Reduced} CO₂</span>
                    </div>
                  </div>
                </div>

                {/* Delivery Info */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-2">
                      <MapPin className="w-4 h-4 text-gray-500" />
                      <span className="text-sm text-gray-600">{route.warehouseCode}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Clock className="w-4 h-4 text-gray-500" />
                      <span className="text-sm text-gray-600">Delivers by {route.deliveryDate}</span>
                    </div>
                  </div>
                  <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium">
                    View on Map
                  </button>
                </div>
              </div>

              {/* Expanded Route Details */}
              {expandedRoute === route.id && (
                <div className="p-6 bg-gray-50">
                  <div className="space-y-4">
                    {route.orders.map((order) => (
                      <div key={order.id} className="bg-white rounded-lg border border-gray-200 p-4">
                        <div className="flex items-start space-x-4">
                          <div className="w-20 h-20 bg-gray-100 rounded-lg flex items-center justify-center">
                            <Package className="w-8 h-8 text-gray-400" />
                          </div>
                          <div className="flex-1">
                            <div className="flex items-start justify-between">
                              <div>
                                <p className="font-medium text-gray-900">{order.customer}</p>
                                <p className="text-sm text-gray-600 mt-1">{order.product}</p>
                                <div className="flex items-center space-x-4 mt-2">
                                  <div className="flex items-center space-x-1">
                                    <div className="flex text-yellow-400">
                                      {[...Array(5)].map((_, i) => (
                                        <span key={i} className="text-xs">★</span>
                                      ))}
                                    </div>
                                    <span className="text-sm text-gray-600">({order.reviews})</span>
                                  </div>
                                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${getPriorityColor(order.priority)}`}>
                                    {order.priority}
                                  </span>
                                </div>
                              </div>
                              <div className="text-right">
                                <p className="text-lg font-bold text-gray-900">{order.price}</p>
                                <p className="text-sm text-emerald-600">{order.shipping}</p>
                              </div>
                            </div>
                            <div className="flex items-center justify-between mt-4">
                              <div className="flex items-center space-x-4 text-sm text-gray-600">
                                <span>✓ {order.returns}</span>
                                {order.giftEligible && <span>🎁 Gift eligible</span>}
                              </div>
                              <div className="flex space-x-2">
                                <button className="px-3 py-1 border border-gray-300 rounded-md text-sm hover:bg-gray-50 transition-colors">
                                  Contact Customer
                                </button>
                                <button className="px-3 py-1 bg-blue-600 text-white rounded-md text-sm hover:bg-blue-700 transition-colors">
                                  Mark Delivered
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Deliverypartner;