import React from "react";
import Image from "next/image"

export default function Functions() {
    return(
        <React.Fragment>
            <div className="justify-center mt-12">
                <h2 className="font-josefin-regular text-center font-bold text-[#6F2ADF]">Funcionalidades</h2>
                <div className="mt-5">
                    <div className="flex justify-end font-lato-regular">
                        <div className="card card-body  w-96 flex-row">
                        <Image src="/icons/calendar.svg" height={40} width={40} />
                        <div>
                            <h4 className="card-title text-primary">Agenda para citas</h4>
                            <p>Puedes registrar tus citas y avances sobre tu salud</p>
                        </div>
                        </div>
                    </div>
                    <div className="flex justify-end font-lato-regular">
                        <div className="card card-body  w-96 flex-row">
                        <Image src="/icons/lista.svg" height={50} width={50} />
                        <div>
                            <h4 className="card-title text-primary">Historial Medico</h4>
                            <p>Tener a ala mano tu perfil es muy importante</p>
                        </div>
                        </div>
                    </div>
                    <div className=" flex justify-end font-lato-regular">
                        <div className="card card-body  w-120 flex-row">
                        <Image src="/icons/location.svg" height={40} width={40} />
                        <div>
                            <h4 className="card-title text-primary">Localiza un especialista</h4>
                            <p>Encuentra facilmente un especialista de la salud cerca de ti</p>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}