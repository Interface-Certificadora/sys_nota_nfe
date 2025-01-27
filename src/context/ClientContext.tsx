import { createContext } from "react";

type ClientType = {
    logo: string,
    setLogo: (value: string) => void
}

export const ClientContext = createContext<ClientType>({
    logo: "",
    setLogo: () => {}

})