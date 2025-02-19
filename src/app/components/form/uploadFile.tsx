import { Button } from "@chakra-ui/react";
import {
  FileUploadList,
  FileUploadRoot,
  FileUploadTrigger,
} from "@/app/components/ui/file-upload";
import { HiUpload } from "react-icons/hi";

interface UploadFileProps {
  onFileSelect: (file: File) => void;
}

export default function UploadFile({ onFileSelect }: UploadFileProps) {

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log("chamo a função");
    if (event.target.files && event.target.files.length > 0) {
      console.log("chamo a função");
      onFileSelect(event.target.files[0]);
    }
  };

  return (
    <FileUploadRoot w={"fit-content"}>
      <FileUploadTrigger asChild>
        <Button variant="solid" colorPalette={"blue"} size="sm">
          <HiUpload /> Upload Certificado
        </Button>
      </FileUploadTrigger>
      <input
        type="file"
        accept=".pfx,.pem,.crt"
        style={{ display: "none" }}
        onChange={handleFileChange}
      />
      <FileUploadList w={"fit-content"} />
    </FileUploadRoot>
  );
}
