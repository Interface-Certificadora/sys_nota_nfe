"use client";
import { useEffect } from "react";

export default function CaptureIPClient() {

  useEffect(() => {
    async function captureIP() {
      try {
        const res = await fetch("https://api.ipify.org?format=json");
        const data = await res.json();
        const userIP = data.ip;

        console.log("ipcapturado", userIP);

        await fetch("/api/ip/capture", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ ip: userIP }),
        });



      } catch (error) {
        console.error("❌ Erro ao capturar o IP do usuário:", error);
      }
    }

    captureIP();
  }, []);

  return null;
}
