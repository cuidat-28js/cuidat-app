import React from "react";

export default function WhatInfo() {
  return (
    <React.Fragment>
        <div className="flex justify-center mt-6">
          <h2 className="font-josefin-regular font-bold text-[#6F2ADF]">
            ¿Para qué es?
          </h2>
        </div>

        <div className="mt-6 mr-4 flex justify-end font-lato-regular">
          <div className="card shadow-xl w-75 bg-white text-[#4D3AC9] flex-row">
            <div className="card-body">
              <p>
              Para ayudarte a alcanzar tus<br></br>metas de bienestar nuestro
              <br></br>compromiso es brindarte las<br></br>herramientas que necesitas.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-6 ml-4 flex justify-start font-lato-regular">
          <div className="card shadow-xl  w-64 bg-[#D0C9FF] text-[#4D3AC9] flex-row">
            <div className="card-body ">
              <p>Manten tu seguimiento<br></br>médica con registros de tus<br></br>citas y medicamentos.</p>
            </div>
          </div>
        </div>
        <div className="mt-6 mr-4 flex justify-end font-lato-regular">
          <div className="card shadow-xl w-46 bg-[#8573FF] text-white flex-row">
            <div className="card-body">
              <p>Sin costos ocultos<br></br>ni mensualidades,<br></br>completamente gratis!</p>
            </div>
          </div>
        </div>
        <div className="mt-6 ml-4 flex justify-start font-lato-regular">
          <div className="card shadow-xl w-45 bg-primary text-white text-bold flex-row">
            <div className="card-body">
              <p>Tu salud, tu control,<br></br>tu camino!</p>
            </div>
          </div>
        </div>
    </React.Fragment>
  );
}

