import { Box, Button, Input } from "@chakra-ui/react";
import {
  FileUploadRoot,
  FileUploadTrigger,
} from "@/components/ui/file-upload";
import { HiUpload } from "react-icons/hi";
import { useState } from "react";

export default function UploadLogo() {
  const [base64String, setBase64String] = useState<string>('');

  const handleFileUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const base64 = await convertImageToBase64(file);
      console.log("Imagem em Base64:", base64);
      setBase64String(base64);
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
    <Input value={base64String} name="logo" readOnly />
    </Box>
    </>
  );
}
