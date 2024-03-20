'use client'
import React from "react";
import EmptyRecord from "../../features/home/components/EmptyRecord";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Expediente() {
  const router = useRouter();

  return (
    <div
      id="recordForm"
      className="flex flex-col min-h-screen relative pt-16 md:pt-16 md:pb-0 "
    >
      <div className="container flex flex-col items-center mt-2 lg:max-w-6xl mx-auto lg:px-8">
        <div className="flex items-center justify-center md:flex lg:my-4 my-2">
          <h2 className="text-xl font-josefin-regular text-bold">Expediente</h2>
          <div className="ml-4"></div>
        </div>

        <div className="flex flex-wrap flex-row m-1 lg:mx-16 text-center rounded-lg bg-transparent">
          {/* START block */}
          <div className="flex-shrink w-full sm:w-1/2 lg:w-1/3 md lg:px-1 ">
            <div className="py-3 px-1 h-32 mb-2 mx-0.5 lg:h-44 lg:pr-2 lg:pl-4 bg-white rounded-lg shadow-md shadow-violet-400 ">
              <div className="flex flex-row justify-center mb-2 lg:my-2 border-2 border-gray-300 border-x-0 border-t-0">
                <h3 className="ml-2 text-md lg:text-lg font-josefin-regular text-black">
                  Grupo Sanguineo
                </h3>
              </div>
              <div className="flex flex-row justify-center">
                <Image
                  src="../record/blood.svg"
                  alt="blood-drop"
                  width={30}
                  height={40}
                />
                <EmptyRecord />
              </div>
            </div>
          </div>
          {/* END block */}
          <div className="flex-shrink px-1 w-full sm:w-1/2 lg:w-1/3 lg:px-1  ">
            <div className="py-3 px-1 h-32 mb-2 mx-0.5 lg:h-44 lg:px-2 bg-white rounded-lg shadow-md shadow-violet-400">
              <div className="justify-center flex flex-row mb-2 lg:my-2 border-2 border-gray-300 border-x-0 border-t-0">
                <h3 className="text-md lg:text-lg font-josefin-regular text-black">
                  Alergias
                </h3>
              </div>
              <div className="flex flex-row justify-center">
                <Image
                  src="../record/sick.svg"
                  alt="sick emoji"
                  width={40}
                  height={50}
                />
                <EmptyRecord />
              </div>
            </div>
          </div>
          {/* END block */}
          <div className="flex-shrink px-1 w-full sm:w-1/2 lg:w-1/3 lg:px-1 ">
            <div className="py-3 px-1 h-32 mb-2 mx-0.5 lg:h-44 lg:px-2 bg-whiterounded-lg rounded shadow-md shadow-violet-400">
              <div className="flex flex-row justify-center mb-2 lg:my-2 border-2 border-gray-300 border-x-0 border-t-0">
                <h3 className="text-md lg:text-lg font-josefin-regular text-black">
                  Enfermedades Cronicas
                </h3>
              </div>
              <div className="flex flex-row justify-center">
                <Image
                  src="../record/heart.svg"
                  alt="heart icon"
                  width={30}
                  height={30}
                />
                <EmptyRecord />
              </div>
            </div>
          </div>
          {/* END block */}
          <div className="flex-shrink w-full sm:w-1/2 lg:w-1/3 lg:px-1 ">
            <div className="py-3 px-1 h-32 mb-2 mx-0.5 lg:h-44 lg:px-2 bg-white rounded-lg shadow-md shadow-violet-400">
              <div className="flex flex-row justify-center mb-2 lg:my-2 border-2 border-gray-300 border-x-0 border-t-0">
                <h3 className="ml-2 text-md lg:text-lg font-josefin-regular text-black">
                  Medicamento Controlado
                </h3>
              </div>
              <div className="flex flex-row justify-center">
                <Image
                  src="../record/medicine.svg"
                  alt="medicine"
                  width={40}
                  height={50}
                />
                <EmptyRecord />
              </div>
            </div>
          </div>
          {/* END block */}
          <div className="flex-shrink w-full sm:w-1/2 lg:w-1/3 lg:px-1 ">
            <div className="py-3 px-1 h-32 mb-2 mx-0.5 lg:h-44 lg:px-4 rounded-lg bg-white shadow-md shadow-violet-400">
              <div className="flex flex-row justify-center mb-2 lg:my-2 border-2 border-gray-300 border-x-0 border-t-0">
                <h3 className="text-md lg:text-lg font-josefin-regular text-black">
                  Antecedentes Familiares
                </h3>
              </div>
              <div className="flex flex-row justify-center">
                <Image
                  src="../record/family.svg"
                  alt="family"
                  width={40}
                  height={50}
                />
                <EmptyRecord />
              </div>
            </div>
          </div>

          <div className="flex-shrink w-full sm:w-1/2 lg:w-1/3 lg:px-1 ">
            <div className="py-3 px-1 h-32 mb-2 mx-0.5 lg:h-44 lg:px-4 rounded-lg bg-white shadow-md shadow-violet-400">
              <div className="flex flex-row justify-center mb-2 lg:my-2 border-2 border-gray-300 border-x-0 border-t-0">
                <h3 className="text-md lg:text-lg font-josefin-regular text-black">
                  Contacto de Emergencia
                </h3>
              </div>
              <div className="flex flex-row justify-center">
                <Image
                  src="../record/contact.svg"
                  alt="contact"
                  width={30}
                  height={50}
                />
                <EmptyRecord />
              </div>
            </div>
          </div>
          {/* END block */}
        </div>
        {/* end row */}

        <div className="flex w-66 bg-white items-center mt-2 mb-6 md:mt-6">
          <button
            className="btn btn-wide btn-primary text-md md:text-lg hover:bg-white hover:border-primary hover:text-primary"
            type="button"
            onClick={()=>router.push('/vitalli/recordForm')}
          >
            Editar
          </button>
        </div>
      </div>
    </div>
  );
}
