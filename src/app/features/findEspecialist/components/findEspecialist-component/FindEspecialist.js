"use client";
import React, { useState } from "react";
import RangeSelect from "./RangeSelect";
import ResultsList from "./ResultsList";
import SelectRating from "./SelectRating";
import GoogleMapView from "./GoogleMapView";

export default function FindEspecialist() {
  const [radius, setRadius] = useState(10);
  return (
    <div className="grid grid-cols-4 h-screen mt-12">
      <div className="p-3">
        <div class="relative flex">
          <input
            type="search"
            class="w-full border-2 border-gray-100 rounded-xl p-2 mt-1 bg-transparent block flex-auto border-neutral-200 
              text-base font-normal focus:border-primary focus:outline-none"
            placeholder="Search"
            id="search-Map"
          />
          <button
            class="flex items-center whitespace-nowrap px-3 py-[0.25rem] [&>svg]:h-5 [&>svg]:w-5"
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
        <h2 className="font-bold px-2">Seleccionar radio (kms)</h2>
        <input
          type="range"
          className="w-full h-2 bg-purple-200 rounded-lg appearance-none cursor-pointer"
          min="1"
          max="10"
          step="1"
          onChange={(e) => setRadius(e.target.value)}
          defaultValue={radius}
        />
        <label className="text-gray-500 text-[15px]">
          En {radius} kilómetros
        </label>
        <div className="p-3">
          <ResultsList />
          <SelectRating />
        </div>
      </div>
      <div className="col-span-3">
        <GoogleMapView/>
      </div>
    </div>
  );
}
