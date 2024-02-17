import React from "react";
import Image from "next/image"

export default function HomeDates() {
    return (
        <React.Fragment>
            <div className="m-2 flex">
                <h3 className="font-josefin-regular text-lg mt-2 mr-2">Citas</h3>
                <div className="pt-2 mx-auto text-gray-600">
                    <input className="border-2 border-gray-300 bg-white h-8 px-5 pr-2 rounded-full text-sm focus:outline-none"
                    type="search" placeholder="Buscar"/>
                </div>
            <div>
                <button
                    type="button"
                    class="ml-3 inline-block rounded border-2 border-primary px-3.5 pb-[6px] pt-2 text-lg leading-normal text-primary hover:border-3 hover:bg-primary hover:text-white"
                    data-te-ripple-init>
                    +
                </button>
            </div>
                </div>
                <div className="rounded items-center shadow p-4 bg-[#F9F9F9]">
                    <Image src="/ilustrations/doctora-record.svg"
                    width={200}
                    height={200}/>
                    <p className="mb-1">
                    Aun no tienes registros de citas
                    </p>
                    <button type="button"
                    className="justify-center rounded m-3 bg-primary px-6 pb-2 pt-2 text-xs font-medium uppercase leading-normal text-white hover:bg-white hover:border-primary hover:text-primary"
                    >
                    Crear cita</button>
                </div>
        </React.Fragment>
    )
}