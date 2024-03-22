import React from "react"

function SearchBar() {
  return (
    <div class="relative flex">
          <input
            type="search"
            className="w-full border-2 border-gray-100 rounded-xl p-2 mt-1 bg-transparent block flex-auto border-neutral-200 
              text-base font-normal focus:border-primary focus:outline-none"
            placeholder="Ingresa el nombre o tipo de especialista"
            id="search-Map"
          />
          <button
            className="flex items-center whitespace-nowrap px-3 py-[0.25rem] [&>svg]:h-5 [&>svg]:w-5"
            id="search-Button"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
              />
            </svg>
          </button>
        </div>
  );
}

export default SearchBar