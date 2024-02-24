import Form from "@/app/components/componentsEmpty.js"
import HomeDates from "../components/componentsEmpty/HomeDates";
import HomeRemind from "../components/componentsEmpty/HomeRemind";
import NavBar from "../components/Navbar";
import MsgRecord from "../components/componentsEmpty/MsgRecord";
import ProfileEmpty from "../components/componentsEmpty/ProfileEmpty";
import RemindersEmpty from "../components/componentsEmpty/ReminderEmpty";
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