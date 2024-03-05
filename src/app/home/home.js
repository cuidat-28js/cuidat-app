import Form from "@/app/components/componentsEmpty.js"
import HomeDates from "../components/home-components/HomeDates";
import HomeRemind from "../components/home-components/HomeRemind";
import NavBar from "../components/Navbar";
import MsgRecord from "../components/home-components/MsgRecord";
import ProfileEmpty from "../components/home-components/Profile";
import RemindersEmpty from "../components/home-components/ReminderEmpty";
import Footer from "../components/landing-components/Footer";

export default function emptyHome() {
  return (
    <div className="flex w-full h-screen">
      <div className="w-full flex items-center justify-center lg:w-1/2">
        <NavBar />
       <HomeDates />
       <HomeRemind />
       <MsgRecord />
       <ProfileEmpty />
       <RemindersEmpty />
       <Footer />
      </div>
    </div>
  );
}