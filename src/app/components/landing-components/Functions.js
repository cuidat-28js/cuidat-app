import React from "react";
import Image from "next/image";

export default function Functions() {
  return (
    <React.Fragment>
      <section>
        <div className="justify-center mt-24">
          <h2 className="font-josefin-regular text-xl text-center font-bold text-[#6F2ADF]">
            Funcionalidades
          </h2>
          <div className="">
            <div className="flex justify-end font-lato-regular">
              <div className="card card-body  w-96 flex-row">
                <Image src="/icons/calendar.svg" height={40} width={40} />
                <div>
                  <p className="card-title text-base text-[#4D11AF]">
                    Agenda para citas
                  </p>
                  <p>
                    Puedes registrar tus citas al medico y avances sobre tu
                    salud.
                  </p>
                </div>
              </div>
            </div>
            <div className="flex justify-end font-lato-regular">
              <div className="card card-body  w-96 flex-row">
                <Image src="/icons/lista.svg" height={50} width={50} />
                <div>
                  <p className="card-title text-base text-[#4D11AF]">
                    Historial Medico
                  </p>
                  <p>Tener a la mano tu perfil es muy importante.</p>
                </div>
              </div>
            </div>
            <div className=" flex justify-end font-lato-regular">
              <div className="card card-body  w-120 flex-row">
                <Image src="/icons/location.svg" height={40} width={40} />
                <div>
                  <p className="card-title text-base text-[#4D11AF]">
                    Localiza un especialista
                  </p>
                  <p>
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
