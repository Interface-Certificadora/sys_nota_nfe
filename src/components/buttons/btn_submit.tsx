import { LoadingContext } from "@/context/LoadingContext";
import { Button } from "@chakra-ui/react";
import { useContext } from "react";

export default function BtnSubmit() {
    const {loading} = useContext(LoadingContext)
    
    return (
                      <Button
                      type="submit"
                      colorPalette={'green'}
                      loading={loading}
                      w={{ base: "40%", lg: "15%" }}>
                        Salvar
                      </Button>
    );
}