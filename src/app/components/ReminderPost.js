import React from "react";
import Image from "next/image";

export default function ReminderPost() {
    return(
        <div className="card w-70 lg:w-150 bg-base-100 shadow-md m-2">
            <div className="flex flex-row m-1">
                <div className="m-1 mt-3">
                    <Image 
                    src="../icons/notif-icon.svg"
                    alt="bell icon" width={20} height={20} />
                </div>
                <div className="flex-col ml-2 text-xs lg:text-sm ">
                    <h2 className="text-dark">Titulo recordatorio</h2>
                    <p>Fecha -- cada 6hrs</p>
                </div>
            </div>
        </div>
    )
}