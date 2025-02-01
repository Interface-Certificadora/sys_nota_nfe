"use client";

import { useEffect, useState } from "react";
import { Box, Button, Flex, Text } from "@chakra-ui/react";
import { CardForm } from "@/components/form";

import { toaster } from "@/components/ui/toaster"
import { useRouter } from "next/navigation";

type Props = {
    params: { id: string };
};



export default function ClientePage({ params }: Props) {

    const router = useRouter();

    const [deleting, setdelete] = useState(false)
    const [loading, setLoading] = useState(true);
    const [saving, setsaving] = useState(false);
    const { id } = params;
    const [formData, setFormData] = useState({
        cnpj: "",
        ie: "",
        razaoSocial: "",
        fantasia: "",
        cliente: "",
        whatsapp: true,
        telefone: "",
        telefone2: "",
        whatsapp2: true,
        email: "",
        user: "",
        password: "",
        cep: "",
        endereco: "",
        bairro: "",
        numero: "",
        complemento: "",
        cidade: "",
        uf: "",
        serieultimanota: "",
        numeroultimanota: "",
        comissao: true,
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
        simples: true,
        status: true,
        dominio: "",
        fechamento: "",
        teste: "",
        sefaz: true
    });

    const fetchData = async () => {
        try {
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

    useEffect(() => {
        fetchData();
    }, []);


    const handleChange = (e) => {
        const { name, type, value, checked } = e.target;

        setFormData((prev) => ({
            ...prev,
            [name]: type === "checkbox" ? checked : value
        }));
    };

    const handleDelete = async () => {
        if (!confirm("Deseja realmente excluir esse cliente da lista de ativos?")) return;

        setdelete(true);
        const response = await fetch(`/api/cliente/delete/${id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
            },
        });

        const data = await response.json();

        if (!response.ok) {
            toaster.create({
                title: "Erro",
                description: data.message || "Erro ao excluir o cliente.",
                type: "error"
            });
        } else {
            toaster.create({
                title: "Sucesso",
                description: data.message || "Cliente excluído com sucesso.",
                type: "success"
            });
            setTimeout(() => {
                router.push("/cliente"); 
            }, 500); 
        }
    };

    const handlePatch = async () => {
        
        const body = {
            cnpj: formData.cnpj.replace(/[^a-zA-Z0-9]/g, ''),
            ie: formData.ie,
            razaoSocial: formData.razaoSocial,
            fantasia: formData.fantasia,
            cliente: formData.cliente,
            telefone: formData.telefone.replace(/[^a-zA-Z0-9]/g, ''),
            telefone2: formData.telefone2.replace(/[^a-zA-Z0-9]/g, ''),
            email: formData.email,
            cep: formData.cep,
            endereco: formData.endereco,
            bairro: formData.bairro,
            numero: formData.numero,
            complemento: formData.complemento,
            cidade: formData.cidade,
            uf: formData.uf,
            serieultimanota: formData.serieultimanota,
            numeroultimanota: formData.numeroultimanota,
            plano: formData.plano,
            valorcomissao: formData.valorcomissao,
            situacao: formData.situacao,
            valor: formData.valor,
            observacao: formData.observacao,
            contador: formData.contador,
            tel_contador: formData.tel_contador.replace(/[^a-zA-Z0-9]/g, ''),
            vencicertificado: formData.vencicertificado,
            situacaotributaria: formData.situacaotributaria,
            justificativa: formData.justificativa,
            fechamento: formData.fechamento,
        }
        setsaving(true);

        const response = await fetch(`/api/cliente/path/${id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(body),
        });

        const data = await response.json();

        if (!response.ok) {
            toaster.create({
                title: "Erro",
                description: data.message || "Erro ao atualizar o cliente.",
                type: "error",
            });
        } else {
            toaster.create({
                title: "Sucesso",
                description: data.message || "Cliente atualizado com sucesso.",
                type: "success",
            });
        }
        setsaving(false);
    };


    return (
        <Box w="full" h="full" p={4} bg="gray.50">
            <Text fontSize="2xl" color="black" fontWeight="bold">Detalhes do Cliente</Text>
            <Flex direction="column" gap={4} mt={4}>
                <Flex wrap="wrap" gap={3}>
                    <CardForm.InputString name="cliente" color="black" label="Nome Completo" w={{ base: "100%", lg: "400px" }} type="text" fontWeight="semibold" onChange={handleChange} value={formData.cliente} required />
                    <CardForm.InputString name="fantasia" color="black" label="Fantasia" w={{ base: "100%", lg: "400px" }} type="text" fontWeight="semibold" value={formData.fantasia} onChange={handleChange} required />
                    <CardForm.InputString name="cnpj" color="black" label="CNPJ" w={{ base: "100%", lg: "200px" }} type="text" fontWeight="semibold" value={formData.cnpj} onChange={handleChange} required />
                    <CardForm.InputString name="inscestadual" color="black" label="Inscrição Estadual" w={{ base: "100%", lg: "200px" }} type="text" fontWeight="semibold" value={formData.ie} onChange={handleChange} required />
                    <CardForm.InputString name="razaosocial" color="black" label="Razão Social" w={{ base: "100%", lg: "400px" }} type="text" fontWeight="semibold" value={formData.razaoSocial} onChange={handleChange} required />
                    <CardForm.InputString name="telefone" color="black" label="Telefone" w={{ base: "100%", lg: "200px" }} type="text" fontWeight="semibold" value={formData.telefone} onChange={handleChange} required />
                    <CardForm.InputString name="whatsapp" color="black" label="WhatsApp" value={formData.telefone} onChange={handleChange} />
                    <CardForm.InputString name="telefone2" color="black" label="Telefone Secundário" w={{ base: "100%", lg: "200px" }} type="text" fontWeight="semibold" value={formData.telefone2} onChange={handleChange} />

                    <CardForm.InputString name="CEP" color="black" label="CEP" value={formData.cep} onChange={handleChange} />
                    <CardForm.InputString name="cidade" color="black" label="cidade" value={formData.cidade} onChange={handleChange} />
                    <CardForm.InputString name="bairro" color="black" label="bairro" value={formData.bairro} onChange={handleChange} />
                    <CardForm.InputString name="endereco" color="black" label="endereco" value={formData.endereco} onChange={handleChange} />
                    <CardForm.InputString name="numero" color="black" label="numero" value={formData.numero} onChange={handleChange} />
                    <CardForm.InputString name="Complemento" color="black" label="Complemento" value={formData.complemento} onChange={handleChange} />

                    <CardForm.InputString name="email" color="black" label="E-mail" w={{ base: "100%", lg: "400px" }} type="email" fontWeight="semibold" value={formData.email} onChange={handleChange} required />
                    <CardForm.InputString name="plano" color="black" label="Plano" w={{ base: "100%", lg: "200px" }} type="text" fontWeight="semibold" value={formData.plano} onChange={handleChange} required />
                    <CardForm.InputString name="status" color="black" label="Status" checked={formData.status} onChange={handleChange} />
                    <CardForm.InputString name="dominio" color="black" label="Domínio" w={{ base: "100%", lg: "400px" }} type="text" fontWeight="semibold" value={formData.dominio} onChange={handleChange} required />
                    <CardForm.InputString name="valorcomissao" color="black" label="valor da comissao" value={formData.valorcomissao} onChange={handleChange} />
                    <CardForm.InputString name="contador" color="black" label="Contador" w={{ base: "100%", lg: "250px" }} type="text" fontWeight="semibold" value={formData.contador} onChange={handleChange} />
                    <CardForm.InputString name="tel_contador" color="black" label="Telefone Contador" w={{ base: "100%", lg: "200px" }} type="text" fontWeight="semibold" value={formData.tel_contador} onChange={handleChange} />
                    <CardForm.InputString name="whatsapp_cont" color="black" label="WhatsApp Contador" value={formData.tel_contador} onChange={handleChange} />
                    <CardForm.InputNumber name="fechamento" color="black" label="Data de Fechamento" fontWeight="semibold" value={formData.fechamento} onChange={handleChange} required />
                    <CardForm.InputNumber name="teste" color="black" label="Teste" w={{ base: "100%", lg: "100px" }} fontWeight="semibold" value={formData.teste} onChange={handleChange} required />
                    <CardForm.InputString name="comissao" color="black" label="Comissão" checked={formData.comissao} onChange={handleChange} />
                    <CardForm.InputString name="sefaz" color="black" label="SEFAZ" checked={formData.sefaz} onChange={handleChange} />
                </Flex>
                <Flex w="full" gap={5} justify="start">
                    <Button type="submit" onClick={handlePatch} bg="#00713C" color="white" _hover={{ background: "green.600" }} w="150px">Salvar</Button>
                    <Button type="submit" onClick={handleDelete} bg="red.700" color="white" _hover={{ background: "red.600" }} w="150px">Excluir</Button>
                </Flex>
            </Flex>
        </Box>
    );
}
