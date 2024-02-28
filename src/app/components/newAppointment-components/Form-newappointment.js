"use client";
import React, { Fragment, useState } from "react";
import { useForm } from "react-hook-form";
import ModalReminder from "../modalReminder";

export default function FormNewAppointment() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  // console.log(watch())

  const [showModal, setShowModal] = useState(false);

  return (
    <Fragment>
      <div className="grid mx-auto w-96 sm:w-1/2 lg:w-1/2 content-evenly mt-12">
        <form
          onSubmit={handleSubmit((data) => {
            console.log(data);
          })}
          className="bg-white px-10 py-20 rounded-3xl border-gray-100 mt-8 shadow-2xl"
        >
          <h1 className="text-3xl font-semibold text-center">Nueva cita</h1>
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
                type="date"
                className="w-full py-2 border-2 rounded-md p-4 mt-1 bg-transparent border-violet-800 shadow-md"
                {...register("date", {
                  required: "*Éste campo es obligatorio",
                })}
              />
              <p className="text-[12px] text-red-600">{errors.date?.message}</p>
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
                placeholder="¿A qué tipo de especialista acudirás?"
                className="w-full py-2 border-2 rounded-md p-4 mt-1 bg-transparent border-violet-800 shadow-md"
                {...register("specialist", {
                  required: "Éste campo es obligatorio",
                })}
              />
              <p className="text-[12px] text-red-600">
                {errors.specialist?.message}
              </p>
            </div>
            <div>
              <label
                htmlFor="adress-appointment"
                className="text-base font-medium"
              >
                Dirección
              </label>
              <input
                id="adress-appointment"
                type="text"
                placeholder="Ingresa la dirección o liga de ubicación"
                className="w-full py-2 border-2 rounded-md p-4 mt-1 bg-transparent border-violet-800 shadow-md"
                {...register("email", {
                  required: "*Éste campo es obligatorio",
                })}
              />
              <p className="text-[12px] text-red-600">{errors.text?.message}</p>
            </div>
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
                {...register("text", { required: "Éste campo es obligatorio" })}
              />
              <p className="text-[12px] text-red-600">{errors.text?.message}</p>
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
                {...register("comments", {
                  required: "*Éste campo es obligatorio",
                })}
              />
              <p className="text-[12px] text-red-600">
                {errors.comments?.message}
              </p>
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
                {...register("file", { required: "Éste campo es obligatorio" })}
              />
              <p className="text-[12px] text-red-600">{errors.file?.message}</p>
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
      <ModalReminder isVisible={showModal} onClose={() => setShowModal(false)}>
        <div className=" flex flex-col w-160 m-2">
          <div className=" self-center ml-6 ">
            <h3 className="font-semibold">Añadir Recordatorio</h3>
          </div>
          <div className="flex flex-col md:flex-row pl-2">
            <div className="w-56 my-4">
              <div>
                <div className="mb-2">
                  <label
                    for="large-input"
                    className="block text-sm font-medium"
                  >
                    Titulo
                  </label>
                  <input
                    type="text"
                    id="inputTitle"
                    className="w-full border-2 rounded-md px-2 mt-1 bg-transparent border-violet-800 shadow-md"
                  />
                </div>
                <div className="mb-2">
                  <label
                    for="large-input"
                    className="block text-sm font-medium"
                  >
                    Fecha
                  </label>
                  <input
                    type="date"
                    id="inputDate"
                    className="w-full border-2 rounded-md px-2 mt-1 bg-transparent border-violet-800 shadow-md"
                  />
                </div>
              </div>
              <div className="mt-5">
                <button className="w-full active:scale-[.98] active:duration-75 hover:scale-[1.01] easy-in-out transition-all py-2 rounded-xl bg-violet-500 text-white text-sm font-medium">
                  Añadir
                </button>
              </div>
            </div>
            <div className="ml-4 flex flex-row">
              <div className="m-1 w-20">
                <p className="mt-3 text-sm font-medium">Repetir</p>
                <div className="flex flex-col">
                  <label className=" mt-2 text-xs">
                    <input type="radio" name="recurrence" value="1hr" /> 1 hr
                  </label>
                  <label className=" mt-2 text-xs">
                    <input type="radio" name="recurrence" value="2hr" /> 2 hrs
                  </label>
                  <label className=" mt-2 text-xs">
                    <input type="radio" name="recurrence" value="4hr" /> 4 hrs
                  </label>
                  <label className=" mt-2 text-xs">
                    <input type="radio" name="recurrence" value="6hr" /> 6 hrs
                  </label>
                  <label className=" mt-2 text-xs">
                    <input type="radio" name="recurrence" value="8hr" /> 8 hrs
                  </label>
                  <label className=" mt-2 text-xs">
                    <input type="radio" name="recurrence" value="12hr" /> 12 hrs
                  </label>
                </div>
              </div>
              <div className="mb-1 mt-2 w-28">
                <p className="mt-2 text-sm font-medium">Notificación</p>
                <div>
                  <div className="form-control">
                    <label className="label cursor-pointer">
                      <span className="label-text text-xs">E-mail</span>
                      <input
                        type="checkbox"
                        className="checkbox checkbox-xs checkbox-primary"
                      />
                    </label>
                  </div>
                  <div className="form-control">
                    <label className="label cursor-pointer">
                      <span className="label-text text-xs">
                        Notificacion
                        <br />
                        VitaliApp
                      </span>
                      <input
                        type="checkbox"
                        className="checkbox checkbox-xs checkbox-primary"
                      />
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </ModalReminder>
    </Fragment>
  );
}
