'use client'
import { Badge, Box, Flex, Text } from "@chakra-ui/react";
import { PiIdentificationCardFill } from "react-icons/pi";

export default function CardHome() {

  return (
    <>
      <Flex
        w={{ base: "100%", lg: "40%" }}
        h={{ base: "15%", lg: "fit-content" }}
        border={"3px solid #00713C"}
        rounded={"lg"}
        p={3}
      >
        <Flex
          w={"100%"}
          h={"100%"}
          flexDir={"row"}
          justifyContent={"space-between"}
          alignItems={"center"}
        >
          <Box display={"flex"} gap={2} flexDir={"row"}>
            <Text color={"black"} fontWeight={"bold"}>
              ID:
            </Text>
            <Badge bg={"#00713C"}>
            <PiIdentificationCardFill size={20} color="white"/>
              <Text fontSize={"md"} color={"white"}>1</Text>
            </Badge>
          </Box>
          <Box display={"flex"} gap={2} flexDir={"row"}>
            <Text color={"black"} fontWeight={"bold"}>
                Nome:
            </Text>
            <Badge bg={"#00713C"}>
              <Text fontSize={"md"} color={"white"}>Vinicius Victor</Text>
            </Badge>
          </Box>
          <Box display={"flex"} gap={2} flexDir={"row"}>
            <Text color={"black"} fontWeight={"bold"}>
            Email:
            </Text>
            <Badge bg={"#00713C"}>
            
              <Text fontSize={"md"} color={"white"}>Vinicius Victor</Text>
            </Badge>
          </Box>

        </Flex>
      </Flex>
    </>
  );
}
