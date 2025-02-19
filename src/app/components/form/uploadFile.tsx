import { Button } from "@chakra-ui/react";
import {
  FileUploadList,
  FileUploadRoot,
} from "@/app/components/ui/file-upload";
import { HiUpload } from "react-icons/hi";
import { useRef } from "react";

interface UploadFileProps {
  onFileSelect: (file: File) => void;
  selectedFile?: File | null; 
}

export default function UploadFile({ onFileSelect, selectedFile }: UploadFileProps) {
  const inputRef = useRef<HTMLInputElement | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log("Evento onChange foi chamado!");
    if (event.target.files && event.target.files.length > 0) {
      const selectedFile = event.target.files[0];
      console.log("Arquivo selecionado:", selectedFile.name);
      onFileSelect(selectedFile); 
    }
  };

  const handleClick = () => {
    console.log("Botão de upload clicado!");
    if (inputRef.current) {
      inputRef.current.click();
    }
  };

  return (
    <FileUploadRoot w={"fit-content"}>
      <Button variant="solid" colorScheme="blue" size="sm" onClick={handleClick}>
        <HiUpload /> Upload Certificado
      </Button>

      <input
        ref={inputRef}
        type="file"
        accept=".pfx,.pem,.crt"
        style={{ display: "none" }}
        onChange={handleFileChange}
      />

      {/* Mostra o nome do arquivo selecionado */}
      {selectedFile && (
        <p style={{ marginTop: "5px", fontSize: "14px", color: "#333" }}>
          {selectedFile.name}
        </p>
      )}

      <FileUploadList w={"fit-content"} />
    </FileUploadRoot>
  );
}
