import React from "react";
import { Box, Flex, Text, Image, Input } from "@chakra-ui/react";
import { ButtonPage } from "@/components/page/button";
import { Checkbox } from "@/components/ui/checkbox";
import AuthActions from "@/modules/auth/actions/auth-actions";
export default function MobileLogin() {

    return (
        <form action={AuthActions.login}>
            <Flex
                direction="column"
                align="center"
                justify="center"
                minH="100vh"
                bg="gray.50"
                p={4}
            >

                <Box mb={8}>
                    <Image
                        src="/NFEB.svg"
                        alt="Logo NFE"
                        width="380px"
                        height="200px"

                    />
                </Box>


                <Flex direction="column" w="100%" maxW="360px" gap={4}>
                    <Box>
                        <Text fontSize="sm" fontWeight="bold" mb={2} pl={2} color={"black"}>
                            Email:
                        </Text>
                        <Input
                            rounded="xl"
                            placeholder="Digite seu email"
                            type="email"
                            name="email"
                            h={12}
                            bg="white"
                            borderWidth="2px"
                        />
                    </Box>

                    <Box>
                        <Text fontSize="sm" fontWeight="bold" mb={2} pl={2} color={"black"}>
                            Senha:
                        </Text>
                        <Input
                            rounded="xl"
                            placeholder="Digite sua senha"
                            type="password"
                            name="password"
                            h={12}
                            bg="white"
                            borderWidth="2px"
                        />
                    </Box>
                    <Flex justify="space-between">
                        <Checkbox colorScheme="black" color="black" fontSize="12px" size="xs">
                            Lembrar minha conta
                        </Checkbox>
                        <Text fontSize="12px" fontWeight="bold" color={"#05D7DF"} cursor="pointer" _hover={{ textDecoration: "underline" }}>
                            Esqueci minha senha
                        </Text>
                    </Flex>
                </Flex>

                <Box m={32}>
                    <ButtonPage
                        colorScheme="blue"
                        size="lg"
                        rounded="xl"
                        w="255px"
                        h="50px"
                        textAlign="center"
                        bg="#00713C"
                        color={"white"}
                        type="submit"
                    >
                        Entrar
                    </ButtonPage>
                </Box>

            </Flex >
        </form>
    )

}

