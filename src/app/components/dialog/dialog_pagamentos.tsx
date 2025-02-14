import { Badge, Button, HStack, Text, VStack } from "@chakra-ui/react";
import {
  DialogActionTrigger,
  DialogBody,
  DialogCloseTrigger,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogRoot,
  DialogTitle,
  DialogTrigger
} from "@/components/ui/dialog";
import {
  ClipboardIconButton,
  ClipboardInput,
  ClipboardRoot
} from "@/components/ui/clipboard";
import { InputGroup } from "../ui/input-group";
import { ItemPagamentos } from "@/types/pagamentos.type";
import { toaster } from "../ui/toaster";

interface DialogProps {
  item: ItemPagamentos
}

export default function Dialog({item} : DialogProps) {

    const handlePago = async () => {
        const response = await fetch(`/api/pagamentos/patch`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({id: item.id, status: false})
        })

        if(response.ok) {
            toaster.create({
                title: "Sucesso",
                description: "Status atualizado com sucesso",
                type: "success"
            })
            setTimeout(() => {
                window.location.reload();
            }, 2000)
        }else{
            toaster.create({
                title: "Erro",
                description: "Erro ao atualizar status",
                type: "error"
            })
        }
    }


  return (
    <DialogRoot>
      <DialogTrigger asChild>
        <Button colorPalette={"blue"} size="sm">
          Pagar
        </Button>
      </DialogTrigger>
      <DialogContent color={"black"} bg={"white"}>
        <DialogHeader>
          <DialogTitle>PIX Parceiro:</DialogTitle>
        </DialogHeader>
        <DialogBody>
          <VStack w={"100%"} display={"flex"} gap={5} alignItems={"flex-start"}>
            <HStack w={"100%"} justifyContent={"space-between"}>
              <Badge size={"md"} bg={"#00713C"}>
                Chave PIX
              </Badge>
              <ClipboardRoot
                maxW="300px"
                w={{base: '200px', lg: '300px'}}
                value={item.chave_pix}
              >
                <InputGroup
                  width="full"
                  endElement={
                    <ClipboardIconButton
                      bg={"blue.500"}
                      colorPalette={"blue"}
                      size={"sm"}
                      me="-2"
                    />
                  }
                >
                  <ClipboardInput w={"300px"} />
                </InputGroup>
              </ClipboardRoot>
            </HStack>
            <HStack borderBottom={"1px solid black"} w={"100%"} justifyContent={"space-between"}>
              <Text fontWeight={"bold"}>Banco</Text>
              <Text fontWeight={"bold"}>{item.banco}</Text>
            </HStack>
            <HStack w={"100%"} borderBottom={"1px solid black"}  justifyContent={"space-between"}>
              <Text fontWeight={"bold"}>CPF</Text>
              <Text fontWeight={"bold"}>{item.cpf}</Text>
            </HStack>
          </VStack>
        </DialogBody>
        <DialogFooter>
          <DialogActionTrigger asChild>
            <Button colorPalette={'red'}>Cancel</Button>
          </DialogActionTrigger>
          <Button colorPalette={'green'} onClick={handlePago}>Pago</Button>
        </DialogFooter>
        <DialogCloseTrigger />
      </DialogContent>
    </DialogRoot>
  );
}
