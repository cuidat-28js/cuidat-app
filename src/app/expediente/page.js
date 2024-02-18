import React from "react"
import Navbar from  "../components/Navbar"
import AddBtn from "../components/Add-button"

export default function Expediente() {
    return(
        <main className="min-w-80 items-center justify-center mt-20">
            <Navbar/>
            <div className="flex items-center justify-center md:flex pt-2 mb-2"> 
                <h2 className="text-xl font-josefin-regular text-bold ml-28 pr-8">Expediente</h2>
                <div className="ml-4">
                <button
                    type="button"
                    className="inline-block rounded bg-primary px-4 pb-1 pt-1 text-xs font-lato uppercase text-white hover:bg-white hover:border-primary hover:text-primary">
                     editar
                </button>
                </div>
            </div>
            <div className="block items-center justify-center sm:flex pt-2 mb-2 w-80:block">
                <div className=" m-2 firstRow">
                <section className="relative flex w-96 flex-col bg-white border border-primary border-b-2 border-t-0 border-l-0 border-r-0">
                    <div className="w-96 p-4 m-2">
                        <div className="flex w-full">
                            <h5 className="mb-2 block font-semibold">
                            Contacto de Emergencia
                            </h5>
                            <div className="p-0 ml-32 self-end">
                                <AddBtn/>
                            </div>
                        </div>
                        <p className="block font-lato text-sm font-light leading-relaxed text-inherit antialiased">
                        Placeholder
                        </p>
                     </div>
                </section>
                <section className="relative flex w-96 flex-col bg-white border border-primary border-b-2 border-t-0 border-l-0 border-r-0">
                    <div className="w-80 px-4 pb-2 m-2">
                        <div className="flex">
                            <h5 className="mb-2 block font-semibold">
                            Titulo
                            </h5>
                        </div>
                        <div className="flex">
                        <form>
                            <label className="mr-9 mt-2 text-xs">
                            <input type="radio" name="bloodtype" value="A+"/> A+
                            </label>
                            <label className="mr-9 mt-2 text-xs">
                                <input type="radio" name="bloodtype" value="A-"/> A-
                            </label>
                            <label className="mr-9 mt-2 text-xs">
                                <input type="radio" name="bloodtype" value="B+"/> B+
                            </label>
                            <label className="mr-10 mt-2 text-xs">
                                <input type="radio" name="bloodtype" value="B-"/> B-
                            </label>
                            <label className="mr-7 mt-2 text-xs">
                                <input type="radio" name="bloodtype" value="AB+"/> AB+
                            </label>
                            <label className="mr-7 mt-2 text-xs">
                                <input type="radio" name="bloodtype" value="AB-"/> AB-
                            </label>
                            <label className="mr-9 mt-2 text-xs">
                                <input type="radio" name="bloodtype" value="O+"/> O+
                            </label>
                            <label className="mr-7 mt-2 text-xs">
                                <input type="radio" name="bloodtype" value="O-"/> O-
                            </label>
                            </form>
                        </div>
                     </div>
                </section>
                <section className="relative flex w-96 flex-col bg-white border border-primary border-b-2 border-t-0 border-l-0 border-r-0">
                    <div className="w-96 p-4 m-2">
                        <div className="flex">
                            <h5 className="mb-2 pr-2 block font-semibold">
                            Alergias
                            </h5>
                            <div className="p-0 ml-60 self-end">
                                <AddBtn/>
                            </div>
                        </div>
                        <p className="block font-lato text-sm font-light leading-relaxed text-inherit antialiased">
                        Placeholder
                        </p>
                     </div>
                </section>
                <section className="relative flex w-96 flex-col bg-white border border-primary border-b-2 border-t-0 border-l-0 border-r-0">
                    <div className="w-96 p-4 m-2">
                        <div className="flex">
                            <h5 className="mb-2 block font-semibold">
                            Antecedentes Familiares
                            </h5>
                            <div className="p-0 ml-28 self-end">
                                <AddBtn/>
                            </div>
                        </div>
                        <p className="block font-lato text-sm font-light leading-relaxed text-inherit antialiased">
                        Placeholder
                        </p>
                     </div>
                </section>
                </div> 
                <div className="block m-2 secondtRow">
                <section className="relative flex w-96 flex-col bg-white border border-primary border-b-2 border-t-0 border-l-0 border-r-0">
                    <div className="w-96 p-4 m-2">
                        <div className="flex">
                            <h5 className="mb-2 block font-semibold">
                            Medicamentos controlados
                            </h5>
                            <div className="p-0 ml-24 self-end">
                                <AddBtn/>
                            </div>
                        </div>
                        <p className="block font-lato text-sm font-light leading-relaxed text-inherit antialiased">
                        Placeholder
                        </p>
                     </div>
                </section>
                <section className="relative flex w-96 flex-col bg-white border border-primary border-b-2 border-t-0 border-l-0 border-r-0">
                    <div className="w-96 p-4 m-2">
                        <div className="flex">
                            <h5 className="mb-2 pr-2 block font-semibold">
                            Enfermedades Cronicas
                            </h5>
                            <div className="p-0 ml-28 self-end">
                                <AddBtn/>
                            </div>
                        </div>
                        <p className="block font-lato text-sm font-light leading-relaxed text-inherit antialiased">
                        Placeholder
                        </p>
                     </div>
                </section>
                <section className="relative flex w-96 flex-col bg-white border border-primary border-b-2 border-t-0 border-l-0 border-r-0">
                    <div className="w-96 p-4 m-2">
                        <div className="flex">
                            <h5 className="mb-2 block font-semibold">
                            Enfermedades Cardiovasculares
                            </h5>
                            <div className="p-0 ml-14 self-end">
                                <AddBtn/>
                            </div>
                        </div>
                        <p className="block font-lato text-sm font-light leading-relaxed text-inherit antialiased">
                        Placeholder
                        </p>
                     </div>
                </section>
                <section className="relative flex w-96 flex-col bg-white border border-primary border-b-2 border-t-0 border-l-0 border-r-0">
                    <div className="w-96 p-4 m-2">
                        <div className="flex">
                            <h5 className="mb-2 block font-semibold">
                            Comentarios
                            </h5>
                            <div className="p-0 ml-52 self-end">
                                <AddBtn/>
                            </div>
                        </div>
                        <p className="block font-lato text-sm font-light leading-relaxed text-inherit antialiased">
                        Placeholder
                        </p>
                     </div>
                </section>
                </div> 
            </div>
        </main>
    )
}