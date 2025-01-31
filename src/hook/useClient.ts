import { ClientContext } from "@/context/LoadingContext";
import { useContext } from "react";

export default function useClientContext(){
    const context = useContext(ClientContext)

    if( context === undefined){
        throw new Error('Não está dentro do contexto')
    }

    return context;
}