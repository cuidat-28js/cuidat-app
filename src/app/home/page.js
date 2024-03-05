import Navbar from "../components/Navbar";
import Footer from "../components/landing-components/Footer";
import HomeRemind from "../components/home-components/HomeRemind";
import HomeDates from "../components/home-components/HomeDates";
import ProfileEmpty from "../components/home-components/Profile";
import React from "react";
import AppointmentPost from "../components/AppointmentPost";
import AddBtn from "../components/Add-button";


export default function Home() {
  return (
    <React.Fragment>
      <Navbar />
      
      <div className="mt-20 md:grid md:grid-cols-12 min-h-screen">
        <aside className="md:col-span-3">
          <ProfileEmpty />
          <HomeRemind />
        </aside>
        <main className="md:grid md:col-span-6 border border-gay-300 border-y-0">
          <div className="flex flex-col mx-2">
            <div id="main-bar" className="m-2 flex justify-center h-12 sm:space-x-2 md:space-x-4">
                <h3 className="font-josefin-regular text-xl mt-2">Citas</h3>
                <div className="pt-1 mx-1 text-gray-600">
                    <input type="search" placeholder="   Buscar"
                    className="w-17 md:w-68 lg:w-90 md:8/9 border-2 border-gray-300 bg-white h-8 rounded-full text-sm focus:outline-none"/>
                </div>
                <div className="mt-1.5">
                  <AddBtn />
                </div>
            </div>
            <div id="posts-section">
              <AppointmentPost/>
              <AppointmentPost/>
              <AppointmentPost/>
            </div>
            
          </div>
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
