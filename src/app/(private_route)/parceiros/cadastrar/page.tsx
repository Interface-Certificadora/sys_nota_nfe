"use client";

import BtnSubmit from "@/app/components/buttons/btn_submit";
import { CardForm } from "@/app/components/form";
import LoadingProvider from "@/providers/LoadingProvider";
import { Box, Flex, Text } from "@chakra-ui/react";
import { useState } from "react";

export default function Partner() {

  const [formData, setFormData] = useState({
    nome: "",
    cpf: "",
    email: "",
    telefone: "",
    chave_pix: "",
    valor: 0,
  });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: name === "valor" ? Number(value) : value,
    }));
  };


  const handleCreatePartner = async () => {
    console.log(formData);


    try {
      const response = await fetch("/api/parceiros/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log("Parceiro criado com sucesso");
      } else {
        console.error("Erro ao criar parceiro");
      }
    } catch (error) {
      console.error("Erro ao enviar os dados", error);
    }

  }
  return (
    <>
      <Flex flexDir={"column"} p={3} w="full" h="full">
        <Flex w={"full"}>
          {" "}
          <Text color={"black"} fontSize={"2xl"} fontWeight={"bold"}>
            Cadastrar Parceiro
          </Text>
        </Flex>
        <Flex
          w={"full"}

          rounded={"md"}
          flexDir={{ base: "column", lg: "column" }}
          p={2}
          gap={3}
        >
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
