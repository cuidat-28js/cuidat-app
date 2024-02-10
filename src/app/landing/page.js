import React from "react";
import Image from "next/image";

import "./landing.css";

export default function landing() {
  return (
    <React.Fragment>
      <div className="w-80">
        <main className="mt-6">
          <div className="title-hero">
            <div className="font-josefin-regular text-2xl font-extrabold flex justify-center px-8">
              <p className="">Descubre</p>
              <p className="text-violetVitalli  pl-2">VitalliApp</p>
            </div>
            <div className=" text-center px-8 font-medium font-lato-regular">
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

        <section>
          <div className="flex justify-center">
            <p className="font-josefin-regular font-bold text-[#6F2ADF]">
              Beneficios
            </p>
          </div>

          <div className="mt-6 mr-4 flex justify-end font-lato-regular">
            <div className="card shadow-xl w-64 bg-[#DFEAFF] text-[#4D3AC9] flex-row">
              {/* <div className="flex">
                <img src="/botiquin.svg" />
              </div> */}
              <div className="card-body">
                <p>
                  Guarda tu infomacion medica importante para no perderla de
                  vista.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-6 ml-4 flex justify-start font-lato-regular">
            <div className="card shadow-xl  w-64 bg-[#F4F2FF] text-[#4D11AF] flex-row">
              {/* <div className="flex">
                <img src="/receta.svg" />
              </div> */}
              <div className="card-body ">
                <p>
                  Manten el seguimiento de tus tratamientos y citas medicas.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-6 mr-4 flex justify-end font-lato-regular">
            <div className="card shadow-xl w-64 bg-[#D7FBED] text-[#263238] flex-row">
              {/* <div className="flex">
                <img src="/tanque-oxigeno.svg" width={300}/>
              </div> */}
              <div className="card-body">
                <p>Mejora la atencion de tu salud por tu propia cuenta.</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </React.Fragment>
  );
}
