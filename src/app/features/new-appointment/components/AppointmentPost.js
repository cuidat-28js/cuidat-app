import React from "react";
import Image from "next/image";

export default function AppointmentPost() {
    return(
        <div className=" md:w-6/7 lg:w-70 shadow-md mb-1 md:m-2">
            <div className="flex flex-row justify-start">
                <div className="m-1 md:mt-2">
                    <Image 
                    src="../icons/lista.svg"
                    alt="bell icon" width={40} height={40} />
                </div>
                <div className="flex-col text-xs sm:text-regurlar md:text-lg mt-2 md:mt-1 mx-2">
                    <h2 className="text-bold">Titulo recordatorio</h2>
                    <p className="font-lato-regular">Fecha -- cada 6hrs</p>
                </div>
                <div className="m-2 mt-3 ml-auto flex">
                    <button type="button" onClick={""}
                            className="btn btn-xs md:btn-sm btn-outline btn-primary">
                       Ver Más
                    </button>
                </div>
            </div>
        </div>
    )
}