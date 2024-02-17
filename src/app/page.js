
import Image from "next/image";
import Navbar from "./components/Navbar"
import Footer from "./components/landing-components/Footer";
import HomeRemind from "./components/componentsEmpty/HomeRemind";
import HomeDates from "./components/componentsEmpty/HomeDates";

export default function Home() {
  return (
    <main className="flex min-h-screen lg:w-full flex-col items-center justify-between">
      <Navbar/>
      <HomeRemind/>
      <HomeDates/>
      <Footer/>
    </main>
  );
}