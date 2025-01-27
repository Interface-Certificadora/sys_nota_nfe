'use client'
import CreateClient from "@/actions/client/create";
import { CardForm } from "@/components/form";
import { AtivoDesativadoOptions } from "@/data/selectAtivoDesativado";
import { ComissaoOptions } from "@/data/selectComisao";
import { SituacaoTributariaOptions } from "@/data/selectSituacaoTributaria";

import { Box, Button, Flex, Text } from "@chakra-ui/react";

export default function AddClient() {
    
    return (
        <>
        <Flex border={"2px" + " solid" + '#00713C' }
        shadow={'md'}
        flexDir={'column'}
        w={'100%'}
        h={'fit-content'}
        gap={2}
        m={{base: '0', lg: '2'}}
        p={4}>
        
        <CardForm.Form action={CreateClient} >
            <Flex w={'full'} flexDir={'column'} flexWrap={'wrap'} gap={3}>

                <Flex flexDir={{base: 'column', lg: 'row'}} flexWrap={'wrap'} gap={3}>
                <CardForm.InputNumber label="Cnpj" w={'150px'} name="cnpj" color={'black'} placeholder="00000000000000" obrigatorio />
                <CardForm.InputNumber label="Inscricao Estadual" w={'200px'} name="inscestadual" color={'black'} placeholder="000000000000" obrigatorio/>
                <CardForm.InputString label="Razão Social" w={'400px'} name="razaosocial" color={'black'} placeholder="Industria Seven Mob Ltda" obrigatorio/>
                <CardForm.InputString label="Fantasia" w={'400px'} name="fantasia" color={'black'} placeholder="SEVENMOB" obrigatorio/>
                </Flex>

                <Flex flexDir={{base: 'column', lg: 'row'}} flexWrap={'wrap'} gap={3}>
                <CardForm.InputString label="Cliente" w={'350px'} name="cliente" color={'black'} placeholder="JULIANO HENRIQUE SILVA" obrigatorio/>
                <CardForm.InputNumber label="WhatsApp" w={'150px'} name="whatsapp" color={'black'} placeholder="16993672156" obrigatorio />
                <CardForm.InputNumber label="Telefone" w={'150px'} name="telefone" color={'black'} placeholder="1636625678"/>
                <CardForm.InputString label="E-mail" w={'400px'} name="email" color={'black'} placeholder="sevenmob@gmail.com" obrigatorio/>
                </Flex>

                <Flex flexDir={{base: 'column', lg: 'row'}} flexWrap={'wrap'} gap={3}>
                <CardForm.InputCep label="CEP" w={'100px'} name="cep" color={'black'} placeholder="14673544" />
                </Flex>

                <Flex flexDir={{base: 'column', lg: 'column'}} flexWrap={'wrap'} >
                        <Text fontSize={'sm'} color={'#000000'}>Ultima Nota Emitida:</Text>
                <Box display={'flex'} flexDir={{base: 'column', lg: 'row'}}  gap={3}>
                <CardForm.InputNumber label="Serie" w={'150px'} name="serieultimanota" color={'black'} placeholder="00"/>
                <CardForm.InputNumber label="Numero" w={'150px'} name="numeroultimanota" color={'black'} placeholder="00"/>
                </Box>



                {/* separar em 2 campos serie e numero */}
                </Flex>
                <Flex flexDir={{base: 'column', lg: 'row'}} flexWrap={'wrap'} gap={3}>
                <CardForm.InputSelect label="Comissão" w="200px"  options={ComissaoOptions} placeholder="" name="comissao"  obrigatorio />
                <CardForm.InputNumber label="R$ Comissão" w={'75px'} name="valorcomissao" color={'black'} placeholder="50" obrigatorio />

                {/* Com ou sem comição */}
                <CardForm.InputSelect label="Situação" w="150px" options={AtivoDesativadoOptions} placeholder="Ativo" name={'situacao'} obrigatorio />
                <CardForm.InputNumber label="Valor" w={'75px'} name="valor" color={'black'} placeholder="50" obrigatorio />
                <CardForm.InputString label="Observação" w={'400px'} name="observacao" color={'black'} placeholder="" />

                {/* gerar dominio automaticamente cnpj.notanfe.com.br */}
                </Flex>
                <Flex  flexDir={{base: 'column', lg: 'row'}} flexWrap={'wrap'} gap={3}>
                <CardForm.InputString label="Contador" w={'250px'} name="contador" color={'black'} placeholder="Contabilidade" />
                <CardForm.InputNumber label="WhatsApp" w={'150px'} name="whatsappcontador" color={'black'} placeholder="16993672156" obrigatorio />
                <CardForm.InputDate label="Vencimento Certificado" w={'150px'} name="vencicertificado" color={'black'} obrigatorio/>
                {/* Criar enviar documento certificado */}
                </Flex>
                <Flex flexDir={{base: 'column', lg: 'row'}} flexWrap={'wrap'} gap={3}>
                    <CardForm.InputSelect label="Situação Tributaria" w={'250px'} options={SituacaoTributariaOptions} placeholder="Simples Mei" name={'situacaotributaria'} obrigatorio />
                    <CardForm.InputString label="Justificativa" w={'400px'} name="justificativa" color={'black'} placeholder="" />
                </Flex>
                <Flex flexDir={{base: 'column', lg: 'row'}} w={'100%'}>
                <Button  colorPalette={'green'} w={'10%'} shadow={'md'} type="submit">
                    Salvar
                </Button>
                </Flex>
            </Flex>

        </ CardForm.Form >
        </Flex>

        </>
    )
}