"use client";

import BtnSubmit from "@/app/components/buttons/btn_submit";
import { CardForm } from "@/app/components/form";
import { toaster } from "@/app/components/ui/toaster";
import LoadingProvider from "@/providers/LoadingProvider";
import { Box, Flex, HStack, Spinner, Text } from "@chakra-ui/react";

import { useState } from "react";

export default function Partner() {
  const[loading, setLoading] = useState(false)

  const initialValues = {
    nome: "",
    cpf: "",
    email: "",
    telefone: "",
    chave_pix: "",
    valor: null,
  };

  const [formData, setFormData] = useState({
    nome: "",
    cpf: "",
    email: "",
    telefone: "",
    chave_pix: "",
    valor: null,
  });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: name === "valor" ? Number(value) : value,
    }));
  };


  const handleCreatePartner = async () => {



    try {
      const response = await fetch("/api/parceiros/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        toaster.create({
          title: "Erro",
          description: "Erro ao cadastrar parceiro",
          type: "error",
          duration: 3000,
        });
      } else {
        toaster.create({
          title: "Sucesso",
          description: "Parceiro cadastrado com sucesso",
          type: "success",
          duration: 3000,
        });

        setFormData(initialValues);
      }
    } catch (error) {
      console.error("Erro ao enviar os dados", error);
      toaster.create({
        title: "Erro",
        description: "Falha ao conectar-se ao servidor",
        type: "error",
        duration: 3000,
      });
    }
  }
  return loading ? (
    <HStack
      justify="center"
      align="center"
      gap="5"
      position="absolute"
      top="50%"
      left="50%"
      transform="translate(-50%, -50%)"
      w="full"
      h="full"
    >
      <Spinner color="green.800" size="lg" />
      <Text color="green.800" fontSize="xl">Carregando...</Text>
    </HStack>
  ) : (
    <>
      <Flex flexDir={"column"} p={3} w="full" h="full">
        <Flex
          w={"full"}

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
                <Box display={"flex"} gap={4} color={"black"}>
                  <CardForm.InputString
                    w={"300px"}
                    name="nome"
                    label="Nome"
                    placeholder="Digite o nome"
                    type="text"
                    color={"black"}
                    value={formData.nome}
                    onChange={handleChange}
                    border={"none"}
                    borderBottom=" 1px solid black"
                    borderRadius={"none"}
                  />

                  <CardForm.InputNumber
                    name="cpf"
                    w={"200px"}
                    label="CPF"
                    placeholder="Digite o CPF"
                    type="text"
                    color={"black"}
                    value={formData.cpf}
                    onChange={handleChange}
                    border={"none"}
                    borderBottom=" 1px solid black"
                    borderRadius={"none"}
                  />
                </Box>
                <Box display={"flex"} gap={4} color={"black"}>
                  <CardForm.InputString
                    w={"400px"}
                    name="email"
                    label="Email"
                    placeholder="Digite o email"
                    type="email"
                    color={"black"}
                    value={formData.email}
                    onChange={handleChange}
                    border={"none"}
                    borderBottom=" 1px solid black"
                    borderRadius={"none"}
                  />

                  <CardForm.InputNumber
                    w={"200px"}
                    name="telefone"
                    label="Telefone"
                    placeholder="Digite o telefone"
                    type="text"
                    color={"black"}
                    value={formData.telefone}
                    onChange={handleChange}
                    border={"none"}
                    borderBottom=" 1px solid black"
                    borderRadius={"none"}
                  />
                </Box>
                <Box display={"flex"} gap={4}>
                  <CardForm.InputString
                    name="chave_pix"
                    w={"500px"}
                    label="Chave Pix"
                    placeholder="Digite a chave Pix"
                    type="text"
                    color={"black"}
                    value={formData.chave_pix}
                    onChange={handleChange}
                    border={"none"}
                    borderBottom=" 1px solid black"
                    borderRadius={"none"}
                  />

                  <CardForm.InputNumber
                    w={"130px"}
                    name="valor"
                    label="Valor"
                    placeholder="Digite o valor"
                    type="text"
                    color={"black"}
                    value={formData.valor}
                    onChange={handleChange}
                    border={"none"}
                    borderBottom=" 1px solid black"
                    borderRadius={"none"}
                  />
                </Box>
              </Flex>
            </CardForm.Form>
            <BtnSubmit w={'5%'} size={'sm'} colorPalette={"green"} label="Salvar" onClick={handleCreatePartner} />
          </LoadingProvider>
        </Flex>
      </Flex>
    </>
  );
}
