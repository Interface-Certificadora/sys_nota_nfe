/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { toaster } from "@/components/ui/toaster";
import { useRouter } from "next/navigation";
import { PropsWithChildren, useEffect, useState } from "react";
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
  const route = useRouter();

  const [state, formAction] = useFormState(props.action, { error: null });

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
     route.refresh();
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
      setIsError(false); // Reset state after showing toast
    }
  }, [isSuccess, isError, route, state?.message]);

  return <form {...props} action={formAction} />;
}
