"use client";

import { Flex, IconButton, Link, Text } from "@chakra-ui/react";
import React from "react";
import { FaUserPlus, FaUsers } from "react-icons/fa";
import { IoIosMenu } from "react-icons/io";

export default function PrivateMenu() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <>
      <Flex
        minW={isOpen ? "10%" : "3%"}
        h={"100%"}
        bg={"#00713C"}
        alignItems={isOpen ? "flex-start" : "center"}
        flexDir={"column"}
        gap={2}
        borderRight={"1px" + " solid" + " #33D388"}
      >
        <Flex alignSelf={"center"} alignItems={"center"}>
          <IconButton
            bg={"transparent"}
            outline={"none"}
            color={"white"}
            aria-label="Open Menu"
            onClick={() => setIsOpen(!isOpen)}
          >
            <IoIosMenu />
          </IconButton>
          {isOpen && (
            <Text color={"white"} fontSize={"sm"}>
              Menu
            </Text>
          )}
        </Flex>

        <Flex flexDir={"column"} gap={1} alignItems={"center"} w={"100%"}>

          <Link w={"100%"} href={"/home"}>
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

          <Link w={"100%"} href={"/home"}>
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
                <FaUsers />
              </IconButton>
              {isOpen && (
                <Text color={"white"} fontSize={"sm"}>
                  Listar Clientes
                </Text>
              )}
            </Flex>
          </Link>

        </Flex>
      </Flex>
    </>
  );
}
