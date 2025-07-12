import React, { useState, useEffect } from 'react';
import { Truck, MapPin, Clock, Package, Route, ChevronDown, ChevronUp, Settings, User, Bell, Search, Filter, Calendar, TrendingUp, Zap, Navigation, CheckCircle, AlertCircle, Star, Phone, MessageSquare, Eye, Edit, Trash2, Plus, X, Target, Compass, Map, BarChart3, Wind, CloudRain, Sun, Thermometer, Fuel, Users, Building, Award } from 'lucide-react';

const DeliveryDashboard = () => {
  const [expandedRoute, setExpandedRoute] = useState(null);
  const [selectedTab, setSelectedTab] = useState('active');
  const [showNotifications, setShowNotifications] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [showFilters, setShowFilters] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [showOrderDetails, setShowOrderDetails] = useState(null);
  const [showRouteOptimizer, setShowRouteOptimizer] = useState(false);
  const [selectedWarehouse, setSelectedWarehouse] = useState('');
  const [selectedDeliveryLocation, setSelectedDeliveryLocation] = useState('');
  const [optimizedRoutes, setOptimizedRoutes] = useState([]);
  const [isOptimizing, setIsOptimizing] = useState(false);

  // Warehouses data
  const warehouses = [
    { id: 'WH001', name: 'Sector55, New Delhi Warehouse-123D76', address: 'Sector 55, Gurugram, Haryana' },
    { id: 'WH002', name: 'Sector42, New Delhi Warehouse-456A89', address: 'Sector 42, Gurugram, Haryana' },
    { id: 'WH003', name: 'Sector28, New Delhi Warehouse-789C45', address: 'Sector 28, New Delhi' },
    { id: 'WH004', name: 'Sector12, New Delhi Warehouse-456B12', address: 'Sector 12, New Delhi' },
    { id: 'WH005', name: 'Sector45, New Delhi Warehouse-321G78', address: 'Sector 45, New Delhi' }
  ];

  // Delivery locations data
  const deliveryLocations = [
    { id: 'DL001', name: 'Connaught Place Hub', address: 'Connaught Place, New Delhi' },
    { id: 'DL002', name: 'Khan Market Area', address: 'Khan Market, New Delhi' },
    { id: 'DL003', name: 'Karol Bagh District', address: 'Karol Bagh, New Delhi' },
    { id: 'DL004', name: 'Nehru Place Complex', address: 'Nehru Place, New Delhi' },
    { id: 'DL005', name: 'Rajouri Garden Area', address: 'Rajouri Garden, New Delhi' },
    { id: 'DL006', name: 'Lajpat Nagar Market', address: 'Lajpat Nagar, New Delhi' }
  ];

  // Route optimization factors
  const routeFactors = {
    'Route A': {
      fuelConsumption: { value: '2.5 ltrs', status: 'more', color: 'bg-red-100 text-red-800' },
      trafficConditions: { value: 'Heavy', status: 'poor', color: 'bg-red-100 text-red-800' },
      vehicleCapacity: { value: 'Large Truck', status: 'good', color: 'bg-blue-100 text-blue-800' },
      weatherConditions: { value: 'Rainy', status: 'poor', color: 'bg-red-100 text-red-800' },
      depotLocation: { value: '2/5', status: 'poor', color: 'bg-red-100 text-red-800' },
      carbonScoring: { value: '2/5', status: 'poor', color: 'bg-red-100 text-red-800' },
      distance: '28.5 km',
      estimatedTime: '45 min',
      tollCosts: '$12.50',
      overallScore: 2.5
    },
    'Route B': {
      fuelConsumption: { value: '1.8 ltrs', status: 'better', color: 'bg-yellow-100 text-yellow-800' },
      trafficConditions: { value: 'Moderate', status: 'moderate', color: 'bg-yellow-100 text-yellow-800' },
      vehicleCapacity: { value: 'Medium Truck', status: 'good', color: 'bg-blue-100 text-blue-800' },
      weatherConditions: { value: 'Cloudy', status: 'moderate', color: 'bg-yellow-100 text-yellow-800' },
      depotLocation: { value: '3/5', status: 'moderate', color: 'bg-yellow-100 text-yellow-800' },
      carbonScoring: { value: '3/5', status: 'moderate', color: 'bg-yellow-100 text-yellow-800' },
      distance: '22.3 km',
      estimatedTime: '35 min',
      tollCosts: '$8.75',
      overallScore: 3.2
    },
    'Route C (Optimized)': {
      fuelConsumption: { value: '1.2 ltrs', status: 'best', color: 'bg-green-100 text-green-800' },
      trafficConditions: { value: 'Light', status: 'excellent', color: 'bg-green-100 text-green-800' },
      vehicleCapacity: { value: 'Mini Truck', status: 'perfect', color: 'bg-green-100 text-green-800' },
      weatherConditions: { value: 'Clear', status: 'excellent', color: 'bg-green-100 text-green-800' },
      depotLocation: { value: '5/5', status: 'excellent', color: 'bg-green-100 text-green-800' },
      carbonScoring: { value: '5/5', status: 'excellent', color: 'bg-green-100 text-green-800' },
      distance: '18.7 km',
      estimatedTime: '25 min',
      tollCosts: '$5.25',
      overallScore: 4.8
    },
    'Route D': {
      fuelConsumption: { value: '2.1 ltrs', status: 'more', color: 'bg-red-100 text-red-800' },
      trafficConditions: { value: 'Heavy', status: 'poor', color: 'bg-red-100 text-red-800' },
      vehicleCapacity: { value: 'Large Truck', status: 'good', color: 'bg-blue-100 text-blue-800' },
      weatherConditions: { value: 'Foggy', status: 'poor', color: 'bg-red-100 text-red-800' },
      depotLocation: { value: '2/5', status: 'poor', color: 'bg-red-100 text-red-800' },
      carbonScoring: { value: '2/5', status: 'poor', color: 'bg-red-100 text-red-800' },
      distance: '31.2 km',
      estimatedTime: '52 min',
      tollCosts: '$15.00',
      overallScore: 2.1
    },
    'Route E': {
      fuelConsumption: { value: '1.6 ltrs', status: 'better', color: 'bg-yellow-100 text-yellow-800' },
      trafficConditions: { value: 'Light', status: 'good', color: 'bg-green-100 text-green-800' },
      vehicleCapacity: { value: 'Medium Truck', status: 'good', color: 'bg-blue-100 text-blue-800' },
      weatherConditions: { value: 'Sunny', status: 'excellent', color: 'bg-green-100 text-green-800' },
      depotLocation: { value: '4/5', status: 'good', color: 'bg-green-100 text-green-800' },
      carbonScoring: { value: '4/5', status: 'good', color: 'bg-green-100 text-green-800' },
      distance: '20.8 km',
      estimatedTime: '30 min',
      tollCosts: '$7.50',
      overallScore: 3.8
    }
  };

  // Sample existing routes data
  const allRoutes = {
    active: [
      {
        id: 'route-1',
        name: 'Route 2',
        status: 'optimal',
        efficiency: '41% shorter',
        fuelSaved: '0.2L less fuel',
        trafficRating: '4.5/5',
        co2Reduced: '0.3 kg',
        totalValue: '$167.98',
        deliveryDate: 'Today, 2:30 PM',
        warehouseCode: 'Sector55, New Delhi Warehouse-123D76',
        progress: 35,
        driver: 'Rahul Sharma',
        vehicle: 'DL-01-AB-1234',
        orders: [
          {
            id: 1,
            customer: 'Mainstays by Becky G. & Alejandra',
            product: '8.5" Blue Stripe Ceramic Pitcher Vase',
            price: '$9.98',
            address: '123 MG Road, Sector 55, Gurugram',
            phone: '+91 9876543210',
            rating: 4.8,
            reviews: 1247,
            seller: 'Walmart',
            shipping: 'Free shipping',
            returns: 'Free 90-day returns',
            giftEligible: true,
            priority: 'standard',
            status: 'in-transit'
          },
          {
            id: 2,
            customer: 'Tech Solutions Inc.',
            product: 'Sceptre 43" Class 1080P FHD LED TV X435BV-F',
            price: '$158.00',
            address: '456 Cyber Hub, DLF Phase 2, Gurugram',
            phone: '+91 8765432109',
            rating: 4.6,
            reviews: 892,
            seller: 'Walmart',
            shipping: 'Free shipping',
            returns: 'Free 90-day returns',
            giftEligible: false,
            priority: 'express',
            status: 'pending'
          }
        ]
      }
    ],
    completed: [
      {
        id: 'route-comp-1',
        name: 'Route 1',
        status: 'completed',
        efficiency: '38% shorter',
        fuelSaved: '0.3L less fuel',
        trafficRating: '4.7/5',
        co2Reduced: '0.4 kg',
        totalValue: '$245.75',
        deliveryDate: 'Yesterday, 3:45 PM',
        warehouseCode: 'Sector12, New Delhi Warehouse-456B12',
        progress: 100,
        driver: 'Vikash Singh',
        vehicle: 'DL-03-EF-9012',
        completedAt: '2025-07-12 15:45:00',
        orders: [
          {
            id: 3,
            customer: 'Home Essentials Co.',
            product: 'Kitchen Appliance Set - 5 Piece',
            price: '$149.99',
            address: '321 Mall Road, Rajouri Garden, New Delhi',
            phone: '+91 6543210987',
            rating: 4.7,
            reviews: 634,
            seller: 'Walmart',
            shipping: 'Free shipping',
            returns: 'Free 90-day returns',
            giftEligible: true,
            priority: 'standard',
            status: 'delivered',
            deliveredAt: '2025-07-12 15:30:00'
          }
        ]
      }
    ],
    scheduled: [
      {
        id: 'route-sch-1',
        name: 'Route 7',
        status: 'scheduled',
        efficiency: '32% shorter',
        fuelSaved: '0.25L less fuel',
        trafficRating: '4.2/5',
        co2Reduced: '0.35 kg',
        totalValue: '$320.40',
        deliveryDate: 'Tomorrow, 10:00 AM',
        warehouseCode: 'Sector45, New Delhi Warehouse-321G78',
        progress: 0,
        driver: 'Priya Patel',
        vehicle: 'DL-04-GH-3456',
        scheduledTime: '2025-07-14 10:00:00',
        orders: [
          {
            id: 6,
            customer: 'Fashion Forward Ltd.',
            product: 'Designer Handbag Collection',
            price: '$180.25',
            address: '987 Fashion Street, Khan Market, New Delhi',
            phone: '+91 4321098765',
            rating: 4.9,
            reviews: 1123,
            seller: 'Walmart',
            shipping: 'Free shipping',
            returns: 'Free 120-day returns',
            giftEligible: true,
            priority: 'express',
            status: 'scheduled'
          }
        ]
      }
    ]
  };

  const notifications = [
    { id: 1, type: 'warning', message: 'Route 5 experiencing heavy traffic', time: '2 min ago' },
    { id: 2, type: 'success', message: 'Route 1 completed successfully', time: '1 hour ago' },
    { id: 3, type: 'info', message: 'New route optimization available', time: '2 hours ago' },
    { id: 4, type: 'warning', message: 'Vehicle DL-02-CD-5678 needs maintenance', time: '3 hours ago' }
  ];

  const getStatusColor = (status) => {
    switch(status) {
      case 'optimal': return 'bg-emerald-500';
      case 'good': return 'bg-blue-500';
      case 'warning': return 'bg-amber-500';
      case 'completed': return 'bg-green-500';
      case 'scheduled': return 'bg-purple-500';
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

  const getOrderStatusColor = (status) => {
    switch(status) {
      case 'delivered': return 'bg-green-100 text-green-800';
      case 'in-transit': return 'bg-blue-100 text-blue-800';
      case 'pending': return 'bg-yellow-100 text-yellow-800';
      case 'scheduled': return 'bg-purple-100 text-purple-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getRouteScoreColor = (score) => {
    if (score >= 4.5) return 'text-green-600';
    if (score >= 3.5) return 'text-yellow-600';
    return 'text-red-600';
  };

  const getFactorIcon = (factor) => {
    switch(factor) {
      case 'fuelConsumption': return <Fuel className="w-5 h-5" />;
      case 'trafficConditions': return <Users className="w-5 h-5" />;
      case 'vehicleCapacity': return <Truck className="w-5 h-5" />;
      case 'weatherConditions': return <Sun className="w-5 h-5" />;
      case 'depotLocation': return <Building className="w-5 h-5" />;
      case 'carbonScoring': return <BarChart3 className="w-5 h-5" />;
      default: return <Package className="w-5 h-5" />;
    }
  };

  const getFactorLabel = (factor) => {
    switch(factor) {
      case 'fuelConsumption': return 'Fuel Consumption';
      case 'trafficConditions': return 'Traffic Conditions';
      case 'vehicleCapacity': return 'Vehicle Capacity & Type';
      case 'weatherConditions': return 'Weather Conditions';
      case 'depotLocation': return 'Depot/Hub Location';
      case 'carbonScoring': return 'Carbon Scoring per Route';
      default: return factor;
    }
  };

  const optimizeRoutes = () => {
    if (!selectedWarehouse || !selectedDeliveryLocation) return;
    
    setIsOptimizing(true);
    
    // Simulate API call
    setTimeout(() => {
      setOptimizedRoutes(Object.keys(routeFactors));
      setIsOptimizing(false);
    }, 2000);
  };

  const filteredRoutes = allRoutes[selectedTab].filter(route => {
    const matchesSearch = route.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         route.driver.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         route.vehicle.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = selectedFilter === 'all' || route.status === selectedFilter;
    return matchesSearch && matchesFilter;
  });

  const getTabStats = () => {
    return {
      active: allRoutes.active.length,
      completed: allRoutes.completed.length,
      scheduled: allRoutes.scheduled.length
    };
  };

  const stats = getTabStats();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Header */}
      <div className="bg-white shadow-lg border-b border-slate-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center">
                  <Route className="w-5 h-5 text-white" />
                </div>
                <h1 className="text-xl font-bold text-gray-900">DeliveryPro</h1>
              </div>
              <div className="hidden md:flex items-center space-x-2 ml-8">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                  <input
                    type="text"
                    placeholder="Search routes, drivers, vehicles..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 w-64"
                  />
                </div>
                <button 
                  onClick={() => setShowFilters(!showFilters)}
                  className="p-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors relative"
                >
                  <Filter className="w-4 h-4 text-gray-600" />
                  {selectedFilter !== 'all' && (
                    <span className="absolute -top-1 -right-1 w-2 h-2 bg-blue-500 rounded-full"></span>
                  )}
                </button>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <button
                onClick={() => setShowRouteOptimizer(true)}
                className="px-4 py-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg hover:from-blue-700 hover:to-indigo-700 transition-all duration-200 text-sm font-medium flex items-center space-x-2"
              >
                <Target className="w-4 h-4" />
                <span>Route Optimizer</span>
              </button>
              <div className="relative">
                <button 
                  onClick={() => setShowNotifications(!showNotifications)}
                  className="p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors relative"
                >
                  <Bell className="w-5 h-5" />
                  <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-xs font-bold">{notifications.length}</span>
                  </span>
                </button>
                
                {/* Notifications Dropdown */}
                {showNotifications && (
                  <div className="absolute right-0 mt-2 w-80 bg-white rounded-lg shadow-lg border border-gray-200 z-50">
                    <div className="p-4 border-b border-gray-200">
                      <h3 className="font-semibold text-gray-900">Notifications</h3>
                    </div>
                    <div className="max-h-96 overflow-y-auto">
                      {notifications.map((notification) => (
                        <div key={notification.id} className="p-4 border-b border-gray-100 hover:bg-gray-50">
                          <div className="flex items-start space-x-3">
                            <div className={`w-2 h-2 rounded-full mt-2 ${
                              notification.type === 'warning' ? 'bg-amber-500' :
                              notification.type === 'success' ? 'bg-green-500' :
                              'bg-blue-500'
                            }`}></div>
                            <div className="flex-1">
                              <p className="text-sm text-gray-900">{notification.message}</p>
                              <p className="text-xs text-gray-500 mt-1">{notification.time}</p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
              
              <button 
                onClick={() => setShowSettings(!showSettings)}
                className="p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <Settings className="w-5 h-5" />
              </button>
              
              <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full flex items-center justify-center">
                <User className="w-4 h-4 text-white" />
              </div>
            </div>
          </div>
        </div>
        
        {/* Filter Drawer */}
        {showFilters && (
          <div className="border-t border-gray-200 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
              <div className="flex items-center space-x-4">
                <span className="text-sm font-medium text-gray-700">Filter by status:</span>
                <div className="flex space-x-2">
                  {['all', 'optimal', 'good', 'warning', 'completed', 'scheduled'].map((filter) => (
                    <button
                      key={filter}
                      onClick={() => setSelectedFilter(filter)}
                      className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${
                        selectedFilter === filter
                          ? 'bg-blue-600 text-white'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      {filter.charAt(0).toUpperCase() + filter.slice(1)}
                    </button>
                  ))}
                </div>
                <button
                  onClick={() => setShowFilters(false)}
                  className="ml-auto p-1 text-gray-500 hover:text-gray-700"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Route Optimizer Modal */}
      {showRouteOptimizer && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl shadow-2xl w-full max-w-6xl max-h-[90vh] overflow-y-auto">
            <div className="p-6 border-b border-gray-200">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center">
                    <Target className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900">Route Optimizer</h2>
                    <p className="text-gray-600">Find the best optimized route between two locations</p>
                  </div>
                </div>
                <button
                  onClick={() => setShowRouteOptimizer(false)}
                  className="p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            <div className="p-6">
              {/* Location Selection */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Select Warehouse
                  </label>
                  <select
                    value={selectedWarehouse}
                    onChange={(e) => setSelectedWarehouse(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  >
                    <option value="">Choose a warehouse...</option>
                    {warehouses.map((warehouse) => (
                      <option key={warehouse.id} value={warehouse.id}>
                        {warehouse.name}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Select Delivery Location
                  </label>
                  <select
                    value={selectedDeliveryLocation}
                    onChange={(e) => setSelectedDeliveryLocation(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  >
                    <option value="">Choose delivery location...</option>
                    {deliveryLocations.map((location) => (
                      <option key={location.id} value={location.id}>
                        {location.name}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Optimize Button */}
              <div className="text-center mb-8">
                <button
                  onClick={optimizeRoutes}
                  disabled={!selectedWarehouse || !selectedDeliveryLocation || isOptimizing}
                  className="px-8 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg hover:from-blue-700 hover:to-indigo-700 transition-all duration-200 font-medium disabled:opacity-50 disabled:cursor-not-allowed flex items-center space-x-2 mx-auto"
                >
                  {isOptimizing ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent"></div>
                      <span>Optimizing Routes...</span>
                    </>
                  ) : (
                    <>
                      <Compass className="w-4 h-4" />
                      <span>Find Optimized Routes</span>
                    </>
                  )}
                </button>
              </div>

              {/* Routes Results */}
              {optimizedRoutes.length > 0 && (
                <div className="space-y-6">
                  <div className="flex items-center space-x-2 mb-6">
                    <Map className="w-5 h-5 text-blue-600" />
                    <h3 className="text-lg font-semibold text-gray-900">
                      Available Routes from {warehouses.find(w => w.id === selectedWarehouse)?.name.split(',')[0]} to {deliveryLocations.find(l => l.id === selectedDeliveryLocation)?.name}
                    </h3>
                  </div>

                  {optimizedRoutes.map((routeName, index) => {
                    const route = routeFactors[routeName];
                    const isOptimized = routeName.includes('Optimized');
                    
                    return (
                      <div key={routeName} className={`border-2 rounded-xl p-6 ${
                        isOptimized 
                          ? 'border-green-500 bg-gradient-to-r from-green-50 to-emerald-50' 
                          : 'border-gray-200 bg-white'
                      }`}>
                        <div className="flex items-center justify-between mb-6">
                          <div className="flex items-center space-x-3">
                          // ...existing code...
                            <div className={`w-8 h-8 rounded-full flex items-center justify-center ${route.color}`}>
                              {isOptimized ? <CheckCircle className="w-5 h-5 text-green-600" /> : <Truck className="w-5 h-5 text-blue-600" />}
                            </div>
                            <span className="font-bold text-lg text-gray-900">{routeName}</span>
                            {isOptimized && (
                              <span className="ml-2 px-2 py-1 rounded-full bg-green-100 text-green-700 text-xs font-semibold">Optimized</span>
                            )}
                          </div>
                          <div className="flex items-center space-x-2">
                            <span className={`font-bold ${getRouteScoreColor(route.overallScore)} text-lg`}>
                              {route.overallScore}/5
                            </span>
                            <Star className={`w-5 h-5 ${getRouteScoreColor(route.overallScore)}`} />
                          </div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
                          <div>
                            <div className="flex items-center space-x-2 mb-2">
                              <Fuel className="w-5 h-5 text-gray-500" />
                              <span className="font-medium text-gray-700">Fuel Consumption:</span>
                              <span className={`px-2 py-1 rounded ${route.fuelConsumption.color} text-xs font-semibold`}>{route.fuelConsumption.value}</span>
                            </div>
                            <div className="flex items-center space-x-2 mb-2">
                              <Users className="w-5 h-5 text-gray-500" />
                              <span className="font-medium text-gray-700">Traffic:</span>
                              <span className={`px-2 py-1 rounded ${route.trafficConditions.color} text-xs font-semibold`}>{route.trafficConditions.value}</span>
                            </div>
                            <div className="flex items-center space-x-2 mb-2">
                              <Truck className="w-5 h-5 text-gray-500" />
                              <span className="font-medium text-gray-700">Vehicle:</span>
                              <span className={`px-2 py-1 rounded ${route.vehicleCapacity.color} text-xs font-semibold`}>{route.vehicleCapacity.value}</span>
                            </div>
                            <div className="flex items-center space-x-2 mb-2">
                              <Sun className="w-5 h-5 text-gray-500" />
                              <span className="font-medium text-gray-700">Weather:</span>
                              <span className={`px-2 py-1 rounded ${route.weatherConditions.color} text-xs font-semibold`}>{route.weatherConditions.value}</span>
                            </div>
                          </div>
                          <div>
                            <div className="flex items-center space-x-2 mb-2">
                              <Building className="w-5 h-5 text-gray-500" />
                              <span className="font-medium text-gray-700">Depot Location:</span>
                              <span className={`px-2 py-1 rounded ${route.depotLocation.color} text-xs font-semibold`}>{route.depotLocation.value}</span>
                            </div>
                            <div className="flex items-center space-x-2 mb-2">
                              <BarChart3 className="w-5 h-5 text-gray-500" />
                              <span className="font-medium text-gray-700">Carbon Score:</span>
                              <span className={`px-2 py-1 rounded ${route.carbonScoring.color} text-xs font-semibold`}>{route.carbonScoring.value}</span>
                            </div>
                            <div className="flex items-center space-x-2 mb-2">
                              <MapPin className="w-5 h-5 text-gray-500" />
                              <span className="font-medium text-gray-700">Distance:</span>
                              <span className="px-2 py-1 rounded bg-gray-100 text-gray-800 text-xs font-semibold">{route.distance}</span>
                            </div>
                            <div className="flex items-center space-x-2 mb-2">
                              <Clock className="w-5 h-5 text-gray-500" />
                              <span className="font-medium text-gray-700">Estimated Time:</span>
                              <span className="px-2 py-1 rounded bg-gray-100 text-gray-800 text-xs font-semibold">{route.estimatedTime}</span>
                            </div>
                            <div className="flex items-center space-x-2 mb-2">
                              <Award className="w-5 h-5 text-gray-500" />
                              <span className="font-medium text-gray-700">Toll Costs:</span>
                              <span className="px-2 py-1 rounded bg-gray-100 text-gray-800 text-xs font-semibold">{route.tollCosts}</span>
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center justify-end">
                          <button
                            className="px-4 py-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg hover:from-blue-700 hover:to-indigo-700 transition-all duration-200 text-sm font-medium flex items-center space-x-2"
                            onClick={() => setExpandedRoute(expandedRoute === routeName ? null : routeName)}
                          >
                            {expandedRoute === routeName ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                            <span>{expandedRoute === routeName ? 'Hide Details' : 'Show Details'}</span>
                          </button>
                        </div>
                        {expandedRoute === routeName && (
                          <div className="mt-6 bg-gray-50 rounded-lg p-4 border border-gray-200">
                            <h4 className="text-md font-semibold text-gray-900 mb-4">Route Factors Breakdown</h4>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                              {Object.keys(route).filter(key => typeof route[key] === 'object' && route[key].value).map((factor) => (
                                <div key={factor} className="flex items-center space-x-3 mb-2">
                                  {getFactorIcon(factor)}
                                  <span className="font-medium text-gray-700">{getFactorLabel(factor)}:</span>
                                  <span className={`px-2 py-1 rounded ${route[factor].color} text-xs font-semibold`}>{route[factor].value}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          </div>
        </div>
      )}
      {/* ...rest of your dashboard code... */}
    </div>
  );
};

export default DeliveryDashboard;
// ...existing code...