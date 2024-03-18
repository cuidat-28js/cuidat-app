"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function NavBar() {
  const [navbar, setNavbar] = useState(false);
  return (
    <nav className="shadow-lg shadow-violet-200 w-full bg-white fixed top-0 left-0 right-0 z-10">
      <div className="justify-between py-0 my-0 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
        <div>
          <div className="flex items-center justify-between ml-4 py-1 md:py-3 md:block">
            {/* LOGO */}
            <Link href="/vitalli/home" className="mt-0">
              <Image src="/logo-lg.svg" width={80} height={30} alt="logo" />
            </Link>
            {/* HAMBURGER BUTTON FOR MOBILE */}
            <div className="md:hidden">
              <button
                className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                onClick={() => setNavbar(!navbar)}
              >
                {navbar ? (
                  <Image
                    src="/icons/close-menu.svg"
                    width={30}
                    height={30}
                    alt="logo"
                    className="mr-4"
                  />
                ) : (
                  <Image
                    src="/icons/burger-btn.svg"
                    width={30}
                    height={30}
                    alt="logo"
                    className="focus:border-none active:border-none mr-4"
                  />
                )}
              </button>
            </div>
          </div>
        </div>
        <div>
          <div
            className={` justify-self-center pb-3 mt-2 md:block md:pb-0 md:mt-0 ${
              navbar ? "p-2 md:p-0 block ml-14 space-y-5" : "hidden"
            }`}
          >
            <ul className="h-screen md:h-auto items-center md:justify-center md:flex ">
              <li className=" font-josefin-regular text-lg mt-1 py-2 px-3 md:py-1 md:px-6 text-end border-b-2 md:border-b-0 border-primary">
                <Link
                  href="/vitalli/record"
                  onClick={() => setNavbar(!navbar)}
                  className="flex justify-between"
                >
                  <Image
                    src="icons/mesage-icon.svg"
                    width={30}
                    height={30}
                    alt="icono mensaje"
                    className="md:hidden"
                  />
                  Expediente
                </Link>
              </li>
              <li className="font-josefin-regular text-lg mt-1 py-2 px-3 md:py-1 md:px-6 text-end border-b-2 md:border-b-0 border-primary">
                <Link
                  href="/vitalli/calendar"
                  onClick={() => setNavbar(!navbar)}
                  className="flex justify-between"
                >
                  <Image
                    src="icons/calendar-icon.svg"
                    width={30}
                    height={30}
                    alt="icono calendario"
                    className="md:hidden"
                  />
                  Calendario
                </Link>
              </li>
              <li className="font-josefin-regular text-lg mt-1  py-2 md:py-1 px-3 text-end border-b-2 md:border-b-0 border-primary">
                <Link
                  href="#blog"
                  onClick={() => setNavbar(!navbar)}
                  className="flex justify-between"
                >
                  <Image
                    src="icons/location-icon.svg"
                    width={30}
                    height={30}
                    alt="icono locacion"
                    className="md:hidden"
                  />
                  Especialistas
                </Link>
              </li>
              <li className="font-josefin-regular text-lg mt-1 py-4 md:ml-5 md:py-0.5 px-3 border-b-2 md:border-b-0 border-primary md:text-white md:bg-primary md:rounded-full">
                <Link
                  href="#contact"
                  onClick={() => setNavbar(!navbar)}
                  className="flex justify-between"
                >
                  <Image
                    src="icons/arrow-down.svg"
                    width={25}
                    height={30}
                    alt="icono flecha"
                    className="md:hidden"
                  />
                  ¡Hola Jhon!
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}
