import React, { useState } from "react"
// import Data from "./../../../../Shared/Data"

function ResultsList() {
  // const [resultsList, setResultList] = useState(Data.resultsListData)
  const [selectedResult, setSelectedResult] = useState()
  return (
    <div>
      <h2 className="font-bold">Elementos encontrados</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {/* {resultsList.map((item, index) => (
          <div key={index} className={`flex flex-col justify-center items-center p-2 m-2 rounded-lg cursor-pointer border-[1px] shadow-sm shadow-violet-500 hover:border-violet-800
          ${selectedResult==index?'grayscale-0'
          :null}`}
          onClick={()=> setSelectedResult(index)}>
            {item.name}
          </div>
        ))} */}
      </div>
    </div>
  );
}

export default ResultsList;
