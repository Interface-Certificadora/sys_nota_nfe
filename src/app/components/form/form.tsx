/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { toaster } from "@/app/components/ui/toaster";
import { LoadingContext } from "@/context/LoadingContext";
import { PropsWithChildren, useContext, useEffect} from "react";
import { useFormState } from "react-dom";

type HTMLFormProps = React.DetailedHTMLProps<
  React.FormHTMLAttributes<HTMLFormElement>,
  HTMLFormElement
>;

type FormProps = PropsWithChildren<
  Omit<HTMLFormProps, "action"> & {
    action: (prevState: any, formData: FormData) => Promise<any>;
  }
>;

export function FormComponent(props: FormProps) {
  
  const { setLoading } = useContext(LoadingContext)

  const [state, formAction] = useFormState(props.action, { error: null });

 

  const handleSubmit = () => {
    setLoading(true)
  };
  

  useEffect(() => {
  

    if (state?.message) {
      toaster.create({
        title: state.error ? "Erro" : "Sucesso",
        description: state.message,
        type: state.error ? "error" : "success",
        duration: 3000,
      });
    }

    if (state?.success) {
      setTimeout(() => {
        window.location.reload();
      }, 2000);
    }

    setLoading(false);
    
  }, [state, setLoading]);


  return <form {...props} action={formAction} onSubmit={handleSubmit} />;
}
