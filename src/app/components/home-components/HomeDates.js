import React from "react";
import Image from "next/image";
import AddBtn from "../Add-button";
import Link from "next/link";

export default function HomeDates() {
  return (
    <React.Fragment>
      <div>
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
