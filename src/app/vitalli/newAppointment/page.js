"use client"
import React, { Fragment, useState } from "react"
import { useForm } from "react-hook-form"
import ModalReminder from "../../features/reminders/components/modalReminder"
import AutocompleteAdressInput from "@/app/features/new-appointment/components/autocompleteAPI"
import { useRouter } from "next/navigation"


export default function FormNewAppointment() {

  const history = useRouter()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const [showModal, setShowModal] = useState(false);

  return (
    <Fragment>
      <div className="grid mx-auto w-96 sm:w-1/2 lg:w-1/2 content-evenly mt-12">
        <form
          onSubmit={handleSubmit((data) => {
            console.log(data)
            history.push(`/vitalli/home`)
          })}
          className="bg-white px-10 py-20 rounded-3xl border-gray-100 mt-8 shadow-xl shadow-violet-500"
        >
          <h1 className="text-3xl font-semibold text-center">Registro de consulta</h1>
          <div className="mt-8 max-w-96 space-y-8 mx-auto">
            <div>
              <label
                htmlFor="date-appointment"
                className="text-base font-medium"
              >
                Fecha
              </label>
              <input
                id="date-appointment"
                type="datetime-local"
                className="w-full py-2 border-2 rounded-md p-4 mt-1 bg-transparent border-violet-800 shadow-md"
                {...register("date", {
                  required: "*Éste campo es obligatorio",
                })}
              />
              <p className="text-[12px] text-red-600">{errors.date?.message}</p>
            </div>
            <div>
              <label
                htmlFor="specialistName-appointment"
                className="text-base font-medium"
              >
                Nombre del especialista
              </label>
              <input
                id="specialistName-appointment"
                type="text"
                placeholder="¿Cuál es el nombre de tu especialista?"
                className="w-full py-2 border-2 rounded-md p-4 mt-1 bg-transparent border-violet-800 shadow-md"
                {...register("specialistName", {
                  required: "Éste campo es obligatorio",
                })}
              />
              <p className="text-[12px] text-red-600">
                {errors.specialistName?.message}
              </p>
            </div>
            <div>
              <label
                htmlFor="specialist-appointment"
                className="text-base font-medium"
              >
                Tipo de especialista
              </label>
              <input
                id="specialist-appointment"
                type="text"
                placeholder="¿A qué tipo de especialista acudiste?"
                className="w-full py-2 border-2 rounded-md p-4 mt-1 bg-transparent border-violet-800 shadow-md"
                {...register("specialist", {
                  required: "Éste campo es obligatorio",
                })}
              />
              <p className="text-[12px] text-red-600">
                {errors.specialist?.message}
              </p>
            </div>  
            <AutocompleteAdressInput />
            <div>
              <label
                htmlFor="sintoms-appointment"
                className="text-base font-medium"
              >
                Síntomas
              </label>
              <input
                id="sintoms-appointment"
                type="text"
                placeholder="¿Qué tipo de síntomas padeces?"
                className="w-full py-2 border-2 rounded-md p-4 mt-1 bg-transparent border-violet-800 shadow-md"
                {...register("text")}
              />
            </div>
            <div>
              <label
                htmlFor="comments-appointment"
                className="text-base font-medium"
              >
                Comentarios
              </label>
              <textarea
                id="comments-appointment"
                type="text"
                placeholder="Ingresa tus comentarios"
                className="w-full border-2 rounded-md p-4 mt-1 bg-transparent border-violet-800 shadow-mdpy-2"
                {...register("comments")}
              />
            </div>
            <div>
              <label
                htmlFor="comments-appointment"
                className="text-base font-medium"
              >
                Imagen de receta
              </label>
              <input
                id="pic-newAppoitment"
                type="file"
                className="block w-full text-xs mt-1
                                file:p-3 file:rounded-md
                                file:border-0 file:text-sm file:font-semibold
                                file:bg-white file:text-violet-800 file:border-2 file:rounded-md
                                file:border-violet-800 file:active:scale-[.98] file:active:duration-75 file:hover:scale-[1.01]
                                file:easy-in-out file:transition-all"
                {...register("file")}
              />
            </div>
            <div className="items-center flex flex-col sm:space-x-12">
              <button
                className="whitespace-nowrap flex p-3 w-full
                                border-2 justify-center rounded-md border-violet-800
                                active:scale-[.98] active:duration-75 hover:scale-[1.01]
                                easy-in-out transition-all font-semibold text-violet-800"
                onClick={() => setShowModal(true)}
              >
                Añadir Recordatorio
              </button>
            </div>
            <div className="gap-y-4 text-center">
              <button
                type="submit"
                className="mt-10 w-9/12 active:scale-[.98] active:duration-75 hover:scale-[1.01] easy-in-out transition-all py-3 rounded-xl bg-violet-500 text-white text-lg font-bold"
              >
                Guardar
              </button>
            </div>
          </div>
        </form>
      </div>
      
      <ModalReminder
        isVisible={showModal}
        onClose={() => setShowModal(false)}
      />
    </Fragment>
  )
}
