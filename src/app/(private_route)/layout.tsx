"use client";

import PrivateHeader from "@/app/components/layout/privateHeader";
import MobileHeader from "../components/layout/mobileMenu";
import PrivateMenu from "@/app/components/privateMenu";
import { Flex, Spinner } from "@chakra-ui/react";
import { useBreakpointValue } from "@chakra-ui/react";
import { useState, useEffect } from "react";

export default function PrivateLayout({ children }: { children: React.ReactNode }) {
    const [isLoading, setIsLoading] = useState(true);
    const isMobile = useBreakpointValue({ base: true, lg: false });

    useEffect(() => {
        if (isMobile !== undefined) {
            setIsLoading(false);
        }
    }, [isMobile]);

    
    if (isLoading) {
        return (
            <Flex w="100vw" h="100vh" align="center" justify="center" bg="white">
                <Spinner size="xl" color="green.500" />
            </Flex>
        );
    }

    return (
        <Flex flexDir="column" w="100%" h="100vh" bg="#FFFFFF">
        
            {isMobile ? <MobileHeader /> : <PrivateHeader />}

            <Flex flex="1" w="100%" flexDir={{ base: "column", lg: "row" }}>
           
                {!isMobile && (
                    <Flex
                        w="240px"
                        bg="#FFFFFF"
                        borderRight="1px solid #00713C"
                        flexDir="column"
                        p="4"
                        h="full"
                    >
                        <PrivateMenu />
                    </Flex>
                )}

                <Flex w="full" bg={"white"} p="4">
                    {children}
                </Flex>
            </Flex>
        </Flex>
    );
}
