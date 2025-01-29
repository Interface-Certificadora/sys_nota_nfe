import { CardForm } from "@/components/form";
import { ButtonPage } from "@/components/page/button";
import { Box, Flex } from "@chakra-ui/react";

export default function CadastroDesktop() {
    return (
        <Flex direction="column"  gap={4}>
            <Flex gap={4} >
                <Box flex="3" w="100%">
                    <CardForm.InputString
                        label="Nome Completo"
                        name="Nome"
                        color="black"
                        placeholder="Insira seu Nome e Sobrenome"
                        obrigatorio
                        border="2px solid black"
                        rounded="lg"
                        h="50px"
                        w="100%"

                    />
                </Box>

                <Box flex="2" w="100%">
                    <CardForm.InputString
                        label="CPF"
                        name="CPF"
                        color="black"
                        placeholder="123.456.789-21"
                        obrigatorio
                        border="2px solid black"
                        rounded="lg"
                        h="50px"
                        w="100%"

                    />
                </Box>
            </Flex>

            <Flex gap={4}>
                <CardForm.InputString
                    label="Usuário de Acesso"
                    flex="1"
                    name="Usuario"
                    color="black"
                    placeholder="Exemplo: joao.silva"
                    obrigatorio
                    border="2px solid black"
                    rounded="lg"
                    h="50px"


                />
                <CardForm.InputString
                    label="Hierarquia"
                    flex="1"
                    name="Hierarquia"
                    color="black"
                    placeholder="Gerente"
                    obrigatorio
                    border="2px solid black"
                    rounded="lg"
                    h="50px"

                />
                <CardForm.InputString
                    label="Telefone"
                    flex="1"
                    name="Telefone"
                    color="black"
                    placeholder="(11) 99999-9999"
                    obrigatorio
                    border="2px solid black"
                    rounded="lg"
                    h="50px"

                />
            </Flex>


            <Flex gap={4}>
                <CardForm.InputString
                    label="Senha"
                    flex="1"
                    name="Senha"
                    color="black"
                    placeholder="Insira a senha para login"
                    obrigatorio
                    border="2px solid black"
                    rounded="lg"
                    h="50px"


                />
                <CardForm.InputString
                    label="Confirme a Senha"
                    flex="1"
                    name="ConfSenha"
                    color="black"
                    placeholder="Confirme sua senha"
                    obrigatorio
                    border="2px solid black"
                    rounded="lg"
                    h="50px"

                />
            </Flex>


            <Flex justify="center" mt={4}>
                <ButtonPage asChild
                    value="cadastro_cliente"
                    color="white"
                    bg="#00713C"
                    p={4}
                    borderRadius="md"
                    fontWeight="bold"
                    _hover={{ bg: "#005A2C", cursor: "pointer" }}>
                    Cadastrar Usuario
                </ButtonPage>
            </Flex>
        </Flex>
    );
}