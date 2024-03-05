"use client";
import React, { useState } from "react";
import Link from "next/link";
import { FaFileMedicalAlt } from "react-icons/fa";

export default function ProfileEmpty() {
    const [userInfo, setUserInfo] = useState(false);

  return (
    <React.Fragment>
      <div className="mt-6 flex flex-col m-2 items-center hidden md:flex">

        {/* avatar con info */}
        <div className="avatar">
          <div className="w-24 rounded-full ring ring-[#6851FF] ring-offset-base-100 ring-offset-2">
            <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
          </div>
        </div>
        {/* avatar sin info */}
        {/* <Image className="m-2" src="/icons/perfil-vacio.svg" 
                width={100}
                height={100}
                alt="profile placeholder"/> */}



        <div className="mt-6 text-center">
                <p className="text-xl font-extrabold">Jhon Alejandro</p>
                <div>
                  <p>Genero: Masculino</p>
                  <p>Grupo sanguineo: O+</p>
                  <p>Cel: 978 098 091</p>
                  <p>Edad: 19</p>
                </div>
        </div>        
        {/* <div className="border rounded m-2 bg-[#F9F9F9] py-4 px-2">
          <p className="font-lato-regular text-sm">
            Aun no has completado tu perfil
          </p>
        </div> */}


        <div className="mt-4">
          <button
            type="button"
            className="justify-center rounded m-3 bg-[#6851FF] px-6 pb-2 pt-2 text-xs font-medium text-white hover:bg-white hover:border hover:border-[#6851FF] hover:text-[#6851FF]"
          >
            <Link href="/profileForm">Editar Perfil</Link>
          </button>
        </div>
      </div>

      {/* <div className="mt-6 flex justify-center">
      <FaFileMedicalAlt className="mr-2 "/> 
      <span>Mi expediente</span>
      </div> */}
     

      {/* profile mobile con info */}
      <div className="stats shadow flex justify-center md:hidden">
        <div className="stat">
          <div className="stat-figure text-secondary">
            <div className="avatar">
              <div className="w-16 rounded-full">
                <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
              </div>
            </div>
          </div>
          <div className="stat-title font-extrabold text-[#000]">
            Jhon Alejandro
          </div>
          <div className="stat-desc ">Edad: 19</div>
          <div className="stat-desc">Genero: Masculino</div>
          <div className="stat-desc">Grupo sanguineo: O+</div>
        </div>
      </div>
    </React.Fragment>
  );
}
