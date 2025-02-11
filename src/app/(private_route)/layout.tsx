import PrivateHeader from "@/app/components/layout/privateHeader";
import PrivateMenu from "@/app/components/privateMenu";
import { Flex } from "@chakra-ui/react";
import * as React from "react";

export default function PrivateLayout({ children }: { children: React.ReactNode }) {
    return (
        <Flex
            flexDir="column"
            w="100%"
            h="100vh"
            bg="#FFFFFF"
        >
            <PrivateHeader />
            <Flex
                flex="1"
                w="100%"
                flexDir={{ base: "column", lg: "row" }}
            >
                <Flex
                    display={{ base: "none", lg: "flex" }}
                    w="240px"
                    bg="#FFFFFF"
                    borderRight="1px solid #00713C"
                    flexDir="column"
                    p="4"
                    h={"full"}
                >
                    <PrivateMenu />
                </Flex>

                <Flex
                    w="full"
                    bg={"white"}
                    p="4"
                >
                    {children}
                </Flex>
            </Flex>
        </Flex>
    );
}
