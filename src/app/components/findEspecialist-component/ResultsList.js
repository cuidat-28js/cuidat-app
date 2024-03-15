import React from "react"

function ResultsList() {
  return (
    <div>
      <div class="mt-3 max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <h5 class="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
          Nombre del Espacialista
        </h5>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
          Tipo de Espacialista
        </p>
        <p class="mb-3 font-bold text-gray-700 dark:text-gray-400">
          Número de Teléfono
        </p>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
          Dirección
        </p>
        <div className="text-center">
          <button
            type="submit"
            className="mt-1 w-8/12 py-2 active:scale-[.98] active:duration-75 hover:scale-[1.01] easy-in-out transition-all rounded-xl bg-violet-500 text-white text-base font-bold"
          >
            Mostrar en mapa
          </button>
        </div>
      </div>
    </div>
  );
}

export default ResultsList;
