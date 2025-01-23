"use client";
import {
  MenuRoot,
  MenuTrigger,
  MenuContent,
  MenuItem,
} from "@/components/ui/menu"
import { Button, Flex, Link } from "@chakra-ui/react";
import { MdKeyboardArrowDown } from "react-icons/md";

export default function BtnMenu() {
  return (

    <Flex flexDir={"column"}>
      <MenuRoot>
        <MenuTrigger asChild>
          <Button
            color={"black"}
            _active={{ bg: "transparent", border: "transparent" }}
            _focus={{ boxShadow: "none", border: "none", outline: "none" }}
            size={"sm"}
          >
            Menu <MdKeyboardArrowDown />
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
