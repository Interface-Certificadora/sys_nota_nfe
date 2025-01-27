import { createContext } from "react";

type ClientType = {
    cpf: number,
    setCpf: (value: number) => void
    nome: string,
    setNome: (value: string) => void
}

export const ClientContext = createContext<ClientType>({
    cpf: 0,
    setCpf: () => {},
    nome: "",
    setNome: () => {}
})