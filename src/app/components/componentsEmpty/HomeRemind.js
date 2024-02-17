import React from "react"

export default function HomeRemind() {
    return (
        <React.Fragment>
            <div className=" max-w-5xl w-full items-center justify-between font-lato text-sm lg:flex sm:block">
                <div className="reminders m-4">
                    <h3 className="font-josefin-regular text-center bold">Recordatorios</h3>
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