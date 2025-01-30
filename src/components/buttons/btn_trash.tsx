
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
} from "@/components/ui/popover"
import { useRef } from "react"
import { FaRegTrashAlt } from "react-icons/fa"

interface BtnTrashProps {
    id: number
}

export default function BtnTrash({id}: BtnTrashProps) {
  const ref = useRef<HTMLButtonElement>(null)
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
            <Button colorPalette={'red'} size="sm">Confirmar</Button>
          </Group>
        </PopoverFooter>
        <PopoverCloseTrigger  color={'red'} _hover={{bg: 'transparent'}}/>
      </PopoverContent>
    </PopoverRoot>
  )
}

