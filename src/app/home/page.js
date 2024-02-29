import Navbar from "../components/Navbar"
import Footer from "../components/landing-components/Footer";
import HomeRemind from "../components/componentsEmpty/HomeRemind";
import HomeDates from "../components/componentsEmpty/HomeDates";
import ProfileEmpty from "../components/componentsEmpty/ProfileEmpty";

export default function Home() {
  return (
    <main className="flex min-h-screen lg:w-full flex-col items-center justify-between">
      <Navbar/>
      <div className="flex flex-col md:flex-row mt-16">
      <div>
        <ProfileEmpty/>
        <HomeRemind/>
      </div>
      <HomeDates/>
      </div>
      <Footer/>
    </main>
  );
}