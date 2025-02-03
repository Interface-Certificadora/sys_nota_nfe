"use client";

import { Flex, IconButton, Link, Text } from "@chakra-ui/react";
import React from "react";
import { FaUserPlus, FaUsers, FaUsersCog } from "react-icons/fa";
import { IoMenu } from "react-icons/io5";
import { MdAdminPanelSettings } from "react-icons/md";
import { TiHome } from "react-icons/ti";

export default function PrivateMenu() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <>
      <Flex
        minW={isOpen ? "10%" : "3%"}
        bg={"#00713C"}
        alignItems={isOpen ? "flex-start" : "center"}
        flexDir={"column"}
        display={{ base: "none", lg: "flex" }}
        gap={2}
        borderRight={"1px" + " solid" + " #33D388"}
      >
        <Flex
          alignSelf={"center"}
          alignItems={"center"}
          justifyContent={"center"}
          w={isOpen ? "100%" : "100%"}
          _hover={{ cursor: "pointer", bg: "#33D388", opacity: "50%" }}
          onClick={() => setIsOpen(!isOpen)}
        >
          <IconButton
            bg={"transparent"}
            outline={"none"}
            color={"white"}
            aria-label="Open Menu"
          >
            <IoMenu />
          </IconButton>
          {isOpen && (
            <Text color={"white"} fontSize={"sm"}>
              Menu
            </Text>
          )}
        </Flex>

        <Flex flexDir={"column"} gap={1} alignItems={"center"} w={"100%"}>
          <Link w={"100%"} href={"/notanfe/home"}>
            <Flex
              flexDir={"row"}
              alignItems={"center"}
              _hover={{ cursor: "pointer", bg: "#33D388", opacity: "50%" }}
              w={"100%"}
              justifyContent={"center"}
            >
              <IconButton
                bg={"transparent"}
                outline={"none"}
                color={"white"}
                aria-label="Cadastrar Clientes"
              >
                <TiHome />
              </IconButton>
              {isOpen && (
                <Text color={"white"} fontSize={"sm"}>
                  Home
                </Text>
              )}
            </Flex>
          </Link>

          <Link w={"100%"} href={"/notanfe/cliente/cadastrar"}>
            <Flex
              flexDir={"row"}
              alignItems={"center"}
              _hover={{ cursor: "pointer", bg: "#33D388", opacity: "50%" }}
              w={"100%"}
              justifyContent={"center"}
            >
              <IconButton
                bg={"transparent"}
                outline={"none"}
                color={"white"}
                aria-label="Cadastrar Clientes"
              >
                <FaUserPlus />
              </IconButton>
              {isOpen && (
                <Text color={"white"} fontSize={"sm"}>
                  Cadastrar Clientes
                </Text>
              )}
            </Flex>
          </Link>

          <Link w={"100%"} href={"/notanfe/cliente"}>
            <Flex
              flexDir={"row"}
              alignItems={"center"}
              _hover={{ cursor: "pointer", bg: "#33D388", opacity: "50%" }}
              w={"100%"}
              justifyContent={"center"}
            >
              <IconButton
                bg={"transparent"}
                outline={"none"}
                color={"white"}
                aria-label="Listar Clientes"
              >
                <FaUsers />
              </IconButton>
              {isOpen && (
                <Text color={"white"} fontSize={"sm"}>
                  Listar Clientes
                </Text>
              )}
            </Flex>
          </Link>

          <Link w={"100%"} href={"/notanfe/usuarios/cadastrar"}>
            <Flex
              flexDir={"row"}
              alignItems={"center"}
              _hover={{ cursor: "pointer", bg: "#33D388", opacity: "50%" }}
              w={"100%"}
              justifyContent={"center"}
            >
              <IconButton
                bg={"transparent"}
                outline={"none"}
                color={"white"}
                aria-label="Cadastrar Usuarios"
              >
                <MdAdminPanelSettings />
              </IconButton>
              {isOpen && (
                <Text color={"white"} fontSize={"sm"}>
                  Criar Usuario
                </Text>
              )}
            </Flex>
          </Link>

          <Link w={"100%"} href={"/notanfe/usuarios"}>
            <Flex
              flexDir={"row"}
              alignItems={"center"}
              _hover={{ cursor: "pointer", bg: "#33D388", opacity: "50%" }}
              w={"100%"}
              justifyContent={"center"}
            >
              <IconButton
                bg={"transparent"}
                outline={"none"}
                color={"white"}
                aria-label="Listar Usuarios"
              >
                <FaUsersCog />
              </IconButton>
              {isOpen && (
                <Text color={"white"} fontSize={"sm"}>
                  Listar Usuarios
                </Text>
              )}
            </Flex>
          </Link>
        </Flex>
      </Flex>
    </>
  );
}
