"use client"
import React from "react";
import { useForm } from "react-hook-form"

export default function FormNewAppointment() {

    const { register, handleSubmit, watch, formState: { errors },} = useForm()

    // console.log(watch())

    return (
        <div className="grid justify-items-center content-evenly mt-12">
            <form
                onSubmit={handleSubmit((data) => {console.log(data)})}
                className="bg-white px-10 py-20 rounded-3xl border-gray-100 mt-8 shadow-2xl">

                <h1 className="text-3xl font-semibold text-center">
                    Nueva cita
                </h1>
                <div className="mt-8 max-w-96 space-y-8 mx-auto">
                    <div>
                        <label htmlFor="date-appointment" className="text-base font-medium">
                            Fecha
                        </label>
                        <input
                            id="date-appointment"
                            type="date"
                            className="w-full py-2 border-2 rounded-md p-4 mt-1 bg-transparent border-violet-800 shadow-md"
                            {...register("date", { required: '*Éste campo es obligatorio'})}/>
                            <p className="text-[12px] text-red-600">{ errors.date?.message }</p>
                    </div>
                    <div>
                        <label htmlFor="specialist-appointment" className="text-base font-medium">
                            Tipo de especialista
                        </label>
                        <input
                            id="specialist-appointment"
                            type="text"
                            placeholder="¿A qué tipo de especialista acudirás?"
                            className="w-full py-2 border-2 rounded-md p-4 mt-1 bg-transparent border-violet-800 shadow-md"
                            {...register("specialist", { required: 'Éste campo es obligatorio'})}/>
                            <p className="text-[12px] text-red-600">{ errors.specialist?.message }</p>
                    </div>
                    <div>
                        <label htmlFor="adress-appointment" className="text-base font-medium">
                            Dirección
                        </label>
                        <input
                            id="adress-appointment"
                            type="text"
                            placeholder="Ingresa la dirección o liga de ubicación"
                            className="w-full py-2 border-2 rounded-md p-4 mt-1 bg-transparent border-violet-800 shadow-md"
                            {...register("email", { required: '*Éste campo es obligatorio'})}/>
                            <p className="text-[12px] text-red-600">{ errors.text?.message }</p>
                    </div>
                    <div>
                        <label htmlFor="sintoms-appointment" className="text-base font-medium">
                            Síntomas
                        </label>
                        <input
                            id="sintoms-appointment"
                            type="text"
                            placeholder="¿Qué tipo de síntomas padeces ?"
                            className="w-full py-2 border-2 rounded-md p-4 mt-1 bg-transparent border-violet-800 shadow-md"
                            {...register("text", { required: 'Éste campo es obligatorio'})}/>
                            <p className="text-[12px] text-red-600">{ errors.text?.message }</p>
                    </div>
                    <div>
                        <label htmlFor="comments-appointment" className="text-base font-medium">
                            Comentarios
                        </label>
                        <textarea
                            id="comments-appointment"
                            type="text"
                            placeholder="Ingresa tus comentarios"
                            className="w-full border-2 rounded-md p-4 mt-1 bg-transparent border-violet-800 shadow-mdpy-2"
                            {...register("comments", { required: '*Éste campo es obligatorio'})}/>
                            <p className="text-[12px] text-red-600">{ errors.comments?.message }</p>
                    </div>
                    <div className="flex space-x-12">
                        <button
                            type="submit"
                            className="whitespace-nowrap flex p-3 w-1/2 border-2 justify-center rounded-md border-violet-800  active:scale-[.98] active:duration-75 hover:scale-[1.01] easy-in-out transition-all font-semibold text-violet-800">
                                ➕ Receta
                        </button>

                        <button
                            className="whitespace-nowrap flex p-3 w-1/2 border-2 justify-center rounded-md border-violet-800 active:scale-[.98] active:duration-75 hover:scale-[1.01] easy-in-out transition-all font-semibold text-violet-800">
                                ➕ Recordatorio
                        </button>
                    </div>
                    <div className="mt-8 gap-y-4 text-center">
                        <button
                            type="submit"
                            className="w-9/12 active:scale-[.98] active:duration-75 hover:scale-[1.01] easy-in-out transition-all py-3 rounded-xl bg-violet-500 text-white text-lg font-bold">
                                Guardar
                        </button>
                    </div>
                </div>
            </form>
        </div>
    )
}