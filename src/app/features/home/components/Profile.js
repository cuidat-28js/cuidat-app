"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import { getUserInfoAPI } from "../api/userProfile";
const BACK_URL = process.env.NEXT_PUBLIC_BACK_URL;

export default function Profile() {
  const router = useRouter();
  const { data: session, status } = useSession();
  const [userInfo, setUserInfo] = useState({});

  useEffect(() => {
    const getData = async () => {
      const res = await getUserInfoAPI();
      setUserInfo(res.data.user);
    };

    getData();
  }, []);

  return (
    <React.Fragment>
      <div className="mt-2 flex flex-col m-2 items-center hidden md:flex">
        {/* avatar con info */}
        <div className="avatar">
          <div className="w-20 rounded-full ring ring-[#6851FF] ring-offset-base-100 ring-offset-2">
            <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
          </div>
        </div>
        {/* avatar sin info */}
        {/* <Image className="m-2" src="/icons/perfil-vacio.svg" 
                width={100}
                height={100}
                alt="profile placeholder"/> */}

        <div className="mt-4 text-center">
          <p className="text-lg font-extrabold">{`${userInfo.name} ${userInfo.lastName}`}</p>
          <div>
            <p className="text-md">Edad: {userInfo.age}</p>
            <p className="text-md">Sexo: {userInfo.gender}</p>
            <p className="text-md">Telefono: {userInfo.telephone}</p>
            <p className="text-md">
              Fecha de nacimiento: {userInfo.birthdate}{" "}
            </p>
            <p className="text-md">Domicilio: {userInfo.adress}</p>
          </div>
        </div>
        {/* <div className="border rounded m-2 bg-[#F9F9F9] py-4 px-2">
          <p className="font-lato-regular text-sm">
            Aun no has completado tu perfil
          </p>
        </div> */}

        <div className="mt-2">
          <button
            onClick={() => router.push("/vitalli/profileForm")}
            type="button"
            className="justify-center rounded m-3 bg-[#6851FF] px-6 pb-2 pt-2 text-xs font-medium text-white hover:bg-white hover:border hover:border-[#6851FF] hover:text-[#6851FF]"
          >
            Editar Perfil
          </button>
        </div>
      </div>

      {/* <div className="flex justify-center">
        <button onClick={handleClick} className="btn btn-active btn-primary">
          cerrar sesion
        </button>
      </div> */}

      {/* <div className="hidden md:flex divider"></div> */}

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
          <div className="stat-title font-extrabold text-[#000]">jhonnn</div>
          <div className="stat-desc ">Edad: 19</div>
          <div className="stat-desc">Genero: Masculino</div>
          <div className="stat-desc">Grupo sanguineo: O+</div>
        </div>
      </div>
    </React.Fragment>
  );
}
