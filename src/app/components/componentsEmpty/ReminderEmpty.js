import React from "react";
import Image from "next/image"
export default function RemindersEmpty() {
    return(
        <React.Fragment>
            <div className="flex flex-col items-center w-72 m-2">
                <Image
                    className="m-4 "
                    src="/ilustrations/enfe-sola.svg"
                    width={150}
                    height={150}
                    alt="enfermera anotando"/>
                <p className="m-2 text-sm text-center">
                    Aun no tienes recordatorios publicados,
                    ¡Crea tu primer recordatorio!
                </p>
            </div>
        </React.Fragment>
    )
}