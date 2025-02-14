"use client";
import { CardForm } from "@/app/components/form";
import UploadFile from "@/app/components/form/uploadFile";
import UploadLogo from "@/app/components/form/uploadLogo";
import { planoOptions } from "@/data/selectComisao";
import { SituacaoTributariaOptions } from "@/data/selectSituacaoTributaria";
import { toaster } from "@/app/components/ui/toaster"
import { Box, Button, Flex, Spacer, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import createClient from "@/modules/auth/actions/auth-createClient";
import { Parceiro } from "@/types/parceiro.type";

export default function AddClient() {
  const [razaosocial, setRazaoSocial] = useState("");
  const [inscestadual, setInscEstadual] = useState("");
  const [email, setEmail] = useState("");
  const [telefone, setTelefone] = useState("");
  const [plano,] = useState("");
  const [temParceiros,] = useState(false);
  const [parceiros, setParceiros] = useState<{ label: string; value: string }[]>([]);
  const [selectedParceiro, setSelectedParceiro] = useState("");


  const fetchParceiros = async () => {
    try {
      const response = await fetch(`/api/parceiros/getall`);
      if (!response.ok) throw new Error("Erro ao buscar parceiros");

      const data = await response.json();
      if (Array.isArray(data)) {

        const formattedParceiros = data.map((parceiro: Parceiro) => ({
          label: parceiro.nome,
          value: parceiro.id.toString(),

        }));
        setParceiros(formattedParceiros);
      }
    } catch (error) {
      console.error("Erro ao buscar parceiros:", error);
    }
  };

  useEffect(() => {
    fetchParceiros();
  }, [plano, temParceiros]);




  const replacestring = (string: string) => {
    return string.replace(/\D/g, '')
  }


  const getInfosCnpj = async (cnpj: string) => {
    cnpj = replacestring(cnpj)
    console.log(cnpj)
    const req = await fetch(`/api/cnpj/${cnpj}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    });
    if (!req.ok) {
      toaster.create({
        title: "Erro",
        description: "CNPJ nao encontrado",
        type: "error",
      })
      return
    }
    const res = await req.json();
    const data = res.data;
    if (!data.razao_social) {
      setRazaoSocial('')
    } else {
      setRazaoSocial(data.razao_social);
    }

    if (!data.estabelecimento.inscricoes_estaduais[0]) {
      setInscEstadual('')
    } else {
      setInscEstadual(
        data.estabelecimento.inscricoes_estaduais[0].inscricao_estadual || ""
      );
    }

    if (!data.estabelecimento.email) {
      setEmail('')
    } else {
      setEmail(data.estabelecimento.email || "");
    }

    if (!data.estabelecimento.ddd1 || !data.estabelecimento.telefone1) {
      setTelefone('')
    } else {
      const telefone =
        `${data.estabelecimento.ddd1}${data.estabelecimento.telefone1}` || "";
      setTelefone(telefone);
    }
  }

  return (

    <Flex
      flexDir={"column"}
      w={"100%"}
      h={"fit-content"}
      rounded={'md'}
      gap={2}
      m={{ base: "0", lg: "2" }}
      p={4}
    >
      <Flex
        w={"full"}> <Text color={"black"} fontSize={"2xl"} fontWeight={"bold"}>Cadastrar Cliente</Text>
      </Flex>
      <Spacer />
      <CardForm.Form action={createClient}>
        <Flex w={"full"} flexDir={"column"} flexWrap={"wrap"} gap={3}>
          <Flex
            flexDir={{ base: "column", lg: "row" }}
            flexWrap={"wrap"}
            alignItems={{ base: 'start', lg: 'end' }}
            gap={3}
          >
            <CardForm.InputNumber
              label="Cnpj"
              w={"150px"}
              name="cnpj"
              color={"black"}
              onBlur={(e) => getInfosCnpj(e.target.value)}
              placeholder="00000000000000"
              obrigatorio
            />
            <CardForm.InputNumber
              label="Inscricao Estadual"
              w={"200px"}
              name="inscestadual"
              color={"black"}
              value={inscestadual}
              onChange={(e) => setInscEstadual(e.target.value)}
              placeholder="000000000000"
              obrigatorio
            />
            <CardForm.InputString
              label="Razão Social"
              w={{ base: "300px", lg: "400px" }}
              name="razaosocial"
              color={"black"}
              placeholder="Industria Seven Mob Ltda"
              value={razaosocial}
              onChange={(e) => setRazaoSocial(e.target.value)}
              obrigatorio
            />
            <CardForm.InputString
              label="Fantasia"
              w={{ base: "300px", lg: "400px" }}
              name="fantasia"
              color={"black"}
              placeholder="SEVENMOB"
              obrigatorio
            />
            <UploadLogo />
          </Flex>

          <Flex
            flexDir={{ base: "column", lg: "row" }}
            flexWrap={"wrap"}
            gap={3}
          >
            <CardForm.InputString
              label="Cliente"
              w={{ base: "300px", lg: "400px" }}

              name="cliente"
              color={"black"}
              placeholder="JULIANO HENRIQUE SILVA"
              obrigatorio
            />
            <CardForm.InputNumber
              label="Whatsapp"
              w={"150px"}
              name="telefone"
              color={"black"}
              placeholder="16993672156"
              obrigatorio
            />
            <CardForm.InputNumber
              label="Telefone"
              w={"150px"}
              name="telefone2"
              value={telefone}
              onChange={(e) => setTelefone(e.target.value)}
              color={"black"}
              placeholder="1636625678"
            />
            <CardForm.InputString
              label="E-mail"
              w={{ base: "300px", lg: "400px" }}
              name="email"
              color={"black"}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="sevenmob@gmail.com"
              obrigatorio
            />
          </Flex>

          <Flex
            flexDir={{ base: "column", lg: "row" }}
            flexWrap={"wrap"}
            gap={3}
          >
            <CardForm.InputCep
              label="CEP"
              w={"100px"}
              name="cep"
              color={"black"}
              placeholder="14673544"
            />
          </Flex>

          <Flex flexDir={{ base: "column", lg: "column" }} flexWrap={"wrap"}>
            <Text fontSize={"sm"} color={"#000000"}>
              Ultima Nota Emitida:
            </Text>
            <Box
              display={"flex"}
              flexDir={{ base: "column", lg: "row" }}
              gap={3}
            >
              <CardForm.InputNumber
                label="Serie"
                w={"150px"}
                name="serieultimanota"
                color={"black"}
                placeholder="00"
              />
              <CardForm.InputNumber
                label="Numero"
                w={"150px"}
                name="numeroultimanota"
                color={"black"}
                placeholder="00"
              />
            </Box>
          </Flex>
          <Flex
            flexDir={{ base: "column", lg: "row" }}
            flexWrap={"wrap"}
            gap={3}
          >

            <CardForm.InputSelect
              label="Plano"
              w="200px"
              options={planoOptions}
              placeholder=""
              name="plano"
              obrigatorio
            />

            <CardForm.InputPartner
              label="Parceiros"
              w="200px"
              options={parceiros}
              placeholder="Digite ou selecione um parceiro"
              name="parceiro"
              obrigatorio
              value={selectedParceiro}
              onChange={setSelectedParceiro}
            />

            <CardForm.InputNumber
              label="Valor"
              w={"75px"}
              name="valor"
              color={"black"}
              placeholder="50"
              obrigatorio
            />
            <CardForm.InputString
              label="Observação"
              w={{ base: "300px", lg: "400px" }}
              name="observacao"
              color={"black"}
              placeholder=""
            />

          </Flex>
          <Flex
            flexDir={{ base: "column", lg: "row" }}
            alignItems={{ base: 'start', lg: 'end' }}
            flexWrap={"wrap"}
            gap={3}
          >
            <CardForm.InputString
              label="Contador"
              w={"250px"}
              name="contador"
              color={"black"}
              placeholder="Contabilidade"
              obrigatorio
            />
            <CardForm.InputNumber
              label="WhatsApp Contador"
              w={"150px"}
              name="whatsappcontador"
              color={"black"}
              placeholder="16993672156"
              obrigatorio
            />
            <CardForm.InputDate
              label="Vencimento Certificado"
              w={"150px"}
              name="vencicertificado"
              color={"black"}
              obrigatorio
            />
            <UploadFile />
          </Flex>
          <Flex flexDir={{ base: "column", lg: "row" }} gap={3}>
          </Flex>
          <Flex
            flexDir={{ base: "column", lg: "row" }}
            flexWrap={"wrap"}
            gap={3}
          >
            <CardForm.InputSelect
              label="Situação Tributaria"
              w={"250px"}
              options={SituacaoTributariaOptions}
              placeholder="Simples Mei"
              name={"situacaotributaria"}
              obrigatorio
            />
            <CardForm.InputString
              label="Justificativa"
              w={{ base: "300px", lg: "400px" }}
              name="justificativa"
              color={"black"}
              placeholder=""
            />
            <input
              type="hidden"
              name="parceiro_id"
              value={selectedParceiro} 
            />
          </Flex>
          <Flex
            flexDir={{ base: "column", lg: "row" }}
            flexWrap={"wrap"}
            gap={3}
          >
          </Flex>
          <Flex flexDir={{ base: "column", lg: "row" }} w={"100%"}>
            <Button
              colorPalette={"green"}
              w={{ base: "20%", lg: "10%" }}
              shadow={"md"}
              type="submit"
            >
              Salvar
            </Button>
          </Flex>
        </Flex>
      </CardForm.Form>
    </Flex>
  );
}
