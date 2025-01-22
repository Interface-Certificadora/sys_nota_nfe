import FaqCard from "@/components/cards/faq_card";
import { Flex, Text } from "@chakra-ui/react";

export default function Faq() {
  return (
    <>
      <Flex w={"100%"} h={"100%"}
      flexDir={"column"}>
        <Flex
          gap={4}
          flexDir={"column"}
          justifyContent={"center"}
          alignItems={"center"}
          bg={"#99E9C3"}
          w={"100%"}
          h={"15%"}
        >
          <Flex
            flexDir={"column"}
            justifyContent={"center"}
            alignItems={"center"}
          >
            <Text color={"#00713C"} fontSize={"sm"}>
              FAQs
            </Text>
            <Text color={"#00713C"} fontSize={{base: "2xl", lg: "4xl"}} fontWeight={"bold"}>
              Perguntas Frequentes
            </Text>
          </Flex>
          <Text color={"#00713C"} fontSize={{base: "sm", lg: "md"}}>
            Tem alguma duvida? Estamos aqui para ajudar.
          </Text>
        </Flex>
        <Flex
          w={"100%"}
          h={'85%'}
          flexDir={"column"}
        >
            <Flex
            w={"100%"}
            h={'85%'}
            justifyContent={'center'}
            alignItems={'center'}
            >
                <FaqCard />
            </Flex>
            <Flex
            w={"100%"}
            h={'15%'}
            bg={'blue'}>

            </Flex>

        </Flex>
      </Flex>
    </>
  );
}
