"use client";
import BtnTrash from "@/app/components/buttons/btn_trash";
import { CardForm } from "@/app/components/form";
import { toaster } from "@/app/components/ui/toaster";
import { Tooltip } from "@/app/components/ui/tooltip";
import { UserList } from "@/types/user.type";
import { Box, Button, Flex, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { FaUserAlt } from "react-icons/fa";
import { MdOutlinePassword } from "react-icons/md";

export default function ListUsers() {
  const [users, setUsers] = useState([] as UserList[]);
  const [usersFilter, setUsersFilter] = useState([] as UserList[]);
  const [id, setId] = useState("");
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");

  const handleFilter = () => {
    let filtered = users;

    if (id.trim() !== "") {
      filtered = filtered.filter((user) => user.id === Number(id));
    }
    if (nome.trim() !== "") {
      filtered = filtered.filter((user) =>
        user.name.toLowerCase().includes(nome.toLowerCase())
      );
    }
    if (email.trim() !== "") {
      filtered = filtered.filter((user) =>
        user.email.toLowerCase().includes(email.toLowerCase())
      );
    }

    setUsersFilter(filtered);
  };

  const handleLimparFilter = () => {
    setUsersFilter(users);
    setId("");
    setNome("");
    setEmail("");
  };

  const fetchUsers = async () => {
    const req = await fetch(`/api/user/listusers/`);

    if (!req.ok) {
      toaster.create({
        title: "Erro",
        description: "Erro ao buscar usuários",
        type: "error",
        duration: 3000
      });
    }
    const res = await req.json();
    setUsers(res.data);
    setUsersFilter(res.data);
  };

  const handleResetPassword = async (id: number) => {
    const req = await fetch(`/api/user/resetpassword/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      }
    });
    if (!req.ok) {
      toaster.create({
        title: "Erro",
        description: "Erro ao resetar senha",
        type: "error",
        duration: 3000
      });
    } else {
      toaster.create({
        title: "Sucesso",
        description: "Senha resetada com sucesso",
        type: "success",
        duration: 3000
      });
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <>
      <Flex
        w={"100%"}
        alignItems={{ base: "center", lg: "center" }}
        flexDir={"column"}
        h={{ base: "full", lg: "full" }}
      >
        <Flex
          w={"full"}
          
          p={2}
          justifyContent={"center"}
          h={"fit-content"}
          flexDir={{base:"column", lg:"row"}}
          
        >
          <Flex
            direction={{base:"column", lg:"row"}}
            alignItems={{base:"flex-start", lg:"flex-end"}}
            p={2}
            border={"2px solid #00713C"}
            rounded={"md"}
            gap={{base:2, lg:5}}
            h="fit-content"
          >
            <CardForm.InputNumber
              name="id"
              label="Filtrar ID"
              onChange={(e) => setId(e.target.value)}
              color={"black"}
              w={"60px"}
              value={id}
              type="text"
              placeholder="ID"
            />
            <CardForm.InputString
              name="name"
              label="Filtrar Nome"
              w={{base:'300px', lg:"350px"}}
              color={"black"}
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              type="text"
              placeholder="Digite o Nome do Usuário"
            />
            <CardForm.InputString
              name="email"
              label="Filtrar Email"
              color={"black"}
              w={{base:'300px', lg:"350px"}}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="text"
              placeholder="Digite o Email do Usuário"
            />
            <Flex gap={2}>
            <Button size={"sm"} onClick={handleFilter} colorPalette={"blue"}>
              <Text fontSize={"sm"}>Buscar</Text>
            </Button>
            <Button size={"sm"} onClick={handleLimparFilter} colorPalette={"cyan"}>
              <Text fontSize={"sm"}>Limpar</Text>
            </Button>
            </Flex>
          </Flex>
        </Flex>
        <Flex
          w={"full"}
          m={{ base: 0, lg: 2 }}
          flexDir={{ base: "column", lg: "row" }}
          flexWrap={{ base: "nowrap", lg: "wrap" }}
          alignContent={"flex-start"}
          justifyContent={{ base: "normal", lg: "center" }}
          gap={{ base: 2, lg: 3 }}
        >
          {usersFilter.length > 0 ?  usersFilter.map((user) => (
            <Flex
              border={"2px solid #00713C"}
              rounded={"md"}
              justifyContent={"center"}
              alignItems={"center"}
              flexDir={"column"}
              w={{ base: "100%", lg: "24%" }}
              h={"fit-content"}
              pb={3}
              key={user.id}
            >
              <Flex>
                <Flex
                  w={"40px"}
                  h={"40px"}
                  border={"2px solid #00713C"}
                  rounded={"full"}
                  bg={"#FFFFFF"}
                  alignItems={"center"}
                  justifyContent={"center"}
                  mt={3}
                >
                  <FaUserAlt color="#00713C" />
                </Flex>
              </Flex>
              <Flex w={"98%"} flexDir={"column"} pt={2} gap={2}>
                <Box display={"flex"} gap={1} flexDir={"row"}>
                  <Text color={"Black"} fontWeight={"bold"} fontSize={"sm"}>
                    ID:
                  </Text>
                  <Text fontSize={"sm"} color={"black"}>
                    {user.id}
                  </Text>
                </Box>
                <Box display={"flex"} gap={1} flexDir={"row"}>
                  <Text color={"Black"} fontSize={"sm"} fontWeight={"bold"}>
                    Nome:
                  </Text>
                  <Text fontSize={"sm"} color={"black"}>
                    {user.name}
                  </Text>
                </Box>
                <Box display={"flex"} fontSize={"sm"} gap={1} flexDir={"row"}>
                  <Text color={"Black"} fontSize={"sm"} fontWeight={"bold"}>
                    Email:
                  </Text>
                  <Text fontSize={"sm"} color={"black"}>
                    {user.email}
                  </Text>
                </Box>
                <Flex w={"100%"} gap={2} justifyContent={"flex-end"} px={2}>
                  <BtnTrash id={user.id} />
                  <Tooltip content="Resetar password">
                    <Button
                      w={"10%"}
                      onClick={() => handleResetPassword(user.id)}
                      colorPalette={"green"}
                    >
                      <MdOutlinePassword color={"#FFFFFF"} />
                    </Button>
                  </Tooltip>
                </Flex>
              </Flex>
            </Flex>
          )) : (<Flex> <Text color={"black"}>Nenhum usuário encontrado</Text></Flex>) }
        </Flex>
      </Flex>
    </>
  );
}
