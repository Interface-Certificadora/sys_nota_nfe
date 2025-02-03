import React, { useState } from "react";
import { Box, Flex, Text, Image, Input } from "@chakra-ui/react";
import { ButtonPage } from "@/components/page/button";
import { Checkbox } from "@/components/ui/checkbox";

import login from "@/modules/auth/actions/auth-login";
import { useRememberMe } from "@/hook/useRememberMe";
import { toaster } from "@/components/ui/toaster";
import { useRouter } from "next/navigation";
export default function MobileLogin() {
      const [loading, setLoading] = useState<boolean>(false);
    
  const {
    email,
    setEmail,
    password,
    setPassword,
    rememberMe,
    setRememberMe,
    saveCredentials
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
        duration: 3000
      });
    } else {
      saveCredentials();
      router.push("/notanfe/home");
    }
  };

  return (
    <Flex
      direction="column"
      align="center"
      justify="center"
      minH="100vh"
      bg="gray.50"
      p={4}
    >
      <Box mb={8}>
        <Image src="/NFEB.svg" alt="Logo NFE" width="380px" height="200px" />
      </Box>

      <form action={handleLogin}>
        <Flex direction="column" w="100%" maxW="360px" gap={4}>
          <Flex direction="column" w="100%" maxW="360px" gap={4}>
            <Box>
              <Text
                fontSize="sm"
                fontWeight="bold"
                mb={2}
                pl={2}
                color={"black"}
              >
                Email:
              </Text>
              <Input
              color={"black"}
                rounded="xl"
                placeholder="Digite seu email"
                type="email"
                name="email"
                h={12}
                bg="white"
                borderWidth="2px"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Box>

            <Box>
              <Text
                fontSize="sm"
                fontWeight="bold"
                mb={2}
                pl={2}
                color={"black"}
              >
                Senha:
              </Text>
              <Input
              color={"black"}
                rounded="xl"
                placeholder="Digite sua senha"
                type="password"
                name="password"
                h={12}
                bg="white"
                borderWidth="2px"
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
              <Text
                fontSize="12px"
                fontWeight="bold"
                color={"#05D7DF"}
                cursor="pointer"
                _hover={{ textDecoration: "underline" }}
              >
                Esqueci minha senha
              </Text>
            </Flex>
          </Flex>

          <Box m={32} display={"flex"} justifyContent={"center"}>
            <ButtonPage
              colorScheme="blue"
              size="lg"
              rounded="xl"
              w="255px"
              h="50px"
              loading={loading}
              textAlign="center"
              bg="#00713C"
              color={"white"}
              type="submit"
            >
              Entrar
            </ButtonPage>
          </Box>
        </Flex>
      </form>
    </Flex>
  );
}
