import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import ProductPage from "./pages/ProductPage";
import EcoProfile from "./pages/EcoProfile";
import CartPage from "./pages/CartPage";
import Greendashbaord from "./pages/Greendashbaord";
import 'leaflet/dist/leaflet.css';
import DeliveryDashboard from "./components/AI route Optimizer/DeliveryDashboard";
import AIROUTE2 from "./pages/AIROUTE2";
import AIROUTE from "./pages/AIROUTE";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/products" element={<ProductPage />} />
        <Route path="/badges" element={<EcoProfile />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/green" element={<Greendashbaord />} />
        <Route path="/ai" element={<AIROUTE />} />
      </Routes>
    </Router>
  );
};

export default App;