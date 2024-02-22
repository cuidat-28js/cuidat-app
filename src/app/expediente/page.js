import React from "react"
import Navbar from  "../components/Navbar"
import AddBtn from "../components/Add-button"

export default function Expediente() {
    return(
        <div id="record" className="section relative pt-16 pb-8 md:pt-16 md:pb-0 bg-white">
        <Navbar/>
        <div className="container mt-2 xl:max-w-6xl mx-auto lg:px-8">
                <div className="flex items-center justify-center md:flex pt-2 mb-6"> 
                <h2 className="text-xl font-josefin-regular text-bold">Expediente</h2>
                <div className="ml-4">
            </div>
        </div>
        
        <div className="flex flex-wrap flex-row m-1 lg:mx-16 text-center">
            <div className="flex-shrink px-1 w-full sm:w-1/2 lg:w-1/3 lg:px-1">
                {/* block */}
                <div className="py-3 px-1 lg:px-4 bg-gray-50 border-b mb-2 mx-0.5 border-gray-100">
                    <div className="flex flex-row">
                        <h3 className="text-xs lg:text-lg leading-normal mb-2 mr-8  font-semibold text-black">Contacto de Emergencia</h3>
                        <AddBtn/>
                    </div>
                    <p className="text-sm lg:text-lg text-gray-500">Placeholder.</p>
                </div>
                {/* END block */}
            </div>
            <div className="flex-shrink w-full sm:w-1/2 lg:w-1/3 lg:px-1">
                {/* block */}
                <div className="py-3 px-1 lg:px-4 bg-gray-50 border-b mb-2 mx-0.5 border-gray-100">
                    <div className="flex flex-row">
                        <h3 className="text-xs lg:text-lg leading-normal mb-2 mr-8  font-semibold text-black">Grupo Sanguineo</h3>
                        <AddBtn/>
                    </div>
                    <p className="text-sm lg:text-lg text-gray-500">Placeholder.</p>
                </div>
                {/* END block */}
            </div>
            <div className="flex-shrink w-full sm:w-1/2 lg:w-1/3 lg:px-1">
                {/* block */}
                <div className="py-3 px-1 lg:px-4 bg-gray-50 border-b mb-2 mx-0.5 border-gray-100">
                    <div className="flex flex-row">
                        <h3 className="text-xs lg:text-lg leading-normal mb-2 ml-8 mr-12  font-semibold text-black">Alergias</h3>
                        <AddBtn/>
                    </div>
                    <p className="text-sm lg:text-lg text-gray-500">Placeholder.</p>
                </div>
                {/* END block */}
            </div>
            <div className="flex-shrink px-1 w-full sm:w-1/2 lg:w-1/3 lg:px-1">
                {/* block */}
                <div className="py-3 px-1 lg:px-4 bg-gray-50 border-b mb-2 mx-0.5 border-gray-100">
                    <div className="flex flex-row">
                        <h3 className="text-xs lg:text-lg leading-normal mb-2 mr-8  font-semibold text-black">Enfermedades Cronicas</h3>
                        <AddBtn/>
                    </div>
                    <p className="text-sm lg:text-lg text-gray-500">Placeholder.</p>
                </div>
                {/* END block */}
            </div>
            <div className="flex-shrink px-1 w-full sm:w-1/2 lg:w-1/3 lg:px-1">
                {/* block */}
                <div className="py-3 px-1 lg:px-4 bg-gray-50 border-b mb-2 mx-0.5 border-gray-100">
                    <div className="flex flex-row">
                        <h3 className="text-xs lg:text-lg leading-normal mb-2 mr-8  font-semibold text-black">Medicamento Controlado</h3>
                        <AddBtn/>
                    </div>
                    <p className="text-sm lg:text-lg text-gray-500">Placeholder.</p>
                </div>
                {/* END block */}
            </div>
            <div className="flex-shrink w-full sm:w-1/2 lg:w-1/3 lg:px-1">
                {/* block */}
                <div className="py-3 px-1 lg:px-4 bg-gray-50 border-b mb-2 mx-0.5 border-gray-100">
                    <div className="flex flex-row">
                        <h3 className="text-xs lg:text-lg leading-normal mb-2 mr-8  font-semibold text-black">Enfermedades Cardiovasculares</h3>
                        <AddBtn/>
                    </div>
                    <p className="text-sm lg:text-lg text-gray-500">Placeholder.</p>
                </div>
                {/* END block */}
            </div>
            <div className="flex-shrink w-full sm:w-1/2 lg:w-1/3 lg:px-1">
                {/* block */}
                <div className="py-3 px-1 lg:px-4 bg-gray-50 border-b mb-2 mx-0.5 border-gray-100">
                    <div className="flex flex-row">
                        <h3 className="text-xs lg:text-lg leading-normal mb-2 mr-8  font-semibold text-black">Antecedentes Familiares</h3>
                        <AddBtn/>
                    </div>
                    <p className="text-sm lg:text-lg text-gray-500">Placeholder.</p>
                </div>
                {/* END block */}
            </div>
            <div className="flex-shrink px-1 w-full sm:w-1/2 lg:w-1/3 lg:px-1">
                {/* block */}
                <div className="py-3 px-1 lg:px-4 bg-gray-50 border-b mb-2 mx-0.5 border-gray-100">
                    <div className="flex flex-row">
                        <h3 className="text-xs lg:text-lg leading-normal mb-2 mr-8  font-semibold text-black">Informacion Adicional</h3>
                        <AddBtn/>
                    </div>
                    <p className="text-sm lg:text-lg text-gray-500">Placeholder.</p>
                </div>
                {/* END block */}
            </div>
            <div className="flex-shrink px-1 max-w-full w-full sm:w-1/2 lg:w-1/3 lg:px-1">
                {/* block */}
                <div className="py-8 px-8 mb-2">
                    <button className="btn btn-primary text-lg px-16 hover:bg-white hover:border-primary hover:text-primary" type="button">Editar</button>
                </div>
               {/* end block */}
            </div>
        </div>
        {/* end row */}
    </div>
</div>



        // <main className="min-w-80 items-center justify-center mt-20">
        //     <Navbar/>
            // <div className="flex items-center justify-center md:flex pt-2 mb-2"> 
            //     <h2 className="text-xl font-josefin-regular text-bold ml-28 pr-8">Expediente</h2>
            //     <div className="ml-4">
            //     <button
            //         type="button"
            //         className="inline-block rounded bg-primary px-4 pb-1 pt-1 text-xs font-lato uppercase text-white hover:bg-white hover:border-primary hover:text-primary">
            //          editar
            //     </button>
            //     </div>
            // </div>
        //     <div className="block items-center justify-center sm:flex pt-2 mb-2 w-80:block">
        //         <div className=" m-2 firstRow">
        //         <section className="relative flex w-96 flex-col bg-white border border-primary border-b-2 border-t-0 border-l-0 border-r-1">
        //             <div className="w-96 p-4 my-2">
        //                 <div className="flex w-full">
        //                     <h5 className="mb-2 block font-semibold">
        //                     Contacto de Emergencia
        //                     </h5>
        //                     <div className="p-0 ml-32 self-end">
        //                         <AddBtn/>
        //                     </div>
        //                 </div>
        //                 <p className="block font-lato text-sm font-light leading-relaxed text-inherit antialiased">
        //                 Placeholder
        //                 </p>
        //              </div>
        //         </section>
        //         <section className="relative flex w-96 flex-col bg-white border border-primary border-b-2 border-t-0 border-l-0 border-r-1">
        //             <div className="w-80 px-4 pb-2 my-4">
                        // <div className="flex">
                        //     <h5 className="mb-2 block font-semibold">
                        //     Titulo
                        //     </h5>
                        // </div>
                        // <div className="flex">
                        // <form>
                        //     <label className="mr-9 mt-2 text-xs">
                        //     <input type="radio" name="bloodtype" value="A+"/> A+
                        //     </label>
                        //     <label className="mr-9 mt-2 text-xs">
                        //         <input type="radio" name="bloodtype" value="A-"/> A-
                        //     </label>
                        //     <label className="mr-9 mt-2 text-xs">
                        //         <input type="radio" name="bloodtype" value="B+"/> B+
                        //     </label>
                        //     <label className="mr-10 mt-2 text-xs">
                        //         <input type="radio" name="bloodtype" value="B-"/> B-
                        //     </label>
                        //     <label className="mr-7 mt-2 text-xs">
                        //         <input type="radio" name="bloodtype" value="AB+"/> AB+
                        //     </label>
                        //     <label className="mr-7 mt-2 text-xs">
                        //         <input type="radio" name="bloodtype" value="AB-"/> AB-
                        //     </label>
                        //     <label className="mr-9 mt-2 text-xs">
                        //         <input type="radio" name="bloodtype" value="O+"/> O+
                        //     </label>
                        //     <label className="mr-7 mt-2 text-xs">
                        //         <input type="radio" name="bloodtype" value="O-"/> O-
                        //     </label>
                        //     </form>
                        // </div>
        //              </div>
        //         </section>
        //         <section className="relative flex w-96 flex-col bg-white border border-primary border-b-2 border-t-0 border-l-0 border-r-1">
        //             <div className="w-96 p-4 my-2">
        //                 <div className="flex">
        //                     <h5 className="mb-2 pr-2 block font-semibold">
        //                     Alergias
        //                     </h5>
        //                     <div className="p-0 ml-60 self-end">
        //                         <AddBtn/>
        //                     </div>
        //                 </div>
        //                 <p className="block font-lato text-sm font-light leading-relaxed text-inherit antialiased">
        //                 Placeholder
        //                 </p>
        //              </div>
        //         </section>
        //         <section className="relative flex w-96 flex-col bg-white border border-primary border-b-2 border-t-0 border-l-0 border-r-1">
        //             <div className="w-96 p-4 my-2">
        //                 <div className="flex">
        //                     <h5 className="mb-2 block font-semibold">
        //                     Antecedentes Familiares
        //                     </h5>
        //                     <div className="p-0 ml-28 self-end">
        //                         <AddBtn/>
        //                     </div>
        //                 </div>
        //                 <p className="block font-lato text-sm font-light leading-relaxed text-inherit antialiased">
        //                 Placeholder
        //                 </p>
        //              </div>
        //         </section>
        //         </div> 
        //         <div className="block m-2 secondtRow">
        //         <section className="relative flex w-96 flex-col bg-white border border-primary border-b-2 border-t-0 border-l-1 border-r-0">
        //             <div className="w-96 p-4 my-2">
        //                 <div className="flex">
        //                     <h5 className="mb-2 block font-semibold">
        //                     Medicamentos controlados
        //                     </h5>
        //                     <div className="p-0 ml-24 self-end">
        //                         <AddBtn/>
        //                     </div>
        //                 </div>
        //                 <p className="block font-lato text-sm font-light leading-relaxed text-inherit antialiased">
        //                 Placeholder
        //                 </p>
        //              </div>
        //         </section>
        //         <section className="relative flex w-96 flex-col bg-white border border-primary border-b-2 border-t-0 border-l-1 border-r-0">
        //             <div className="w-96 p-4 my-2">
        //                 <div className="flex">
        //                     <h5 className="mb-2 pr-2 block font-semibold">
        //                     Enfermedades Cronicas
        //                     </h5>
        //                     <div className="p-0 ml-28 self-end">
        //                         <AddBtn/>
        //                     </div>
        //                 </div>
        //                 <p className="block font-lato text-sm font-light leading-relaxed text-inherit antialiased">
        //                 Placeholder
        //                 </p>
        //              </div>
        //         </section>
        //         <section className="relative flex w-96 flex-col bg-white border border-primary border-b-2 border-t-0 border-l-1 border-r-0">
        //             <div className="w-96 p-4 my-2">
        //                 <div className="flex">
        //                     <h5 className="mb-2 block font-semibold">
        //                     Enfermedades Cardiovasculares
        //                     </h5>
        //                     <div className="p-0 ml-14 self-end">
        //                         <AddBtn/>
        //                     </div>
        //                 </div>
        //                 <p className="block font-lato text-sm font-light leading-relaxed text-inherit antialiased">
        //                 Placeholder
        //                 </p>
        //              </div>
        //         </section>
        //         <div className="py-8 px-12 mb-12 bg-gray-50 border-b border-gray-100 transform transition duration-300 ease-in-out hover:-translate-y-2">
        //             <div class="inline-block text-gray-900 mb-4">
        //             </div>
        //             <h3 className="text-lg leading-normal mb-2 font-semibold text-black">SEO Services</h3>
        //             <p className="text-gray-500">This is a wider card with supporting text below as a natural content.</p>
        //         </div>
        //         </div> 
        //     </div>
        // </main>
    )
}