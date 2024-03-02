import React from "react"
import EmptyRecord from "../componentsEmpty/EmptyRecord"

export default function Alergies() {
    return(
            <div className="flex-shrink w-full sm:w-1/2 lg:w-1/3 lg:px-1">
                <div className="py-3 px-1 lg:h-32 lg:pr-2 lg:pl-4 bg-gray-50 border-b mb-2 mx-0.5 border-gray-100">
                    <div className="flex flex-row justify-center">
                        <h3 className="text-md lg:text-lg font-josefin-regular text-black">Alergias</h3>
                    </div>
                    <div className="text-sm lg:text-lg text-gray-500">
                        <EmptyRecord/>
                    </div>
                </div>
            </div>
    )
}