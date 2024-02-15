import React from "react";
import Image from "next/image";

export default function HeroSection() {
  return (
    <React.Fragment>
      <main className="min-w-80  mt-28 md:mt-38">
        <div className="title-hero">
          <div className="font-josefin-regular text-2xl font-extrabold flex justify-center px-8 md:text-4xl md:justify-start">
            <p className="">Descubre</p>
            <p className="text-violetVitalli  pl-2">VitalliApp</p>
          </div>
          <div className=" text-center px-8 font-medium font-lato-regular md:text-2xl md:text-left md:w-96 md:mt-2">
            <span className="">
              ¡Tu compañero integral para el bienestar y la salud!
            </span>
          </div>
        </div>
        <div className="flex justify-center pt-2">
          <Image
            className=""
            alt="hero logo"
            src="/doctor-hero-mobile.svg"
            width={260}
            height={260}
          />
        </div>
      </main>
    </React.Fragment>
  );
}
