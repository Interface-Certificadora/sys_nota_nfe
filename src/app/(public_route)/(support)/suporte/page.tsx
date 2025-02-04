import React from 'react';
import FaqCard from "@/app/components/cards/faq_card";
import { Box, Flex, Image, Text } from "@chakra-ui/react";
import ContatoSup from '@/app/components/cards/contato_sup';

export default function Faq() {
  const responsiveFontSizes = {
    title: ({ base: '2xl', md: '3xl' }),
    subtitle: ({ base: 'sm', md: 'md' }),
    header: ({ base: 'sm', md: 'md' })
  };

  return (
    <Flex
      w="100%"
      flexDir="column"
      overflow="hidden"
    >

      <Flex
        gap={1}
        flexDir="column"
        justifyContent="center"
        alignItems="center"
        bg="#99E9C3"
        w="100%"
        p={[1, 3, 5]}
        textAlign="center"
      >
        <Flex
          flexDir="column"
          justifyContent="center"
          alignItems="center"
        >

          <Text
            color="#00713C"
            fontSize={responsiveFontSizes.title}
            fontWeight="bold"
            textAlign="center"
          >
            Perguntas Frequentes
          </Text>
        </Flex>
        <Text
          color="#00713C"
          fontSize={responsiveFontSizes.subtitle}
        >
          Tem alguma dúvida? Estamos aqui para ajudar.
        </Text>
      </Flex>

      {/* Content Section */}
      <Flex
        w="100%"
        flex={1}
        flexDir="column"
        position="relative"
        overflowY={'scroll'}
      >
        {/* FAQ Cards Container */}
        <Flex
          w="100%"
          flex={1}
          justifyContent="center"
          alignItems="center"
          zIndex={2}
        >
          <FaqCard />
        </Flex>

        {/* Swipe Indicator */}
        <Flex
          w="100%"
          h={"15%"}
          justifyContent="center"
          position="relative"
        >
          <Box
            display={{ md: 'none', lg: 'none' }}
            maxW={20}
            maxH={20}
            position={'absolute'}
            top={'-80%'}
            overflow={'hidden'}
            zIndex={1}

          >
            <Image
              src="/img/arraste_para_lado.png"
              alt="Arraste para o lado"
              w="100%"
              h="100%"
            />
          </Box>
          <ContatoSup />
        </Flex>
      </Flex>
    </Flex>
  );
}