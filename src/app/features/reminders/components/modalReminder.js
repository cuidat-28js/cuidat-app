"use client"
import React from "react"
import { useForm } from "react-hook-form"

const ModalReminder = ({ isVisible, onClose, children }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  if (!isVisible) return null;

  const handleClose = (e) => {
    if (e.target.id === "wrapper") onClose()
  }

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center"
      id="wrapper"
      onClick={handleClose}
    >
      <div className="w-auto flex flex-col">
        <button
          className="text-white text-base place-self-end"
          onClick={() => onClose()}
        >
          X
        </button>

        <form
          onSubmit={handleSubmit((data) => {
            console.log(data);
          })}
          className="bg-white p-6 rounded-3xl shadow-2xl shadowviolet-800"
        >
          <h1 className="text-base font-semibold text-center">
            Añadir Recordatorio
          </h1>
          <div className="mt-3 max-w-96 space-y-4 mx-auto">
            <div>
              <label htmlFor="title-reminder" className="text-sm font-medium">
                Título
              </label>
              <input
                id="title-reminder"
                type="text"
                className="text-sm text-base w-full border-2 rounded-md px-2 py-1 mt-1 bg-transparent border-violet-800 shadow-md"
                {...register("title", {
                  required: "*Éste campo es obligatorio",
                })}
              />
            </div>
            <div>
              <label htmlFor="date-reminder" className="text-sm font-medium">
                Fecha
              </label>
              <input
                type="datetime-local"
                id="date-reminder"
                className="w-full border-2 rounded-md px-2 py-0.5 mt-1 bg-transparent border-violet-800 shadow-md"
                {...register("date", {
                  required: "*Éste campo es obligatorio",
                })}
              />
            </div>

            <div>
              <label
                htmlFor="recurrence-appointment"
                className="flex flex-col text-sm font-medium mr-2"
              >
                Repetir
              </label>
              <input
                type="number"
                id="recurrence-appointment"
                name="recurrence"
                min="0"
                max="24"
                className="w-12 py-0.5 px-1.5 mr-1 text-sm border-2 rounded-md mt-1 bg-transparent border-violet-800 shadow-md"
                {...register("number", {
                  required: "*Éste campo es obligatorio",
                })}
              />
              hrs
            </div>

            <div className="form-control">
              <label className="flex flex-col text-sm font-medium">
                Notificación
              </label>
              <label
                className="label cursor-pointer mt-"
                htmlFor="email-reminder"
              >
                <span className="label-text text-sm">Email</span>
                <input
                  type="checkbox"
                  id="email-reminder"
                  value="notification-email"
                  className="checkbox checkbox-xs checkbox-primary"
                  {...register("email")}
                />
              </label>
            </div>
            <div className="gap-y-4 text-center">
              <button
                type="submit"
                className="w-full active:scale-[.98] active:duration-75 hover:scale-[1.01] easy-in-out transition-all py-2 rounded-xl bg-violet-500 text-white text-sm font-medium"
                onClick={() => onClose()}
              >
                Guardar
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ModalReminder
