"use client";
import { CardForm } from "@/components/form";
import UploadFile from "@/components/form/uploadFile";
import UploadLogo from "@/components/form/uploadLogo";
import { AtivoDesativadoOptions } from "@/data/selectAtivoDesativado";
import { ComissaoOptions } from "@/data/selectComisao";
import { SituacaoTributariaOptions } from "@/data/selectSituacaoTributaria";
import { toaster } from "@/components/ui/toaster"

import { Box, Button, Flex, Text } from "@chakra-ui/react";
import { useState } from "react";
import createClient from "@/modules/auth/actions/auth-createClient";

export default function AddClient() {
  const [razaosocial, setRazaoSocial] = useState("");
  const [inscestadual, setInscEstadual] = useState("");
  const [email, setEmail] = useState("");
  const [telefone, setTelefone] = useState("");

  const getInfosCnpj = async (cnpj: string) => {
    const req = await fetch(`/api/cnpj/${cnpj}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    });
    if(!req.ok){
      toaster.create({
        title: "Erro",
        description: "CNPJ nao encontrado",
        type: "error",
      })
      return
    }
    const res = await req.json();
    const data = res.data;
    setRazaoSocial(data.razao_social || "");
    setInscEstadual(
      data.estabelecimento.inscricoes_estaduais[0].inscricao_estadual || ""
    );
    setEmail(data.estabelecimento.email || "");
    const telefone =
      `${data.estabelecimento.ddd1}${data.estabelecimento.telefone1}` || "";
    setTelefone(telefone);
  };



  return (
      <Flex
        border={"2px" + " solid" + "#00713C"}
        shadow={"md"}
        flexDir={"column"}
        w={"100%"}
        h={"fit-content"}
        rounded={'md'}
        gap={2}
        m={{ base: "0", lg: "2" }}
        p={4}
      >
        <CardForm.Form action={createClient}>
          <Flex w={"full"} flexDir={"column"} flexWrap={"wrap"} gap={3}>
            <Flex
              flexDir={{ base: "column", lg: "row" }}
              flexWrap={"wrap"}
              alignItems={{base: 'start', lg:'end'}}
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
                w={{base: "300px", lg:"400px"}}
                name="razaosocial"
                color={"black"}
                placeholder="Industria Seven Mob Ltda"
                value={razaosocial}
                onChange={(e) => setRazaoSocial(e.target.value)}
                obrigatorio
              />
              <CardForm.InputString
                label="Fantasia"
                w={{base: "300px", lg:"400px"}}
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
                w={{base: "300px", lg:"400px"}}

                name="cliente"
                color={"black"}
                placeholder="JULIANO HENRIQUE SILVA"
                obrigatorio
              />
              <CardForm.InputNumber
                label="WhatsApp"
                w={"150px"}
                name="whatsapp"
                color={"black"}
                placeholder="16993672156"
                obrigatorio
              />
              <CardForm.InputNumber
                label="Telefone"
                w={"150px"}
                name="telefone"
                value={telefone}
                onChange={(e) => setTelefone(e.target.value)}
                color={"black"}
                placeholder="1636625678"
              />
              <CardForm.InputString
                label="E-mail"
                w={{base: "300px", lg:"400px"}}
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
                label="Comissão"
                w="200px"
                options={ComissaoOptions}
                placeholder=""
                name="comissao"
                obrigatorio
              />
              <CardForm.InputNumber
                label="R$ Comissão"
                w={"75px"}
                name="valorcomissao"
                color={"black"}
                placeholder="50"
                obrigatorio
              />

              <CardForm.InputSelect
                label="Situação"
                w="150px"
                options={AtivoDesativadoOptions}
                placeholder="Ativo"
                name={"situacao"}
                obrigatorio
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
                w={{base: "300px", lg:"400px"}}
                name="observacao"
                color={"black"}
                placeholder=""
              />

            </Flex>
            <Flex
              flexDir={{ base: "column", lg: "row" }}
              alignItems={{base: 'start', lg:'end'}}
              flexWrap={"wrap"}
              gap={3}
            >
              <CardForm.InputString
                label="Contador"
                w={"250px"}
                name="contador"
                color={"black"}
                placeholder="Contabilidade"
              />
              <CardForm.InputNumber
                label="WhatsApp"
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
                w={{base: "300px", lg:"400px"}}
                name="justificativa"
                color={"black"}
                placeholder=""
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
