import { LoadingContext } from "@/context/LoadingContext";
import { Button, ButtonProps } from "@chakra-ui/react";
import { useContext } from "react";

interface SubimitButtonProps extends ButtonProps{
  label: string
}
export default function BtnSubmit({label, ...rest}: SubimitButtonProps) {
    const {loading} = useContext(LoadingContext)
    
    return (
                      <Button
                      loading={loading}
                      {...rest}>
                        {label}
                      </Button>
    );
}