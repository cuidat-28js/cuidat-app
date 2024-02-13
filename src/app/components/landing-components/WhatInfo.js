import React from "react";

export default function WhatInfo() {
  return (
    <React.Fragment>
      <section>
        <div className="flex justify-center mt-24 font-xl">
          <h2 className="font-josefin-regular font-bold text-[#6F2ADF]">
            ¿Qué te ofrecemos?
          </h2>
        </div>

        <div className="mt-6 mr-4 flex justify-end font-lato-regular">
          <div className="card shadow-md w-64 bg-white text-[#4D11AF] flex-row">
            <div className="card-body">
              <p>
                Ayudarte a alcanzar tus metas de bienestar; nuestro compromiso
                es brindarte las herramientas necesarias.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-6 ml-4 flex justify-start font-lato-regular">
          <div className="card shadow-md  w-64 bg-[#D0C9FF] text-[#4D11AF] flex-row">
            <div className="card-body ">
              <p>
                Manten tu seguimiento médico con registros de tus citas y
                medicamentos.
              </p>
            </div>
          </div>
        </div>
        <div className="mt-6 mr-4 flex justify-end font-lato-regular">
          <div className="card shadow-md w-64 bg-[#9288D4] text-white flex-row">
            <div className="card-body">
              <p>Sin costos ocultos ni mensualidades, completamente gratis!</p>
            </div>
          </div>
        </div>
        <div className="mt-6 ml-4 flex justify-start font-lato-regular">
          <div className="card shadow-md w-64 bg-[#6851FF] text-white text-bold flex-row">
            <div className="card-body">
              <p>Tu salud, tu control, tu camino!</p>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
}
