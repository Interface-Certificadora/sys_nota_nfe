"use client";

import { CardForm } from "@/app/components/form";
import { toaster } from "@/app/components/ui/toaster";
import { UserList } from "@/types/user.type";
import { Box, Button, Flex, Text, Image, HStack, Spinner } from "@chakra-ui/react";
import { useEffect, useState, useMemo } from "react";
import { FaUserAlt } from "react-icons/fa";
import { useRouter } from 'next/navigation'

export default function ListPartners() {
    const [loading, setLoading] = useState(true);
    const router = useRouter();
    const [Partners, setPartners] = useState<UserList[]>([]);
    const [id, setId] = useState("");
    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [cpf, setCpf] = useState("");
    const [chave_pix, setChavePix] = useState("");
    const [telefone, setTelefone] = useState("");

    const fetchUsers = async () => {
        try {
            const req = await fetch(`/api/parceiros/getall/`);
            if (!req.ok) throw new Error("Erro ao buscar parceiros");

            const res = await req.json();
            if (Array.isArray(res)) {
                setPartners(res);
            } else {
                console.error("Resposta inesperada da API:", res);
            }
        } catch (error) {
            console.error("Erro ao buscar parceiros:", error);
        }
        setLoading(false);
    };


    const handleDelete = async (id: number) => {
        try {
            if (!confirm("deseja realmente excluir esse usuario da lista de ativos?")) return;
            const response = await fetch(`/api/parceiros/delete/${id}`, { method: "DELETE" });
            if (!response.ok) {
                throw new Error("Erro ao excluir parceiro");
            }

            toaster.create({
                title: "Sucesso",
                description: "Parceiro excluído com sucesso!",
                type: "success",
                duration: 3000,
            });


            fetchUsers();
        } catch (error) {
            toaster.create({
                title: "Erro",
                description: error instanceof Error ? error.message : "Erro ao excluir parceiro",
                type: "error",
                duration: 3000,
            });
        }
    };

    const handleGetID = async (id: number) => {
        try {
            const response = await fetch(`/api/parceiros/getone/${id}`, { method: "GET" });
            if (!response.ok) {
                throw new Error("Erro ao encontrar parceiro parceiro");
            }

            toaster.create({
                title: "Sucesso",
                description: "Parceiro encontrado com sucesso!",
                type: "success",
                duration: 3000,
            });
            router.push(`/parceiros/${id}`);
            fetchUsers();
        } catch (error) {
            toaster.create({
                title: "Erro",
                description: error instanceof Error ? error.message : "Erro ao excluir parceiro",
                type: "error",
                duration: 3000,
            });
        }
    };


    useEffect(() => {
        fetchUsers();
    }, []);

    const filteredPartners = useMemo(() => {
        if (!Array.isArray(Partners)) return [];

        return Partners.filter((partner) => {
            return (
                (id.trim() === "" || partner.id === Number(id)) &&
                (nome.trim() === "" || typeof partner.name === "string" && partner.name.toLowerCase().includes(nome.toLowerCase())) &&
                (email.trim() === "" || typeof partner.email === "string" && partner.email.toLowerCase().includes(email.toLowerCase())) &&
                (cpf.trim() === "" || partner.cpf?.toString().includes(cpf)) &&
                (chave_pix.trim() === "" || typeof partner.chave_pix === "string" && partner.chave_pix.includes(chave_pix)) &&
                (telefone.trim() === "" || typeof partner.telefone === "string" && partner.telefone.includes(telefone))
            );
        });
    }, [Partners, id, nome, email, cpf, chave_pix, telefone]);



    const handleLimparFilter = () => {
        setId("");
        setNome("");
        setEmail("");
        setCpf("");
        setChavePix("");
        setTelefone("");
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
        <Flex w="100%" alignItems="center" flexDir="column" h="full">
            <Flex w="full" p={2} justifyContent="center" h="fit-content" flexDir={{ base: "column", lg: "row" }}>
                <Flex direction={{ base: "column", lg: "row" }} p={2} border="2px solid #00713C" rounded="md" gap={5}>
                    <CardForm.InputNumber name="id" label="Filtrar ID" onChange={(e) => setId(e.target.value)} value={id} placeholder="ID" />
                    <CardForm.InputString name="name" label="Filtrar Nome" onChange={(e) => setNome(e.target.value)} value={nome} placeholder="Nome" />
                    <CardForm.InputString name="email" label="Filtrar Email" onChange={(e) => setEmail(e.target.value)} value={email} placeholder="Email" />
                    <Button size="sm" onClick={handleLimparFilter} colorPalette="cyan" aria-label="Limpar filtros">
                        <Text fontSize="sm">Limpar</Text>
                    </Button>
                </Flex>
            </Flex>
            <Flex w="full" flexDir="row" flexWrap="wrap" justifyContent="center" gap={3}>
                {filteredPartners.length > 0 ? (
                    filteredPartners.map((partner) => (
                        <Flex key={`partner-${partner.id}`} border="2px solid #00713C" rounded="md" w={{ base: "100%", lg: "24%" }} p={3}>

                            <FaUserAlt color="#00713C" size={40} />
                            <Box flex={1} ml={3} color={"black"}>
                                <Flex justify={"space-between"}>
                                    <Text fontWeight="bold">ID: {partner.id}</Text>
                                    <Flex>
                                        <Button _hover={{ bg: "red.600" }} onClick={() => handleDelete(partner.id)}><Image color={"red"} boxSize={25} src={"/erase.svg"} alt="Excluir" /></Button>
                                        <Button _hover={{ bg: "yellow.400" }} onClick={() => handleGetID(partner.id)}><Image color={"yellow"} boxSize={25} src={"/file.svg"} alt="Editar" /></Button>
                                    </Flex>
                                </Flex>
                                <Text fontWeight="bold">Nome: {partner.nome}</Text>
                                <Text>Email: {partner.email}</Text>
                                <Text>Telefone: {partner.telefone}</Text>
                            </Box>
                        </Flex>
                    ))
                ) : (
                    <Text color="black">Nenhum usuário encontrado</Text>
                )}
            </Flex>
        </Flex>
    );
}
