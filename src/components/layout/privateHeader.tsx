'use client'
import { Button, Flex, Image, Link, Text } from "@chakra-ui/react";
import BtnPrivateMenu from "../buttons/btn_private_menu";
import { FaPowerOff } from "react-icons/fa";
import { useRouter } from "next/navigation";



export default function PrivateHeader() {
  const router = useRouter()

  const handleLogout = async () => {
    try{
     const res = await fetch('/api/logout')
     if(!res.ok){
       throw new Error('Erro ao deslogar')
     }else{
       router.push('/login')
     }
    }catch(err){
      console.log(err)
    }
  }
  
  return (
    <>
      <Flex
        justifyContent={"space-between"}
        alignItems={"center"}
        h={"5%"}
        w={"100%"}
        bg={"#00713C"}
        borderBottom={"1px" + " solid" + " #33D388"}
        position={"relative"}
      >
        <Flex>
        <Link href="/notanfe/home" >
          <Image
            w={'150px'}
            h={'40px'}
            src="/img/Logo_NOTA_NFE_02.svg"
            alt="Logo"
            objectFit="cover"
              />
        </Link>
        <BtnPrivateMenu />
        </Flex>
        <Flex alignItems={"center"} gap={2} mr={4}>
          
          <Button 
          onClick={() => {handleLogout()}}
          size={"sm"}
          bg={'transparent'}
          w={'fit-content'}
          h={'fit-content'}>
        <FaPowerOff  color="#FFFFFF" />
          <Text color={"#FFFFFF"}>
            Logout
          </Text>

          </Button>

        </Flex>
      </Flex>
    </>     
  );
}
