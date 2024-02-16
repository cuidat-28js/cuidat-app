import React from "react";
import Image from "next/image";

export default function Functions() {
  return (
    <React.Fragment>
      <section className="min-w-80 md:flex md:justify-center">
        <div className="justify-center mt-28">
          <h2 className="font-josefin-regular text-xl text-center font-bold text-[#6F2ADF] lg:text-3xl xl:mb-4">
            Funcionalidades
          </h2>
          <div className="">
            <div className="flex justify-end font-lato-regular xl:mb-2">
              <div className="card card-body  w-96 flex-row">
                <Image src="/icons/calendar.svg" height={40} width={40} />
                <div>
                  <p className="card-title text-base text-[#4D11AF] lg:text-2xl">
                    Agenda para citas
                  </p>
                  <p className="lg:text-xl">
                    Puedes registrar tus citas al medico y avances sobre tu
                    salud.
                  </p>
                </div>
              </div>
            </div>
            <div className="flex justify-end font-lato-regular xl:mb-2">
              <div className="card card-body  w-96 flex-row">
                <Image src="/icons/lista.svg" height={50} width={50} />
                <div>
                  <p className="card-title text-base text-[#4D11AF] lg:text-2xl">
                    Historial Medico
                  </p>
                  <p className="lg:text-xl">
                    Tener a la mano tu perfil es muy importante.
                  </p>
                </div>
              </div>
            </div>
            <div className=" flex justify-end font-lato-regular xl:mb-8">
              <div className="card card-body  w-120 flex-row">
                <Image src="/icons/location.svg" height={40} width={40} />
                <div>
                  <p className="card-title text-base text-[#4D11AF] lg:text-2xl">
                    Localiza un especialista
                  </p>
                  <p className="lg:text-xl">
                    Encuentra facilmente un especialista de la salud cerca de
                    ti.
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
