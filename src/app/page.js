
import Image from "next/image";
import Navbar from "./components/Navbar"
import Footer from "./components/landing-components/Footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-50">
      <Navbar/>
      <div className=" max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <h1>ESTE ES EL HOME</h1>
      </div>
      <Footer/>
    </main>
  );
}