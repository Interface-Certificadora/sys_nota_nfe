'use client'
import { Button, Flex, Image, Link, Text } from "@chakra-ui/react";
import { FaPowerOff } from "react-icons/fa";
import { useRouter } from "next/navigation";
import { toaster } from "../ui/toaster";

export default function PrivateHeader() {
  const router = useRouter();

  const handleLogout = async () => {
    try {
      const res = await fetch('/api/logout');
      if (!res.ok) {
        toaster.create({
          title: "Erro",
          description: "Erro!",
          type: "error",
          duration: 3000,
        });
      } else {
        router.push('/login');
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Flex
      justifyContent="space-between"
      alignItems="center"
      h="180"
      w="100%"
      bg="#FFFFFF"
      borderBottom="1px solid #00713C"
      p="3"
    >

      <Flex alignItems="center">
        <Link href="/home" _focus={{ outline: "none" }}>
          <Image
            w="150px"
            h="36px"
            src="/NFEB.svg"
            alt="Logo"
            objectFit="cover"

          />
        </Link>
      </Flex>

      <Flex alignItems="center" gap={2}>
        <Button
          onClick={handleLogout}
          size="sm"
          bg="transparent"
          display="flex"
          alignItems="center"
          justifyContent="center"
          gap={2}
          p={2}
        >
          <FaPowerOff color="#00713C" size={18} />
          <Text color="#00713C">Logout</Text>
        </Button>
      </Flex>
    </Flex>
  );
}
