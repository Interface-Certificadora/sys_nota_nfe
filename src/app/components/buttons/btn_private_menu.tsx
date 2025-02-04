"use client";
import {
  MenuRoot,
  MenuTrigger,
  MenuContent,
  MenuItem,
} from "@/app/components/ui/menu"
import { Button, Flex, Link } from "@chakra-ui/react";
import React from "react";
import { FaUserPlus, FaUsers, FaUsersCog } from "react-icons/fa";
import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";
import { MdAdminPanelSettings } from "react-icons/md";
import { PiUsersFourFill } from "react-icons/pi";
import { TiHome } from "react-icons/ti";

export default function BtnPrivateMenu() {
  const [isOpen, setIsOpen] = React.useState(false);
  return (

    <Flex flexDir={"column"}
    display={{base: 'flex', lg: 'none'}}>
      <MenuRoot>
        <MenuTrigger asChild>
          <Button
            color={"white"}
            bg={'#00713C'}
            _active={{ bg: "transparent", border: "transparent" }}
            _focus={{ boxShadow: "none", border: "none", outline: "none" }}
            size={"sm"}
            onClick={() => setIsOpen(!isOpen)}
          >
            Menu {isOpen ?  <IoMdArrowDropup /> : <IoMdArrowDropdown /> }
          </Button>
        </MenuTrigger>
        <MenuContent bg={"#00713C"}>
        <MenuItem asChild color={"white"} value="suporte" _hover={{ bg: "#00713C", opacity: "50%", cursor: "pointer" }}>
            <Link href="/home"><TiHome />Home</Link>
          </MenuItem>
        <MenuItem asChild color={"white"} value="suporte" _hover={{ bg: "#00713C", opacity: "50%", cursor: "pointer" }}>
            <Link href="/cliente/cadastrar"><FaUserPlus />Cadastrar Cliente</Link>
          </MenuItem>
          <MenuItem asChild color={"white"} value="suporte" _hover={{ bg: "#00713C", opacity: "50%", cursor: "pointer" }}>
            <Link href="/cliente"><FaUsers />Lista Clientes</Link>
          </MenuItem>
          <MenuItem asChild color={"white"} value="suporte" _hover={{ bg: "#00713C", opacity: "50%", cursor: "pointer" }}>
            <Link href="/usuarios/cadastrar"><MdAdminPanelSettings />Criar Usuario</Link>
          </MenuItem>
          <MenuItem asChild color={"white"} value="suporte" _hover={{ bg: "#00713C", opacity: "50%", cursor: "pointer" }}>
            <Link href="/usuarios"><FaUsersCog />Lista Usuarios</Link>
          </MenuItem>
          <MenuItem asChild color={"white"} value="suporte" _hover={{ bg: "#00713C", opacity: "50%", cursor: "pointer" }}>
            <Link href="/parceiros"><PiUsersFourFill />Lista Parceiros</Link>
          </MenuItem>
        </MenuContent>
      </MenuRoot>
    </Flex>
    
  );
}
