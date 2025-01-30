"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { Box, Button, Flex, Input, Text, Spinner } from "@chakra-ui/react";

export default function ClientePage() {
    const { id } = useParams();  
    const [formData, setFormData] = useState({
        cnpj: "",
        inscestadual: "",
        razaosocial: "",
        fantasia: "",
        cliente: "",
        whatsapp: "",
        telefone: "",
        email: "",
        cep: "",
        serieultimanota: "",
        numeroultimanota: "",
        comissao: "",
        plano: "",
        valorcomissao: "",
        situacao: "",
        valor: "",
        observacao: "",
        contador: "",
        whatsappcontador: "",
        vencicertificado: "",
        situacaotributaria: "",
        justificativa: ""
    });
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            if (!id) return;
            try {
                const response = await fetch(`/api/cliente/${id}`);
                if (!response.ok) {
                    throw new Error("Erro ao buscar dados do cliente");
                }
                const data = await response.json();
                setFormData(data);
                setLoading(false);
            } catch (error) {
                console.error("Erro ao carregar dados:", error);
                setLoading(false);
            }
        };
        fetchData();
    }, [id]);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    if (loading) return <Spinner size="xl" />;

    return (
        <Box w="full" h="full" p={4}>
            <Text fontSize="2xl" fontWeight="bold">Detalhes do Cliente</Text>
            <Flex direction="column" gap={4} mt={4}>
                <Flex wrap="wrap" gap={3}>
                    <Input type="number" placeholder="CNPJ" name="cnpj" w="150px" value={formData.cnpj} onChange={handleChange} />
                    <Input type="number" placeholder="Inscrição Estadual" name="inscestadual" w="200px" value={formData.inscestadual} onChange={handleChange} required />
                    <Input type="text" placeholder="Razão Social" name="razaosocial" w="400px" value={formData.razaosocial} onChange={handleChange} required />
                    <Input type="text" placeholder="Fantasia" name="fantasia" w="400px" value={formData.fantasia} onChange={handleChange} required />
                </Flex>

                <Flex wrap="wrap" gap={3}>
                    <Input type="text" placeholder="Cliente" name="cliente" w="400px" value={formData.cliente} onChange={handleChange} required />
                    <Input type="number" placeholder="WhatsApp" name="whatsapp" w="150px" value={formData.whatsapp} onChange={handleChange} required />
                    <Input type="number" placeholder="Telefone" name="telefone" w="150px" value={formData.telefone} onChange={handleChange} />
                    <Input type="email" placeholder="E-mail" name="email" w="400px" value={formData.email} onChange={handleChange} required />
                </Flex>

                <Flex wrap="wrap" gap={3}>
                    <Input type="text" placeholder="CEP" name="cep" w="100px" value={formData.cep} onChange={handleChange} />
                </Flex>

                <Flex direction="column">
                    <Text fontSize="sm">Última Nota Emitida:</Text>
                    <Flex gap={3}>
                        <Input type="number" placeholder="Série" name="serieultimanota" w="150px" value={formData.serieultimanota} onChange={handleChange} />
                        <Input type="number" placeholder="Número" name="numeroultimanota" w="150px" value={formData.numeroultimanota} onChange={handleChange} />
                    </Flex>
                </Flex>

                <Flex wrap="wrap" gap={3}>
                    <Input type="text" placeholder="Comissão" name="comissao" w="200px" value={formData.comissao} onChange={handleChange} required />
                    <Input type="text" placeholder="Plano" name="plano" w="200px" value={formData.plano} onChange={handleChange} required />
                    <Input type="number" placeholder="R$ Comissão" name="valorcomissao" w="75px" value={formData.valorcomissao} onChange={handleChange} required />
                    <Input type="text" placeholder="Situação" name="situacao" w="150px" value={formData.situacao} onChange={handleChange} required />
                    <Input type="number" placeholder="Valor" name="valor" w="75px" value={formData.valor} onChange={handleChange} required />
                </Flex>

                <Flex wrap="wrap" gap={3}>
                    <Input type="text" placeholder="Contador" name="contador" w="250px" value={formData.contador} onChange={handleChange} required />
                    <Input type="number" placeholder="WhatsApp Contador" name="whatsappcontador" w="150px" value={formData.whatsappcontador} onChange={handleChange} required />
                    <Input type="date" name="vencicertificado" w="150px" value={formData.vencicertificado} onChange={handleChange} required />
                </Flex>

                <Flex w="full" justify="start">
                    <Button bg="#00713C" color="white" _hover={{ background: "green.100" }} w="150px">Salvar</Button>
                </Flex>
            </Flex>
        </Box>
    );
}
