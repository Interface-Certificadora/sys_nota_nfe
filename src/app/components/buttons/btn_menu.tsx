"use client";
import {
  MenuRoot,
  MenuTrigger,
  MenuContent,
  MenuItem,
  MenuTriggerItem,
} from "@/app/components/ui/menu"
import { Button, Flex, Link } from "@chakra-ui/react";
import React from "react";
import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";

export default function BtnMenu() {
  const [isOpen, setIsOpen] = React.useState(false);
  return (

    <Flex flexDir={"column"}>
      <MenuRoot>
        <MenuTrigger asChild>
          <Button
            color={"black"}
            _active={{ bg: "transparent", border: "transparent" }}
            _focus={{ boxShadow: "none", border: "none", outline: "none" }}
            size={"sm"}
            onClick={() => setIsOpen(!isOpen)}
          >
            Menu {isOpen ?  <IoMdArrowDropup /> : <IoMdArrowDropdown /> }
          </Button>
        </MenuTrigger>
        <MenuContent  bg={"#FFFFFF"}>
        <MenuRoot positioning={{ placement: "right-start", gutter: 2 }}>
          <MenuTriggerItem color={"black"} bg={'transparent'} _hover={{ opacity: "50%", cursor: "pointer" }} value="suporte">Suporte</MenuTriggerItem>
          <MenuContent bg={'#FFFFFF'}>
            <MenuItem asChild color={"black"} _hover={{ bg: "transparent",opacity: "50%", cursor: "pointer" }} value="faq"><Link color={"black"} href="/suporte">FAQ</Link></MenuItem>
            <MenuItem asChild color={"black"} _hover={{ bg: "transparent",opacity: "50%", cursor: "pointer" }} value="sistema"><Link color={"black"} href="/suporte/sistema">Sistema</Link></MenuItem>
            <MenuItem asChild color={"black"} _hover={{ bg: "transparent",opacity: "50%", cursor: "pointer" }} value="clienteseprodutos"><Link color={"black"} href="/suporte/clienteseprodutos">Clientes e Produtos</Link></MenuItem>
            <MenuItem asChild color={"black"} _hover={{ bg: "transparent",opacity: "50%", cursor: "pointer" }} value="notafiscal"><Link color={"black"} href="/suporte/notafiscal">Nota Fiscal</Link></MenuItem>

          </MenuContent>
        </MenuRoot>
          {/* <MenuItem asChild color={"black"} value="treinamento" _hover={{ bg: "#33D388", opacity: "50%", cursor: "pointer" }}>
            <Link href="/treinamento">Videos</Link>
          </MenuItem> */}
        </MenuContent>
      </MenuRoot>
    </Flex>
  );
}
