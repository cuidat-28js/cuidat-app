import React from "react";
import Image from "next/image";

export default function ProfileEmpty() {
    return (
        <React.Fragment>
            <div className="flex flex-col m-2 items-center hidden md:flex">
                <Image className="m-2" src="/icons/perfil-vacio.svg" 
                width={100}
                height={100}
                alt="profile placeholder"/>
                <div className="border rounded m-2 bg-[#F9F9F9] py-4 px-2">
                    <p className="font-lato-regular text-sm">
                        Aun no has completado tu perfil
                    </p>
                </div>
                <div>
                    <button type="button"
                    className="justify-center rounded m-3 bg-primary px-6 pb-2 pt-2 text-xs font-medium uppercase leading-normal text-white hover:bg-white hover:border-primary hover:text-primary"
                    >
                    Editar perfil</button>
                </div>
            </div>
        </React.Fragment>
    )
}