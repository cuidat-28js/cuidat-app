import React from "react"

export default function HomeRemind() {
    return (
        <React.Fragment>
            <div>
                <div className="reminders mx-4 mt-11">
                    <h3 className="mt-4 font-josefin-regular text-center bold">Recordatorios</h3>
                    <div className="block rounded-lg shadow bg-[#F9F9F9] p-3">
                        <p className="mb-1">
                            Aun no tienes recordatorios
                        </p>
                        <button type="button"
                        className="inline-block rounded bg-primary px-6 pb-1 pt-1 text-xs font-medium uppercase leading-normal text-white"
                        >
                        Crear Recordatorio</button>
                    </div>
                </div>
                </div>
        </React.Fragment>
    )
}