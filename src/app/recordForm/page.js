"use client"
import React from "react"
import { useForm } from "react-hook-form";
import { MdDelete } from "react-icons/md";
import Navbar from  "../components/Navbar"
import AddBtn from "../components/Add-button"
import Footer from "../components/landing-components/Footer";

export default function RecordForm() {

    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();

   
    const handleClick = () => {
        console.log(inputAlergies);
    };
  
    return (
    <div id="recordForm" className="flex flex-col items-center min-h-screen section relative pt-16 md:pt-16 md:pb-0 bg-white">
    <Navbar/>
    
        <div className="container flex flex-col items-center mt-2 md:mb-22 lg:max-w-6xl mx-auto lg:px-8">
            <div className="flex items-center justify-center md:flex lg:my-4 my-2"> 
                <h2 className="text-xl font-josefin-regular text-bold">Expediente</h2>   
            </div>
        
        <form onSubmit={handleSubmit((data) => {
            console.log(data);})}
            className="flex flex-col items-center">
            <div className="flex flex-wrap items-center flex-row m-1 lg:mx-16 text-center">
            
            <div className="flex-shrink sm:w-1/2 lg:w-1/3 md lg:px-1 ">
                {/* START block */}
                <div className="py-3 px-1 h-32 lg:h-44 lg:pr-2 lg:pl-4 shadow-md shadow-violet-400 rounded mb-2 mx-0.5 bg-white">
                    <div className="flex flex-row mb-2 lg:my-2">
                        <h3 className="ml-2 text-md lg:text-lg font-josefin-regular text-black">Grupo Sanguineo</h3>
                    </div>
                    <div className="flex flex-col m-3">
                        <div className="flex flex-row mb-2.5 lg:my-3 space-x-6 my-1 lg:my-2">
                        <label className="inline-flex items-center">
                            <input className="radio radio-sm radio-primary"
                            type="radio" value="A+" name="bloodType"
                            
                            {...register("bloodGroup")}
                            />
                            <span className="ml-1 text-sm">A+</span>
                        </label>
                        <label className="inline-flex items-center">
                            <input className="radio radio-sm radio-primary"
                            type="radio" value="A-" name="bloodType"
                            
                            {...register("bloodGroup")}
                            />
                            <span className="ml-1 text-sm">A-</span>
                        </label>
                        <label className="inline-flex items-center">
                            <input className="radio radio-sm radio-primary"
                            type="radio" value="B+" name="bloodType"
                            
                            {...register("bloodGroup")}
                            />
                            <span className="ml-1 text-sm">B+</span>
                        </label>
                        <label className="inline-flex items-center">
                            <input className="radio radio-sm radio-primary"
                            type="radio" value="B-" name="bloodType"
                            
                            {...register("bloodGroup")}
                            />
                            <span className="ml-1 text-sm">B-</span>
                        </label>
                        </div>
                        <div className="flex flex-row space-x-4 my-1 lg:my-2">
                        <label className="inline-flex items-center">
                            <input className="radio radio-sm radio-primary"
                            type="radio" value="AB+" name="bloodType"
                            
                            {...register("bloodGroup")}
                            />
                            <span className="ml-1 text-sm">AB+</span>
                        </label>
                        <label className="inline-flex items-center">
                            <input className="radio radio-sm radio-primary"
                            type="radio" value="AB-" name="bloodType"
                            
                            {...register("bloodGroup")}
                            />
                            <span className="ml-1 text-sm">AB-</span>
                        </label>
                        <label className="inline-flex items-center">
                            <input className="radio radio-sm radio-primary"
                            type="radio" value="O+" name="bloodType"
                            
                            {...register("bloodGroup")}
                            />
                            <span className="ml-1 mr-1 text-sm">O+</span>
                        </label>
                        <label className="inline-flex items-center">
                            <input className="radio radio-sm radio-primary"
                            type="radio" value="O-" name="bloodType"
                            
                            {...register("bloodGroup")}
                            />
                            <span className="ml-1 text-sm">O-</span>
                        </label>
                        </div>
                    </div>
                </div>
            </div>
            {/* END block */}
            <div className="flex-shrink px-1 w-full sm:w-1/2 lg:w-1/3 lg:px-1 bg-white">
                <div className="py-3 px-1 h-32 lg:h-44 lg:px-2 bg-white shadow-md shadow-violet-400 rounded mb-2 mx-0.5">
                    <div className="justify-between flex flex-row mb-1 lg:my-1">
                        <h3 className="text-md lg:text-lg font-josefin-regular text-black">Alergias</h3>
                        <div className="mr-1">
                            <AddBtn onClick={handleClick} />
                        </div>
                    </div>
                    <input type="text" placeholder="Polvo" {...register("alergies")}
                    className="mt-2 input input-xs lg:input-sm input-bordered input-primary w-full max-w-xs" />
                    <div className="space-y-1 space-x-2 mt-3">
                        <div className="flex flex-row ml-auto">
                            <div className="badge badge-ghost space-x-2 py-4 mr-0" >
                
                                <p>Polvo</p>
                                <button className="p-1 rounded-full hover:bg-gray-300" ><MdDelete /></button> 
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* END block */}
            <div className="flex-shrink px-1 w-full sm:w-1/2 lg:w-1/3 lg:px-1 bg-white">
                <div className="py-3 px-1 h-32 lg:h-44 lg:px-2 bg-white shadow-md rounded shadow-violet-400 mb-2 mx-0.5">
                    <div className="flex flex-row justify-between mb-2 lg:my-2">
                        <h3 className="text-md mr-6 lg:text-lg font-josefin-regular text-black">Enfermedades Cronicas</h3>
                        <div className="mr-1">
                            <AddBtn />
                        </div>
                    </div>
                    <input type="text" placeholder="Diabetes" {...register("chronic")}
                    className="mt-2 input input-xs lg:input-sm input-bordered input-primary w-full max-w-xs" />
                </div>
            </div>
            {/* END block */}
            <div className="flex-shrink w-full sm:w-1/2 lg:w-1/3 lg:px-1 bg-white">
                <div className="py-3 px-1 h-32 lg:h-44 lg:px-2 bg-white shadow-md shadow-violet-400 rounded mb-2 mx-0.5">
                    <div className="flex flex-row justify-between mb-2 lg:my-2">
                        <h3 className="ml-2 text-md lg:text-lg font-josefin-regular text-black">Medicamento Controlado</h3>
                        <div className="mr-1">
                            <AddBtn />
                        </div>
                    </div>
                    <input type="text" placeholder="Clonazepan" {...register("medicine")}
                    className="mt-2 input input-xs lg:input-sm input-bordered input-primary w-full max-w-xs" />
                </div>
            </div>
            {/* END block */}
            <div className="flex-shrink w-full sm:w-1/2 lg:w-1/3 lg:px-1 bg-white">
                <div className="py-3 px-1 h-32 lg:h-44 lg:px-4 bg-white shadow-md shadow-violet-400 rounded mb-2 mx-0.5">
                    <div className="flex flex-row justify-between mb-2 lg:my-2">
                        <h3 className="text-md lg:text-lg font-josefin-regular text-black">Antecedentes Familiares</h3>
                        <div className="mr-1">
                            <AddBtn />
                        </div>
                    </div>
                    <input type="text" placeholder="Madre - Diabetes" {...register("history")}
                    className="mt-2 input input-xs lg:input-sm input-bordered input-primary w-full max-w-xs" />
                </div>
            </div>
            {/* END block */}
            <div className="flex-shrink w-full sm:w-1/2 lg:w-1/3 lg:px-1 bg-white">
                <div className="py-3 px-1 h-32 lg:h-44 lg:px-4 bg-white shadow-md shadow-violet-400 rounded mb-2 mx-0.5">
                    <div className="flex flex-row justify-between mb-2 lg:my-2">
                        <h3 className="text-md lg:text-lg font-josefin-regular text-black">Contacto de Emergencia</h3>
                        <div className="mr-1">
                            <AddBtn />
                        </div>
                    </div>
                    <input type="text" placeholder="Padre - 1234567" {...register("contact")}
                    className="mt-2 input input-xs lg:input-sm input-bordered input-primary w-full max-w-xs" />
                </div>
            </div>
        </div>
            {/* end block */}
                <div className="flex w-66 bg-white items-center mt-2 mb-6 md:mt-6">
                    <button className="btn btn-wide btn-primary text-md md:text-lg hover:bg-white hover:border-primary hover:text-primary"
                            type="submit">
                        Guardar
                    </button>
                </div>
        </form>
        {/* end row */}
    </div>
    <Footer/>
</div>
    )
}
