import React from "react";

import "./landing.css";
import Benefits from "../components/landing-components/Benefits";
import HeroSection from "../components/landing-components/HeroSection";
import NavbarLan from "../components/landing-components/Navbar-landing";
import Footer from "../components/landing-components/Footer";
import Functions from "../components/landing-components/Functions";

export default function landing() {
  return (
    <React.Fragment>
      <div className="w-80">
        <NavbarLan/>
        <HeroSection />
        <Functions/>
        <Benefits />
        <Footer/>
      </div>
    </React.Fragment>
  );
}
