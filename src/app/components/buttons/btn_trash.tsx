import { Button, Group } from "@chakra-ui/react"
import {
  PopoverArrow,
  PopoverBody,
  PopoverCloseTrigger,
  PopoverContent,
  PopoverFooter,
  PopoverHeader,
  PopoverRoot,
  PopoverTrigger,
} from "@/app/components/ui/popover"
import { useRef } from "react"
import { FaRegTrashAlt } from "react-icons/fa"
import { toaster } from "../ui/toaster"

interface BtnTrashProps {
    id: number
}

export default function BtnTrash({id}: BtnTrashProps) {
  const ref = useRef<HTMLButtonElement>(null)

  const handleDeleteUser = async () => {

    const req = await fetch(`/api/user/deleteuser/${id}`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json"
        }
    })
    const res = await req.json()
    if(!req.ok){
        toaster.create({
            title: "Erro",
            description: res.message,
            type: "error",
            duration: 3000,
        })
    }else{
        toaster.create({
            title: "Sucesso",
            description: res.message,
            type: "success",
            duration: 3000,
        })
        setTimeout(() => {
            window.location.reload()
        }, 2000)
    }
  }
  return (
    <PopoverRoot initialFocusEl={() => ref.current}>
      <PopoverTrigger asChild>
        <Button w={'10%'} colorPalette={'red'} >
        <FaRegTrashAlt color={"#FFFFFF"} />
        </Button>
      </PopoverTrigger>
      <PopoverContent bg={'#FFFFFF'}>
        <PopoverHeader color={'black'}>Excluir Usuario</PopoverHeader>
        <PopoverArrow color={'red'} />
        <PopoverBody color={'black'}>
          Tem certeza que deseja excluir esse usuario? 
        </PopoverBody>
        <PopoverFooter justifyContent={'center'}> 
          <Group>
            <Button colorPalette={'red'} onClick={handleDeleteUser} size="sm">Confirmar</Button>
          </Group>
        </PopoverFooter>
        <PopoverCloseTrigger  color={'red'} _hover={{bg: 'transparent'}}/>
      </PopoverContent>
    </PopoverRoot>
  )
}

