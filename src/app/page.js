import Navbar from "./components/Navbar"
import Footer from "./components/landing-components/Footer";

export default function Home() {
  return (
    <main className="flex min-h-screen lg:w-full flex-col items-center justify-between">
      <div className="circlePosition w-[590px] h-[400px] bg-[#6851FF] rounded-full absolute z-1 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] blur-[90px]"></div>
       
      <Navbar/>
      <h1 className="flex flex-col items-center justify-center font-josefin-regular text-xl">
        HELLO WORLD
      </h1>
      <Footer/>
    </main>
  );
}