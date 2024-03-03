import React from "react"
import Navbar from  "../components/Navbar"
import Footer from "../components/landing-components/Footer"
import EmptyRecord from "../components/componentsEmpty/EmptyRecord"
import Link from "next/link"

export default function Expediente() {

    return(
        <div id="recordForm" className="flex flex-col min-h-screen relative pt-16 md:pt-16 md:pb-0 ">
            
            <Navbar/>
            <div className="container mt-2 lg:max-w-6xl mx-auto lg:px-8">
                <div className="flex items-center justify-center md:flex lg:my-4 my-2"> 
                    <h2 className="text-xl font-josefin-regular text-bold">Expediente</h2>
                    <div className="ml-4">
                    </div>
                </div>
        
        <div className="flex flex-wrap flex-row m-1 lg:mx-16 text-center rounded-lg bg-transparent">
            {/* START block */}
            <div className="flex-shrink w-full sm:w-1/2 lg:w-1/3 md lg:px-1 ">
                <div className="py-3 px-1 h-32 mb-2 mx-0.5 lg:h-44 lg:pr-2 lg:pl-4 bg-white rounded-lg shadow-md shadow-violet-400 ">
                    <div className="flex flex-row justify-center mb-2 lg:my-2">
                        <h3 className="ml-2 text-md lg:text-lg font-josefin-regular text-black">Grupo Sanguineo</h3>
                    </div>
                    <div className="flex flex-row justify-center">
                        <EmptyRecord/>  
                    </div>
                </div>
            </div>
            {/* END block */}
            <div className="flex-shrink px-1 w-full sm:w-1/2 lg:w-1/3 lg:px-1  ">
                <div className="py-3 px-1 h-32 mb-2 mx-0.5 lg:h-44 lg:px-2 bg-white rounded-lg shadow-md shadow-violet-400">
                    <div className="justify-center flex flex-row mb-2 lg:my-2">
                        <h3 className="text-md lg:text-lg font-josefin-regular text-black">Alergias</h3>
                    </div>
                    <div className="flex flex-row justify-center">
                        <EmptyRecord/>
                    </div>
                </div>
            </div>
            {/* END block */}
            <div className="flex-shrink px-1 w-full sm:w-1/2 lg:w-1/3 lg:px-1 ">
                <div className="py-3 px-1 h-32 mb-2 mx-0.5 lg:h-44 lg:px-2 bg-whiterounded-lg shadow-md shadow-violet-400">
                    <div className="flex flex-row justify-center mb-2 lg:my-2">
                        <h3 className="text-md lg:text-lg font-josefin-regular text-black">Enfermedades Cronicas</h3>
                    </div>
                    <div className="flex flex-row justify-center">
                        <EmptyRecord/>
                    </div>
                </div>
            </div>
            {/* END block */}
            <div className="flex-shrink w-full sm:w-1/2 lg:w-1/3 lg:px-1 ">
                <div className="py-3 px-1 h-32 mb-2 mx-0.5 lg:h-44 lg:px-2 bg-white rounded-lg shadow-md shadow-violet-400">
                    <div className="flex flex-row justify-center mb-2 lg:my-2">
                        <h3 className="ml-2 text-md lg:text-lg font-josefin-regular text-black">Medicamento Controlado</h3>
                    </div>
                    <div className="flex flex-row justify-center">
                        <EmptyRecord/>
                    </div>
                </div>
            </div>
            {/* END block */}
            <div className="flex-shrink w-full sm:w-1/2 lg:w-1/3 lg:px-1 ">
                <div className="py-3 px-1 h-32 mb-2 mx-0.5 lg:h-44 lg:px-4 rounded-lg bg-white shadow-md shadow-violet-400">
                    <div className="flex flex-row justify-center mb-2 lg:my-2">
                        <h3 className="text-md lg:text-lg font-josefin-regular text-black">Antecedentes Familiares</h3>
                    </div>
                    <div className="flex flex-row justify-center">
                        <EmptyRecord/>
                    </div>
                </div>
            </div>
            {/* END block */}
            <div className="flex-shrink w-full sm:w-1/2 lg:w-1/3 lg:px-1">
                <div className="py-3 px-1 md:h-full lg:px-4 lg:pt-14 mb-2 mx-0.5 bg-transparent">
                    <button className="btn btn-sm lg:btn-md btn-primary text-sm lg:text-lg w-1/2 hover:bg-white hover:border-primary hover:text-primary" type="button">
                        <Link href="/recordForm">Editar</Link>
                    </button>
                </div>
               {/* end block */}
            </div>
        </div>
        {/* end row */}
    </div>
    <Footer/>
</div>    
    )
}