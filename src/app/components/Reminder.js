"use client";
import React from "react";
import { useForm } from "react-hook-form";

export default function Reminder ({ isVisible, onClose, children }) {
    const {
      register,
      handleSubmit,
      formState: { errors },
    } = useForm();
  
    return (
      <div
        className="flex items-center"
        id="wrapper"
      >
        <div className="w-auto flex">
  
          <form
            onSubmit={handleSubmit((data) => {
              console.log(data);
            })}
            className="p-1 rounded bg-[#cbd5e1]-200 flex flex-col md:flex-row"
          >
            <div className="First-half md:w-2/3 space-y-2 mx-auto">
                <h1 className="text-base font-semibold text-center">
                    Añadir Recordatorio
                </h1>
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
            </div>
            <div className="Second-half md:w-1/3  mt-4 md:mt-9 md:ml-3">
                <div className="flex flex-row">
                    <label
                    htmlFor="recurrence-appointment"
                    className="flex flex-col text-sm font-medium mr-16 md:mr-2"
                    >
                    Repetir
                    </label>
                    <input
                    type="number"
                    id="recurrence-appointment"
                    name="recurrence"
                    min="1"
                    max="24"
                    className="w-12 px-1.5 text-sm border-2 rounded-md mt-1 bg-transparent border-violet-800 shadow-md"
                    {...register("number", {
                        required: "*Éste campo es obligatorio",
                    })}
                    />
                    hrs
                </div>
    
                <div className="form-control mt-3">
                    <label className="flex flex-col text-sm font-medium">
                    Notificación
                    </label>
                    <label
                    className="label cursor-pointer mr-3"
                    htmlFor="email-reminder"
                    >
                    <span className="label-text text-sm">Email</span>
                    <input
                        type="checkbox"
                        id="email-reminder"
                        className="checkbox checkbox-xs checkbox-primary"
                        {...register("number")}
                    />
                    </label>
                </div>
                <div className="gap-y-4 text-center">
                    <button
                    type="submit"
                    className="w-full active:scale-[.98] active:duration-75 hover:scale-[1.01] easy-in-out transition-all py-1 rounded-xl bg-violet-500 text-white text-sm font-medium"
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

