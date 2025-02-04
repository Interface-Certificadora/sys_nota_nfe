"use client";
import TableManual from "@/app/components/table/tablemanual";
import { Box, Flex, Image, Text } from "@chakra-ui/react";

export default function Sistema() {
  return (
    <Flex
      w={"full"}
      h={"full"}
      p={{ base: 3, lg: 0 }}
      flexDir={"column"}
      alignItems={"center"}
    >
      <Flex
        pb={6}
        flexDir={"column"}
        w={{ base: "100%", lg: "60%" }}
        alignItems={"center"}
      >
        <Box>
          <Text color={"black"} fontSize={"2xl"} fontWeight={"bold"}>
            Acessando o Sistema
          </Text>
        </Box>
        <Flex alignItems={"center"} gap={2} flexDir={"column"}>
          <Text color={"black"}>
            Para acessar o seu emissor de notas fiscais, você terá que abrir o
            seu navegador google chrome ou safari no seu computador, tablet, ou
            celular. Digitar o endereço que será informado no campo DOMÍNIO do
            formulário do emitente.
          </Text>
          <Box w={{ base: "100%", lg: "50%" }}>
            <Image src="/img/acessando1.jpg" alt="acessando1"></Image>
          </Box>
          <Box>
            <ul>
              <li>
                <Text color={"black"}>
                  {" "}
                  Login: você irá digitar o nome do usuário do administrador da
                  empresa.
                </Text>
              </li>
              <li>
                <Text color={"black"}>
                  Senha: você irá digitar a senha pré-definida pelo gestor do
                  sistema para o primeiro acesso.
                </Text>
              </li>
              <li>
                <Text color={"black"}>
                  Clique no botão LOGIN para continuar.
                </Text>
              </li>
            </ul>
          </Box>
          <Box w={{ base: "100%", lg: "50%" }}>
            <Image src="/img/acessando2.jpg" alt="acessando2"></Image>
          </Box>
          <Box>
            <Text color={"black"}>
              Essa é a tela inicial. Quando houverem mensagens importantes, elas
              irão aparecer nela.
            </Text>
          </Box>
          <Box w={{ base: "100%", lg: "50%" }}>
            <Image src="/img/acessando3.jpg" alt="acessando3"></Image>
          </Box>
          <Box>
            <Text color={"black"}>
              No canto superior esquerdo, você irá encontrar o menu do sistema.
              Ao clicar no botão (3 tracinhos), o menu será expandido.
            </Text>
          </Box>
        </Flex>
        <Flex mt={20}>
          <TableManual />
        </Flex>
      </Flex>
    </Flex>
  );
}
