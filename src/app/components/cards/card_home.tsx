'use client'
import { Badge, Box, Flex, Text } from "@chakra-ui/react";
import { JWTPayload } from "jose";
import { PiIdentificationCardFill } from "react-icons/pi";

interface CardHomeProps {
    data: JWTPayload | null
}
export default function CardHome({data}:CardHomeProps) {

  const { id, name, email } = data as JWTPayload

  return (
    <>
      <Flex
        w={{ base: "100%", lg: "fit-content" }}
        h={{ base: "fit-content", lg: "fit-content" }}
        border={"3px solid #00713C"}
        rounded={"lg"}
        p={3}
      >
        <Flex
          w={"100%"}
          h={"100%"}
          flexDir={{base:"column", lg:"row"}}
          justifyContent={"space-between"}
          gap={{base: 2, lg:10}}
        >
          <Box display={"flex"} gap={2} flexDir={"row"}>
            <Text color={"black"} fontWeight={"bold"}>
              ID:
            </Text>
            <Badge bg={"#00713C"}>
            <PiIdentificationCardFill size={20} color="white"/>
              <Text fontSize={"md"} color={"white"}>{id as string}</Text>
            </Badge>
          </Box>
          <Box display={"flex"} gap={2} flexDir={"row"}>
            <Text color={"black"} fontWeight={"bold"}>
                Nome:
            </Text>
            <Badge bg={"#00713C"}>
              <Text fontSize={"md"} color={"white"}>{name as string}</Text>
            </Badge>
          </Box>
          <Box display={"flex"} gap={2} flexDir={"row"}>
            <Text color={"black"} fontWeight={"bold"}>
            Email:
            </Text>
            <Badge bg={"#00713C"}>
            
              <Text fontSize={"md"} color={"white"}>{email as string}</Text>
            </Badge>
          </Box>

        </Flex>
      </Flex>
    </>
  );
}
