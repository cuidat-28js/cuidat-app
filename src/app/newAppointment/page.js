import NavBar from "../components/Navbar";
import Footer from "../components/landing-components/Footer";
import FormNewAppointment from "../components/newAppointment-components/Form-newappointment";

export default function newAppointment() {
  return (
    <div className="flex w-full h-screen">
      <div className="w-full items-center justify-center">
        <NavBar />
        <FormNewAppointment />
        <Footer />
      </div>
    </div>
  );
}