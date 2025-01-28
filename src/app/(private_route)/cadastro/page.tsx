"use client"

import { Box, Flex, Text, useBreakpointValue } from "@chakra-ui/react";
import CadastroDesktop from "./components/desktop";
import CadastroMobile from "./components/mobile";

export default function Cadastro() {
    const isMobile = useBreakpointValue({ base: true, md: false });

    return (
        <Flex justify="center" minH="100vh" w="full"  >
            <Box
                bg="white"
                p={4}



                borderColor="gray.300"
                w="full"

                h="fit"
            >

                <Text fontSize="2xl" fontWeight="bold" textAlign="center" color="black" mb={6}>
                    Cadastro de Usuário
                </Text>


                {isMobile ? <CadastroMobile /> : <CadastroDesktop />}

            </Box>
        </Flex>
    );
}

