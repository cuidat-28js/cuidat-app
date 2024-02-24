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
                className="bg-white px-10 py-20 rounded-3xl border-gray-100 mt-8 max-w-sm shadow-2xl">

                <h1 className="text-3xl font-semibold  text-center">
                    Nueva cita
                </h1>
                <div className="mt-8  space-y-8">
                    <div>
                        <label htmlFor="date-appointment" className="text-base font-medium">
                            Fecha
                        </label>
                        <input
                            id="date-appointment"
                            type="date"
                            className="w-full border-2 rounded-xl p-4 mt-1 bg-transparent border-indigo-500/100 shadow-md"
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
                            className="w-full border-2 rounded-xl p-4 mt-1 bg-transparent border-indigo-500/100 shadow-md"
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
                            className="w-full border-2 rounded-xl p-4 mt-1 bg-transparent border-indigo-500/100 shadow-md"
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
                            className="w-full border-2 rounded-xl p-4 mt-1 bg-transparent border-indigo-500/100 shadow-md"
                            {...register("text", { required: 'Éste campo es obligatorio'})}/>
                            <p className="text-[12px] text-red-600">{ errors.text?.message }</p>
                    </div>
                    <div>
                        <label htmlFor="comments-appointment" className="text-base font-medium">
                            Comentarios
                        </label>
                        <input
                            id="comments-appointment"
                            type="text"
                            className="w-full border-2 rounded-xl p-4 mt-1 bg-transparent border-indigo-500/100 shadow-md"
                            {...register("comments", { required: '*Éste campo es obligatorio'})}/>
                            <p className="text-[12px] text-red-600">{ errors.comments?.message }</p>
                    </div>
                    <div className="mt-8 flex flex-row gap-y-4">
                        <button
                            type="submit"
                            className="active:scale-[.98] active:duration-75 hover:scale-[1.01] easy-in-out transition-all py-3 rounded-xl bg-violet-500 text-white text-lg font-bold">
                                ¡Registrarme!
                        </button>

                        <button
                            className="flex roundend-xl py-3 border-2 border-gray-100 items-center justify-center gap-2 active:scale-[.98] active:duration-75 hover:scale-[1.01] easy-in-out transition-all">
                                Iniciar sesión con Google
                        </button>
                    </div>
                    <div className="mt-8 gap-y-4">
                        <button
                            type="submit"
                            className="active:scale-[.98] active:duration-75 hover:scale-[1.01] easy-in-out transition-all py-3 rounded-xl bg-violet-500 text-white text-lg font-bold">
                                ¡Registrarme!
                        </button>
                    </div>
                </div>
            </form>
        </div>
    )
}