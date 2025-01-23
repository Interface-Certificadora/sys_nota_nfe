"use client";

import {
  Box,
  Flex,
  Link,
  Text
} from "@chakra-ui/react";
import BtnMenu from "./buttons/btn_menu";


export default function Menu() {
  return (
    <Flex flexDir={"row"} gap={3}>
      <Box mr={4} color={"black"} display={"flex"} alignItems={"center"}>
        {/* LOGO */}
        <Text fontWeight={"bold"}>Nota NFE</Text>
      </Box>
      <Link fontSize={'sm'} href={"/"} _hover={{ textDecoration: "none" }} color={"black"}>
        Home
      </Link>
      <BtnMenu />
    </Flex>
  );
}
