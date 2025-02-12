"use client";

import BtnSubmit from "@/app/components/buttons/btn_submit";
import { CardForm } from "@/app/components/form";
import createUser from "@/modules/auth/actions/auth-createuser";
import LoadingProvider from "@/providers/LoadingProvider";
import { Box, Flex, Spacer, Text } from "@chakra-ui/react";

export default function AddUser() {
  return (
    <Flex
      w="100%"
      h={{ base: "100vh", lg: "full" }}
      flexDir="column"
      alignItems="center"
      p={1}
    >
      <Flex
        w={"100%"}
        flexDir="column"
        p={2}
        bg="white"
      >
        <Text fontSize="2xl" ml={4} fontWeight="bold" color="black">
          Criar Usuário
        </Text>
        <Flex
          w="full"
          flexDir={{ base: "column", lg: "row" }}
          flexWrap={{ base: "nowrap", lg: "wrap" }}
          p={4}
          gap={2}
          alignItems={{ lg: "center" }}
          mt={4}
          rounded="md"
        >
          <LoadingProvider>
            <CardForm.Form action={createUser}>
              <Flex
                flexDir={{ base: "column", lg: "column" }}
                flexWrap={{ base: "nowrap", lg: "wrap" }}
                gap={{ base: 2, lg: 4 }}
              >
                <Box
                  display={"flex"}
                  flexDir={{ base: "column", lg: "row" }}
                  gap={2}
                >
                  <CardForm.InputString
                    name="nome"
                    color={"black"}
                    label="Nome Completo"
                    w={{ base: "100%", lg: "400px" }}
                    type="text"
                    placeholder="Insira seu Nome e Sobrenome"
                    obrigatorio
                    border={"none"}
                    borderBottom=" 1px solid black"
                    borderRadius={"none"}
                  />
                  <CardForm.InputString
                    name="email"
                    label="Email"
                    color={"black"}
                    w={{ base: "100%", lg: "400px" }}
                    type="email"
                    placeholder="Insira seu Email"
                    obrigatorio
                    border={"none"}
                    borderBottom=" 1px solid black"
                    borderRadius={"none"}
                  />
                </Box>
                <Box
                  display={"flex"}
                  flexDir={{ base: "column", lg: "row" }}
                  gap={2}
                >
                  <CardForm.InputString
                    name="password"
                    label="Senha"
                    color={"black"}
                    w={{ base: "100%", lg: "400px" }}
                    type="password"
                    placeholder="Insira a senha"
                    obrigatorio
                    border={"none"}
                    borderBottom=" 1px solid black"
                    borderRadius={"none"}
                  />
                  <CardForm.InputString
                    name="confirmpassword"
                    color={"black"}
                    label="Confirme a Senha"
                    w={{ base: "100%", lg: "400px" }}
                    type="password"
                    placeholder="Confirme sua senha"
                    obrigatorio
                    border={"none"}
                    borderBottom=" 1px solid black"
                    borderRadius={"none"}
                  />
                </Box>
                <Spacer />
                <BtnSubmit
                  type="submit"
                  colorPalette={"green"}
                  w={{ base: "40%", lg: "15%" }}
                  label="Salvar"
                />
              </Flex>
            </CardForm.Form>
          </LoadingProvider>
        </Flex>
      </Flex>
    </Flex>
  );
}
