"use client";

import { ButtonPage } from "@/app/components/page/button";
import { Checkbox } from "@/app/components/ui/checkbox";
import { toaster } from "@/app/components/ui/toaster";
import { useRememberMe } from "@/hook/useRememberMe";
import login from "@/modules/auth/actions/auth-login";
import { Box, Flex, Text, Input, Image } from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function LoginPage() {
  const [loading, setLoading] = useState<boolean>(false);
  const {
    email,
    setEmail,
    password,
    setPassword,
    rememberMe,
    setRememberMe,
    saveCredentials,
  } = useRememberMe();

  const router = useRouter();

  const handleLogin = async (formData: FormData) => {
    setLoading(true);
    const success = await login(formData);

    if (success.error === true) {
      toaster.create({
        title: "Erro",
        description: success.message,
        type: "error",
        duration: 3000,
      })
      setLoading(false);
    }else{
      saveCredentials(); 
      router.push('/home')
    }
  };

  return (
    <form action={handleLogin}>
      <Flex direction={{ base: "column", md: "row" }} bg="#00713C">
        <Flex
          flex="6"
          direction="column"
          justify="center"
          align="center"
          px={{ base: 4, md: 16 }}
          py={{ base: 8, md: 12 }}
          bg="#00713C"
          color="white"
        >
          <Box mb={8}>
            <Image src="/NFEB.svg" alt="Logo NFE" width="400px" height="175px" />
          </Box>
          <Box textAlign="center" maxW="1200px">
            <Text fontSize="2xl" lineHeight="1.6" fontFamily="heading">
              Simplifique sua gestão com uma plataforma rápida, segura e intuitiva.
              Emita notas fiscais em poucos cliques, sem complicações ou burocracias.
            </Text>
            <Text fontSize="2xl" mt={4} lineHeight="1.6" fontFamily="heading">
              Seus dados estão protegidos com segurança avançada, enquanto você aproveita
              a praticidade de uma interface amigável.
            </Text>
          </Box>
        </Flex>

        <Flex flex="3" direction="column" align="center" justify="center" minH="100vh" bg="gray.50" p={4}>
          <Box>
            <Text color="black" fontSize="3xl" fontWeight="bold" m="16">
              Faça Seu Login
            </Text>
          </Box>

          <Flex direction="column" w="100%" maxW="360px" gap={4}>
            <Box>
              <Text fontSize="sm" fontWeight="bold" mb={2} pl={2} color="black">
                Email:
              </Text>
              <Input
                rounded="xl"
                placeholder="Digite seu email"
                type="email"
                name="email"
                h={16}
                bg="white"
                borderWidth="3px"
                color="black"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Box>

            <Box>
              <Text fontSize="sm" fontWeight="bold" mb={2} pl={2} color="black">
                Senha:
              </Text>
              <Input
                rounded="xl"
                placeholder="Digite sua senha"
                type="password"
                name="password"
                h={16}
                bg="white"
                borderWidth="3px"
                color="black"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Box>

            <Flex justify="space-between">
              <Checkbox
                colorScheme="black"
                color="black"
                fontSize="12px"
                size="xs"
                checked={rememberMe}
                onCheckedChange={(e) => setRememberMe(!!e.checked)}
              >
                Lembrar minha conta
              </Checkbox>
              {/* <Text fontSize="12px" fontWeight="bold" color="#05D7DF" cursor="pointer" _hover={{ textDecoration: "underline" }}>
                Esqueci minha senha
              </Text> */}
            </Flex>
          </Flex>

          <Box m={28}>
            <ButtonPage
              colorScheme="blue"
              size="lg"
              rounded="xl"
              type="submit"
              w="255px"
              h="50px"
              loading={loading}
              textAlign="center"
              bg="#00713C"
              color="white"
            >
              Entrar
            </ButtonPage>
          </Box>
        </Flex>
      </Flex>
    </form>
  );
}
