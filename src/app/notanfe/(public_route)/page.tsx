import React from "react";
import {
  Box,
  Flex,
  Text,
  Image,
  Heading,
  Container,
  SimpleGrid,
  Link,
} from "@chakra-ui/react";
import { ButtonPage } from "@/components/page/button";
import FeatureCard from "@/components/page/iconcards";
import FeatureList from "@/components/page/list";
import Enterprise from "@/components/page/enterprise";

const Home = () => {
  return (
    <Flex direction="column" minH="100vh" fontFamily="sans-serif">

      <Box bg="#15803D" color="white">
        <Container maxW="1200px" mx="auto" py={{ base: 4, md: 6 }}>
          <Flex
            align="center"
            justify={{ base: "center", md: "space-between" }}
            gap={{ base: 4, md: 8 }}
            flexWrap="wrap"
          >
            <ButtonPage
              variant="plain"
              color="white"
              fontSize={{ base: "sm", md: "16px" }}
              fontWeight="lighter"
              _hover={{ textDecoration: "underline" }}
              scrollTo="Sobre"
            >
              SOBRE O EMISSOR
            </ButtonPage>

            <Flex
              align="center"
              justify="center"
              flex="1"
              maxW={{ base: "200px", md: "290px" }}
              maxH={{ base: "80px", md: "125px" }}
            >
              <Image
                src="/NFEW.svg"
                alt="Logo NFE"
                w="100%"
                h="auto"
              />
            </Flex>

            <ButtonPage
              variant="plain"
              color="white"
              fontSize={{ base: "sm", md: "16px" }}
              fontWeight="lighter"
              _hover={{ textDecoration: "underline" }}
              scrollTo="comprar"
            >
              COMPRAR AGORA
            </ButtonPage>
          </Flex>
        </Container>
      </Box>



      <Box
        position="relative"
        bg="gray.500"
        backgroundImage="url('/bgpen.jpg')"
        backgroundSize="cover"
        backgroundPosition="center"
      >
        <Flex
          direction="column"
          align="center"
          textAlign="center"
          color="white"
          py={28}
          px={4}
        >
          <Text fontSize="lg" fontWeight="medium" mb={8}>
            Praticidade & Eficiência
          </Text>
          <Heading
            as="h1"
            fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}
            fontWeight="extrabold"
            lineHeight="tight"
            mb={8}
          >
            Com a Nota NFE, a emissão de notas
          </Heading>
          <Heading
            as="h2"
            fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}
            fontWeight="extrabold"
            lineHeight="tight"
            mb={16}
          >
            fiscais nunca foi tão fácil.
          </Heading>
          <Text fontSize={{ base: "md", md: "lg" }}>
            Basta digitar os dados necessários na plataforma e, em poucos cliques, sua nota fiscal está pronta.
          </Text>
          <Text fontSize={{ base: "md", md: "lg" }} mb={24}>
            Não há necessidade de lidar com processos complexos ou perder tempo com burocracias.
          </Text>

          <ButtonPage
            bg="#15803D"
            color="white"
            px={8}
            py={6}
            mb={12}
            borderRadius="lg"
            fontWeight="semibold"
            fontSize="lg"
            _hover={{ bg: "#166534" }}
            scrollTo="comprar"
          >
            Teste Agora Mesmo
          </ButtonPage>
        </Flex>
      </Box>

      {/* Seção "Sobre" */}
      <Box id="Sobre" bg="#15803D" pt={12} pb={10}>
        <Container maxW="1200px" mx="auto" pb={6} px={4}>
          <SimpleGrid columns={{ base: 1, md: 3 }} gap={"12"}>

            <FeatureCard
              title={"Rapidez"}
              description={"A emissão de notas fiscais de forma rapida e eficiente. Digite os dados, clique e Pronto!"}
              icon={"intuitivo.png"}
            />

            <FeatureCard
              title={"Segurança"}
              description={"seus dados protegidos com a mais alta segurança, garantindo privacidade em cada transação"}
              icon={"seguranca.png"}
            />

            <FeatureCard
              title={"Intuintivo"}
              description={"Com uma interface amigavel e intuitiva, você consegue emitir suas notas fiscais sem esforço"}
              icon={"rapidez.png"}
            />

          </SimpleGrid>
        </Container>
      </Box>


      <Box bg="gray.50">
        <Container
          p={{ base: 6, md: 12, lg: 32 }}
          pb={{ base: 8, md: 12 }}
          display="grid"
          gridTemplateColumns={{ base: "1fr", md: "3fr 2fr" }}
          gap={{ base: 8, md: 16 }}
          alignItems="center"
        >

          <Flex direction="column" gap={8} p={6}>

            <Box
              w="100%"
              bg="gray.300"
              borderRadius="lg"
              pt="50%"
              position="relative"
              overflow="hidden"
              backgroundImage="url('/clt.jpg')"
              backgroundSize="cover"
              backgroundPosition="center"
            ></Box>


            <Flex gap={6}>

              <Box
                w="40%"
                bg="#15803D"
                borderRadius="lg"
                pt="35%"
                position="relative"
                overflow="hidden"
                backgroundImage="url('/logointerface.png')"
                backgroundSize="cover"
                backgroundPosition="center"
              ></Box>

              <Box
                w="60%"
                bg="gray.300"
                borderRadius="lg"
                pt="35%"
                position="relative"
                overflow="hidden"
                backgroundImage="url('/agroboy.jpg')"
                backgroundSize="cover"
                backgroundPosition="center"
              ></Box>
            </Flex>
          </Flex>


          <Flex direction="column" gap={6} w="100%">
            <Text
              color="#15803D"
              fontSize={{ base: "md", md: "2xl" }}
              fontWeight="bold"
            >
              Emissor de Nota Fiscal
            </Text>
            <Heading
              fontSize={{ base: "2xl", md: "4xl" }}
              fontWeight="extrabold"
              lineHeight="tight"
              color="black"
            >
              Nota NFE: para você e para seu negócio
            </Heading>
            <Text
              color="gray.700"
              lineHeight="relaxed"
              fontSize={{ base: "sm", md: "md" }}
            >
              Seja você um pequeno empreendedor, um prestador de serviços ou uma
              grande empresa, a Nota NFE é a solução ideal para agilizar e simplificar
              a emissão de suas notas fiscais. Economize tempo e evite dores de
              cabeça com nossa plataforma prática e eficiente.
            </Text>
            <FeatureList />
            <ButtonPage
              bg="#15803D"
              color="white"
              w={{ base: "full", md: "40" }}
              h={{ base: "10", md: "12" }}
              borderRadius="md"
              fontSize={{ base: "sm", md: "md" }}
              _hover={{ bg: "#166534" }}
              callnum="551632897402"
            >
              Adquirir agora
            </ButtonPage>
          </Flex>
        </Container>
      </Box>


      <Box id="comprar" bg="blue" >
        <Box h="auto" bg="green.700" position="relative" p={{ base: 6, md: 12 }}>
          <Flex
            flexDirection={{ base: "column", md: "row" }}
            alignItems="center"
            justifyContent="space-between"
            px={{ base: 4, md: 12, lg: 32 }}
            gap={{ base: 6, md: 0 }}
          >

            <Flex flexDirection={{ base: "column", md: "row" }} gap={{ base: 4, md: 0 }}>
              <ButtonPage
                color="white"
                fontWeight="semibold"
                textAlign="center"
                px={4}
                py={{ base: 6, md: 8 }}
                border="3px solid white"
                borderRadius="md"
                borderTopRightRadius={{ base: "md", md: "0" }}
                borderBottomRightRadius={{ base: "md", md: "0" }}
                bg="transparent"
                fontSize={{ base: "sm", md: "md" }}
                _hover={{ bg: "green.500" }}
                href="/notanfe/faq"
              >
                ENTRE EM CONTATO.<br /> FALE COM NOSSO SUPORTE
              </ButtonPage>
              <ButtonPage
                bg="white"
                color="black"
                fontWeight="semibold"
                textAlign="center"
                px={4}
                py={{ base: 6, md: 8 }}
                border="3px solid white"
                borderLeft="none"
                borderRadius="md"
                borderTopLeftRadius={{ base: "md", md: "0" }}
                borderBottomLeftRadius={{ base: "md", md: "0" }}
                fontSize={{ base: "sm", md: "md" }}
                _hover={{ bg: "gray.200" }}
                callnum="551632897402"
              >
                COMPRAR AGORA
              </ButtonPage>
            </Flex>
          </Flex>
        </Box>


        <Box
          display={{ base: "none", md: "none", lg: "block" }}
          position="absolute"
          transform="translateY(-50%)"
          w="100%"
          maxW="600px"
          right={{ md: "15%" }}
          top="80%"
        >
          <Image
            src="/NB.png"
            alt="Notebook"
            w={{ base: "200px", md: "200px", lg: "600px" }}
            maxW="100%"
          />
        </Box>
      </Box>



      <Box bg="gray.100">
        <Container
          maxW="1200px"
          pt="32"
          pb="12"
          display="flex"
          flexDirection={{ base: "column", md: "row" }}
          alignItems="center"
          justifyContent="center"
          gap={{ base: 6, md: 12 }}
        >
          <Enterprise
            altText={"InterfaceLogo"}
            label={"Distribuidora:"}
            imageSrc="/interface.svg"
            w="200%"
            maxW="500px"
            h="auto"
          />

          <Enterprise
            altText={"AlsoftLogo"}
            label={"Desenvolvimento:"}
            imageSrc="/alsoft.png"
            w="100%"
            maxW="150px"
            h="auto"
          />
        </Container>
      </Box>

      <Box bg="gray.800" color="white">
        <Container
          maxW="1200px"
          mx="auto"
          px={4}
          py={6}
          display="flex"
          flexDirection={{ base: "column", md: "row" }}
          alignItems="center"
          justifyContent={"center"}
        >
          <Text fontSize="sm">@ 2025 todos os direitos reservados</Text>
        </Container>
      </Box>
    </Flex>
  );
};

export default Home;
