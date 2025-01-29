import { Flex, Image } from "@chakra-ui/react";

export default function Home() {
  return (
    <>
    <Flex
            w={"full"}
            h={{ base: "100vh", lg: "full" }}
            justifyContent={'center'}
            p={2}
            gap={2}>

                          <Image
                          h={{base: '65%', lg:'100%'}}
                          w={'100%'}
                            src="/NFEB.svg"
                            alt="Logo"
                            objectFit="cover"
                              />
    </Flex>
    </>
  );
}
