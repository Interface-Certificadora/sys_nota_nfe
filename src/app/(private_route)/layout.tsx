import PrivateHeader from "@/components/layout/privateHeader";
import PrivateMenu from "@/components/privateMenu";
import { Flex } from "@chakra-ui/react";
import * as React from "react";

export default function PrivateLayout({ children }: { children: React.ReactNode }) {
    return (
        <Flex 
            flexDir="column" 
            w="100%" 
            h={{base: '100vh', lg: '100vh'}}
            bg="#FFFFFF"
        >
            <PrivateHeader />
            <Flex 
                flexDir={{ base: "column", lg: "row" }} 
                p={{ base: 2, lg: 0 }} 
                w="100%" 
                flex="1"
                bg={'#FFFFFF'}
            >
                <PrivateMenu />
                <Flex 
                    flex="1" 
                    w={'full'}
                    overflowY="auto"
                >
                    {children}
                </Flex>
            </Flex>
        </Flex>
    );
}
