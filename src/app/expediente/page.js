import React from "react"
import Navbar from  "../components/Navbar"
import AddBtn from "../components/Add-button"

export default function Expediente() {
    return(
        <main className="w-96 mt-16">
            <Navbar/>
            <div className="flex pt-2"> 
                <h2 className="text-xl font-josefin-regular text-bold">Expediente</h2>
                <button
                    type="button"
                    className="inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-lato uppercase text-white hover:bg-white hover:border-primary hover:text-primary">
                     editar
                </button>
            </div>
            <div className="lg:flex w-96:block">
                <div className="block firstRow">
                <section className="relative flex w-96 flex-col bg-white border border-primary border-b-2 border-t-0 border-l-0 border-r-0">
                    <div className="w-96 p-4 m-2">
                        <div className="flex">
                            <h5 className="mb-2 block font-semibold">
                            Titulo
                            </h5>
                            <div className="m-0 justify-self-end">
                                <AddBtn/>
                            </div>
                        </div>
                        <p className="block font-sans text-base font-light leading-relaxed text-inherit antialiased">
                        Placeholder
                        </p>
                     </div>
                </section>
                <section className="relative flex w-96 flex-col bg-white border border-primary border-b-2 border-t-0 border-l-0 border-r-0">
                    <div className="w-96 p-4 m-2">
                        <div className="flex">
                            <h5 className="mb-2 block font-semibold">
                            Titulo
                            </h5>
                            <div className="m-0 justify-self-end">
                                <AddBtn/>
                            </div>
                        </div>
                        <p className="block font-sans text-base font-light leading-relaxed text-inherit antialiased">
                        Placeholder
                        </p>
                     </div>
                </section>
                <section className="relative flex w-96 flex-col bg-white border border-primary border-b-2 border-t-0 border-l-0 border-r-0">
                    <div className="w-96 p-4 m-2">
                        <div className="flex">
                            <h5 className="mb-2 block font-semibold">
                            Titulo
                            </h5>
                            <div className="m-0 justify-self-end">
                                <AddBtn/>
                            </div>
                        </div>
                        <p className="block font-sans text-base font-light leading-relaxed text-inherit antialiased">
                        Placeholder
                        </p>
                     </div>
                </section>
                </div>
                <div className="block secondRow">
                <section className="relative flex w-96 flex-col bg-white border border-primary border-b-2 border-t-0 border-l-0 border-r-0">
                    <div className="w-96 p-4 m-2">
                        <div className="flex">
                            <h5 className="mb-2 block font-semibold">
                            Titulo
                            </h5>
                            <div className="m-0 justify-self-end">
                                <AddBtn/>
                            </div>
                        </div>
                        <p className="block font-sans text-base font-light leading-relaxed text-inherit antialiased">
                        Placeholder
                        </p>
                     </div>
                </section>
                <section className="relative flex w-96 flex-col bg-white border border-primary border-b-2 border-t-0 border-l-0 border-r-0">
                    <div className="w-96 p-4 m-2">
                        <div className="flex">
                            <h5 className="mb-2 block font-semibold">
                            Titulo
                            </h5>
                            <div className="m-0 justify-self-end">
                                <AddBtn/>
                            </div>
                        </div>
                        <p className="block font-sans text-base font-light leading-relaxed text-inherit antialiased">
                        Placeholder
                        </p>
                     </div>
                </section>
                <section className="relative flex w-96 flex-col bg-white border border-primary border-b-2 border-t-0 border-l-0 border-r-0">
                    <div className="w-96 p-4 m-2">
                        <div className="flex">
                            <h5 className="mb-2 block font-semibold">
                            Titulo
                            </h5>
                            <div className="m-0 justify-self-end">
                                <AddBtn/>
                            </div>
                        </div>
                        <p className="block font-sans text-base font-light leading-relaxed text-inherit antialiased">
                        Placeholder
                        </p>
                     </div>
                </section>
                </div>
            </div>
        </main>
    )
}