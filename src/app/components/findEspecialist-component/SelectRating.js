import React, { useState } from "react"
import Data from "../../../../Shared/Data"
import { useSearchParams } from "next/navigation"


function SelectRating() {

    const [ selectedRating, setSelectedRating ] = useState([])
    const onSelectedRating = (isChecked, value)=>{
        if (isChecked)
        {
            setSelectedRating([...setSelectedRating, value])
        }
        else{
            setSelectedRating(selectedRating.filter((n)=>n!==value))
        }
    }
    return (
        <div className="px-2 mt-5">
            <h2 className="font-bold">Calificación</h2>
            <div>
                {Data.ratingList.map((item, index)=>(
                    <div key={index} className="flex justify-between">
                        <label>{item.icon}</label>
                        <input type="checkbox"
                        value="1"
                        onChange={(e)=>onSelectedRating(e.target.checked, item.name)}/>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default SelectRating