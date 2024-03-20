import React from "react";
import Footer from "./features/landing/components/Footer";
import NavBar from "./features/landing/components/Navbar-landing";
import HeroSection from "./features/landing/components/HeroSection";
import ButtonLogin from "./features/landing/components/Button-login";
import WhatInfo from "./features/landing/components/WhatInfo";
import Functions from "./features/landing/components/Functions";
import Benefits from "./features/landing/components/Benefits";

export default function Home() {
  return (
    <React.Fragment>
      <NavBar />
      <HeroSection />
      <ButtonLogin />
      <WhatInfo />
      <Functions />
      <Benefits />
      <Footer />
    </React.Fragment>
  );
}
