"use client";

import {  Flex, IconButton, Link, Text } from "@chakra-ui/react";
import React from "react";
import { FaUser, FaUserPlus, FaUsers, FaUsersCog } from "react-icons/fa";
import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";
import { IoMenu } from "react-icons/io5";
import { MdAdminPanelSettings } from "react-icons/md";
import { PiUsersFourFill } from "react-icons/pi";
import { TiHome } from "react-icons/ti";

export default function PrivateMenu() {
  const [isOpen, setIsOpen] = React.useState(false);
  const [menuOpen, setMenuOpen] = React.useState( [] as number[]);

  const handleMenuClick = (index: number) => {
    setIsOpen(true);
    if (menuOpen.includes(index)) {
      setMenuOpen(menuOpen.filter((i) => i !== index));
      return;
    }
    setMenuOpen([...menuOpen, index]);
  };

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
                <TiHome />
              </IconButton>
              {isOpen && (
                <Text color={"white"} fontSize={"sm"}>
                  Home
                </Text>
              )}
            </Flex>
          </Link>

          <Flex flexDir={"column"} gap={1} alignItems={"center"} w={"100%"}>
        <Flex w={"100%"} alignItems={"center"} flexDir={"column"}>
            <Flex
              flexDir={"row"}
              alignItems={"center"}
              _hover={{ cursor: "pointer", bg: "#33D388", opacity: "50%" }}
              w={"100%"}
              justifyContent={"center"}
              onClick={() => handleMenuClick(1)}
            >
              <IconButton
                bg={"transparent"}
                outline={"none"}
                color={"white"}
                aria-label="Listar Parceiros"
              >
                <FaUser />
              </IconButton>
              {isOpen && (
                <>
                  <Text color={"white"} fontSize={"sm"}>
                    Clientes
                  </Text>
                  {menuOpen.includes(1) ? <IoMdArrowDropup /> : <IoMdArrowDropdown />}
                </>
              )}
            </Flex>
            {menuOpen.includes(1) && (
              <>
          <Link w={"100%"} href={"/cliente/cadastrar"}>
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

          <Link w={"100%"} href={"/cliente"}>
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
              </>)}

          <Flex w={"100%"} alignItems={"center"} flexDir={"column"}>
            <Flex
              flexDir={"row"}
              alignItems={"center"}
              _hover={{ cursor: "pointer", bg: "#33D388", opacity: "50%" }}
              w={"100%"}
              justifyContent={"center"}
              onClick={() => handleMenuClick(2)}
            >
              <IconButton
                bg={"transparent"}
                outline={"none"}
                color={"white"}
                aria-label="Usuarios"
              >
                <MdAdminPanelSettings />
              </IconButton>
              {isOpen && (
                <>
                  <Text color={"white"} fontSize={"sm"}>
                    Usuarios
                  </Text>
                  {menuOpen.includes(2) ? <IoMdArrowDropup /> : <IoMdArrowDropdown />}
                </>
              )}
            </Flex>
            {menuOpen.includes(2) && (
              <>
                <Link w={"100%"} href={"/usuarios/cadastrar"}>
                  <Flex
                    flexDir={"row"}
                    alignItems={"center"}
                    _hover={{
                      cursor: "pointer",
                      bg: "#33D388",
                      opacity: "50%"
                    }}
                    w={"100%"}
                    justifyContent={"center"}
                  >
                    <IconButton
                      bg={"transparent"}
                      outline={"none"}
                      color={"white"}
                      aria-label="Cadastrar Usuarios"
                    >
                      <FaUserPlus />
                    </IconButton>
                    {isOpen && (
                      <Text color={"white"} fontSize={"sm"}>
                        Criar Usuario
                      </Text>
                    )}
                  </Flex>
                </Link>

                <Link w={"100%"} href={"/usuarios"}>
                  <Flex
                    flexDir={"row"}
                    alignItems={"center"}
                    _hover={{
                      cursor: "pointer",
                      bg: "#33D388",
                      opacity: "50%"
                    }}
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
              </>
            )}
          </Flex>

          <Flex w={"100%"} alignItems={"center"} flexDir={"column"}>
            <Flex
              flexDir={"row"}
              alignItems={"center"}
              _hover={{ cursor: "pointer", bg: "#33D388", opacity: "50%" }}
              w={"100%"}
              justifyContent={"center"}
              onClick={() => handleMenuClick(3)}
            >
              <IconButton
                bg={"transparent"}
                outline={"none"}
                color={"white"}
                aria-label="Parceiros"
              >
                <PiUsersFourFill />
              </IconButton>
              {isOpen && (
                <>
                  <Text color={"white"} fontSize={"sm"}>
                    Parceiros
                  </Text>
                  {menuOpen.includes(3) ? <IoMdArrowDropup /> : <IoMdArrowDropdown />}
                </>
              )}
            </Flex>

            {menuOpen.includes(3) && (
              <Flex w={"100%"} flexDir={"column"}>
                <Link w={"100%"} href={"/parceiros/cadastrar"}>
                  <Flex
                    flexDir={"row"}
                    alignItems={"center"}
                    _hover={{
                      cursor: "pointer",
                      bg: "#33D388",
                      opacity: "50%"
                    }}
                    w={"100%"}
                    justifyContent={"center"}
                  >
                    <IconButton
                      bg={"transparent"}
                      outline={"none"}
                      color={"white"}
                      aria-label="Cadastrar Parceiro"
                    >
                      <FaUserPlus />
                    </IconButton>
                    {isOpen && (
                      <Text color={"white"} fontSize={"sm"}>
                        Cadastrar Parceiro
                      </Text>
                    )}
                  </Flex>
                </Link>

                <Link w={"100%"} href={"/parceiros"}>
                  <Flex
                    flexDir={"row"}
                    alignItems={"center"}
                    _hover={{
                      cursor: "pointer",
                      bg: "#33D388",
                      opacity: "50%"
                    }}
                    w={"100%"}
                    justifyContent={"center"}
                  >
                    <IconButton
                      bg={"transparent"}
                      outline={"none"}
                      color={"white"}
                      aria-label="Listar Parceiros"
                    >
                      <FaUsers />
                    </IconButton>
                    {isOpen && (
                      <Text color={"white"} fontSize={"sm"}>
                        Listar Parceiros
                      </Text>
                    )}
                  </Flex>
                </Link>
              </Flex>
            )}
          </Flex>
        </Flex>
      </Flex>
      </Flex>
    </>
  );
}
