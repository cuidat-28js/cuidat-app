import React from "react";
import Image from "next/image";

export default function WhatInfo() {
  return (
    <React.Fragment>
      <section className="min-w-80 xl:mb-8">
        <div className="flex justify-center mt-20 text-xl lg:mt-36 lg:text-3xl">
          <h2 className="font-josefin-regular font-bold text-[#6F2ADF]">
            ¿Qué te ofrecemos?
          </h2>
        </div>

        <div className="md:flex md:justify-center">
          <div className="md:mt-32 lg:mt-44 ">
            <Image
              className="hidden md:block"
              alt="enfermero-cora"
              src="/ilustrations/enfermero-cora.svg"
              width={260}
              height={260}
            />
          </div>

          <div>
            <div className="mt-6 mr-4 flex justify-end font-lato-regular md:mr-24 lg:mr-12 lg:mt-10">
              <div className="card shadow-md w-64 bg-white text-[#4D11AF] flex-row lg:w-72">
                <div className="card-body">
                  <p className="md:text-base lg:text-xl">
                    Ayudarte a alcanzar tus metas de bienestar; nuestro
                    compromiso es brindarte las herramientas necesarias.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-6 ml-4 flex justify-start font-lato-regular md:ml-24 lg:ml-20">
              <div className="card shadow-md  w-64 bg-[#D0C9FF] text-[#4D11AF] flex-row lg:w-72">
                <div className="card-body ">
                  <p className="md:text-base lg:text-xl">
                    Manten tu seguimiento médico con registros de tus citas y
                    medicamentos.
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-6 mr-4 flex justify-end font-lato-regular md:mr-0 lg:mr-6">
              <div className="card shadow-md w-56 bg-[#9288D4] text-white flex-row md:w-64 lg:w-72">
                <div className="card-body">
                  <p className="md:text-base lg:text-xl">
                    Sin costos ocultos ni mensualidades, completamente gratis!
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-6 ml-4 flex justify-start font-lato-regular md:ml-0 lg:ml-0">
              <div className="card shadow-md w-52 bg-[#6851FF] text-white text-bold flex-row md:w-64 lg:w-72">
                <div className="card-body">
                  <p className="md:text-base lg:text-xl">
                    Tu salud, tu control, tu camino!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
}
