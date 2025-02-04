/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { toaster } from "@/app/components/ui/toaster";
import { LoadingContext } from "@/context/LoadingContext";
import { PropsWithChildren, useContext, useEffect, useState } from "react";
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
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);
  const {setLoading} = useContext(LoadingContext)

  const [state, formAction] = useFormState(props.action, { error: null });
  console.log("🚀 ~ FormComponent ~ state:", state)

  const handleSubmit = () => {
    setLoading(true)
  };

  useEffect(() => {
    if (state?.error) {
      setIsError(true);
    } else if (state?.error == null) {
      
    } else if (state?.id) {
      setIsSuccess(true);
    }else {
      setIsSuccess(true);
    }
  }, [state]);

  useEffect(() => {
    if (isSuccess) {
      toaster.create({
        title: "Sucesso",
        description: "Informações salvas com sucesso",
        type: "success",
        duration: 3000,
      });
      setTimeout(() => {
        window.location.reload()
      }, 2000)
      setLoading(false)
      setIsSuccess(false); // Reset state after showing toast
    }
    if (isError) {
      if (state?.message) {
        toaster.create({
          title: "Erro",
          description: state?.message,
          duration: 3000,
          type: 'error'
        });
      }
      toaster.create({
        title: "Erro",
        description: "Erro ao salvar as informações",
        type: "error",
        duration: 3000,
      });
      setLoading(false)
      setIsError(false); // Reset state after showing toast
    }
  }, [isSuccess, isError, setLoading ,state?.message]);

  return <form {...props} action={formAction} onSubmit={handleSubmit} />;
}
