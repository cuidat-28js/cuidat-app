import React from "react";
import Image from "next/image";

export default function ReminderPost() {
    return(
        <div className="card w-70 lg:w-150 bg-base-100 shadow-md m-2">
            <div className="flex flex-row justify-start m-1">
                <div className="m-1 mt-2">
                    <Image 
                    src="../icons/notif-icon.svg"
                    alt="bell icon" width={20} height={20} />
                </div>
                <div className="flex-col text-xs lg:text-sm mx-2">
                    <h2 className="text-dark">Titulo recordatorio</h2>
                    <p>Fecha -- cada 6hrs</p>
                </div>
                <div className="m-2 ml-auto flex">
                    <button className="mx-1 p-1 lg:px-1.5 border border-primary rounded">
                        <Image 
                        src="../icons/close-menu.svg"
                        alt="bell icon" width={8} height={8} />
                    </button>
                </div>
            </div>
        </div>
    )
}