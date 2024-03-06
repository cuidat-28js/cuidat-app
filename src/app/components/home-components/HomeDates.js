import React from "react";
import Image from "next/image";
import AddBtn from "../Add-button";
import { MdEditSquare, MdDelete } from "react-icons/md";
import Link from "next/link";

export default function HomeDates() {
  return (
    <React.Fragment>

      <div className="border border-gay-300 border-y-0 md:px-3">
            <div  className="m-2 flex justify-between h-12 sm:space-x-2 md:mx-6">
                <h3 className="font-josefin-regular text-xl font-extrabold mt-2">Citas</h3>
                <div className="pt-1 mx-1 text-gray-600">
                    <input type="search" placeholder="   Buscar"
                    className="w-17 sm:w-60 lg:w-80 border-2 border-gray-300 bg-white h-8 rounded-full text-sm focus:outline-none"/>
                </div>
                <div className="mt-1.5">
                  <AddBtn />
                </div>
            </div>

        {/* sin info */}
        {/* <div className="mt-6 rounded flex flex-col items-center shadow p-1 bg-[#F9F9F9]">
                                <Image
                                    src="/ilustrations/doctora-record.svg"
                                    width={200}
                                    height={200}
                                />
                                <p className="mb-1">Aun no tienes registros de citas</p>
                                <button
                                    type="button"
                                    className="justify-center rounded m-3 bg-primary px-6 pb-2 pt-2 text-sm font-medium text-white hover:bg-white hover:border hover:border-primary hover:text-primary"
                                >
                                    <Link href="/newAppointment">CREAR CITA</Link>
                                </button>
                                </div> */}
        <div className="collapse collapse-arrow bg-white">
          <input type="radio" name="my-accordion-2" defaultChecked />
          <div className="collapse-title flex items-center">
            <div className="mr-2">
              <Image
                src="./icons/lista.svg"
                width={30}
                height={30}
                alt="calendar-icon"
              />
            </div>
            <div className=" text-base font-lato-regular">Psicologo</div>
          </div>

          <div className="collapse-content font-lato-regular md:flex">
            <div>
              <Image
                alt="receta-img"
                width={200}
                height={150}
                src="./ilustrations/big-landing.svg"
              />
            </div>
            <div className="md:ml-8">
              <p className="font-bold">
                Costo: <span className="font-normal">$500</span>
              </p>
              <p className="font-bold">
                Diagnostico: <span className="font-normal">Depresion</span>
              </p>
              <p className="font-bold">
                Medicamento: <span className="font-normal">Clonazepam</span>
              </p>
              <p className="font-bold">
                Ubicacion: <span className="font-normal">Plaza san carmen</span>
              </p>
              <p className="font-bold">
                Observaciones:{" "}
                <span className="font-normal">Salir a caminar</span>
              </p>
              <div className=" mt-4">
                <button className="mr-2">
                  <MdEditSquare style={{ color: "#4D11AF" }} />
                </button>
                <button>
                  <MdDelete style={{ color: "#4D11AF" }} />
                </button>
              </div>
            </div>
          </div>
        </div>

          <div className="divider my-1"></div>

        {/* <div className="collapse collapse-arrow bg-white">
          <input type="radio" name="my-accordion-2" defaultChecked />
          <div className="collapse-title flex items-center">
            <div className="mr-2">
              <Image
                src="./icons/lista.svg"
                width={15}
                height={15}
                alt="calendar-icon"
              />
            </div>
            <div className=" text-base font-lato-regular">Psicologo</div>
          </div>

          <div className="collapse-content font-lato-regular md:flex">
            <div>
              <Image
                alt="receta-img"
                width={200}
                height={150}
                src="./ilustrations/big-landing.svg"
              />
            </div>
            <div className="md:ml-8">
              <p className="font-bold">
                Costo: <span className="font-normal">$500</span>
              </p>
              <p className="font-bold">
                Diagnostico: <span className="font-normal">Depresion</span>
              </p>
              <p className="font-bold">
                Medicamento: <span className="font-normal">Clonazepam</span>
              </p>
              <p className="font-bold">
                Ubicacion: <span className="font-normal">Plaza san carmen</span>
              </p>
              <p className="font-bold">
                Observaciones:{" "}
                <span className="font-normal">Salir a caminar</span>
              </p>

              <div className=" mt-4">
                <button className="mr-2">
                  <MdEditSquare style={{ color: "#4D11AF" }} />
                </button>
                <button>
                  <MdDelete style={{ color: "#4D11AF" }} />
                </button>
              </div>
            </div>
          </div>
        </div> */}

      </div>
    </React.Fragment>
  );
}
