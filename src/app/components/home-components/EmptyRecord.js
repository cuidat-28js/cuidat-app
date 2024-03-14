import React from "react";

export default function EmptyRecord() {
    return(
        <React.Fragment>
            <div className="bg-white border  rounded-lg m-1 py-3 w-52">
                <p className="text-sm text-center">
                    Aun no haz completado tu expediente
                </p>
            </div>
        </React.Fragment>
    )
}