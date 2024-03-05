import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function HomeRemind() {
  return (
    <React.Fragment>
      <div>
        <div className="flex flex-col items-center mx-4 mt-7">
          <h3 className="mt-4 font-josefin-regular text-center font-bold hidden md:block">
            Recordatorios
          </h3>

          <div className="hidden md:block mt-4">
            <div className="text-sm mb-2 flex">
              <button className="mr-2">
                <Image
                  alt="notif"
                  width={15}
                  height={15}
                  src="/icons/notif-icon.svg"
                />
              </button>
              <div className="text-sm font-light">
                <p>Dentista</p>
                <p>04/03/2024 - 12:00 pm</p>
              </div>
            </div>

            <div className="text-sm mb-2 flex">
              <button className="mr-2">
                <Image
                  alt="notif"
                  width={15}
                  height={15}
                  src="/icons/notif-icon.svg"
                />
              </button>
              <div className="text-sm font-light">
                <p>Dentista</p>
                <p>04/03/2024 - 12:00 pm</p>
              </div>
            </div>

            <div className="text-sm mb-2 flex">
              <button className="mr-2">
                <Image
                  alt="notif"
                  width={15}
                  height={15}
                  src="/icons/notif-icon.svg"
                />
              </button>
              <div className="text-sm font-light">
                <p>Dentista</p>
                <p>04/03/2024 - 12:00 pm</p>
              </div>
            </div>
          </div>

          {/* recordatorios sin info */}
          {/* <div className="block flex flex-col items-center rounded-lg shadow bg-[#F9F9F9] p-3">
                    <p className="mb-1 text-sm">Aun no tienes recordatorios</p>
                        <button
                        type="button"
                        className="inline-block rounded bg-primary px-6 pb-1 pt-1 text-xs font-medium text-white hover:bg-white hover:border hover:border-primary hover:text-primary"
                        >
                        <Link href="/calendar">Crear Recordatorio</Link>
                        </button>
                </div> */}
        </div>

        <div className="collapse bg-[#EEECF2] shadow md:hidden">
          <input type="checkbox" />
          <div className="collapse-title font-josefin-regular  font-bold">
            <h3>Recordatorios</h3>
          </div>
          <div className="collapse-content">
             <div className="text-sm mb-2 flex">
              <button className="mr-2">
                <Image
                  alt="notif"
                  width={15}
                  height={15}
                  src="/icons/notif-icon.svg"
                />
              </button>
                <div className="text-sm font-light">
                    <p>Dentista</p>
                    <p>04/03/2024 - 12:00 pm</p>
                </div>
             </div>
             <div className="text-sm mb-2 flex">
              <button className="mr-2">
                <Image
                  alt="notif"
                  width={15}
                  height={15}
                  src="/icons/notif-icon.svg"
                />
              </button>
                <div className="text-sm font-light">
                    <p>Dentista</p>
                    <p>04/03/2024 - 12:00 pm</p>
                </div>
             </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
