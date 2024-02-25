import React from "react";
import NavBar from "../components/Navbar";
import Footer from "../components/landing-components/Footer";

export default function ProfileForm() {
    return(
        <div className="flex min-h-screen lg:w-full flex-col items-center justify-between">
        <NavBar/>
            <form className="md:w-1/3 flex flex-col w-80 border-2 rounded pt-6 items-center mt-20 bg-white">
                <div className="mb-4">
                    <h1 className="font-josefin-regular text-xl">
                        Completa tu Perfil
                    </h1>
                </div>
                <div>
                    <div className="mb-2">
                        <label for="large-input" className="block mb-2 text-sm font-medium text-primary">Nombre</label>
                        <input type="text" id="nombre" className="block p-1 md:px-8 md:w-1/1 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-base"/>
                    </div>
                    <div className="mb-2">
                        <label for="large-input" className="block mb-2 text-sm font-medium text-primary">Apeido</label>
                        <input type="text" id="apeido" className="block p-1 md:px-8 md:w-1/1 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-base"/>
                    </div>
                    <div className="mb-2">
                        <label for="large-input" className="block mb-2 text-sm font-medium text-primary">Fecha de Nacimiento</label>
                        <input type="date" id="nacimiento" className="block p-1 md:px-8 md:w-1/1 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-base"/>
                    </div>
                    <div className="dropdown dropdown-bottom">
                    <div tabIndex={0} role="button" className="btn btn-sm btn-wide px-2 m-2 ml-0">Sexo</div>
                        <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                            <li><a>Hombre</a></li>
                            <li><a>Mujer</a></li>
                        </ul>
                    </div>
                    <div className="mb-2">
                        <label for="large-input" className="block mb-2 text-sm font-medium text-primary">Telefono</label>
                        <input type="text" id="telefono" className="block p-1 md:px-8 md:w-1/1 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-base"/>
                    </div>
                    <div className="mb-2">
                        <label for="large-input" className="block mb-2 text-sm font-medium text-primary">Domicilio</label>
                        <input type="text" id="domicilio" className="block p-1 md:px-8 md:w-1/1 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-base"/>
                    </div>
                </div>    
                <div className="flex flex-row p-2 mt-2">
                    <button
                    type="button"
                    className="m-2 border border-primary rounded text-xs btn-s sm:btn-sm md:btn-md hover:bg-primary-500 hover:bg-opacity-10 hover:text-primary-600"
                    >
                    Foto
                    </button>
                </div>
                <div className="mb-4">
                    <button id="formSave" type="submit" 
                    className="rounded py-1 px-8 bg-primary text-white ">
                        GUARDAR
                    </button>
                </div>
            </form>
        <Footer/>
        </div>
    )
}