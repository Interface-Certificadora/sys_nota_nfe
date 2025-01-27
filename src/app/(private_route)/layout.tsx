import PrivateHeader from "@/components/layout/privateHeader";
import PrivateMenu from "@/components/privateMenu";
import { Flex } from "@chakra-ui/react";


export default function PrivateLayout({children}: {children: React.ReactNode}) {
    return (
        <Flex flexDir={'column'} w={'100vw'} h={{base: '100%', lg: '100vh'}} bg={'#FFFFFF'}>
            <PrivateHeader />
            <Flex flexDir={{base: 'column', lg: 'row'}} p={{base: 2, lg: 0}} w={'100%'} h={'100%'} overflowY={'auto'}>
            <PrivateMenu />
            {children}
            </Flex>
        </Flex>
    )
}