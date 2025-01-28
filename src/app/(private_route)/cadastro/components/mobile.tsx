import { CardForm } from "@/components/form";
import { ButtonPage } from "@/components/page/button";
import { Flex } from "@chakra-ui/react";

export default function CadastroMobile() {
    return (
        <Flex direction="column" gap={4}>

            <CardForm.InputString
                label="Nome Completo"
                name="Nome"
                color="black"
                placeholder="Insira seu Nome e Sobrenome"
                obrigatorio
                border="1px solid black"
                rounded="lg"
                h="62px"
            />
            <CardForm.InputString
                label="CPF"
                name="CPF"
                color="black"
                placeholder="123.456.789-21"
                obrigatorio
                border="1px solid black"
                rounded="lg"
                h="62px"
            />
            <CardForm.InputString
                label="Usuário de Acesso"
                name="Usuario"
                color="black"
                placeholder="Exemplo: joao.silva"
                obrigatorio
                border="1px solid black"
                rounded="lg"
                h="62px"
            />
            <CardForm.InputString
                label="Hierarquia"
                name="Hierarquia"
                color="black"
                placeholder="Gerente"
                obrigatorio
                border="1px solid black"
                rounded="lg"
                h="62px"
            />
            <CardForm.InputString
                label="Telefone"
                name="Telefone"
                color="black"
                placeholder="(11) 99999-9999"
                obrigatorio
                border="1px solid black"
                rounded="lg"
                h="62px"
            />
            <CardForm.InputString
                label="Senha"
                name="Senha"
                color="black"
                placeholder="Insira a senha para login"
                obrigatorio
                border="1px solid black"
                rounded="lg"
                h="62px"
            />
            <CardForm.InputString
                label="Confirme a Senha"
                name="ConfSenha"
                color="black"
                placeholder="Confirme sua senha"
                obrigatorio
                border="1px solid black"
                rounded="lg"
                h="62px"
            />


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
