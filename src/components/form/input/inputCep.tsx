'use client'
import { toaster } from "@/components/ui/toaster";
import { Box, Flex, Input, InputProps, Text } from "@chakra-ui/react";
import { useState } from "react";

interface CustomInputCepProps extends InputProps {
    label: string;
    obrigatorio?: boolean;
}

export default function InputCep({
    label,
    obrigatorio,
    ...rest
}: CustomInputCepProps ) {
    const [rua, setRua] = useState('')
    const [ uf, setUf] = useState('')
    const [bairro, setBairro] = useState('')
    const [cidade, setCidade] = useState('')

    const handleCep = async (cep: string) => {
        const req = await fetch(`/api/cep/${cep}`,        
            {
            method: "GET",
            headers: {
              "Content-Type": "application/json"
            }
          })
          const res = await req.json()
          if(!req.ok){
            toaster.create({
                title: "Erro",
                description: "CEP nao encontrado",
                type: "error",
                
            })
            return 
          }
          const data = res.data
          setRua(data.logradouro)
          setUf(data.uf)
          setBairro(data.bairro)
          setCidade(data.localidade)
    }

    return(
        <Flex gap={3} flexWrap={'wrap'} flexDir={{base: 'column', lg: 'row'}}>
                <Box>
                    <label>
                        <Text fontSize="sm" color="#000000">
                            {label}
                            {obrigatorio && (
                                <Text as="span" color="red.500" >
                                    *
                                </Text>
                            )}
                        </Text>
                    </label>
                    <Input onBlur={(e) => handleCep(e.target.value)}{...rest} />
                </Box>
                <Box>
                    <label>
                        <Text fontSize="sm" color="#000000">
                            Cidade
                            {obrigatorio && (
                                <Text as="span" color="red.500" >
                                    *
                                </Text>
                            )}
                        </Text>
                    </label>
                    <Input w={'200px'} value={cidade} color={'black'} name="cidade" readOnly/>
                </Box>
                <Box>
                    <label>
                        <Text fontSize="sm" color="#000000">
                            UF
                            {obrigatorio && (
                                <Text as="span" color="red.500" >
                                    *
                                </Text>
                            )}
                        </Text>
                    </label>
                    <Input w={'50px'} value={uf} color={'black'} name="uf" readOnly/>
                </Box>
                <Box>
                    <label>
                        <Text fontSize="sm" color="#000000">
                            Bairro
                            {obrigatorio && (
                                <Text as="span" color="red.500" >
                                    *
                                </Text>
                            )}
                        </Text>
                    </label>
                    <Input w={'200px'} value={bairro} color={'black'} name="bairro" readOnly/>
                </Box>
                <Box>
                    <label>
                        <Text fontSize="sm" color="#000000">
                            Rua
                            {obrigatorio && (
                                <Text as="span" color="red.500" >
                                    *
                                </Text>
                            )}
                        </Text>
                    </label>
                    <Input w={'200px'} value={rua} color={'black'} name="rua" readOnly/>
                </Box>
                <Box>
                    <label>
                        <Text fontSize="sm" color="#000000">
                            Numero
                            {obrigatorio && (
                                <Text as="span" color="red.500" >
                                    *
                                </Text>
                            )}
                        </Text>
                    </label>
                    <Input w={'75px'} color={'black'} name="numero" />
                </Box>
                <Box>
                    <label>
                        <Text fontSize="sm" color="#000000">
                            Complemento
                            {obrigatorio && (
                                <Text as="span" color="red.500" >
                                    *
                                </Text>
                            )}
                        </Text>
                    </label>
                    <Input w={'150px'} color={'black'} name="complemento" />
                </Box>
        </Flex>
    )
    
}