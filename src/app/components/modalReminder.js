"use client";
import React from "react";

const ModalReminder = ({ isVisible, onClose, children }) => {
  if (!isVisible) return null;

  const handleClose = (e) => {
    if (e.target.id === "wrapper") onClose();
  };

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

        <form className="bg-white p-6 rounded-3xl shadow-2xl shadowviolet-800">
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
              />
            </div>
            <div>
              <label htmlFor="date-reminder" className="text-sm font-medium">
                Fecha
              </label>
              <input
                type="datetime-local"
                id="inputDate"
                className="w-full border-2 rounded-md px-2 py-0.5 mt-1 bg-transparent border-violet-800 shadow-md"
              />
            </div>

            <div>
              <label
                htmlFor="sintoms-appointment"
                className="flex flex-col text-sm font-medium mr-2"
              >
                Repetir
              </label>
              <input
                type="number"
                name="recurrence"
                min="1"
                max="24"
                className="w-12 py-0.5 px-1.5 mr-1 text-sm border-2 rounded-md mt-1 bg-transparent border-violet-800 shadow-md"
              />
              hrs
            </div>

            <div className="form-control">
              <label
                htmlFor="sintoms-appointment"
                className="flex flex-col text-sm font-medium"
              >
                Notificación
              </label>
              <label className="label cursor-pointer">
                <span className="label-text text-sm">VitaliApp</span>
                <input
                  type="checkbox"
                  className="checkbox checkbox-xs checkbox-primary"
                />
              </label>
              <label className="label cursor-pointer mt-">
                <span className="label-text text-sm">Email</span>
                <input
                  type="checkbox"
                  className="checkbox checkbox-xs checkbox-primary"
                />
              </label>
            </div>

            <div className="gap-y-4 text-center">
              <button
                type="submit"
                className="w-full active:scale-[.98] active:duration-75 hover:scale-[1.01] easy-in-out transition-all py-2 rounded-xl bg-violet-500 text-white text-sm font-medium"
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

export default ModalReminder;
