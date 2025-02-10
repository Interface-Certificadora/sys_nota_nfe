"use client";

import React from "react";
import {
  Flex,
  IconButton,
  Image,
  Link,
  Text
} from "@chakra-ui/react";

import {
  FaUser,
  FaUserPlus,
  FaUsers,
  FaUsersCog
} from "react-icons/fa";
import {
  IoMdArrowDropdown,
  IoMdArrowDropup
} from "react-icons/io";
import { MdAdminPanelSettings } from "react-icons/md";
import { PiUsersFourFill } from "react-icons/pi";

// 1. Importando AnimatePresence e motion
import { AnimatePresence, color, motion } from "framer-motion";

export default function PrivateMenu() {

  const [openIndex, setOpenIndex] = React.useState<number | null>(null);

  const handleMenuClick = (index: number) => {

    setOpenIndex((current) => (current === index ? null : index));
  };


  const buttonStyle = {
    borderRadius: "4px",
    cursor: "pointer",
    alignItems: "center",
    w: "100%",
    justifyContent: "flex-start",
    gap: 2,

    py: 1,
    color: "black",
  };


  const getButtonStyle = (index: number) => {
    const isOpen = openIndex === index;
    return {
      ...buttonStyle,
      bg: isOpen ? "green.600" : "transparent",
      color: isOpen ? "white" : "#00713C",
      _hover: {
        bg: isOpen ? "green.700" : "rgba(0, 113, 60, 0.1)",
      },
    };
  };

  return (
    <Flex
      w="full"
      h={"full"}
      bg="white"
      color="#00713C"

      flexDir="column"
      display={{ base: "none", lg: "flex" }}
      gap={3}
      py="12px"
    >

      <Flex>
        <Text fontSize="lg" fontWeight="bold">
          Menu
        </Text>
      </Flex>


      <Flex flexDir="column" w="100%" pr={"12px"}>
        <Flex
          {...getButtonStyle(1)}
          onClick={() => handleMenuClick(1)}
        >
          <IconButton
            aria-label="Clientes"
            bg="transparent"
            color="inherit"
            _hover={{ bg: "transparent" }}
          >
            <FaUser />
          </IconButton>
          <Text fontSize="sm">Clientes</Text>
          {openIndex === 1 ? <IoMdArrowDropup /> : <IoMdArrowDropdown />}
        </Flex>


        <AnimatePresence initial={false}>
          {openIndex === 1 && (
            <motion.div
              key="submenu1"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
            >
              <Link
                href={"/cliente/cadastrar"}
                style={{ textDecoration: "none" }}
                w="100%"
              >
                <Flex {...buttonStyle} pl="10" mt={1}>
                  <IconButton
                    aria-label="Cadastrar Clientes"
                    bg="transparent"
                    color="#00713C"
                    _hover={{ bg: "transparent" }}
                  >
                    <FaUserPlus />
                  </IconButton>
                  <Text fontSize="sm">Cadastrar Clientes</Text>
                </Flex>
              </Link>

              <Link
                href={"/cliente"}
                style={{ textDecoration: "none" }}
                w="100%"
              >
                <Flex {...buttonStyle} pl="10" mt={1}>
                  <IconButton
                    aria-label="Listar Clientes"
                    bg="transparent"
                    color="#00713C"
                    _hover={{ bg: "transparent" }}
                  >
                    <FaUsers />
                  </IconButton>
                  <Text fontSize="sm">Listar Clientes</Text>
                </Flex>
              </Link>
            </motion.div>
          )}
        </AnimatePresence>
      </Flex>

      {/** USUÁRIOS */}
      <Flex flexDir="column" w="100%">
        <Flex
          {...getButtonStyle(2)}
          onClick={() => handleMenuClick(2)}
        >
          <IconButton
            aria-label="Usuários"
            bg="transparent"
            color="inherit"
            _hover={{ bg: "transparent" }}
          >
            <MdAdminPanelSettings />
          </IconButton>
          <Text fontSize="sm">Usuários</Text>
          {openIndex === 2 ? <IoMdArrowDropup /> : <IoMdArrowDropdown />}
        </Flex>

        <AnimatePresence initial={false}>
          {openIndex === 2 && (
            <motion.div
              key="submenu2"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
            >
              <Link
                href={"/usuarios/cadastrar"}
                style={{ textDecoration: "none" }}
                w="100%"
              >
                <Flex {...buttonStyle} pl="10" mt={1}>
                  <IconButton
                    aria-label="Criar Usuário"
                    bg="transparent"
                    color="#00713C"
                    _hover={{ bg: "transparent" }}
                  >
                    <FaUserPlus />
                  </IconButton>
                  <Text fontSize="sm">Criar Usuário</Text>
                </Flex>
              </Link>

              <Link
                href={"/usuarios"}
                style={{ textDecoration: "none" }}
                w="100%"
              >
                <Flex {...buttonStyle} pl="10" mt={1}>
                  <IconButton
                    aria-label="Listar Usuários"
                    bg="transparent"
                    color="#00713C"
                    _hover={{ bg: "transparent" }}
                  >
                    <FaUsersCog />
                  </IconButton>
                  <Text fontSize="sm">Listar Usuários</Text>
                </Flex>
              </Link>
            </motion.div>
          )}
        </AnimatePresence>
      </Flex>

      {/** PARCEIROS */}
      <Flex flexDir="column" w="100%">
        <Flex
          {...getButtonStyle(3)}
          onClick={() => handleMenuClick(3)}
        >
          <IconButton
            aria-label="Parceiros"
            bg="transparent"
            color="inherit"
            _hover={{ bg: "transparent" }}
          >
            <PiUsersFourFill />
          </IconButton>
          <Text fontSize="sm">Parceiros</Text>
          {openIndex === 3 ? <IoMdArrowDropup /> : <IoMdArrowDropdown />}
        </Flex>

        <AnimatePresence initial={false}>
          {openIndex === 3 && (
            <motion.div
              key="submenu3"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
            >
              <Link
                href={"/parceiros/cadastrar"}
                style={{ textDecoration: "none" }}
                w="100%"
              >
                <Flex {...buttonStyle} pl="10" mt={1}>
                  <IconButton
                    aria-label="Cadastrar Parceiro"
                    bg="transparent"
                    color="#00713C"
                    _hover={{ bg: "transparent" }}
                  >
                    <FaUserPlus />
                  </IconButton>
                  <Text fontSize="sm">Cadastrar Parceiro</Text>
                </Flex>
              </Link>

              <Link
                href={"/parceiros"}
                style={{ textDecoration: "none" }}
                w="100%"
              >
                <Flex {...buttonStyle} pl="10" mt={1}>
                  <IconButton
                    aria-label="Listar Parceiros"
                    bg="transparent"
                    color="#00713C"
                    _hover={{ bg: "transparent" }}
                  >
                    <FaUser />
                  </IconButton>
                  <Text fontSize="sm">Listar Parceiros</Text>
                </Flex>
              </Link>
            </motion.div>
          )}
        </AnimatePresence>
      </Flex>
    </Flex>
  );
}
