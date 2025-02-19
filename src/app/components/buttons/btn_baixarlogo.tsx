"use client";
import { Button } from "@chakra-ui/react";
import { toaster } from "../ui/toaster";

interface Props {
  logo: string;
}

export default function BtnDownloadLogo({ logo }: Props) {
  const handleDownload = () => {
    if (!logo) {
      toaster.create({
        title: "Logo não encontrado",
        type: "error"
      });
      return;
    }
    const base64Logo = `data:image/png;base64,${logo}`;
    const byteCharacters = atob(base64Logo.split(",")[1]);
    const byteNumbers = new Uint8Array(byteCharacters.length);

    for (let i = 0; i < byteCharacters.length; i++) {
      byteNumbers[i] = byteCharacters.charCodeAt(i);
    }

    const blob = new Blob([byteNumbers], { type: "image/png" });
    const url = URL.createObjectURL(blob);

    const link = document.createElement("a");
    link.href = url;
    link.download = "logo.png";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    URL.revokeObjectURL(url);
  };

  return (
    <Button colorPalette={"cyan"} size="sm" onClick={handleDownload}>
      Baixar Logo
    </Button>
  );
}
