"use client";
import { Box, Flex, Image, Text } from "@chakra-ui/react";

export default function Sistema() {
  return (
    <Flex w={"full"} h={"full"} flexDir={"column"} alignItems={"center"}>
      <Flex flexDir={"column"} w={'60%'} alignItems={"center"}>
        <Box>
          <Text color={"black"} fontSize={"2xl"} fontWeight={"bold"}>
            Acessando o Sistema
          </Text>
        </Box>
        <Flex>
          <Text color={"black"}>
            Para acessar o seu emissor de notas fiscais, você terá que abrir o
            seu navegador google chrome ou safari no seu computador, tablet, ou
            celular. Digitar o endereço que será informado no campo DOMÍNIO do
            formulário do emitente.
          </Text>
          <Box w={'50%'}
          h={'50%'}>
          <Image src="/img/acessando1.jpg" alt="acessando1"></Image>
          </Box>
        </Flex>
      </Flex>
    </Flex>
  );
}
