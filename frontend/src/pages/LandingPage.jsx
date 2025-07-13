import React from "react";
import Navbar from "../components/LandingPage/Navbar/Navbar";
import SubNavbar from "../components/LandingPage/Navbar/SubNavbar";
import PromoImageContainer from "../components/LandingPage/PromoImageContainer";
import DealsBanner from "../components/LandingPage/Deals/DealsBanner";
import DealsMenu from "../components/LandingPage/Deals/DealsMenu";
import DealsSection from "../components/LandingPage/Deals/DealsSection";
import ProductRow from "../components/LandingPage/Product/ProductRow";
import Footer from "../components/LandingPage/Footer";
import EcoProductRow from "../components/LandingPage/Product/EcoProductRow";

const LandingPage = () => (
  <>
    <Navbar />
    <SubNavbar />
    <PromoImageContainer />
    {/* <DealsBanner />
    <DealsMenu /> */}
    {/* If you want to keep DealsSection, you can use it instead of DealsBanner+DealsMenu */}
    <DealsSection />
    <ProductRow />
    
    {/* Horizontal spacing between product sections */}
    <div className="py-16"></div>
    
    <EcoProductRow />
    <Footer />
  </>
);

export default LandingPage;
