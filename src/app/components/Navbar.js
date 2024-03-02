"use client"
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export default function NavBar() {
  const [navbar, setNavbar] = useState(false);
  return (
      <nav className="shadow-lg shadow-[#E7E3FF] w-full bg-white fixed top-0 left-0 right-0 z-10">
        <div className="justify-between py-0 my-0 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
          <div>
            <div className="flex items-center justify-between py-1 md:py-3 md:block">
              {/* LOGO */}
              <Link href="/" className='mt-0'>
                <Image src="/logo-lg.svg" 
                    width={80}
                    height={30}
                    alt="logo" />
              </Link>
              {/* HAMBURGER BUTTON FOR MOBILE */}
              <div className="md:hidden">
                <button
                  className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                  onClick={() => setNavbar(!navbar)}
                >
                  {navbar ? (
                    <Image src="/icons/close-menu.svg" width={30} height={30} alt="logo" />
                  ) : (
                    <Image
                      src="/icons/burger-btn.svg"
                      width={20}
                      height={30}
                      alt="logo"
                      className="focus:border-none active:border-none mr-2"
                    />
                  )}
                </button>
              </div>
            </div>
          </div>
          <div>
            <div
              className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
                navbar ? 'p-12 md:p-0 block' : 'hidden'
              }`}
            >
              <ul className="h-screen md:h-auto items-center justify-center md:flex ">
                <li className="text-l font-josefin-regular text-black pb-1 py-1  md:px-6 text-center border-b-2 md:border-b-0  hover:border-primary  border-purple-900  md:hover:text-purple-600 md:hover:bg-transparent">
                  <Link href="/record" onClick={() => setNavbar(!navbar)}>
                    Expediente
                  </Link>
                </li>
                <li className="pb-1 text-l font-josefin-regular text-black py-1 md:px-6 text-center border-b-2 md:border-b-0  hover:bg-purple-900  border-purple-900  md:hover:text-purple-600 md:hover:bg-transparent">
                  <Link href="/calendar" onClick={() => setNavbar(!navbar)}>
                    Calendario
                  </Link>
                </li>
                <li className="text-l font-josefin-regular text-black py-1 px-2 pb-1 text-center  border-b-2 md:border-b-0  hover:bg-purple-600  border-purple-900  md:hover:text-purple-600 md:hover:bg-transparent">
                  <Link href="#blog" onClick={() => setNavbar(!navbar)}>
                    Especialistas
                  </Link>
                </li>
                <li className="pb-1 text-l font-josefin-regular text-black py-1 px-6 text-center  border-b-2 md:border-b-0  hover:bg-purple-600  border-purple-900  md:hover:text-purple-600 md:hover:bg-transparent">
                  <Link href="#contact" onClick={() => setNavbar(!navbar)}>
                    ¡Hola Jhon!
                  </Link>
                </li>
                <li className="text-l font-josefin-regular text-white py-1 px-2 text-center bg-violetVitalli rounded-full border-b-2 md:border-b-0 hover:border-purple hover:bg-purple-600  border-purple-900  md:hover:text-purple-600 md:hover:bg-transparent">
                  <Link href="#projects" onClick={() => setNavbar(!navbar)}>
                    JD
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
  );
}

