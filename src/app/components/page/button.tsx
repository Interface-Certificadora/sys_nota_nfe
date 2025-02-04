"use client";

import { IconButton, Box } from "@chakra-ui/react";
import type { ButtonProps as ChakraButtonProps } from "@chakra-ui/react";
import { useRouter } from "next/navigation";

interface ButtonLoadingProps {
  loading?: boolean;
  loadingText?: React.ReactNode;
}

export interface ButtonProps extends ChakraButtonProps, ButtonLoadingProps {
  scrollTo?: string;
  callnum?: string;
  IconSize?: string | number; 
  color?: string; 
  href?: string;
}

export const ButtonPage = (props: ButtonProps) => {
  const { scrollTo, callnum, children,href, color = "black", ...rest } = props;
  const router = useRouter();

  const Clickfunc = () => {
    
    if (scrollTo) {
      const section = document.getElementById(scrollTo);
    if (section) {
        section.scrollIntoView({ behavior: "auto" });
      }
    }
    if (callnum) {
      const message = encodeURIComponent("Olá, quero adquirir o Nota NFE.");
      const url = `https://api.whatsapp.com/send?phone=${callnum}&text=${message}`;
      window.open(url, "_blank");
    }
    if (href) {
      router.push('/notanfe/faq'); 
    }
  };

  return (
    <IconButton
      {...rest}
      onClick={Clickfunc}
    >
      <Box  color={color}>
        {children}
      </Box>
    </IconButton>
  );
};
