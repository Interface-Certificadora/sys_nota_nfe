"use client";

import BtnSubmit from "@/app/components/buttons/btn_submit";
import { CardForm } from "@/app/components/form";
import { toaster } from "@/app/components/ui/toaster";
import LoadingProvider from "@/providers/LoadingProvider";
import { Box, Flex, Text } from "@chakra-ui/react";
import { useState } from "react";

export default function Partner() {


  const initialValues = {
    nome: "",
    cpf: "",
    email: "",
    telefone: "",
    chave_pix: "",
    valor: "",
  };

  const [formData, setFormData] = useState(initialValues);

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
  };


  return (
    <Flex flexDir="column" p={3} w="full" h="full" alignItems="center">
      <Flex
        w={{ base: "full", md: "80%", lg: "60%" }}
        flexDir="column"
        p={2}
        gap={3}
      >
        <Text color="black" fontSize="2xl" fontWeight="bold">
          Cadastrar Parceiro
        </Text>
        <LoadingProvider>
          <CardForm.Form action={handleCreatePartner}>
            <Flex gap={2} flexDir={{ base: "column", md: "row" }} flexWrap="wrap">
              <Box display="flex" flexDir={{ base: "column", md: "row" }} gap={4} color="black">
                <CardForm.InputString
                  w={{ base: "full", md: "300px" }}
                  name="nome"
                  label="Nome"
                  placeholder="Digite o nome"
                  type="text"
                  value={formData.nome}
                  onChange={handleChange}
                  rounded={"none"}
                  border={"none"}
                  borderBottom="1px solid black"
                />
                <CardForm.InputNumber
                  w={{ base: "full", md: "200px" }}
                  name="cpf"
                  label="CPF"
                  placeholder="Digite o CPF"
                  type="text"
                  value={formData.cpf}
                  onChange={handleChange}
                  rounded={"none"}
                  border={"none"}
                  borderBottom="1px solid black"
                />
              </Box>
              <Box display="flex" flexDir={{ base: "column", md: "row" }} gap={4} color="black">
                <CardForm.InputString
                  w={{ base: "full", md: "400px" }}
                  name="email"
                  label="Email"
                  placeholder="Digite o email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  rounded={"none"}
                  border={"none"}
                  borderBottom="1px solid black"
                />
                <CardForm.InputNumber
                  w={{ base: "full", md: "200px" }}
                  name="telefone"
                  label="Telefone"
                  placeholder="Digite o telefone"
                  type="text"
                  value={formData.telefone}
                  onChange={handleChange}
                  rounded={"none"}
                  border={"none"}
                  borderBottom="1px solid black"

                />
              </Box>
              <Box display="flex" flexDir={{ base: "column", md: "row" }} gap={4}>
                <CardForm.InputString
                  w={{ base: "full", md: "500px" }}
                  name="chave_pix"
                  label="Chave Pix"
                  placeholder="Digite a chave Pix"
                  type="text"
                  value={formData.chave_pix}
                  onChange={handleChange}
                  rounded={"none"}
                  border={"none"}
                  color={"black"}
                  borderBottom="1px solid black"

                />
                <CardForm.InputNumber
                  w={{ base: "full", md: "130px" }}
                  name="valor"
                  label="Valor"
                  placeholder="Digite o valor"
                  type="text"
                  value={formData.valor}
                  onChange={handleChange}
                  rounded={"none"}
                  border={"none"}
                  borderBottom="1px solid black"
                  color={"black"}
                />
              </Box>
            </Flex>
          </CardForm.Form>
          <BtnSubmit w={{ base: "full", md: "10%" }} size="sm" colorPalette="green" label="Salvar" onClick={handleCreatePartner} />
        </LoadingProvider>
      </Flex>
    </Flex>
  );
}
