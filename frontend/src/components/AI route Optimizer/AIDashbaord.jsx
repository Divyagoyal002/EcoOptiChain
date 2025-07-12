import React, { useState, useEffect, useRef } from 'react';
import { 
  MapPin, 
  Navigation, 
  Truck, 
  Clock, 
  Fuel, 
  Route, 
  Settings, 
  Play, 
  Pause, 
  RotateCcw,
  Zap,
  BarChart3,
  CheckCircle,
  AlertCircle,
  Star,
  Filter,
  Eye,
  EyeOff,
  MapIcon,
  Layers,
  Target,
  TrendingUp,
  Save,
  Download,
  Menu,
  X,
  Activity,
  Users,
  Package,
  TrendingDown,
  Calendar,
  Bell,
  Search,
  ChevronRight,
  ChevronLeft
} from 'lucide-react';

const AIDashbaord = () => {
  const [selectedRoute, setSelectedRoute] = useState(null);
  const [isOptimizing, setIsOptimizing] = useState(false);
  const [showTraffic, setShowTraffic] = useState(true);
  const [showDeliveryPoints, setShowDeliveryPoints] = useState(true);
  const [optimizationMode, setOptimizationMode] = useState('time');
  const [currentTime, setCurrentTime] = useState(new Date());
  const [leftPanelOpen, setLeftPanelOpen] = useState(true);
  const [rightPanelOpen, setRightPanelOpen] = useState(true);
  const mapRef = useRef(null);
  const leafletMapRef = useRef(null);

  // Route data with Paris coordinates
  const routes = [
    {
      id: 'route-1',
      name: 'Downtown Express',
      color: '#EF4444',
      strokeWidth: 4,
      path: [
        { lat: 48.8566, lng: 2.3522, type: 'depot', name: 'Main Depot' },
        { lat: 48.8606, lng: 2.3376, type: 'delivery', name: 'Louvre Area' },
        { lat: 48.8529, lng: 2.3500, type: 'delivery', name: 'Notre Dame' },
        { lat: 48.8584, lng: 2.2945, type: 'delivery', name: 'Eiffel Tower' },
        { lat: 48.8656, lng: 2.3212, type: 'delivery', name: 'Arc de Triomphe' },
        { lat: 48.8738, lng: 2.2950, type: 'delivery', name: 'Champs Élysées' },
        { lat: 48.8566, lng: 2.3522, type: 'depot', name: 'Main Depot' }
      ],
      distance: '45.2 km',
      duration: '2h 15m',
      deliveries: 12,
      fuelEfficiency: '89%',
      trafficScore: 'Medium',
      optimizationScore: 85,
      status: 'active',
      driver: 'Jean Dupont',
      vehicle: 'VAN-001',
      estimatedCost: '€125.50'
    },
    {
      id: 'route-2',
      name: 'Northern Circuit',
      color: '#F59E0B',
      strokeWidth: 3,
      path: [
        { lat: 48.8566, lng: 2.3522, type: 'depot', name: 'Main Depot' },
        { lat: 48.8838, lng: 2.3469, type: 'delivery', name: 'Montmartre' },
        { lat: 48.8796, lng: 2.3408, type: 'delivery', name: 'Pigalle' },
        { lat: 48.8742, lng: 2.3470, type: 'delivery', name: 'Opéra' },
        { lat: 48.8698, lng: 2.3412, type: 'delivery', name: 'Grands Boulevards' },
        { lat: 48.8566, lng: 2.3522, type: 'depot', name: 'Main Depot' }
      ],
      distance: '32.8 km',
      duration: '1h 45m',
      deliveries: 8,
      fuelEfficiency: '92%',
      trafficScore: 'Low',
      optimizationScore: 92,
      status: 'completed',
      driver: 'Marie Laurent',
      vehicle: 'VAN-002',
      estimatedCost: '€89.30'
    },
    {
      id: 'route-3',
      name: 'Eastern Loop',
      color: '#10B981',
      strokeWidth: 3,
      path: [
        { lat: 48.8566, lng: 2.3522, type: 'depot', name: 'Main Depot' },
        { lat: 48.8633, lng: 2.3782, type: 'delivery', name: 'Bastille' },
        { lat: 48.8499, lng: 2.3896, type: 'delivery', name: 'Nation' },
        { lat: 48.8421, lng: 2.3707, type: 'delivery', name: 'Bercy' },
        { lat: 48.8566, lng: 2.3522, type: 'depot', name: 'Main Depot' }
      ],
      distance: '28.4 km',
      duration: '1h 30m',
      deliveries: 6,
      fuelEfficiency: '94%',
      trafficScore: 'Low',
      optimizationScore: 96,
      status: 'optimized',
      driver: 'Pierre Martin',
      vehicle: 'VAN-003',
      estimatedCost: '€67.80'
    },
    {
      id: 'route-4',
      name: 'Southern Express',
      color: '#3B82F6',
      strokeWidth: 3,
      path: [
        { lat: 48.8566, lng: 2.3522, type: 'depot', name: 'Main Depot' },
        { lat: 48.8468, lng: 2.3444, type: 'delivery', name: 'Latin Quarter' },
        { lat: 48.8417, lng: 2.3231, type: 'delivery', name: 'Montparnasse' },
        { lat: 48.8338, lng: 2.3200, type: 'delivery', name: 'Porte de Versailles' },
        { lat: 48.8566, lng: 2.3522, type: 'depot', name: 'Main Depot' }
      ],
      distance: '38.7 km',
      duration: '2h 05m',
      deliveries: 10,
      fuelEfficiency: '87%',
      trafficScore: 'High',
      optimizationScore: 78,
      status: 'pending',
      driver: 'Sophie Bernard',
      vehicle: 'VAN-004',
      estimatedCost: '€102.40'
    }
  ];

  // Initialize Leaflet map
  useEffect(() => {
    if (!mapRef.current || leafletMapRef.current) return;

    // Create map container div
    const mapContainer = document.createElement('div');
    mapContainer.style.width = '100%';
    mapContainer.style.height = '100%';
    mapContainer.style.borderRadius = '16px';
    mapRef.current.appendChild(mapContainer);

    // Simulate Leaflet map with enhanced styling
    const mapStyle = {
      width: '100%',
      height: '100%',
      background: 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)',
      position: 'relative',
      borderRadius: '16px',
      overflow: 'hidden',
      border: '1px solid #e2e8f0'
    };

    Object.assign(mapContainer.style, mapStyle);

    // Add map tiles simulation
    const tilesDiv = document.createElement('div');
    tilesDiv.style.cssText = `
      position: absolute;
      inset: 0;
      background-image: 
        linear-gradient(90deg, rgba(0,0,0,0.1) 1px, transparent 1px),
        linear-gradient(rgba(0,0,0,0.1) 1px, transparent 1px);
      background-size: 50px 50px;
      opacity: 0.1;
    `;
    mapContainer.appendChild(tilesDiv);

    // Add landmarks
    const landmarks = [
      { name: 'Seine River', style: 'top: 45%; left: 20%; width: 60%; height: 8px; background: #3B82F6; border-radius: 4px; opacity: 0.3;' },
      { name: 'Trocadéro', style: 'top: 35%; left: 15%; width: 80px; height: 40px; background: #10B981; border-radius: 8px; opacity: 0.2;' },
      { name: 'Champ de Mars', style: 'top: 55%; left: 25%; width: 60px; height: 100px; background: #F59E0B; border-radius: 8px; opacity: 0.2;' },
      { name: 'Jardin du Luxembourg', style: 'bottom: 25%; right: 30%; width: 80px; height: 80px; background: #10B981; border-radius: 50%; opacity: 0.2;' }
    ];

    landmarks.forEach(landmark => {
      const div = document.createElement('div');
      div.style.cssText = `position: absolute; ${landmark.style}`;
      div.title = landmark.name;
      mapContainer.appendChild(div);
    });

    leafletMapRef.current = mapContainer;

    return () => {
      if (mapRef.current && leafletMapRef.current) {
        mapRef.current.removeChild(leafletMapRef.current);
        leafletMapRef.current = null;
      }
    };
  }, []);

  // Add route paths and markers to the map
  useEffect(() => {
    if (!leafletMapRef.current) return;

    // Clear existing overlays
    const existingOverlays = leafletMapRef.current.querySelectorAll('.route-overlay');
    existingOverlays.forEach(overlay => overlay.remove());

    // Add route paths
    routes.forEach(route => {
      const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
      svg.classList.add('route-overlay');
      svg.style.cssText = `
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        pointer-events: none;
        z-index: 10;
      `;

      const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
      const pathData = route.path.map((point, index) => {
        const x = ((point.lng - 2.2) / 0.4) * 100;
        const y = ((48.9 - point.lat) / 0.15) * 100;
        return `${index === 0 ? 'M' : 'L'} ${x}% ${y}%`;
      }).join(' ');

      path.setAttribute('d', pathData);
      path.setAttribute('stroke', route.color);
      path.setAttribute('stroke-width', route.strokeWidth);
      path.setAttribute('fill', 'none');
      path.setAttribute('stroke-opacity', selectedRoute && selectedRoute !== route.id ? '0.3' : '0.8');
      path.setAttribute('stroke-dasharray', route.status === 'pending' ? '10,5' : 'none');
      
      if (route.status === 'optimized') {
        path.style.filter = 'drop-shadow(0 0 8px rgba(16, 185, 129, 0.4))';
      }

      svg.appendChild(path);
      leafletMapRef.current.appendChild(svg);
    });

    // Add markers
    routes.forEach(route => {
      if (!showDeliveryPoints) return;
      
      route.path.forEach((point, index) => {
        const marker = document.createElement('div');
        marker.classList.add('route-overlay');
        const x = ((point.lng - 2.2) / 0.4) * 100;
        const y = ((48.9 - point.lat) / 0.15) * 100;
        
        marker.style.cssText = `
          position: absolute;
          left: ${x}%;
          top: ${y}%;
          transform: translate(-50%, -50%);
          z-index: ${point.type === 'depot' ? 1000 : 500};
          cursor: pointer;
        `;

        if (point.type === 'depot') {
          marker.innerHTML = `
            <div class="relative group">
              <div class="w-10 h-10 bg-gradient-to-br from-gray-800 to-gray-600 rounded-full flex items-center justify-center shadow-lg border-3 border-white hover:scale-110 transition-transform">
                <svg class="h-5 w-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7l4-4m0 0l4 4m-4-4v18"/>
                </svg>
              </div>
              <div class="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white px-3 py-1 rounded-lg text-sm font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
                ${point.name}
              </div>
            </div>
          `;
        } else {
          marker.innerHTML = `
            <div class="relative group">
              <div class="w-6 h-6 rounded-full flex items-center justify-center shadow-lg border-2 border-white hover:scale-110 transition-transform" style="background-color: ${route.color}">
                <div class="w-2 h-2 bg-white rounded-full"></div>
              </div>
              <div class="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white px-2 py-1 rounded text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                ${point.name}
              </div>
            </div>
          `;
        }

        leafletMapRef.current.appendChild(marker);
      });
    });

    // Add traffic indicators
    if (showTraffic) {
      const trafficIndicators = [
        { style: 'top: 25%; left: 40%; width: 60px; height: 4px; background: #EF4444;' },
        { style: 'top: 65%; right: 35%; width: 80px; height: 4px; background: #F59E0B;' },
        { style: 'bottom: 35%; left: 45%; width: 50px; height: 4px; background: #10B981;' }
      ];

      trafficIndicators.forEach(indicator => {
        const div = document.createElement('div');
        div.classList.add('route-overlay');
        div.style.cssText = `position: absolute; ${indicator.style} border-radius: 2px; opacity: 0.7; z-index: 5;`;
        leafletMapRef.current.appendChild(div);
      });
    }

  }, [routes, selectedRoute, showDeliveryPoints, showTraffic]);

  const handleOptimizeRoutes = () => {
    setIsOptimizing(true);
    setTimeout(() => {
      setIsOptimizing(false);
    }, 3000);
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'active': return 'text-blue-600 bg-blue-50 border-blue-200';
      case 'completed': return 'text-green-600 bg-green-50 border-green-200';
      case 'optimized': return 'text-emerald-600 bg-emerald-50 border-emerald-200';
      case 'pending': return 'text-orange-600 bg-orange-50 border-orange-200';
      default: return 'text-gray-600 bg-gray-50 border-gray-200';
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case 'active': return <Activity className="h-3 w-3" />;
      case 'completed': return <CheckCircle className="h-3 w-3" />;
      case 'optimized': return <Star className="h-3 w-3" />;
      case 'pending': return <Clock className="h-3 w-3" />;
      default: return <AlertCircle className="h-3 w-3" />;
    }
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const totalDeliveries = routes.reduce((sum, route) => sum + route.deliveries, 0);
  const averageEfficiency = Math.round(routes.reduce((sum, route) => sum + parseFloat(route.fuelEfficiency), 0) / routes.length);
  const completedRoutes = routes.filter(route => route.status === 'completed').length;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 flex">
      {/* Left Panel */}
      <div className={`${leftPanelOpen ? 'w-80' : 'w-16'} transition-all duration-300 bg-white shadow-xl border-r border-gray-200 flex flex-col`}>
        {/* Header */}
        <div className="p-4 border-b border-gray-200">
          <div className="flex items-center justify-between">
            <div className={`flex items-center space-x-3 ${leftPanelOpen ? '' : 'justify-center'}`}>
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
                <Route className="h-5 w-5 text-white" />
              </div>
              {leftPanelOpen && (
                <div>
                  <h1 className="text-lg font-bold text-gray-900">RouteAI</h1>
                  <p className="text-xs text-gray-600">Smart Logistics</p>
                </div>
              )}
            </div>
            <button
              onClick={() => setLeftPanelOpen(!leftPanelOpen)}
              className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
            >
              {leftPanelOpen ? <ChevronLeft className="h-4 w-4" /> : <ChevronRight className="h-4 w-4" />}
            </button>
          </div>
        </div>

        {/* Stats Cards */}
        {leftPanelOpen && (
          <div className="p-4 space-y-3">
            <div className="grid grid-cols-2 gap-3">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-3 rounded-xl border border-blue-200">
                <div className="flex items-center space-x-2">
                  <Package className="h-4 w-4 text-blue-600" />
                  <span className="text-xs text-blue-600 font-medium">Deliveries</span>
                </div>
                <div className="text-xl font-bold text-blue-700 mt-1">{totalDeliveries}</div>
              </div>
              <div className="bg-gradient-to-br from-green-50 to-green-100 p-3 rounded-xl border border-green-200">
                <div className="flex items-center space-x-2">
                  <TrendingUp className="h-4 w-4 text-green-600" />
                  <span className="text-xs text-green-600 font-medium">Efficiency</span>
                </div>
                <div className="text-xl font-bold text-green-700 mt-1">{averageEfficiency}%</div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-3 rounded-xl border border-purple-200">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-purple-600" />
                  <span className="text-xs text-purple-600 font-medium">Completed</span>
                </div>
                <div className="text-lg font-bold text-purple-700">{completedRoutes}/{routes.length}</div>
              </div>
            </div>
          </div>
        )}

        {/* Routes List */}
        <div className="flex-1 overflow-y-auto p-4">
          {leftPanelOpen && (
            <div className="space-y-4">
              <div className="flex items-center space-x-2 mb-4">
                <Layers className="h-5 w-5 text-gray-600" />
                <h3 className="text-lg font-semibold text-gray-900">Active Routes</h3>
              </div>
              <div className="space-y-3">
                {routes.map((route) => (
                  <div
                    key={route.id}
                    className={`p-4 rounded-xl border-2 cursor-pointer transition-all duration-200 ${
                      selectedRoute === route.id
                        ? 'border-blue-500 bg-blue-50 shadow-lg scale-105'
                        : 'border-gray-200 bg-white hover:border-gray-300 hover:shadow-md'
                    }`}
                    onClick={() => setSelectedRoute(selectedRoute === route.id ? null : route.id)}
                  >
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center space-x-2">
                        <div
                          className="w-4 h-4 rounded-full shadow-sm"
                          style={{ backgroundColor: route.color }}
                        />
                        <span className="font-semibold text-gray-900 text-sm">{route.name}</span>
                      </div>
                      <div className={`flex items-center space-x-1 px-2 py-1 rounded-full text-xs font-medium border ${getStatusColor(route.status)}`}>
                        {getStatusIcon(route.status)}
                        <span className="capitalize">{route.status}</span>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-2 text-xs text-gray-600 mb-3">
                      <div className="flex items-center justify-between">
                        <span>Distance:</span>
                        <span className="font-medium text-gray-900">{route.distance}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span>Time:</span>
                        <span className="font-medium text-gray-900">{route.duration}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span>Stops:</span>
                        <span className="font-medium text-gray-900">{route.deliveries}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span>Efficiency:</span>
                        <span className="font-medium text-green-600">{route.fuelEfficiency}</span>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-1">
                        <Star className="h-3 w-3 text-yellow-500 fill-current" />
                        <span className="text-xs font-medium text-gray-700">{route.optimizationScore}/100</span>
                      </div>
                      <span className={`text-xs px-2 py-1 rounded-full font-medium ${
                        route.trafficScore === 'Low' ? 'bg-green-100 text-green-700' :
                        route.trafficScore === 'Medium' ? 'bg-yellow-100 text-yellow-700' :
                        'bg-red-100 text-red-700'
                      }`}>
                        {route.trafficScore}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Top Bar */}
        <div className="bg-white shadow-sm border-b border-gray-200 p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <h2 className="text-xl font-bold text-gray-900">Route Optimization Dashboard</h2>
                <div className="flex items-center space-x-1">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                  <span className="text-sm text-green-600 font-medium">Live</span>
                </div>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="text-sm text-gray-600 font-mono">
                {currentTime.toLocaleTimeString()}
              </div>
              <div className="flex items-center space-x-2">
                <Bell className="h-5 w-5 text-gray-400" />
                <Settings className="h-5 w-5 text-gray-400 cursor-pointer hover:text-gray-600" />
              </div>
            </div>
          </div>
        </div>

        {/* Controls */}
        <div className="bg-white p-4 border-b border-gray-200">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center space-x-4">
              <select
                value={optimizationMode}
                onChange={(e) => setOptimizationMode(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white shadow-sm"
              >
                <option value="time">⏱️ Optimize for Time</option>
                <option value="distance">📏 Optimize for Distance</option>
                <option value="fuel">⛽ Optimize for Fuel</option>
                <option value="traffic">🚦 Avoid Traffic</option>
              </select>
              <button
                onClick={handleOptimizeRoutes}
                disabled={isOptimizing}
                className={`flex items-center space-x-2 px-6 py-2 rounded-lg font-medium transition-all ${
                  isOptimizing
                    ? 'bg-gray-400 cursor-not-allowed text-white'
                    : 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg hover:shadow-xl'
                }`}
              >
                {isOptimizing ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    <span>Optimizing...</span>
                  </>
                ) : (
                  <>
                    <Zap className="h-4 w-4" />
                    <span>Optimize All Routes</span>
                  </>
                )}
              </button>
            </div>
            <div className="flex items-center space-x-2">
              <button
                onClick={() => setShowTraffic(!showTraffic)}
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                  showTraffic ? 'bg-red-100 text-red-700 border border-red-200' : 'bg-gray-100 text-gray-700 border border-gray-200'
                }`}
              >
                {showTraffic ? <Eye className="h-4 w-4" /> : <EyeOff className="h-4 w-4" />}
                <span>Traffic</span>
              </button>
              <button
                onClick={() => setShowDeliveryPoints(!showDeliveryPoints)}
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                  showDeliveryPoints ? 'bg-blue-100 text-blue-700 border border-blue-200' : 'bg-gray-100 text-gray-700 border border-gray-200'
                }`}
              >
                {showDeliveryPoints ? <MapPin className="h-4 w-4" /> : <MapIcon className="h-4 w-4" />}
                <span>Delivery Points</span>
              </button>
              <button
                onClick={() => setRightPanelOpen(!rightPanelOpen)}
                className="p-2 rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors"
              >
                {rightPanelOpen ? <ChevronRight className="h-4 w-4" /> : <ChevronLeft className="h-4 w-4" />}
              </button>
            </div>
          </div>
        </div>

        {/* Map Container */}
        <div className="flex-1 bg-gray-50 relative">
          <div className="absolute inset-4">
            <div className="w-full h-full relative">
              <div ref={mapRef} className="w-full h-full" />
              
              {/* Map Legend */}
              <div className="absolute bottom-4 left-4 bg-white rounded-lg p-4 shadow-lg border border-gray-200">
                <h4 className="text-sm font-semibold text-gray-900 mb-3">Legend</h4>
              <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <div className="w-4 h-4 rounded-full bg-gray-800" />
                    <span className="text-xs text-gray-700">Depot</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-4 h-4 rounded-full bg-blue-600" />
                    <span className="text-xs text-gray-700">Active Route</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-4 h-4 rounded-full bg-green-600" />
                    <span className="text-xs text-gray-700">Optimized Route</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-4 h-4 rounded-full bg-yellow-500" />
                    <span className="text-xs text-gray-700">Completed Route</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-4 h-4 rounded-full bg-red-500" />
                    <span className="text-xs text-gray-700">Pending Route</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-4 h-4 rounded-full border border-gray-400 bg-white" />
                    <span className="text-xs text-gray-700">Delivery Point</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-8 h-2 rounded bg-red-400" />
                    <span className="text-xs text-gray-700">Traffic Indicator</span>
                  </div>
                </div>
              </div>
              {/* Right Panel */}
              {rightPanelOpen && (
                <div className="absolute top-0 right-0 h-full w-80 bg-white shadow-xl border-l border-gray-200 flex flex-col">
                  <div className="p-4 border-b border-gray-200 flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Truck className="h-5 w-5 text-blue-600" />
                      <h3 className="text-lg font-semibold text-gray-900">Route Details</h3>
                    </div>
                    <button
                      onClick={() => setRightPanelOpen(false)}
                      className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
                    >
                      <X className="h-4 w-4" />
                    </button>
                  </div>
                  <div className="flex-1 overflow-y-auto p-4">
                    {selectedRoute ? (
                      (() => {
                        const route = routes.find(r => r.id === selectedRoute);
                        if (!route) return null;
                        return (
                          <div className="space-y-4">
                            <div className="flex items-center space-x-2">
                              <span className="font-bold text-xl text-gray-900">{route.name}</span>
                              <span className={`px-2 py-1 rounded-full text-xs font-medium border ${getStatusColor(route.status)}`}>
                                {getStatusIcon(route.status)}
                                <span className="capitalize ml-1">{route.status}</span>
                              </span>
                            </div>
                            <div className="grid grid-cols-2 gap-2 text-sm">
                              <div>Distance: <span className="font-medium">{route.distance}</span></div>
                              <div>Duration: <span className="font-medium">{route.duration}</span></div>
                              <div>Deliveries: <span className="font-medium">{route.deliveries}</span></div>
                              <div>Efficiency: <span className="font-medium text-green-600">{route.fuelEfficiency}</span></div>
                              <div>Driver: <span className="font-medium">{route.driver}</span></div>
                              <div>Vehicle: <span className="font-medium">{route.vehicle}</span></div>
                              <div>Cost: <span className="font-medium">{route.estimatedCost}</span></div>
                            </div>
                            <div className="mt-2">
                              <h4 className="text-sm font-semibold text-gray-700 mb-2">Stops</h4>
                              <ul className="space-y-1">
                                {route.path.map((point, idx) => (
                                  <li key={idx} className="flex items-center space-x-2">
                                    {point.type === 'depot' ? (
                                      <MapPin className="h-4 w-4 text-gray-800" />
                                    ) : (
                                      <MapPin className="h-4 w-4" style={{ color: route.color }} />
                                    )}
                                    <span className="text-xs text-gray-700">{point.name}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        );
                      })()
                    ) : (
                      <div className="text-gray-500 text-sm flex items-center justify-center h-full">
                        <span>Select a route to view details.</span>
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIDashbaord;