"use client";

import { useState } from "react";
import {
  Flex,
  IconButton,
  Image,
  Link,
  Text,
  VStack,
  Button
} from "@chakra-ui/react";
import {
  FaPowerOff,
  FaUser,
  FaUserPlus,
  FaUsers,
  FaUsersCog,
  FaBars
} from "react-icons/fa";
import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";
import { MdAdminPanelSettings, MdOutlineAttachMoney } from "react-icons/md";
import { PiUsersFourFill } from "react-icons/pi";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { toaster } from "../ui/toaster";
import { GiReceiveMoney } from "react-icons/gi";

export default function MobileHeader() {
  const router = useRouter();
  const [menuOpen, setMenuOpen] = useState(false);
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleLogout = async () => {
    try {
      const res = await fetch("/api/logout");
      if (!res.ok) {
        toaster.create({
          title: "Erro",
          description: "Erro ao sair!",
          type: "error",
          duration: 3000
        });
      } else {
        router.push("/login");
      }
    } catch (err) {
      console.log(err);
    }
  };

  const handleMenuClick = (index: number) => {
    setOpenIndex((current) => (current === index ? null : index));
  };

  return (
    <Flex
      justifyContent="space-between"
      alignItems="center"
      h="60px"
      w="100%"
      bg="#FFFFFF"
      borderBottom="1px solid #00713C"
      px="3"
      position="relative"
    >
      {/* Logo */}
      <Link href="/home" _focus={{ outline: "none" }}>
        <Image
          w="120px"
          h="30px"
          src="/NFEB.svg"
          alt="Logo"
          objectFit="cover"
        />
      </Link>

      {/* Ícone de Menu */}
      <IconButton
        aria-label="Abrir menu"
        onClick={() => setMenuOpen(!menuOpen)}
        bg="transparent"
        color="#00713C"
        _hover={{ bg: "rgba(0, 113, 60, 0.1)" }}
      >
        <FaBars size={20} />
      </IconButton>

      {/* Menu Responsivo */}
      {menuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.2 }}
          style={{
            position: "absolute",
            top: "60px",
            left: "0",
            width: "100%",
            background: "white",
            boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
            borderRadius: "md",
            padding: "10px",
            zIndex: 10
          }}
        >
          <VStack align="start">
            {/* Clientes */}
            <Flex
              justify="space-between"
              align="center"
              w="100%"
              p="8px"
              borderRadius="4px"
              cursor="pointer"
              _hover={{ bg: "rgba(0, 113, 60, 0.1)" }}
              onClick={() => handleMenuClick(1)}
            >
              <Flex align="center" gap={2}>
                <IconButton aria-label="Clientes" bg="transparent">
                  <FaUser color="#00713C" />
                </IconButton>
                <Text fontSize="sm" color="#00713C">
                  Clientes
                </Text>
              </Flex>
              <IconButton aria-label="Expandir" bg="transparent">
                {openIndex === 1 ? <IoMdArrowDropup /> : <IoMdArrowDropdown />}
              </IconButton>
            </Flex>

            {openIndex === 1 && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.2 }}
              >
                <Link href="/cliente/cadastrar" _focus={{ outline: "none" }}>
                  <Flex align="center" pl="10" py="4px">
                    <IconButton
                      aria-label="Cadastrar Clientes"
                      bg="transparent"
                    >
                      <FaUserPlus color="#00713C" />
                    </IconButton>
                    <Text color={"#00713C"} fontSize="sm">Cadastrar Clientes</Text>
                  </Flex>
                </Link>
                <Link href="/cliente" _focus={{ outline: "none" }}>
                  <Flex align="center" pl="10" py="4px">
                    <IconButton aria-label="Lista de Clientes" bg="transparent">
                      <FaUsers color="#00713C" />
                    </IconButton>
                    <Text color={"#00713C"} fontSize="sm">Lista de Clientes</Text>
                  </Flex>
                </Link>
              </motion.div>
            )}

            {/* Usuários */}
            <Flex
              justify="space-between"
              align="center"
              w="100%"
              p="8px"
              borderRadius="4px"
              cursor="pointer"
              _hover={{ bg: "rgba(0, 113, 60, 0.1)" }}
              onClick={() => handleMenuClick(2)}
            >
              <Flex align="center" gap={2}>
                <IconButton aria-label="Usuários" bg="transparent">
                  <MdAdminPanelSettings color="#00713C" />
                </IconButton>
                <Text fontSize="sm" color="#00713C">
                  Usuários
                </Text>
              </Flex>
              <IconButton aria-label="Expandir" bg="transparent">
                {openIndex === 2 ? <IoMdArrowDropup /> : <IoMdArrowDropdown />}
              </IconButton>
            </Flex>
            {openIndex === 2 && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.2 }}
              >
                <Flex flexDir={"column"}>

                <Link href="/usuarios/cadastrar" _focus={{ outline: "none" }}>
                  <Flex align="center" pl="10" py="4px">
                    <IconButton aria-label="Criar Usuário" bg="transparent">
                      <FaUserPlus color="#00713C" />
                    </IconButton>
                    <Text color={"#00713C"} fontSize="sm">Criar Usuário</Text>
                  </Flex>
                </Link>
                <Link href="/usuarios" _focus={{ outline: "none" }}>
                  <Flex align="center" pl="10" py="4px">
                    <IconButton aria-label="Lista de Usuários" bg="transparent">
                      <FaUsersCog color="#00713C" />
                    </IconButton>
                    <Text color={"#00713C"} fontSize="sm">Lista de Usuários</Text>
                  </Flex>
                </Link>
                </Flex>
              </motion.div>
            )}

            <Flex
              justify="space-between"
              align="center"
              w="100%"
              p="8px"
              borderRadius="4px"
              cursor="pointer"
              _hover={{ bg: "rgba(0, 113, 60, 0.1)" }}
              onClick={() => handleMenuClick(3)}
              _focus={{ outline: "none" }}
            >
              <Flex align="center" gap={2}>
                <IconButton aria-label="Parceiros" bg="transparent">
                  <PiUsersFourFill color="#00713C" />
                </IconButton>
                <Text fontSize="sm" color="#00713C">
                  Parceiros
                </Text>
              </Flex>
              <IconButton aria-label="Expandir" bg="transparent">
                {openIndex === 3 ? <IoMdArrowDropup /> : <IoMdArrowDropdown />}
              </IconButton>
            </Flex>

            {openIndex === 3 && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.2 }}
              >
                <Link href="/parceiros/cadastrar" _focus={{ outline: "none" }}>
                  <Flex align="center" pl="10" py="4px">
                    <IconButton
                      aria-label="Cadastrar Parceiro"
                      bg="transparent"
                    >
                      <FaUserPlus color="#00713C" />
                    </IconButton>
                    <Text color={"#00713C"} fontSize="sm">Cadastrar Parceiro</Text>
                  </Flex>
                </Link>
                <Link href="/parceiros" _focus={{ outline: "none" }}>
                  <Flex align="center" pl="10" py="4px">
                    <IconButton
                      aria-label="Lista de Parceiros"
                      bg="transparent"
                    >
                      <FaUser color="#00713C" />
                    </IconButton>
                    <Text  color={"#00713C"}fontSize="sm">Lista de Parceiros</Text>
                  </Flex>
                </Link>
              </motion.div>
            )}

            <Flex
              justify="space-between"
              align="center"
              w="100%"
              p="8px"
              borderRadius="4px"
              cursor="pointer"
              _hover={{ bg: "rgba(0, 113, 60, 0.1)" }}
            >
              <Link href="/pagamentos" _focus={{ outline: "none" }}>
                <Flex align="center" gap={2}>
                  <IconButton aria-label="Usuários" bg="transparent">
                    <MdOutlineAttachMoney  color="#00713C" />
                  </IconButton>
                  <Text fontSize="sm" color="#00713C">
                    Pagamentos
                  </Text>
                </Flex>
                <IconButton aria-label="Expandir" bg="transparent"></IconButton>
              </Link>
            </Flex>

            <Flex
              justify="space-between"
              align="center"
              w="100%"
              p="8px"
              borderRadius="4px"
              cursor="pointer"
              _hover={{ bg: "rgba(0, 113, 60, 0.1)" }}
            >
              <Link href="/cobranca" _focus={{ outline: "none" }}>
                <Flex align="center" gap={2}>
                  <IconButton aria-label="Cobrança" bg="transparent">
                    <GiReceiveMoney color="#00713C" />
                  </IconButton>
                  <Text fontSize="sm" color="#00713C">
                    Cobranças
                  </Text>
                </Flex>
                <IconButton aria-label="Expandir" bg="transparent"></IconButton>
              </Link>
            </Flex>

            {/* Logout */}
            <Button
              onClick={handleLogout}
              w="100%"
              justifyContent="flex-start"
              variant="ghost"
            >
              <IconButton aria-label="Sair" bg="transparent">
                <FaPowerOff color="red" />
              </IconButton>
              <Text fontSize="sm" color="red">
                Sair
              </Text>
            </Button>
          </VStack>
        </motion.div>
      )}
    </Flex>
  );
}
