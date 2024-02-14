import React from "react";

export default function ButtonLogin() {
  return (
    <React.Fragment>
      <div className="text-center mt-6">
        <button className="btn rounded-full border-[#4D11AF] bg-[#ffff] text-[#4D11AF] mr-2 hover:border-[#4D11AF] hover:bg-[#ffff] hover:shadow-[#4D11AF]">
          Inicia Sesion
        </button>
        <button className="btn rounded-full bg-[#4D11AF] rder-[#4D11AF] text-[#ffff] hover:bg-[#4D11AF] hover:shadow-[#4D11AF] hover:border-[#4D11AF]">
          ¡Registrate!
        </button>
      </div>
    </React.Fragment>
  );
}
