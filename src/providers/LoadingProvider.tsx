'use client'

import { LoadingContext } from "@/context/LoadingContext"
import { useState } from "react"

interface ClientProps {
    children: React.ReactNode
}

export default function LoadingProvider({ children }: ClientProps) {
    const [loading, setLoading] = useState<boolean>(false)

    return (
        <LoadingContext.Provider
            value={{
                loading,
                setLoading
            }}
        >
            {children}
        </LoadingContext.Provider>
    )
}