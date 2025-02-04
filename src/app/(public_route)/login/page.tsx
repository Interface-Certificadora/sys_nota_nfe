"use client"

import React from "react";
import { useBreakpointValue } from "@chakra-ui/react";
import MobileLogin from "./components/MobileLogin";
import DesktopLogin from "./components/DesktopLogin";



export default function Login() {
  const isMobile = useBreakpointValue({ base: true, md: false });
  return isMobile ? <MobileLogin /> : <DesktopLogin />;
}
