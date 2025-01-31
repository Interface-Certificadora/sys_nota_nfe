import { createContext } from "react";

type LoadingType = {
    loading: boolean,
    setLoading: (value: boolean) => void
}

export const LoadingContext = createContext<LoadingType>({
    loading: false,
    setLoading: () => {}

})