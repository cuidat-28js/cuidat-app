import Link from "next/link"
import React from "react"

export default function HomeRemind() {
    return (
        <React.Fragment>
            <div>
                <div className="flex flex-col items-center mx-4 mt-7">
                    <h3 className="mt-4 font-josefin-regular text-center bold">Recordatorios</h3>
                    <div className="block flex flex-col items-center rounded-lg shadow bg-[#F9F9F9] p-3">
                        <p className="mb-1 text-sm">
                            Aun no tienes recordatorios
                        </p>
                        <button type="button"
                        className="inline-block rounded bg-primary px-6 pb-1 pt-1 text-xs font-medium text-white hover:bg-white hover:border hover:border-primary hover:text-primary"
                        >
                            <Link href="/calendar">
                            Crear Recordatorio
                            </Link>
                        </button>
                    </div>
                </div>
                </div>
        </React.Fragment>
    )
}