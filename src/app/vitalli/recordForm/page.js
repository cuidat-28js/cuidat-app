"use client"
import React from "react"
import { useForm } from "react-hook-form";
import { useState } from "react";
import AllergyForm from "./components/AllergyForm";
import Link from "next/link"
import ChronicForm from "./components/ChronicForm";
import MedicineForm from "./components/MedicineForm";
import FamilyForm from "./components/Familyform";
import ContactForm from "./components/ContactForm";
import BloodForm from "./components/BloodGroupForm";
import Navbar from  "../../components/Navbar"
import Footer from "../../components/landing-components/Footer";

export default function RecordForm() {

    const {
        register,
        formState: { errors },
    } = useForm();
  
    return (
    <div id="recordForm" className="flex flex-col items-center min-h-screen section relative pt-16 md:pt-16 md:pb-0 bg-white">
    <Navbar/>
    
        <div className="container flex flex-col items-center mt-2 md:mb-22 lg:max-w-6xl mx-auto lg:px-8">
                <div className="flex items-center justify-center md:flex lg:my-4 my-2"> 
                    <h2 className="text-xl font-josefin-regular text-bold">Expediente</h2>   
                </div>
            
            <div className="flex flex-col items-center">
                <div className="flex flex-wrap items-center flex-row m-1 lg:mx-16 text-center">
                    {/* START block */}
                    
                    <div className="flex-shrink px-1 w-full sm:w-1/2 lg:w-1/3 lg:px-1 bg-white">
                        <AllergyForm/>
                    </div> 
                    {/* END block */}

                    <div className="flex-shrink sm:w-1/2 lg:w-1/3 md lg:px-1 ">
                        <MedicineForm/>
                    </div>
                    {/* END block */}

                    <div className="flex-shrink px-1 w-full sm:w-1/2 lg:w-1/3 lg:px-1 bg-white">
                        <ChronicForm/>  
                    </div>
                    {/* END block */}

                    <div className="flex-shrink w-full sm:w-1/2 lg:w-1/3 lg:px-1 bg-white">
                        <BloodForm/> 
                    </div>
                    {/* END block */}

                    <div className="flex-shrink w-full sm:w-1/2 lg:w-1/3 lg:px-1 bg-white">
                        <FamilyForm/>
                    </div>
                    {/* END block */}

                    <div className="flex-shrink w-full sm:w-1/2 lg:w-1/3 lg:px-1 bg-white">
                        <ContactForm/>
                    {/* <div className="py-3 px-1 h-32 lg:h-44 lg:px-4 bg-white shadow-md shadow-violet-400 rounded mb-2 mx-0.5">
                        <div className="flex flex-row justify-between mb-2 lg:my-2">
                            <h3 className="text-md lg:text-lg font-josefin-regular text-black">Contacto de Emergencia</h3>
                            <div className="mr-1">
                                <AddBtn />
                            </div>
                        </div>
                        <input type="text" placeholder="Padre - 1234567" {...register("contact")}
                        className="mt-2 input input-xs lg:input-sm input-bordered input-primary w-full max-w-xs" />
                    </div> */}
                    </div>
                </div>
                    {/* end block */}
                <div className="flex w-66 bg-white items-center mt-2 mb-6 md:mt-6">
                    <button className="btn btn-wide btn-primary text-md md:text-lg hover:bg-white hover:border-primary hover:text-primary">
                        <Link href="/record">Finalizar Editar</Link>
                    </button>
                </div>
            </div>
            {/* end row */}
        </div>
        <Footer/>
    </div>
    )
}


