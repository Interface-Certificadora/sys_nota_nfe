"use client";
import { useEffect } from "react";

export default function CaptureIPClient() {
  useEffect(() => {
    async function captureIP() {
      try {
        // Obtém o IP real do usuário
        const res = await fetch("https://api.ipify.org?format=json");
        const data = await res.json();
        const userIP = data.ip;

        // Envia o IP para o servidor
        await fetch("/api/ip/capture", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ ip: userIP }),
        });
      } catch (error) {
        console.error("Erro ao capturar o IP do usuário:", error);
      }
    }

    captureIP();
  }, []);

  return null; // Nenhum elemento visual é necessário
}
