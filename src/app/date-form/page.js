import React from "react";
import NavBar from "../components/Navbar";

export default function DateForm() {
    return(
        <main className="flex lg:w-full flex-col items-center justify-between">
        <NavBar/>
            <form className="w-80 lg:w-300 border rounded pt-24 px-6">
                <div>
                    <h1 className="font-josefin-regular text-xl">
                        Nueva Cita
                    </h1>
                </div>
                <div>
                    <div className="mb-2">
                        <label for="large-input" class="block mb-2 text-sm font-medium text-primary">Titulo</label>
                        <input type="text" id="inputTitle" class="block p-1.5 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-base"/>
                    </div>
                    <div className="mb-2">
                        <label for="large-input" class="block mb-2 text-sm font-medium text-primary">Fecha</label>
                        <input type="text" id="inputDate" class="block p-1.5 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-base"/>
                    </div>
                    <div className="mb-2">
                        <label for="large-input" class="block mb-2 text-sm font-medium text-primary">Titulo</label>
                        <input type="text" id="inputAdress" class="block p-1.5 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-base"/>
                    </div>
                    <div className="mb-2">
                        <label for="large-input" class="block mb-2 text-sm font-medium text-primary">Fecha</label>
                        <input type="text" id="inputSintoma" class="block p-1.5 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-base"/>
                    </div>
                    <div className="mb-2">
                        <label for="large-input" class="block mb-2 text-sm font-medium text-primary">Fecha</label>
                        <textarea type="text" id="inputDate" class="block p-1.5 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-base"/>
                    </div>
                </div>    
                <div className="flex flex-row">
                    <button
                    type="button"
                    className="border-2 border-primary rounded text-primary text-xs btn-xs sm:btn-sm md:btn-md lg:btn-lg hover:bg-primary-500 hover:bg-opacity-10 hover:text-primary-600"
                    >
                        Añadir evidencia
                    </button>
                    <button
                    type="button"
                    className="border-2 border-primary rounded text-primary text-xs btn-xs sm:btn-sm md:btn-md lg:btn-lg"
                    >
                        Añadir recordatorio
                    </button>
                </div>
                <div>
                    <button id="formSave" type="submit" 
                    className="btn btn-wide bg-primary text-white">
                        GUARDAR
                    </button>
                </div>
            </form>
        </main>
    )
}