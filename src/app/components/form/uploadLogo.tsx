"use client";
import {
  FileUploadRoot,
  FileUploadTrigger
} from "@/app/components/ui/file-upload";
import { Box, Button, Input } from "@chakra-ui/react";
import { useState } from "react";
import { HiUpload } from "react-icons/hi";

interface Props {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onRetorno?: any;
}

export default function UploadLogo({ onRetorno }: Props) {
  const [base64String, setBase64String] = useState<string>("");

  const handleFileUpload = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = event.target.files?.[0];
    if (file) {
      const base64 = await convertImageToBase64(file);
      setBase64String(base64);
      onRetorno(base64);
    }
  };

  const convertImageToBase64 = (file: File): Promise<string> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();

      reader.onload = () => {
        const result = reader.result as string;
        resolve(result.split(",")[1]);
      };

      reader.onerror = (error) => {
        reject(error);
      };

      reader.readAsDataURL(file);
    });
  };

  return (
    <>
      <FileUploadRoot w={"fit-content"}>
        <FileUploadTrigger asChild>
          <label>
            <Button as="span" variant="solid" colorPalette={"cyan"} size="sm">
              <HiUpload /> Upload Logo
            </Button>
            <input
              type="file"
              accept="image/*"
              style={{ display: "none" }}
              onChange={handleFileUpload}
            />
          </label>
        </FileUploadTrigger>
      </FileUploadRoot>
      <Box hidden>
        <Input
          color={"black"}
          value={base64String}
          type="text"
          name="logo"
          readOnly
        />
      </Box>
    </>
  );
}
