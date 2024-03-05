import React from "react";
import Image from "next/image";
import AddBtn from "../Add-button";
import Link from "next/link";

export default function HomeDates() {
  return (
    <React.Fragment>
      <div>
        <div className="m-2 flex">
          <h3 className="font-josefin-regular text-lg mt-2 mr-2">Citas</h3>
          <div className="pt-2 mx-auto text-gray-600">
                    <input className="border-2 border-gray-300 bg-white h-8 px-5 pr-2 rounded-full text-sm focus:outline-none"
                    type="search" placeholder="Buscar"/>
                </div>
          <div className="ml-2 mt-2">
            <AddBtn />
          </div>
        </div>
        <div className="rounded flex flex-col items-center shadow p-1 bg-[#F9F9F9]">
          <Image
            src="/ilustrations/doctora-record.svg"
            width={200}
            height={200}
          />
          <p className="mb-1">Aun no tienes registros de citas</p>
          <button
            type="button"
            className="justify-center rounded m-3 bg-primary px-6 pb-2 pt-2 text-sm font-medium text-white hover:bg-white hover:border hover:border-primary hover:text-primary"
          >
            <Link href="/newAppointment">CREAR CITA</Link>
          </button>
        </div>
      </div>
    </React.Fragment>
  );
}
