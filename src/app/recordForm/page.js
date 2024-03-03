"use client"
import React from "react"
import { useState } from "react";
import Navbar from  "../components/Navbar"
import AddBtn from "../components/Add-button"
import Footer from "../components/landing-components/Footer";

export default function RecordForm() {

    const [selectedBloodType, setSelectedBloodType] = useState('');
    const [inputAlergies, setInputAlergies] = useState('');
    const [inputChronic, setInputChronic] = useState('');
    const [inputMedicine, setInputMedicine] = useState('');
    const [inputHistory, setInputHistory] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(selectedBloodType, inputAlergies, inputChronic, inputMedicine, inputHistory);
    };

    const handleRadioChange = (e) => {
    setSelectedBloodType(e.target.value);
    
    };

    const handleAlergiesChange = (e) => {
        setInputAlergies(e.target.value);
    };

    const handleChronicChange = (e) => {
        setInputChronic(e.target.value);
    };
    
    const handleMedicineChange = (e) => {
        setInputMedicine(e.target.value);
    };
    
    const handleHistoryChange = (e) => {
        setInputHistory(e.target.value);
    };
  
    return (
    <div id="recordForm" className="flex flex-col min-h-screen section relative pt-16 md:pt-16 md:pb-0 bg-white">
    <Navbar/>
    
        <div className="container mt-2 md:mb-22 lg:max-w-6xl mx-auto lg:px-8">
                <div className="flex items-center justify-center md:flex lg:my-4 my-2"> 
                <h2 className="text-xl font-josefin-regular text-bold">Expediente</h2>
                <div className="ml-4">
            </div>
        </div>
        
        <form onSubmit={handleSubmit}
        className="flex flex-wrap flex-row m-1 lg:mx-16 text-center shadow-xl shadow-violet-300">
            {/* START block */}
            <div className="flex-shrink w-full sm:w-1/2 lg:w-1/3 md lg:px-1 bg-violet-200/70">
                <div className="py-3 px-1 h-32 lg:h-44 lg:pr-2 lg:pl-4 border-b mb-2 mx-0.5 bg-white">
                    <div className="flex flex-row mb-2 lg:my-2">
                        <h3 className="ml-2 text-md lg:text-lg font-josefin-regular text-black">Grupo Sanguineo</h3>
                    </div>
                    <div className="flex flex-col m-3">
                        <div className="flex flex-row mb-2.5 lg:my-3 space-x-6 my-1 lg:my-2">
                        <label className="inline-flex items-center">
                            <input className="radio radio-sm radio-primary"
                            type="radio" value="A+" name="bloodType"
                            checked={selectedBloodType === 'A+'}
                            onChange={handleRadioChange}
                            />
                            <span className="ml-1 text-sm">A+</span>
                        </label>
                        <label className="inline-flex items-center">
                            <input className="radio radio-sm radio-primary"
                            type="radio" value="A-" name="bloodType"
                            checked={selectedBloodType === 'A-'}
                            onChange={handleRadioChange}
                            />
                            <span className="ml-1 text-sm">A-</span>
                        </label>
                        <label className="inline-flex items-center">
                            <input className="radio radio-sm radio-primary"
                            type="radio" value="B+" name="bloodType"
                            checked={selectedBloodType === 'B+'}
                            onChange={handleRadioChange}
                            />
                            <span className="ml-1 text-sm">B+</span>
                        </label>
                        <label className="inline-flex items-center">
                            <input className="radio radio-sm radio-primary"
                            type="radio" value="B-" name="bloodType"
                            checked={selectedBloodType === 'B-'}
                            onChange={handleRadioChange}
                            />
                            <span className="ml-1 text-sm">B-</span>
                        </label>
                        </div>
                        <div className="flex flex-row space-x-4 my-1 lg:my-2">
                        <label className="inline-flex items-center">
                            <input className="radio radio-sm radio-primary"
                            type="radio" value="AB+" name="bloodType"
                            checked={selectedBloodType === 'AB+'}
                            onChange={handleRadioChange}
                            />
                            <span className="ml-1 text-sm">AB+</span>
                        </label>
                        <label className="inline-flex items-center">
                            <input className="radio radio-sm radio-primary"
                            type="radio" value="AB-" name="bloodType"
                            checked={selectedBloodType === 'AB-'}
                            onChange={handleRadioChange}
                            />
                            <span className="ml-1 text-sm">AB-</span>
                        </label>
                        <label className="inline-flex items-center">
                            <input className="radio radio-sm radio-primary"
                            type="radio" value="O+" name="bloodType"
                            checked={selectedBloodType === 'O+'}
                            onChange={handleRadioChange}
                            />
                            <span className="ml-1 mr-1 text-sm">O+</span>
                        </label>
                        <label className="inline-flex items-center">
                            <input className="radio radio-sm radio-primary"
                            type="radio" value="O-" name="bloodType"
                            checked={selectedBloodType === 'O-'}
                            onChange={handleRadioChange}
                            />
                            <span className="ml-1 text-sm">O-</span>
                        </label>
                        </div>
                    </div>
                </div>
            </div>
            {/* END block */}
            <div className="flex-shrink px-1 w-full sm:w-1/2 lg:w-1/3 lg:px-1 bg-violet-200/70">
                <div className="py-3 px-1 h-32 lg:h-44 lg:px-2 bg-white border-b mb-2 mx-0.5">
                    <div className="justify-between flex flex-row mb-2 lg:my-2">
                        <h3 className="text-md lg:text-lg font-josefin-regular text-black">Alergias</h3>
                        <div className="mr-1">
                            <AddBtn />
                        </div>
                    </div>
                    <input type="text" placeholder="Polvo" value={inputAlergies} onChange={handleAlergiesChange}
                    className="mt-2 input input-xs lg:input-sm input-bordered input-primary w-full max-w-xs" />
                </div>
            </div>
            {/* END block */}
            <div className="flex-shrink px-1 w-full sm:w-1/2 lg:w-1/3 lg:px-1 bg-violet-200/70">
                <div className="py-3 px-1 h-32 lg:h-44 lg:px-2 bg-white border-b mb-2 mx-0.5">
                    <div className="flex flex-row justify-between mb-2 lg:my-2">
                        <h3 className="text-md mr-6 lg:text-lg font-josefin-regular text-black">Enfermedades Cronicas</h3>
                        <div className="mr-1">
                            <AddBtn />
                        </div>
                    </div>
                    <input type="text" placeholder="Diabetes" value={inputChronic} onChange={handleChronicChange}
                    className="mt-2 input input-xs lg:input-sm input-bordered input-primary w-full max-w-xs" />
                </div>
            </div>
            {/* END block */}
            <div className="flex-shrink w-full sm:w-1/2 lg:w-1/3 lg:px-1 bg-violet-200/70">
                <div className="py-3 px-1 h-32 lg:h-44 lg:px-2 bg-white border-b mb-2 mx-0.5">
                    <div className="flex flex-row justify-between mb-2 lg:my-2">
                        <h3 className="ml-2 text-md lg:text-lg font-josefin-regular text-black">Medicamento Controlado</h3>
                        <div className="mr-1">
                            <AddBtn />
                        </div>
                    </div>
                    <input type="text" placeholder="Clonazepan" value={inputMedicine} onChange={handleMedicineChange}
                    className="mt-2 input input-xs lg:input-sm input-bordered input-primary w-full max-w-xs" />
                </div>
            </div>
            {/* END block */}
            <div className="flex-shrink w-full sm:w-1/2 lg:w-1/3 lg:px-1 bg-violet-200/70">
                <div className="py-3 px-1 h-32 lg:h-44 lg:px-4 bg-white border-b mb-2 mx-0.5">
                    <div className="flex flex-row justify-between mb-2 lg:my-2">
                        <h3 className="text-md lg:text-lg font-josefin-regular text-black">Antecedentes Familiares</h3>
                        <div className="mr-1">
                            <AddBtn />
                        </div>
                    </div>
                    <input type="text" placeholder="Madre - Diabetes" value={inputHistory} onChange={handleHistoryChange}
                    className="mt-2 input input-xs lg:input-sm input-bordered input-primary w-full max-w-xs" />
                </div>
            </div>
            {/* END block */}
            <div className="flex-shrink w-full sm:w-1/2 lg:w-1/3 lg:px-1 bg-violet-200/70">
                <div className="py-3 px-1 lg:h-44 lg:px-4 lg:pt-14 mb-2 mx-0.5 bg-transparent">
                    <button className="btn btn-sm lg:btn-md btn-primary text-sm lg:text-lg w-1/2 hover:bg-white hover:border-primary hover:text-primary"
                    type="submit">
                        Guardar
                    </button>
                </div>
               {/* end block */}
            </div>
        </form>
        {/* end row */}
    </div>
    {/* <div className="circlePosition w-[590px] h-[400px] bg-[#6851FF] rounded-[100%] absolute z-1 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] blur-[90px]"></div> */}
    <Footer/>
    
</div>
    )
}
