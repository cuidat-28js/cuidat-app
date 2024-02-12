import React from "react";

export default function Functions() {
    return(
        <React.Fragment>
            <div className="flex justify-content">
                <h3 className="font-josefin-regular font-bold text-[#6F2ADF]">Funcionalidades</h3>
                <div>
                    <div className="card flex w-96 bg-base-100 ">
                        <div className="card-body"> 
                        <h4 className="card-title text-primary">Agenda para citas</h4>
                        <p>Puedes registrar tus citas y avances sobre tu salud</p>
                        </div>
                    </div>
                    <div className="card w-96 bg-base-100 shadow-xl">
                        <div className="card-body">
                        <h4 className="card-title text-primary">Historial Medico</h4>
                        <p>Tener a la mano tu perfil medico es muy importante</p>
                        </div>
                    </div>
                    <div className="card w-96 bg-base-100 shadow-xl">
                        <div className="card-body">
                        <h4 className="card-title text-primary">Localiza un especialista</h4>
                        <p>Encuentra facilmente un especialista de la salud cerca de ti</p>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}