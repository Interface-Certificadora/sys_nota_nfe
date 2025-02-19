/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import BtnDownloadLogo from "@/app/components/buttons/btn_baixarlogo";
import { CardForm } from "@/app/components/form";
import UploadFile from "@/app/components/form/uploadFile";
import UploadLogo from "@/app/components/form/uploadLogo";
import { toaster } from "@/app/components/ui/toaster";
import { Box, Button, Flex, HStack, Spinner, Text } from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

type Props = {
  params: { id: string };
};

export default function ClientePage({ params }: Props) {
  const route = useRouter();
  const [deleting, setdelete] = useState(false);
  const [loading, setLoading] = useState(true);
  const [saving, setsaving] = useState(false);
  const { id } = params;
  const [certificateFile, setCertificateFile] = useState<File | null>(null);
  const [senha, setSenha] = useState("");
  const [logostring, setLogoString] = useState("");
  const [url, seturl] = useState("");

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
    sefaz: true,
    logo: ""
  });

  const body = {
    cnpj: formData.cnpj?.replace(/[^a-zA-Z0-9]/g, ""),
    ie: formData.ie,
    razaoSocial: formData.razaoSocial,
    fantasia: formData.fantasia,
    cliente: formData.cliente,
    telefone: formData.telefone?.replace(/[^a-zA-Z0-9]/g, ""),
    telefone2: formData.telefone2
      ? formData.telefone2.replace(/[^a-zA-Z0-9]/g, "")
      : "",
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
    tel_contador: formData.tel_contador?.replace(/[^a-zA-Z0-9]/g, ""),
    vencicertificado: formData.vencicertificado,
    situacaotributaria: formData.situacaotributaria,
    justificativa: formData.justificativa,
    dominio: formData.dominio,
    fechamento: formData.fechamento,
    logo: logostring
  };

  const handlesave = async () => {
    handleUploadCertificate();
    handlePatch();
  };

  const fetchData = async () => {
    try {
      const response = await fetch(`/api/cliente/getone/${id}`);
      if (!response.ok) throw new Error("Erro ao buscar dados do cliente");

      const data = await response.json();

      if (data.certificates.length > 0) {
        const [certificados] = data.certificates.filter(
          (certificado) => certificado.status === true
        );
        console.log(certificados);

        if (certificados) {
          seturl(certificados.url);
          setSenha(certificados.password);
        }
      }

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
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleLogoChange = (e: any) => {
    setLogoString(e);
  };

  const handleDownload = async () => {
    try {
      const response = await fetch(`/api/cliente/download/${id}`);
      if (!response.ok) throw new Error("Erro ao baixar o arquivo");

      const link = document.createElement("a");
      link.href = url;

      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error) {
      console.error("Erro ao baixar o arquivo:", error);
    }
  };

  const handleDelete = async () => {
    if (!confirm("deseja realmente excluir esse cliente da lista de ativos?"))
      return;

    setdelete(true);

    const response = await fetch(`/api/cliente/delete/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json"
      }
    });

    if (!response) {
      toaster.create({
        title: "erro",
        description: response || "o cliente não foi excluido corretamente",
        type: "error"
      });
    } else
      toaster.create({
        title: "sucesso",
        description: "cliente excluido com sucesso",
        type: "success"
      });
    setTimeout(() => {
      route.push("/cliente");
    }, 500);
    setdelete(false);
  };

  const handlePatch = async () => {
    setsaving(true);

    try {
      const response = await fetch(`/api/cliente/path/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(body)
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Erro ao atualizar cliente");
      }
      const data = await response.json();

      toaster.create({
        title: "Sucesso",
        description: data.message || "Cliente atualizado com sucesso!",
        type: "success"
      });
    } catch (error) {
      toaster.create({
        title: "Erro",
        description: "Falha ao atualizar o cliente",
        type: "error"
      });
    } finally {
      setsaving(false);
    }
  };

  const handleUploadCertificate = async () => {
    if (!certificateFile) {
      toaster.create({
        title: "Erro",
        description: "Selecione um certificado digital antes de enviar.",
        type: "error"
      });
      return;
    }

    try {
      const formData = new FormData();
      formData.append("file", certificateFile);
      formData.append(
        "metadata",
        JSON.stringify({
          password: senha,
          clientId: Number(id)
        })
      );

      console.log("Enviando FormData para API...", formData);

      const response = await fetch("/api/certificado/upload", {
        method: "POST",
        body: formData
      });

      const result = await response.json();

      if (response.ok) {
        toaster.create({
          title: "Sucesso",
          description: "Certificado enviado com sucesso.",
          type: "success"
        });
      } else {
        toaster.create({
          title: "Erro",
          description: result.message || "Erro ao enviar o certificado.",
          type: "error"
        });
      }
    } catch (error) {
      console.error("Erro ao enviar certificado:", error);
      toaster.create({
        title: "Erro",
        description: "Erro ao tentar enviar o certificado.",
        type: "error"
      });
    }
  };

  return loading ? (
    <HStack justify={"center"} align={"center"} gap="5">
      <Spinner color="green.800" size="xl" />
      <Text color="green.800">Carregando...</Text>
    </HStack>
  ) : (
    <Box w="full" h="full" p={4}>
      <Text fontSize="2xl" color="black" fontWeight="bold">
        Detalhes do Cliente
      </Text>
      <Flex direction="column" gap={4} mt={4}>
        <Flex wrap="wrap" gap={3}>
          <CardForm.InputString
            border={"none"}
            borderBottom={" 1px solid black"}
            borderRadius={"none"}
            name="cliente"
            color="black"
            label="Nome Completo"
            w={{ base: "100%", lg: "400px" }}
            type="text"
            fontWeight="semibold"
            value={formData.cliente}
            onChange={handleChange}
            required
          />
          <CardForm.InputString
            border={"none"}
            borderBottom={" 1px solid black"}
            borderRadius={"none"}
            name="fantasia"
            color="black"
            label="Fantasia"
            w={{ base: "100%", lg: "400px" }}
            type="text"
            fontWeight="semibold"
            value={formData.fantasia}
            onChange={handleChange}
            required
          />
          <CardForm.InputString
            border={"none"}
            borderBottom={" 1px solid black"}
            borderRadius={"none"}
            name="cnpj"
            color="black"
            label="CNPJ"
            w={{ base: "100%", lg: "200px" }}
            type="text"
            fontWeight="semibold"
            value={formData.cnpj}
            onChange={handleChange}
            required
          />
          <CardForm.InputString
            border={"none"}
            borderBottom={" 1px solid black"}
            borderRadius={"none"}
            name="inscestadual"
            color="black"
            label="Inscrição Estadual"
            w={{ base: "100%", lg: "200px" }}
            type="text"
            fontWeight="semibold"
            value={formData.ie}
            onChange={handleChange}
            required
          />
          <CardForm.InputString
            border={"none"}
            borderBottom={" 1px solid black"}
            borderRadius={"none"}
            name="razaosocial"
            color="black"
            label="Razão Social"
            w={{ base: "100%", lg: "400px" }}
            type="text"
            fontWeight="semibold"
            value={formData.razaoSocial}
            onChange={handleChange}
            required
          />
          <CardForm.InputString
            border={"none"}
            borderBottom={" 1px solid black"}
            borderRadius={"none"}
            name="telefone"
            color="black"
            label="Telefone"
            w={{ base: "100%", lg: "200px" }}
            type="text"
            fontWeight="semibold"
            value={formData.telefone}
            onChange={handleChange}
            required
          />
          <CardForm.InputString
            border={"none"}
            borderBottom={" 1px solid black"}
            borderRadius={"none"}
            name="telefone2"
            color="black"
            label="Telefone Secundário"
            w={{ base: "100%", lg: "200px" }}
            type="text"
            fontWeight="semibold"
            value={formData.telefone2}
            onChange={handleChange}
          />
          <CardForm.InputString
            border={"none"}
            borderBottom={" 1px solid black"}
            borderRadius={"none"}
            name="cep"
            color="black"
            label="CEP"
            value={formData.cep}
            onChange={handleChange}
          />
          <CardForm.InputString
            border={"none"}
            borderBottom={" 1px solid black"}
            borderRadius={"none"}
            name="cidade"
            color="black"
            label="Cidade"
            value={formData.cidade}
            onChange={handleChange}
          />
          <CardForm.InputString
            border={"none"}
            borderBottom={" 1px solid black"}
            borderRadius={"none"}
            name="bairro"
            color="black"
            label="Bairro"
            value={formData.bairro}
            onChange={handleChange}
          />
          <CardForm.InputString
            border={"none"}
            borderBottom={" 1px solid black"}
            borderRadius={"none"}
            name="numero"
            color="black"
            label="Numero"
            value={formData.numero}
            onChange={handleChange}
          />
          <CardForm.InputString
            border={"none"}
            borderBottom={" 1px solid black"}
            borderRadius={"none"}
            name="Complemento"
            color="black"
            label="Complemento"
            value={formData.complemento}
            onChange={handleChange}
          />
          <CardForm.InputString
            border={"none"}
            borderBottom={" 1px solid black"}
            borderRadius={"none"}
            name="email"
            color="black"
            label="E-mail"
            w={{ base: "100%", lg: "400px" }}
            type="email"
            fontWeight="semibold"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <CardForm.InputString
            border={"none"}
            borderBottom={" 1px solid black"}
            borderRadius={"none"}
            name="plano"
            color="black"
            label="Plano"
            w={{ base: "100%", lg: "200px" }}
            type="text"
            fontWeight="semibold"
            value={formData.plano}
            onChange={handleChange}
            required
          />
          <CardForm.InputString
            border={"none"}
            borderBottom={" 1px solid black"}
            borderRadius={"none"}
            name="status"
            color="black"
            label="Status"
            checked={formData.status}
            onChange={handleChange}
          />
          <CardForm.InputString
            border={"none"}
            borderBottom={" 1px solid black"}
            borderRadius={"none"}
            name="dominio"
            color="black"
            label="Domínio"
            w={{ base: "100%", lg: "400px" }}
            type="text"
            fontWeight="semibold"
            value={formData.dominio}
            onChange={handleChange}
            required
          />
          <CardForm.InputString
            border={"none"}
            borderBottom={" 1px solid black"}
            borderRadius={"none"}
            name="valorcomissao"
            color="black"
            label="valor da comissao"
            value={formData.valorcomissao}
            onChange={handleChange}
          />
          <CardForm.InputString
            border={"none"}
            borderBottom={" 1px solid black"}
            borderRadius={"none"}
            name="contador"
            color="black"
            label="Contador"
            w={{ base: "100%", lg: "250px" }}
            type="text"
            fontWeight="semibold"
            value={formData.contador}
            onChange={handleChange}
          />
          <CardForm.InputString
            border={"none"}
            borderBottom={" 1px solid black"}
            borderRadius={"none"}
            name="tel_contador"
            color="black"
            label="Telefone Contador"
            w={{ base: "100%", lg: "200px" }}
            type="text"
            fontWeight="semibold"
            value={formData.tel_contador}
            onChange={handleChange}
          />
          <CardForm.InputNumber
            border={"none"}
            borderBottom={" 1px solid black"}
            borderRadius={"none"}
            name="fechamento"
            color="black"
            label="Data de Fechamento"
            fontWeight="semibold"
            value={formData.fechamento}
            onChange={handleChange}
            required
          />
          <CardForm.InputNumber
            border={"none"}
            borderBottom={" 1px solid black"}
            borderRadius={"none"}
            name="teste"
            color="black"
            label="Teste"
            w={{ base: "100%", lg: "100px" }}
            fontWeight="semibold"
            value={formData.teste}
            onChange={handleChange}
            required
          />
          <CardForm.InputString
            border={"none"}
            borderBottom={" 1px solid black"}
            borderRadius={"none"}
            name="comissao"
            color="black"
            label="Comissão"
            checked={formData.comissao}
            onChange={handleChange}
          />
          <CardForm.InputString
            border={"none"}
            borderBottom={" 1px solid black"}
            borderRadius={"none"}
            name="sefaz"
            color="black"
            label="SEFAZ"
            checked={formData.sefaz}
            onChange={handleChange}
          />
          <Flex gap={4}>
            <CardForm.InputString
              label="Senha Certificado"
              name="certificadosenha"
              color={"black"}
              placeholder="123456"
              onChange={(e) => setSenha(e.target.value)}
              value={senha}
              obrigatorio
              border={"none"}
              rounded={"none"}
              borderBottom={" 1px solid black"}
            />
          </Flex>
        </Flex>
        <Flex w="full" gap={5} justify="start">
          <Button
            type="submit"
            onClick={handlesave}
            bg="#00713C"
            color="white"
            _hover={{ background: "green.600" }}
            w="150px"
          >
            Salvar
          </Button>
          <Button
            type="submit"
            onClick={handleDelete}
            bg="red.700"
            color="white"
            _hover={{ background: "red.600" }}
            w="150px"
          >
            Excluir
          </Button>
          <Button
            type="submit"
            onClick={handleDownload}
            bg="blue.700"
            color="white"
            _hover={{ background: "red.600" }}
            w="150px"
          >
            Baixar Certificado
          </Button>
          {senha && (
            <UploadFile
              onFileSelect={setCertificateFile}
              selectedFile={certificateFile}
            />
          )}
          <BtnDownloadLogo logo={formData.logo} />
          <UploadLogo onRetorno={handleLogoChange} />
        </Flex>
      </Flex>
    </Box>
  );
}
