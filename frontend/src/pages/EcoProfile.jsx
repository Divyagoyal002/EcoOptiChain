import React from "react";
import Navbar from "../components/LandingPage/Navbar/Navbar";
import SubNavbar from "../components/LandingPage/Navbar/SubNavbar";
import Footer from "../components/LandingPage/Footer";
import EcoProfileHeading from "../components/EcoProfile/EcoProfileHeading";
import EcoBadgeGrid from "../components/EcoProfile/EcoBadgeGrid";
import EcoProfileTree from "../components/EcoProfile/EcoProfileTree";
import EcoHowItWorksSection from "../components/EcoProfile/EcoHowItWorksSection";

const EcoProfile = () => (
  <>
    <Navbar />
    <SubNavbar />
    <EcoProfileHeading />
    <EcoBadgeGrid />
    <EcoProfileTree />
    <EcoHowItWorksSection />
    <Footer />
  </>
);

export default EcoProfile;
