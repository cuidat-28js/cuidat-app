import React from "react"
import Navbar from  "../components/Navbar"
import EmptyRecord from "../components/componentsEmpty/EmptyRecord"
import Link from "next/link"

export default function Expediente() {

    return(
        <div id="record" className="section relative pt-16 pb-8 md:pt-16 md:pb-0 bg-white">
        <Navbar/>
        <div className="container mt-2 xl:max-w-6xl mx-auto lg:px-8">
                <div className="flex items-center justify-center md:flex lg:pt-2 lg:my-4 my-2"> 
                <h2 className="text-xl font-josefin-regular text-bold">Expediente</h2>
                <div className="ml-4">
            </div>
        </div>
        
        <div className="flex flex-wrap flex-row m-1 lg:mx-16 text-center">
            <div className="flex-shrink px-1 w-full sm:w-1/2 lg:w-1/3 lg:px-1">
                {/* block */}
                <div className="py-3 px-1 lg:h-32 lg:px-2 bg-gray-50 border-b mb-2 mx-0.5 border-gray-100">
                    <div className="flex flex-row justify-center">
                        <h3 className="text-md lg:text-lg font-josefin-regular text-black">Contacto de Emergencia</h3> 
                    </div>
                    <div className="text-sm lg:text-lg text-gray-500">
                        <EmptyRecord/>
                    </div>
                </div>
            </div>
            {/* END block */}
            <div className="flex-shrink w-full sm:w-1/2 lg:w-1/3 lg:px-1">
                <div className="relative py-3 px-1 lg:h-32 lg:px-2 bg-gray-50 border-b mb-2 mx-0.5 border-gray-100">
                    <div className="flex flex-row justify-center">
                        <h3 className="text-md lg:text-lg font-josefin-regular text-black">Grupo Sanguineo</h3>
                    </div>
                    <div className="text-sm lg:text-lg text-gray-500">
                        <EmptyRecord/>
                    </div>
                </div>
            </div>
            {/* END block */}
            <div className="flex-shrink w-full sm:w-1/2 lg:w-1/3 lg:px-1">
                <div className="py-3 px-1 lg:h-32 lg:pr-2 lg:pl-4 bg-gray-50 border-b mb-2 mx-0.5 border-gray-100">
                    <div className="flex flex-row justify-center">
                        <h3 className="text-md lg:text-lg font-josefin-regular text-black">Alergias</h3>
                    </div>
                    <div className="text-sm lg:text-lg text-gray-500">
                        <EmptyRecord/>
                    </div>
                </div>
            </div>
            {/* END block */}
            <div className="flex-shrink px-1 w-full sm:w-1/2 lg:w-1/3 lg:px-1">
                <div className="py-3 px-1 lg:h-32 lg:px-2 bg-gray-50 border-b mb-2 mx-0.5 border-gray-100">
                    <div className="flex flex-row justify-center">
                        <h3 className="text-md lg:text-lg font-josefin-regular text-black">Medicamento Controlado</h3>
                    </div>
                    <div className="text-sm lg:text-lg text-gray-500">
                        <EmptyRecord/>
                    </div>
                </div>
            </div>
            {/* END block */}
            <div className="flex-shrink px-1 w-full sm:w-1/2 lg:w-1/3 lg:px-1">
                <div className="py-3 px-1 lg:h-32 lg:px-2 bg-gray-50 border-b mb-2 mx-0.5 border-gray-100">
                    <div className="flex flex-row justify-center">
                        <h3 className="text-md mb-2 mr-6 lg:text-lg font-josefin-regular text-black">Enfermedades Cronicas</h3>
                    </div>
                    <div className="text-sm lg:text-lg text-gray-500">
                        <EmptyRecord/>
                    </div>
                </div>
            </div>
            {/* END block */}
            <div className="flex-shrink w-full sm:w-1/2 lg:w-1/3 lg:px-1">
                <div className="py-3 px-1 lg:h-32 lg:px-2 bg-gray-50 border-b mb-2 mx-0.5 border-gray-100">
                    <div className="flex flex-row justify-center">
                        <h3 className="text-md lg:text-lg font-josefin-regular text-black">Cardiovasculares</h3>
                    </div>
                    <div className="text-sm lg:text-lg text-gray-500">
                        <EmptyRecord/>
                    </div>
                </div>
            </div>
            {/* END block */}
            <div className="flex-shrink w-full sm:w-1/2 lg:w-1/3 lg:px-1">
                <div className="py-3 px-1 lg:h-32 lg:px-4 bg-gray-50 border-b mb-2 mx-0.5 border-gray-100">
                    <div className="flex flex-row justify-center">
                        <h3 className="text-md lg:text-lg mb-2 font-josefin-regular text-black">Antecedentes Familiares</h3>
                    </div>
                    <div className="text-sm lg:text-lg text-gray-500">
                        <EmptyRecord/>
                    </div>
                </div>
            </div>
            {/* END block */}
            <div className="flex-shrink px-1 w-full sm:w-1/2 lg:w-1/3 lg:px-1">
                <div className="py-3 px-1 lg:h-32 lg:px-2 bg-gray-50 border-b mb-2 mx-0.5 border-gray-100">
                    <div className="flex flex-row justify-center">
                        <h3 className="text-md mb-2 lg:text-lg font-josefin-regular text-black">Informacion Adicional</h3>
                    </div>
                    <div className="text-sm lg:text-lg text-gray-500">
                        <EmptyRecord/>
                    </div>
                </div>
            </div>
            {/* END block */}
            <div className="flex-shrink px-1 max-w-full w-full sm:w-1/2 lg:w-1/3 lg:px-1">
                <div className="py-8 px-2 md:px-12 mb-2">
                    <button className="btn btn-sm lg:btn-md btn-primary text-sm lg:text-lg w-full hover:bg-white hover:border-primary hover:text-primary"
                     type="button">
                        <Link href="/recordForm">
                        Editar
                        </Link>
                     </button>
                </div>
               {/* end block */}
            </div>
        </div>
        {/* end row */}
    </div>
</div>
    )
}