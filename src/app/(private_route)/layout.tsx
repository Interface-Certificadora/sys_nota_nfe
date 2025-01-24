import PrivateHeader from "@/components/layout/privateHeader";
import PrivateMenu from "@/components/privateMenu";
import { Flex } from "@chakra-ui/react";


export default function PrivateLayout({children}: {children: React.ReactNode}) {
    return (
        <Flex flexDir={'column'} w={'100vw'} h={'100vh'} bg={'#FFFFFF'}>
            <PrivateHeader />
            <Flex flex={1} w={'100%'}  overflowY={'auto'}>
            <PrivateMenu />
            {children}
            </Flex>
        </Flex>
    )
}