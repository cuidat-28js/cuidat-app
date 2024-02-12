import React from "react";
import Image from "next/image"

export default function Functions() {
    return(
        <React.Fragment>
            <div className="justify-center mt-5">
                <h2 className="font-josefin-regular text-center font-bold text-[#6F2ADF]">Funcionalidades</h2>
                <div className="mt-5">
                    <div className="card flex w-96 bg-base-80 ">
                        <div className="card-body">
                        <Image src="/icons/calendar.svg" height={50} width={50} />
                        <h4 className="card-title text-primary">Agenda para citas</h4>
                        <p>Puedes registrar tus citas y avances sobre tu salud</p>
                        </div>
                    </div>
                    <div className="card w-96 bg-base-80 shadow-xxl">
                        <div className="card-body">
                        <Image src="/icons/lista.svg" height={50} width={50} />
                        <h4 className="card-title text-primary">Historial Medico</h4>
                        <p>Tener a la mano tu perfil medico es muy importante</p>
                        </div>
                    </div>
                    <div className="card w-96 bg-base-80 ">
                        <div className="card-body">
                        <Image src="/icons/location.svg" height={50} width={50} />
                        <h4 className="card-title text-primary">Localiza un especialista</h4>
                        <p>Encuentra facilmente un especialista de la salud cerca de ti</p>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}