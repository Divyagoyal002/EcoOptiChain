import React, { useState, useEffect } from 'react';
import { 
  Leaf, 
  Recycle, 
  Battery, 
  Truck, 
  ShoppingCart, 
  Target, 
  TrendingUp, 
  Award,
  Zap,
  Droplets,
  Wind,
  TreePine,
  Package,
  Globe,
  BarChart3,
  PieChart as LucidePieChart,
  Activity,
  CheckCircle,
  AlertCircle,
  ArrowUp,
  ArrowDown,
  Calendar,
  Users,
  Factory,
  Lightbulb,
  Route
} from 'lucide-react';

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  AreaChart,
  Area,
  RadialBarChart,
  RadialBar
} from 'recharts';
import NavbarAdmin from './Navbaradmin';
import { useNavigate } from 'react-router-dom';

const Admin = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [timeRange, setTimeRange] = useState('30d');
  const [animationKey, setAnimationKey] = useState(0);
   const navigate = useNavigate(); 

  // Dummy data for various metrics
  const carbonFootprintData = [
    { month: 'Jan', emissions: 45.2, target: 50, reduction: 8.5 },
    { month: 'Feb', emissions: 42.8, target: 48, reduction: 12.3 },
    { month: 'Mar', emissions: 38.5, target: 46, reduction: 15.7 },
    { month: 'Apr', emissions: 35.9, target: 44, reduction: 18.2 },
    { month: 'May', emissions: 32.1, target: 42, reduction: 22.8 },
    { month: 'Jun', emissions: 28.7, target: 40, reduction: 28.3 },
  ];

  const wasteReductionData = [
    { category: 'Food Waste', current: 15.2, target: 12.0, reduction: 45.8 },
    { category: 'Packaging', current: 8.7, target: 6.5, reduction: 32.4 },
    { category: 'Electronics', current: 3.2, target: 2.1, reduction: 58.9 },
    { category: 'Textiles', current: 5.8, target: 4.2, reduction: 28.7 },
    { category: 'Plastic', current: 12.4, target: 8.9, reduction: 41.2 },
  ];

  const energyData = [
    { time: '00:00', solar: 0, wind: 15, grid: 85, total: 100 },
    { time: '06:00', solar: 25, wind: 20, grid: 55, total: 100 },
    { time: '12:00', solar: 45, wind: 15, grid: 40, total: 100 },
    { time: '18:00', solar: 20, wind: 25, grid: 55, total: 100 },
    { time: '24:00', solar: 0, wind: 30, grid: 70, total: 100 },
  ];

  const supplyChainData = [
    { region: 'North America', emissions: 25.4, efficiency: 87.2, sustainable: 72.8 },
    { region: 'Europe', emissions: 18.7, efficiency: 92.1, sustainable: 84.3 },
    { region: 'Asia Pacific', emissions: 32.1, efficiency: 78.9, sustainable: 65.4 },
    { region: 'Latin America', emissions: 21.8, efficiency: 82.6, sustainable: 69.7 },
  ];

  const storePerformanceData = [
    { name: 'Supercenter #1', score: 94, category: 'Excellent' },
    { name: 'Supercenter #2', score: 87, category: 'Good' },
    { name: 'Supercenter #3', score: 91, category: 'Excellent' },
    { name: 'Supercenter #4', score: 78, category: 'Fair' },
    { name: 'Supercenter #5', score: 96, category: 'Excellent' },
  ];

  const kpiData = [
    { 
      title: 'Carbon Footprint Reduction',
      value: '28.3%',
      change: '+5.2%',
      trend: 'up',
      icon: Wind,
      color: 'text-green-600',
      bgColor: 'bg-green-50',
      target: '30%',
      status: 'on-track'
    },
    { 
      title: 'Waste Diverted from Landfills',
      value: '87.4%',
      change: '+12.1%',
      trend: 'up',
      icon: Recycle,
      color: 'text-blue-600',
      bgColor: 'bg-blue-50',
      target: '90%',
      status: 'on-track'
    },
    { 
      title: 'Renewable Energy Usage',
      value: '64.2%',
      change: '+8.7%',
      trend: 'up',
      icon: Battery,
      color: 'text-yellow-600',
      bgColor: 'bg-yellow-50',
      target: '70%',
      status: 'on-track'
    },
    { 
      title: 'Sustainable Sourcing',
      value: '73.8%',
      change: '+15.3%',
      trend: 'up',
      icon: Leaf,
      color: 'text-emerald-600',
      bgColor: 'bg-emerald-50',
      target: '80%',
      status: 'on-track'
    },
  ];

  const pieChartData = [
    { name: 'Recycled', value: 45, color: '#10B981' },
    { name: 'Composted', value: 28, color: '#F59E0B' },
    { name: 'Reused', value: 15, color: '#3B82F6' },
    { name: 'Landfill', value: 12, color: '#EF4444' },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimationKey(prev => prev + 1);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const StatCard = ({ title, value, change, trend, icon: Icon, color, bgColor, target, status }) => (
    <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
      <div className="flex items-center justify-between mb-4">
        <div className={`p-3 rounded-xl ${bgColor}`}>
          <Icon className={`h-6 w-6 ${color}`} />
        </div>
        <div className="flex items-center space-x-1">
          {trend === 'up' ? (
            <ArrowUp className="h-4 w-4 text-green-500" />
          ) : (
            <ArrowDown className="h-4 w-4 text-red-500" />
          )}
          <span className={`text-sm font-medium ${trend === 'up' ? 'text-green-600' : 'text-red-600'}`}>
            {change}
          </span>
        </div>
      </div>
      <div className="space-y-2">
        <h3 className="text-gray-600 text-sm font-medium">{title}</h3>
        <div className="flex items-end justify-between">
          <span className="text-3xl font-bold text-gray-900">{value}</span>
          <span className="text-sm text-gray-500">Target: {target}</span>
        </div>
        <div className="flex items-center space-x-2">
          <CheckCircle className="h-4 w-4 text-green-500" />
          <span className="text-sm text-green-600 font-medium capitalize">{status.replace('-', ' ')}</span>
        </div>
      </div>
    </div>
  );

  const TabButton = ({ id, label, icon: Icon, active, onClick }) => (
    <button
      onClick={() => onClick(id)}
      className={`flex items-center space-x-2 px-6 py-3 rounded-xl font-medium transition-all duration-200 ${
        active
          ? 'bg-green-600 text-white shadow-lg'
          : 'bg-white text-gray-600 hover:bg-gray-50 hover:text-gray-900'
      }`}
    >
      <Icon className="h-5 w-5" />
      <span>{label}</span>
    </button>
  );

  const ProgressBar = ({ value, target, label, color = 'bg-green-500' }) => (
    <div className="space-y-2">
      <div className="flex justify-between text-sm">
        <span className="text-gray-600">{label}</span>
        <span className="font-medium">{value}% of {target}%</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2">
        <div
          className={`h-2 rounded-full ${color} transition-all duration-1000`}
          style={{ width: `${Math.min((value / target) * 100, 100)}%` }}
        />
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-blue-50 to-emerald-50">
      {/* Header */}
      <div>
        <NavbarAdmin/>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Navigation Tabs */}
        <div className="flex flex-wrap gap-2 mb-8">
        
          <TabButton
            id="supply"
            label="Supply Chain"
            icon={Truck}
            active={activeTab === 'supply'}
            onClick={setActiveTab}
          />
          <TabButton
            id="stores"
            label="Store Performance"
            icon={Factory}
            active={activeTab === 'stores'}
            onClick={setActiveTab}
          />

           <button
        onClick={() => navigate("/ai")}
        className={`flex items-center gap-2 px-4 py-2 rounded-lg shadow ${
          activeTab === "routes"
            ? "bg-green-600 text-white"
            : "bg-white text-gray-600 border"
        }`}
      >
        <Route className="w-4 h-4" />
        <span className="font-semibold">Routes</span>
      </button>
        </div>

        {/* KPI Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {kpiData.map((kpi, index) => (
            <StatCard key={index} {...kpi} />
          ))}
        </div>

        {/* Main Content */}
        {activeTab === 'overview' && (
          <div className="space-y-8">
            {/* Carbon Footprint Chart */}
            <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-semibold text-gray-900">Carbon Footprint Reduction Trend</h2>
                <div className="flex items-center space-x-2">
                  <Wind className="h-5 w-5 text-green-600" />
                  <span className="text-sm text-gray-500">CO2 Emissions (Tons)</span>
                </div>
              </div>
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={carbonFootprintData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                    <XAxis dataKey="month" stroke="#6b7280" />
                    <YAxis stroke="#6b7280" />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: 'white',
                        border: '1px solid #e5e7eb',
                        borderRadius: '8px',
                        boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
                      }}
                    />
                    <Area
                      type="monotone"
                      dataKey="emissions"
                      stroke="#10B981"
                      strokeWidth={3}
                      fill="url(#colorEmissions)"
                      name="Actual Emissions"
                    />
                    <Area
                      type="monotone"
                      dataKey="target"
                      stroke="#F59E0B"
                      strokeWidth={2}
                      strokeDasharray="5 5"
                      fill="transparent"
                      name="Target"
                    />
                    <defs>
                      <linearGradient id="colorEmissions" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#10B981" stopOpacity={0.3} />
                        <stop offset="95%" stopColor="#10B981" stopOpacity={0} />
                      </linearGradient>
                    </defs>
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* Waste Management Overview */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
                <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center space-x-2">
                  <Recycle className="h-5 w-5 text-blue-600" />
                  <span>Waste Distribution</span>
                </h3>
                <div className="h-64">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart width={400} height={400}>
  <Tooltip
    contentStyle={{
      backgroundColor: 'white',
      border: '1px solid #e5e7eb',
      borderRadius: '8px',
      boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
    }}
  />
  <Pie
    data={pieChartData}
    cx="50%"
    cy="50%"
    innerRadius={60}
    outerRadius={100}
    paddingAngle={5}
    dataKey="value"
  >
    {pieChartData.map((entry, index) => (
      <Cell key={`cell-${index}`} fill={entry.color} />
    ))}
  </Pie>
</PieChart>
                  </ResponsiveContainer>
                </div>
                <div className="grid grid-cols-2 gap-4 mt-4">
                  {pieChartData.map((item, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }} />
                      <span className="text-sm text-gray-600">{item.name}: {item.value}%</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
                <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center space-x-2">
                  <Target className="h-5 w-5 text-green-600" />
                  <span>Sustainability Goals Progress</span>
                </h3>
                <div className="space-y-6">
                  <ProgressBar value={73.8} target={80} label="Sustainable Sourcing" color="bg-green-500" />
                  <ProgressBar value={64.2} target={70} label="Renewable Energy" color="bg-yellow-500" />
                  <ProgressBar value={87.4} target={90} label="Waste Diversion" color="bg-blue-500" />
                  <ProgressBar value={28.3} target={30} label="Carbon Reduction" color="bg-purple-500" />
                </div>
              </div>
            </div>

            {/* Real-time Insights */}
            <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
              <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center space-x-2">
                <Activity className="h-5 w-5 text-indigo-600" />
                <span>Real-time Sustainability Insights</span>
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <div className="bg-gradient-to-r from-green-500 to-emerald-600 rounded-xl p-4 text-white">
                  <div className="flex items-center space-x-2 mb-2">
                    <TreePine className="h-5 w-5" />
                    <span className="text-sm font-medium">Today's Carbon Offset</span>
                  </div>
                  <div className="text-2xl font-bold">127.4 tons</div>
                  <div className="text-sm opacity-80">Equivalent to 2,840 trees planted</div>
                </div>
                <div className="bg-gradient-to-r from-blue-500 to-cyan-600 rounded-xl p-4 text-white">
                  <div className="flex items-center space-x-2 mb-2">
                    <Droplets className="h-5 w-5" />
                    <span className="text-sm font-medium">Water Saved</span>
                  </div>
                  <div className="text-2xl font-bold">89,432 L</div>
                  <div className="text-sm opacity-80">From efficient operations</div>
                </div>
                <div className="bg-gradient-to-r from-purple-500 to-pink-600 rounded-xl p-4 text-white">
                  <div className="flex items-center space-x-2 mb-2">
                    <Zap className="h-5 w-5" />
                    <span className="text-sm font-medium">Energy Efficiency</span>
                  </div>
                  <div className="text-2xl font-bold">94.7%</div>
                  <div className="text-sm opacity-80">Above industry average</div>
                </div>
              </div>
            </div>
          </div>
        )}

       
                  

        {activeTab === 'supply' && (
          <div className="space-y-8">
            <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
              <h2 className="text-xl font-semibold text-gray-900 mb-6">Supply Chain Sustainability</h2>
              <div className="overflow-x-auto">
                <table className="w-full text-left text-sm">
                  <thead>
                    <tr className="text-gray-700 border-b">
                      <th className="py-2">Region</th>
                      <th className="py-2">Emissions (Tons)</th>
                      <th className="py-2">Efficiency (%)</th>
                      <th className="py-2">Sustainable (%)</th>
                    </tr>
                  </thead>
                  <tbody>
                    {supplyChainData.map((item, index) => (
                      <tr key={index} className="border-b hover:bg-gray-50">
                        <td className="py-2">{item.region}</td>
                        <td className="py-2 text-red-600">{item.emissions}</td>
                        <td className="py-2 text-green-600">{item.efficiency}</td>
                        <td className="py-2 text-blue-600">{item.sustainable}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'stores' && (
          <div className="space-y-8">
            <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
              <h2 className="text-xl font-semibold text-gray-900 mb-6">Store Performance</h2>
              <div className="overflow-x-auto">
                <table className="w-full text-left text-sm">
                  <thead>
                    <tr className="text-gray-700 border-b">
                      <th className="py-2">Store Name</th>
                      <th className="py-2">Score</th>
                      <th className="py-2">Category</th>
                    </tr>
                  </thead>
                  <tbody>
                    {storePerformanceData.map((store, index) => (
                      <tr key={index} className="border-b hover:bg-gray-50">
                        <td className="py-2">{store.name}</td>
                        <td className="py-2 text-green-600 font-medium">{store.score}</td>
                        <td className="py-2">{store.category}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Admin;
