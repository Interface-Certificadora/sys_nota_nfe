"use client"

import React from "react";
import { useBreakpointValue } from "@chakra-ui/react";
import MobileLogin from "./components/MobileLogin";
import DesktopLogin from "./components/DesktopLogin";
import { useEffect } from "react";
import { captureIP } from "@/utils/captureIP"; 


export default function Login() {
  const isMobile = useBreakpointValue({ base: true, md: false });

  useEffect(() => {
    captureIP(); 
  }, []);

  return isMobile ? <MobileLogin /> : <DesktopLogin />;
}
