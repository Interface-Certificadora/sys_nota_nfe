"use client";
import BtnSubmit from "@/app/components/buttons/btn_submit";
import { CardForm } from "@/app/components/form";
import LoadingProvider from "@/providers/LoadingProvider";
import { Box, Flex, Text } from "@chakra-ui/react";

export default function Partner() {
  const handleCreatePartner = async () => {};
  return (
    <>
      <Flex flexDir={"column"} p={3} w="full" h="full">
        <Flex
          w={"full"}
          border={"3px solid #00713C"}
          rounded={"md"}
          flexDir={{ base: "column", lg: "column" }}
          p={2}
          gap={3}
        >
          <Flex w={"full"}>
            <Text color={"black"} fontSize={"2xl"} fontWeight={"bold"}>
              Cadastrar Parceiro
            </Text>
          </Flex>
          <LoadingProvider>
            <CardForm.Form action={handleCreatePartner}>
              <Flex gap={2} flexDir={"column"} flexWrap={"wrap"}>
                <Box display={"flex"} gap={4}>
                  <CardForm.InputString
                    w={"300px"}
                    name="name"
                    label="Nome"
                    placeholder="Digite o nome"
                    type="text"
                  />

                  <CardForm.InputNumber
                    name="cpf"
                    w={"200px"}
                    label="CPF"
                    placeholder="Digite o CPF"
                    type="text"
                  />
                </Box>
                <Box display={"flex"} gap={4}>
                  <CardForm.InputString
                    w={"400px"}
                    name="email"
                    label="Email"
                    placeholder="Digite o email"
                    type="email"
                  />

                  <CardForm.InputNumber
                    w={"200px"}
                    name="telefone"
                    label="Telefone"
                    placeholder="Digite o telefone"
                    type="text"
                  />
                </Box>
                <Box display={"flex"} gap={4}>
                  <CardForm.InputString
                    name="pix"
                    w={"500px"}
                    label="Chave Pix"
                    placeholder="Digite a chave Pix"
                    type="text"
                  />

                  <CardForm.InputNumber
                    w={"130px"}
                    name="valor"
                    label="Valor"
                    placeholder="Digite o valor"
                    type="text"
                  />
                </Box>
              </Flex>
            </CardForm.Form>
            <BtnSubmit
              w={"5%"}
              size={"sm"}
              colorPalette={"green"}
              label="Salvar"
            />
          </LoadingProvider>
        </Flex>
      </Flex>
    </>
  );
}
