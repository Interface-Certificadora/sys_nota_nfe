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
import { ItemCobrancas } from "@/types/cobrancas.type";

interface DialogPropsItem {
  item: ItemPagamentos;
  itemCobranca?: never; 
}

interface DialogPropsItemCobranca {
  itemCobranca: ItemCobrancas;
  item?: never;
}

type DialogProps = DialogPropsItem | DialogPropsItemCobranca;


export default function Dialog({item, itemCobranca} : DialogProps) {

  const body = itemCobranca
    ? { id: itemCobranca.id, status: false }
    : item
    ? { id: item.id, status: false }
    : null;

  const html = itemCobranca 
  ? true
  : item
  ? false
  : null

    const handlePago = async () => {
      const rota: string = html ? "/api/cobranca/patch" : "/api/pagamentos/patch"
      
        const response = await fetch(rota, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(body)
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
          {html ? "Status" : "Pagar"}
        </Button>
      </DialogTrigger>
      <DialogContent color={"black"} bg={"white"}>
        <DialogHeader>
          <DialogTitle>{html ? "Boleto Cliente: " : "PIX Parceiro"}</DialogTitle>
        </DialogHeader>
        <DialogBody>
          <VStack w={"100%"} display={"flex"} gap={5} alignItems={"flex-start"}>
            <HStack w={"100%"} justifyContent={"space-between"}>
              <Badge size={"md"} bg={"#00713C"}>
                {html ? "Link Boleto" : "Chave PIX"}
              </Badge>
              <ClipboardRoot
                maxW="300px"
                w={{base: '200px', lg: '300px'}}
                value={html ? itemCobranca?.link_boleto : item?.chave_pix} 
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
              <Text fontWeight={"bold"}>{html ? "Cliente" : "Banco"}</Text>
              <Text fontWeight={"bold"}>{html ? itemCobranca?.nomecliente : item?.banco}</Text>
            </HStack>
            <HStack w={"100%"} borderBottom={"1px solid black"}  justifyContent={"space-between"}>
              <Text fontWeight={"bold"}>{html ? "Obs:" : "CPF"}</Text>
              <Text fontWeight={"bold"}>{html ? itemCobranca?.obs : item?.cpf}</Text>
            </HStack>
          </VStack>
        </DialogBody>
        <DialogFooter>
          <DialogActionTrigger asChild>
            <Button colorPalette={'red'}>Cancel</Button>
          </DialogActionTrigger>
          <Button colorPalette={'green'} onClick={handlePago}>{html ? "Alterar Status" : "Pago"}</Button>
        </DialogFooter>
        <DialogCloseTrigger />
      </DialogContent>
    </DialogRoot>
  );
}
