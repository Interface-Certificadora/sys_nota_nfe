import React from "react";
import {
  Box,
  Flex,
  Text,
  Button,
  Image,
  Heading,
  Container,
  SimpleGrid,
  ListItem,
  List,
  useBreakpointValue
} from "@chakra-ui/react";
import { ButtonPage } from "@/components/page/button";
import FeatureCard from "@/components/page/iconcards";
import FeatureList from "@/components/page/list";
import Enterprise from "@/components/page/enterprise";

const Home = () => {
  return (
    <Flex direction="column" minH="100vh" fontFamily="sans-serif">
   
      <Box bg="#15803D" color="white">
        <Container maxW="1200px" mx="auto" >
          <Flex align="center" justify="space-between">
        
            <ButtonPage
              variant="plain"
              color="white"
              fontSize={{ base: "sm", md: "lg" }}
              fontWeight="lighter"
              _hover={{ textDecoration: "underline" }}
              scrollTo="Sobre"
            >
              SOBRE O EMISSOR
            </ButtonPage>

      
            <Flex align="center" justify="center" flex="1">
              <Image
                src="/NFE.svg"
                alt="Logo NFE"
                width="320px"
                height="120px"
              />
            </Flex>

            <ButtonPage
              variant="plain"
              color="white"
              fontSize={{ base: "sm", md: "lg" }}
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
  
        backgroundImage="url('/path/to/image.jpg')"
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
      <Box id="Sobre" bg="#15803D" pt={12} pb={14}>
        <Container maxW="1200px" mx="auto" pb={6} px={4}>
          <SimpleGrid columns={{ base: 1, md: 3 }}>

            <FeatureCard
              title={"Rapidez"}
              description={"A emissão de notas fiscais de forma rapida e eficiente. Digite os dados, clique e Pronto!"}
              icon={""}
            />

            <FeatureCard
              title={"Segurança"}
              description={"seus dados protegidos com a mais alta segurança, garantindo privacidade em cada transação"}
              icon={""}
            />

            <FeatureCard
              title={"Intuintivo"}
              description={"Com uma interface amigavel e intuitiva, você consegue emitir suas notas fiscais sem esforço"}
              icon={""}
            />

          </SimpleGrid>
        </Container>
      </Box>

      {/* Seção intermediária */}
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
            ></Box>

         
            <Flex gap={6}>
           
              <Box
                w="40%"
                bg="#15803D"
                borderRadius="lg"
                pt="35%"
                position="relative"
                overflow="hidden"
              ></Box>
          
              <Box
                w="60%"
                bg="gray.300"
                borderRadius="lg"
                pt="35%"
                position="relative"
                overflow="hidden"
              ></Box>
            </Flex>
          </Flex>

        
          <Flex direction="column" gap={6} w="100%">
            <Text
              color="#15803D"
              fontSize={{ base: "md", md: "lg" }}
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
            >
              Adquirir agora
            </ButtonPage>
          </Flex>
        </Container>
      </Box>


      {/* Seção "Comprar" */}
      <Box id="comprar" bg="gray.50" position="relative">
        <Box h="auto" bg="green.700" p={{ base: 6, md: 12 }}>
          <Flex
            flexDirection={{ base: "column", md: "row" }}
            alignItems="center"
            justifyContent="space-between"
            px={{ base: 4, md: 12, lg: 32 }}
            gap={{ base: 6, md: 0 }}
          >
            {/* Botões */}
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
              >
                ENTRE EM CONTATO E PEÇA<br /> A VERSÃO DE TESTE
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
          display={{ base: "none", md: "block" }}
          position="absolute"
          top="50%"
          right={{ base: "10px", md: "20%" }}
          transform="translateY(-50%)"
          w="100%"
          maxW="400px"
        >
          <Image
            src="/NB.png"
            alt="Notebook"
            w={{ base: "200px", md: "200px", lg: "400px" }}
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
          />

          <Enterprise
            altText={"AlsoftLogo"}
            label={"Desenvolvimento:"}
            imageSrc="/interface.svg"
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
        >
          <Text fontSize="sm">@ 2025 todos os direitos reservados</Text>
        </Container>
      </Box>
    </Flex>
  );
};

export default Home;
