import { Button } from "@chakra-ui/react"
import {
  FileUploadList,
  FileUploadRoot,
  FileUploadTrigger,
} from "@/components/ui/file-upload"
import { HiUpload } from "react-icons/hi"
export default function UploadFile() {  
  return (
    <FileUploadRoot w={'fit-content'}>
      <FileUploadTrigger asChild>
        <Button variant="solid" colorPalette={'blue'} size="sm">
          <HiUpload /> Upload Certificado
        </Button>
      </FileUploadTrigger>
      <FileUploadList w={'fit-content'}/>
    </FileUploadRoot>
  );
}
