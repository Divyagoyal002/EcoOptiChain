import React from 'react';
import MainContent from '../components/CartPage/MainContent';
import Navbar from "../components/CartPage/Navbar/Navbar";
import SubNavbar from "../components/CartPage/Navbar/SubNavbar";
import Footer from "../components/CartPage/Footer";

const CartPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
        <Navbar />
        <SubNavbar />
      <MainContent />
        <Footer />

    </div>
  );
};

export default CartPage;