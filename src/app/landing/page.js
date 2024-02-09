import React from "react";
import Image from "next/image";

import "./landing.css";

export default function landing() {
  return (
    <React.Fragment>
      <div className="w-80">
        <main className="mt-6">
          <div className="title-hero">
            <div className="font-josefin-regular text-2xl font-bold flex justify-center px-8">
              <p className="">Descubre</p>
              <p className="text-violetVitalli  pl-2">VitalliApp</p>
            </div>
            <div className=" text-center px-8 font-medium font-lato-regular">
              <span className="">
                ¡Tu compañero integral para el bienestar y la salud!
              </span>
            </div>
          </div>
          <div className="flex justify-center pt-6">
            <Image
              className=""
              alt="hero logo"
              src="/doctor-hero-mobile.svg"
              width={260}
              height={260}
            />
          </div>
        </main>
      </div>
    </React.Fragment>
  );
}
