"use client";

import { CardForm } from "@/app/components/form";
import { toaster } from "@/app/components/ui/toaster";
import { Button, Flex, HStack, Spinner, Text } from "@chakra-ui/react";
import { useState } from "react";
import { useEffect } from "react";
import { useRouter } from "next/navigation";


type Props = {
    params: { id: string };
};
export default function PartnerPage({ params }: Props) {
    const router = useRouter();
    const { id } = params;
    const [saving, setsaving] = useState(false)
    const [loading, setLoading] = useState(true);
    const [formData, setFormData] = useState({
        nome: "",
        email: "",
        telefone: "",
        cpf: "",
        chave_pix: "",
        valor: "",
    });

    const body = {
        nome: formData.nome,
        email: formData.email,
        telefone: formData.telefone,
        cpf: formData.cpf,
        chave_pix: formData.chave_pix,
        valor: formData.valor,
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const fetchData = async () => {
        try {
            const response = await fetch(`/api/parceiros/getone/${id}`);
            if (!response.ok) throw new Error("Erro ao buscar dados do parceiro");

            const data = await response.json();
            setFormData(data);
        } catch (error) {
            console.error("Erro ao carregar dados:", error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    const handlePatch = async () => {
        setsaving(true);

        try {

            const response = await fetch(`/api/parceiros/patch/${id}`, {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(body),
            });


            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.message || "Erro ao atualizar parceiro");
            }
            const data = await response.json();


            toaster.create({
                title: "Sucesso",
                description: data.message || "parceiro atualizado com sucesso!",
                type: "success",
            });
            router.push(`/parceiros`);

        } catch (error) {
            toaster.create({
                title: "Erro",
                description: "Falha ao atualizar o parceiro",
                type: "error",
            });

        } finally {
            setsaving(false);
        }
    };




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
        <Flex flexDir={"column"} gap={6} w={"fit"}>
            <Text w={"full"} alignContent={"center"} fontSize="2xl" fontWeight="bold" color="black">Atualizar informaçoes</Text>
            <CardForm.InputString

                name="name"
                color="black"
                label="Nome"
                type="text"
                fontWeight="semibold"
                border={"none"}
                value={formData.nome}
                onChange={handleChange}
                required
                borderBottom={"1px solid black"}
                rounded={"none"}
            />
            <CardForm.InputString
                name="email"
                color="black"
                label="Email"
                type="email"
                fontWeight="semibold"
                value={formData.email}
                onChange={handleChange}
                required
                border={"none"}
                borderBottom={"1px solid black"}
                rounded={"none"}
            />
            <CardForm.InputString
                name="telefone"
                color="black"
                label="Telefone"
                type="text"
                fontWeight="semibold"
                value={formData.telefone}
                onChange={handleChange}
                required
                border={"none"}
                borderBottom={"1px solid black"}
                rounded={"none"}
            />
            <CardForm.InputString
                name="CPF"
                color="black"
                label="CPF"
                type="text"
                fontWeight="semibold"
                value={formData.cpf}
                onChange={handleChange}
                required
                border={"none"}
                borderBottom={"1px solid black"}
                rounded={"none"}
            />
            <CardForm.InputString
                name="Chave_pix"
                color="black"
                label="Chave_pix"
                type="text"
                fontWeight="semibold"
                value={formData.chave_pix}
                onChange={handleChange}
                required
                border={"none"}
                borderBottom={"1px solid black"}
                rounded={"none"}
            />
            <CardForm.InputString
                name="valor"
                color="black"
                label="valor"
                type="text"
                fontWeight="semibold"
                value={formData.valor}
                onChange={handleChange}
                required
                border={"none"}
                borderBottom={"1px solid black"}
                rounded={"none"}
            />
            <Flex w="full" gap={5} justify="start">
                <Button type="submit" onClick={handlePatch} bg="#00713C" color="white" _hover={{ background: "green.600" }} w="150px">Salvar</Button>
            </Flex>
        </Flex>
    );
}

