'use client'

import { ClientContext } from "@/context/ClientContext"
import { useState } from "react"

interface ClientProps {
    children: React.ReactNode
}

export default function  ClientProvider({children}: ClientProps){
    const [cpf, setCpf] = useState<number>(0)
    const [nome, setNome] = useState<string>('')

    return (
        <ClientContext.Provider
        value={{
            cpf,
            setCpf,
            nome,
            setNome
        }}
        >
            {children}
        </ClientContext.Provider>
    )
}