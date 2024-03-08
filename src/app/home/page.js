import Navbar from "../components/Navbar";
import Footer from "../components/landing-components/Footer";
import HomeRemind from "../components/home-components/HomeRemind";
import HomeDates from "../components/home-components/HomeDates";
import ProfileEmpty from "../components/home-components/Profile";
import React from "react";


export default function Home() {
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
        <div className="flex justify-center">Blog de articulos aqui</div>
      </aside>
      </div>
      <Footer />
    </div>
  );
}

// <main className="flex min-h-screen lg:w-full flex-col items-center justify-between">

//   <div className="flex flex-col md:flex-row mt-16">
//     <div>

//     </div>

//   </div>

// </main>
