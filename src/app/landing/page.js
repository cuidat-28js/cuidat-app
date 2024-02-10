import React from "react";

import "./landing.css";
import Benefits from "../components/Benefits";
import HeroSection from "../components/HeroSection";

export default function landing() {
  return (
    <React.Fragment>
      <div className="w-80">
        <HeroSection />
        <Benefits />
      </div>
    </React.Fragment>
  );
}
