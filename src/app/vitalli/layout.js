"use client";

import React from "react";
import NavBar from "../features/home/components/Navbar";
import Footer from "../features/landing/components/Footer";

export default function Layout({ children }) {
  return (
    <React.Fragment>
      <NavBar />
      <main>{children}</main>
      <Footer />
    </React.Fragment>
  );
}
