import Image from "next/image";
import Navbar from "../components/Navbar";
import Footer from "../components/landing-components/Footer";
import HomeRemind from "../components/home-components/HomeRemind";
import HomeDates from "../components/home-components/HomeDates";
import Reminder from "../components/Reminder";
import ProfileEmpty from "../components/home-components/Profile";
import CalendarCompon from "../components/Calendar";
import React from "react";

export default function Home() {
  return (
    <React.Fragment>
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
    </React.Fragment>
  );
}

// <main className="flex min-h-screen lg:w-full flex-col items-center justify-between">

//   <div className="flex flex-col md:flex-row mt-16">
//     <div>

//     </div>

//   </div>

// </main>
