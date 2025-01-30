"use client";

import { useEffect, useState } from "react";
import { Box, Button, Flex, Input, Text } from "@chakra-ui/react";
import { CardForm } from "@/components/form";

type Props = {
    params: { id: string };
};

export default function ClientePage({ params }: Props) {
    const { id } = params;
    console.log("🚀 ~ ClientePage ~ id:", id);

    const [formData, setFormData] = useState({
        cnpj: "",
        ie: "",
        razaoSocial: "",
        fantasia: "",
        cliente: "",
        whatsapp: false,
        telefone: "",
        telefone2: "",
        whatsapp2: false,
        email: "",
        user: "",
        password: "",
        cep: "",
        serieultimanota: "",
        numeroultimanota: "",
        comissao: false,
        plano: "",
        valorcomissao: "",
        situacao: "",
        valor: "",
        observacao: "",
        contador: "",
        tel_contador: "",
        whatsapp_cont: false,
        vencicertificado: "",
        situacaotributaria: "",
        justificativa: "",
        simples: false,
        status: false,
        dominio: "",
        fechamento: "",
        teste: "",
        sefaz: false
    });

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (!id) return;
        const fetchData = async () => {
            try {
                console.log("🚀 ~ fetchData ~ id:", id);
                const response = await fetch(`/api/cliente/getone/${id}`);
                if (!response.ok) throw new Error("Erro ao buscar dados do cliente");

                const data = await response.json();
                setFormData(data);
            } catch (error) {
                console.error("Erro ao carregar dados:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [id]);

    const handleChange = (e) => {
        const { name, type, value, checked } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: type === "checkbox" ? checked : value
        }));
    };

    return (
        <Box w="full" h="full" p={4}>
            <Text fontSize="2xl" color="black" fontWeight="bold">Detalhes do Cliente</Text>
            <Flex direction="column" gap={4} mt={4}>
                <Flex wrap="wrap" gap={3}>
                    <CardForm.InputString name="cliente" color="black" label="Nome Completo" w={{ base: "100%", lg: "400px" }} type="text" fontWeight="semibold" value={formData.cliente} onChange={handleChange} required />
                    <CardForm.InputString name="fantasia" color="black" label="Fantasia" w={{ base: "100%", lg: "400px" }} type="text" fontWeight="semibold" value={formData.fantasia} onChange={handleChange} required />
                    <CardForm.InputString name="cnpj" color="black" label="CNPJ" w={{ base: "100%", lg: "200px" }} type="text" fontWeight="semibold" value={formData.cnpj} onChange={handleChange} required />
                    <CardForm.InputString name="inscestadual" color="black" label="Inscrição Estadual" w={{ base: "100%", lg: "200px" }} type="text" fontWeight="semibold" value={formData.ie} onChange={handleChange} required />
                    <CardForm.InputString name="razaosocial" color="black" label="Razão Social" w={{ base: "100%", lg: "400px" }} type="text" fontWeight="semibold" value={formData.razaoSocial} onChange={handleChange} required />
                    <CardForm.InputString name="telefone" color="black" label="Telefone" w={{ base: "100%", lg: "200px" }} type="text" fontWeight="semibold" value={formData.telefone} onChange={handleChange} required />
                    <CardForm.InputString name="whatsapp" color="black" label="WhatsApp" checked={formData.whatsapp} onChange={handleChange} />
                    <CardForm.InputString name="telefone2" color="black" label="Telefone Secundário" w={{ base: "100%", lg: "200px" }} type="text" fontWeight="semibold" value={formData.telefone2} onChange={handleChange} />
                    <CardForm.InputString name="whatsapp2" color="black" label="WhatsApp Secundário" checked={formData.whatsapp2} onChange={handleChange} />
                    <CardForm.InputString name="email" color="black" label="E-mail" w={{ base: "100%", lg: "400px" }} type="email" fontWeight="semibold" value={formData.email} onChange={handleChange} required />
                    <CardForm.InputString name="user" color="black" label="Usuário" w={{ base: "100%", lg: "200px" }} type="text" fontWeight="semibold" value={formData.user} onChange={handleChange} required />
                    <CardForm.InputString name="password" color="black" label="Senha" w={{ base: "100%", lg: "200px" }} fontWeight="semibold" value={formData.password} onChange={handleChange} required />
                    <CardForm.InputString name="plano" color="black" label="Plano" w={{ base: "100%", lg: "200px" }} type="text" fontWeight="semibold" value={formData.plano} onChange={handleChange} required />
                    <CardForm.InputString name="simples" color="black" label="Simples Nacional" checked={formData.simples} onChange={handleChange} />
                    <CardForm.InputString name="status" color="black" label="Status" checked={formData.status} onChange={handleChange} />
                    <CardForm.InputString name="dominio" color="black" label="Domínio" w={{ base: "100%", lg: "400px" }} type="text" fontWeight="semibold" value={formData.dominio} onChange={handleChange} required />
                    <CardForm.InputString name="contador" color="black" label="Contador" w={{ base: "100%", lg: "250px" }} type="text" fontWeight="semibold" value={formData.contador} onChange={handleChange} />
                    <CardForm.InputString name="tel_contador" color="black" label="Telefone Contador" w={{ base: "100%", lg: "200px" }} type="text" fontWeight="semibold" value={formData.tel_contador} onChange={handleChange} />
                    <CardForm.InputString name="whatsapp_cont" color="black" label="WhatsApp Contador" checked={formData.whatsapp_cont} onChange={handleChange} />
                    <CardForm.InputNumber name="fechamento" color="black" label="Fechamento" w={{ base: "100%", lg: "100px" }} fontWeight="semibold" value={formData.fechamento} onChange={handleChange} required />
                    <CardForm.InputNumber name="teste" color="black" label="Teste" w={{ base: "100%", lg: "100px" }} fontWeight="semibold" value={formData.teste} onChange={handleChange} required />
                    <CardForm.InputString name="comissao" color="black" label="Comissão" checked={formData.comissao} onChange={handleChange} />
                    <CardForm.InputString name="sefaz" color="black" label="SEFAZ" checked={formData.sefaz} onChange={handleChange} />
                </Flex>
                <Flex w="full" justify="start">
                    <Button bg="#00713C" color="white" _hover={{ background: "green.100" }} w="150px">Salvar</Button>
                </Flex>
            </Flex>
        </Box>
    );
}
