import React from "react";
import Image from "next/image";

export default function HeroSection() {
  return (
    <React.Fragment>
      <main className="min-w-80 mt-28 md:mt-32 md:flex md:justify-evenly lg:mt-36">
        <div className="title-hero ">
          <div className="font-josefin-regular text-2xl font-extrabold flex justify-center px-8 md:text-4xl md:justify-start lg:text-6xl xl:text-7xl">
            <p className="">Descubre</p>
            <p className="text-violetVitalli  pl-2">VitalliApp</p>
          </div>
          <div className=" text-center px-8 font-medium font-lato-regular md:text-2xl md:text-left md:w-96 md:mt-2 lg:text-4xl lg:w-9/12 lg:tracking-wide xl:text-5xl xl:w-10/12">
            <span className="">
              ¡Tu compañero integral para el bienestar y la salud!
            </span>
          </div>
        </div>
        <div className="flex justify-center pt-2 mt-6 lg:mt-24 lg:mr-2">
          <Image
            className="md:w-full lg:w-full xl:w-10/12"
            alt="hero logo"
            src="/ilustrations/big-landing.svg"
            width={300}
            height={300}
          />
        </div>
      </main>
    </React.Fragment>
  );
}
