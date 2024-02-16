import React from "react";
import Image from "next/image";

export default function Benefits() {
  return (
    <React.Fragment>
      <section className="min-w-80 mb-20">
        <div className="flex mt-20 text-xl justify-center lg:text-3xl">
          <h2 className="font-josefin-regular font-bold text-[#6F2ADF]">
            Beneficios
          </h2>
        </div>

        <div className="md:flex md:justify-center">
          <div>
            <div className="mt-6 mr-4 flex justify-end font-lato-regular md:mr-0 md:ml-24 lg:mr-14 lg:mb-8">
              <div className="card shadow-xl w-64 bg-[#DFEAFF] text-[#4D3AC9] flex-row lg:w-72">
                <div className="card-body">
                  <p className="md:text-base lg:text-xl">
                    Guarda tu infomacion medica importante para no perderla de
                    vista.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-6 ml-4 flex justify-start font-lato-regular md:ml-0 lg:ml-6 lg:mb-8">
              <div className="card shadow-xl  w-64 bg-[#F4F2FF] text-[#4D11AF] flex-row lg:w-72">
                <div className="card-body ">
                  <p className="md:text-base lg:text-xl">
                    Manten el seguimiento de tus tratamientos y citas medicas.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-6 mr-4 flex justify-end font-lato-regular md:mr-0 lg:mr-6">
              <div className="card shadow-xl w-64 bg-[#D7FBED] text-[#263238] flex-row lg:w-72">
                <div className="card-body">
                  <p className="md:text-base lg:text-xl">
                    Mejora la atencion de tu salud por tu propia cuenta.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="md:mt-16 md:ml-4 lg:mt-24">
            <Image
              className="hidden md:block"
              alt="doctora-record"
              src="/ilustrations/doctora-record.svg"
              width={260}
              height={260}
            />
          </div>
        </div>
      </section>
    </React.Fragment>
  );
}
