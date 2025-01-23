"use client";

import { Button } from "@chakra-ui/react";
import type { ButtonProps as ChakraButtonProps } from "@chakra-ui/react";

interface ButtonLoadingProps {
  loading?: boolean;
  loadingText?: React.ReactNode;
}

export interface ButtonProps extends ChakraButtonProps, ButtonLoadingProps {
  scrollTo?: string;
  callnum?: string;
}

export const ButtonPage = (props: ButtonProps) => {
  const { scrollTo,callnum, ...rest } = props;

  const Clickfunc = () => {
    if (scrollTo) {
      const section = document.getElementById(scrollTo);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }
    if (callnum) {
        const message = encodeURIComponent("Olá, quero adquirir o Nota NFE.");
        const url = `https://api.whatsapp.com/send?phone=${callnum}&text=${message}`;
        window.open(url, "_blank");
    }
  };

  return <Button {...rest} onClick={Clickfunc} />;
};
