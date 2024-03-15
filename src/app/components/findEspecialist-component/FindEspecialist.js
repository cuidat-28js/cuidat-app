"use client";
import React, { useState } from "react"
import ResultsList from "./ResultsList"
import GoogleMapView from "./GoogleMapView"
import SearchBar from "./SearchBar"

export default function FindEspecialist() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 h-screen mt-12">
      <div className="p-3 justify-self-center">
        <SearchBar />
        <h2 className="mt-3 text-center font-bold text-2xl">
          Especialistas encontrados
        </h2>
        <div className="p-3">
          <ResultsList />
        </div>
      </div>
      <div className="col-span-3">
        <GoogleMapView />
      </div>
    </div>
  )
}
