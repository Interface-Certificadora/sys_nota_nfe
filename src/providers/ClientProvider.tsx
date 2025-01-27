'use client'

import { ClientContext } from "@/context/ClientContext"
import { useState } from "react"

interface ClientProps {
    children: React.ReactNode
}

export default function  ClientProvider({children}: ClientProps){
    const [logo, setLogo] = useState<string>('')

    return (
        <ClientContext.Provider
        value={{
            logo,
            setLogo
        }}
        >
            {children}
        </ClientContext.Provider>
    )
}