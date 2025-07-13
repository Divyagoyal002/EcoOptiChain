import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import ProductPage from "./pages/ProductPage";
import EcoProfile from "./pages/EcoProfile";
import CartPage from "./pages/CartPage";
import Greendashbaord from "./pages/Greendashbaord";
import "leaflet/dist/leaflet.css";
import DeliveryDashboard from "./components/AI route Optimizer/DeliveryDashboard";
import AIROUTE2 from "./pages/AIROUTE2";
import AIROUTE from "./pages/AIROUTE";
import SustainableProductMonitor from "./components/Monitoring/SustainableProductMonitor";
import Monitor from "./pages/Monitor";
import Admin from "./components/Admin/Admin";
import Navbaradmin from "./components/Admin/Navbaradmin";

// ScrollToTop component that automatically scrolls to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const App = () => {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/products" element={<ProductPage />} />
        <Route path="/badges" element={<EcoProfile />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/green" element={<Greendashbaord />} />
        <Route path="/ai" element={<AIROUTE />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </Router>
  );
};

export default App;
