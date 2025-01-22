"use client";
import {
  MenuRoot,
  MenuTrigger,
  MenuContent,
  MenuItem,
} from "@/components/ui/menu"
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
        <MenuContent bg={"#FFFFFF"}>
          <MenuItem asChild color={"black"} value="suporte" _hover={{ bg: "#33D388", opacity: "50%", cursor: "pointer" }}>
            <Link href="/suporte">Suporte</Link>
          </MenuItem>
          <MenuItem asChild color={"black"} value="treinamento" _hover={{ bg: "#33D388", opacity: "50%", cursor: "pointer" }}>
            <Link href="/treinamento">Treinamento</Link>
          </MenuItem>
        </MenuContent>
      </MenuRoot>
    </Flex>
    
  );
}
