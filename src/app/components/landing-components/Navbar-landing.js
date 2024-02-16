"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";

function NavBar() {
  const [navbar, setNavbar] = useState(false);
  const router = useRouter();
  return (
    <div>
      <nav className="shadow-lg shadow-[#E7E3FF] w-full bg-white fixed top-0 left-0 right-0 z-10">
        <div className="justify-between px-2 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
          <div>
            <div className="flex items-center justify-between py-1 md:py-5 md:block">
              {/* LOGO */}
              <Link href="/" className="mt-0">
                <Image src="/logo-lg.svg" width={100} height={30} alt="logo" />
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
                      width={25}
                      height={25}
                      alt="logo"
                    />
                  ) : (
                    <Image
                      src="/icons/burger-btn.svg"
                      width={25}
                      height={25}
                      alt="logo"
                      className="focus:border-none active:border-none"
                    />
                  )}
                </button>
              </div>
            </div>
          </div>
          <div>
            <div
              className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
                navbar ? "p-12 md:p-0 block" : "hidden"
              }`}
            >
              <ul className="h-screen md:h-auto items-center justify-start md:flex ">
                <li className="pb-2  font-lato-regular text-black py-2 hover:text-violetVitalli hover:font-bold md:px-6 text-center md:border-b-0 md:hover:text-violetVitalli md:hover:bg-transparent md:hover:font-bold md:text-xs lg:text-lg">
                  <Link href="#about" onClick={() => setNavbar(!navbar)}>
                    ¿Que ofrecemos?
                  </Link>
                </li>
                <li className="pb-62  font-lato-regular text-black py-2 md:px-6 text-center hover:text-violetVitalli hover:font-bold md:border-b-0 md:hover:text-violetVitalli md:hover:bg-transparent md:hover:font-bold md:text-xs lg:text-lg">
                  <Link href="#about" onClick={() => setNavbar(!navbar)}>
                    Funcionalidades
                  </Link>
                </li>
                <li className="pb-2  font-lato-regular text-black py-2 px-6 text-center hover:text-violetVitalli hover:font-bold md:border-b-0 md:hover:text-violetVitalli md:hover:bg-transparent md:hover:font-bold md:text-xs lg:text-lg">
                  <Link href="#blog" onClick={() => setNavbar(!navbar)}>
                    Beneficios
                  </Link>
                </li>
                <li className="pb-2  font-lato-regular text-violetVitalli py-2 px-6 text-center hover:text-violetVitalli hover:font-bold md:border-b-0 border-purple-900 md:hover:font-bold md:hover:bg-transparent md:text-xs lg:text-lg">
                  <Link href="/login" onClick={() => setNavbar(!navbar)}>
                    Inicia Sesion
                  </Link>
                </li>
                <li className="pb-2 text-l font-lato-regular py-2 px-2 text-center md:border-b-0 md:hover:text-violetVitalli md:hover:bg-transparent">
                  <button
                    className="btn rounded-full bg-[#4D11AF]  text-[#ffff] hover:bg-[#4D11AF] hover:shadow-[#4D11AF] hover:border-[#4D11AF] md:text-xs lg:text-lg"
                    onClick={() => router.push("/signin")}
                  >
                    ¡Registrate!
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
