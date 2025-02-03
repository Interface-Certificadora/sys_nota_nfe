"use client";
import BtnTrash from "@/components/buttons/btn_trash";
import { toaster } from "@/components/ui/toaster";
import { Tooltip } from "@/components/ui/tooltip";
import { UserList } from "@/types/user.type";
import { Box, Button, Flex, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { FaUserAlt } from "react-icons/fa";
import { MdOutlinePassword } from "react-icons/md";

export default function ListUsers() {
    const [users, setUsers] = useState([] as UserList[]);

    const fetchUsers = async () => {
        const req = await fetch(`/api/user/listusers/`)

        if(!req.ok){
            toaster.create({
                title: "Erro",
                description: "Erro ao buscar usuários",
                type: "error",
                duration: 3000,
            })
        
        }
        const res = await req.json()
        setUsers(res.data)
    }

    const handleResetPassword = async (id: number) => {
      const req = await fetch(`/api/user/resetpassword/${id}`, {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json"
          }
        })
        if(!req.ok){
            toaster.create({
                title: "Erro",
                description: "Erro ao resetar senha",
                type: "error",
                duration: 3000,
            })
        }else{
            toaster.create({
                title: "Sucesso",
                description: "Senha resetada com sucesso",
                type: "success",
                duration: 3000,
            })
        }
    }

    useEffect(() => {
        fetchUsers()
    }, [])
    

  return (
    <>
    
    <Flex w={"100%"} h={{ base: "full", lg: "full" }} 
        overflowY={'auto'}
        >
      <Flex
        w={"100%"}
        m={{ base: 0, lg: 2 }}
        flexDir={{ base: "column", lg: "row" }}
        flexWrap={{base:"nowrap", lg:"wrap"}}
        alignContent={"flex-start"}
        justifyContent={{base: "normal", lg:"center"}}
        gap={{ base: 2, lg: 5 }}
      >
        {users.map((user) => (
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
            <Flex >
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
            <Flex
              w={"98%"}
              flexDir={"column"}
              pt={2}
              gap={2}
            >
              <Box display={"flex"} gap={1} flexDir={"row"}>
              <Text color={"Black"} fontWeight={"bold"} fontSize={'sm'}>
                  ID:
                </Text>
                <Text fontSize={'sm'} color={"black"}>{user.id}</Text>
              </Box>
              <Box display={"flex"} gap={1} flexDir={"row"}>
                <Text color={"Black"} fontSize={'sm'} fontWeight={"bold"}>
                  Nome:
                </Text>
                <Text fontSize={'sm'} color={"black"}>{user.name}</Text>
              </Box>
              <Box display={"flex"} fontSize={'sm'} gap={1} flexDir={"row"}>
                <Text color={"Black"} fontSize={'sm'} fontWeight={"bold"}>
                  Email:
                </Text>
                <Text fontSize={'sm'} color={"black"}>{user.email}</Text>
              </Box>
              <Flex w={"100%"} gap={2}  justifyContent={"flex-end"} px={2}>
                  <BtnTrash id={user.id}/>
                <Tooltip content="Resetar password">
                  <Button w={'10%'} onClick={() => handleResetPassword(user.id)} colorPalette={"green"}>
                    <MdOutlinePassword color={"#FFFFFF"} />
                  </Button>
                </Tooltip>
              </Flex>
            </Flex>
          </Flex>
    ))}
    </Flex>
    </Flex>
    </>
  );
}
