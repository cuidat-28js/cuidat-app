"use client"
import React from "react"
import { SessionProvider } from "next-auth"

function Provider({children}) {
    return (
        <SessionProvider>
            {children}
        </SessionProvider>
    )
}

export default Provider