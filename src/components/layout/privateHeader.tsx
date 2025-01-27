'use client'
import { Flex, Image, Link } from "@chakra-ui/react";
import BtnPrivateMenu from "../buttons/btn_private_menu";



export default function PrivateHeader() {
  
  return (
    <>
      <Flex
        justifyContent={"flex-start"}
        alignItems={"center"}
        h={"5%"}
        w={"100%"}
        bg={"#00713C"}
        borderBottom={"1px" + " solid" + " #33D388"}
        position={"relative"}
      >
        <Link href="/home" >
          <Image
            w={'150px'}
            h={'40px'}
            src="/img/Logo_NOTA_NFE_02.svg"
            alt="Logo"
            objectFit="cover"
            cursor={"pointer"}
              />
        </Link>
        <BtnPrivateMenu />
      </Flex>
    </>     
  );
}
