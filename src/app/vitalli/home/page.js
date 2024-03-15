"use client";

import Navbar from "../../components/Navbar";
import Footer from "../../components/landing-components/Footer";
import HomeRemind from "../../components/home-components/HomeRemind";
import HomeDates from "../../components/home-components/HomeDates";
import ProfileEmpty from "../../components/home-components/Profile";

import React, { useEffect } from "react";

export default function Home() {
  
  // useEffect(()=> {
  //   if (isAuthenticated === false) {
  //     redirect("/auth/login");
  //   }
  // }, [isAuthenticated])
  // console.log(isAuthenticated, "aqui authenticated")
  
  return (
    <div className="h-screen ">
      <Navbar />
      <div className="mt-20 md:grid md:grid-cols-12">
        <aside className="md:col-span-3">
          <ProfileEmpty />
          <HomeRemind />
        </aside>
        <main className="md:grid md:col-span-6">
          <HomeDates />
        </main>
        <aside className="md:grid md:col-span-3">
          <div>Blog de articulos aqui</div>
        </aside>
      </div>
      <Footer />
    </div>
  );
}
