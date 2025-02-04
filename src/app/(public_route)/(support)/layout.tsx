import Footer from "@/app/components/layout/footer";
import Header from "@/app/components/layout/header";
import { Flex } from "@chakra-ui/react";


export default async function SupportLayout({children}: {children: React.ReactNode}) {
    return (
        
        <Flex
        flexDir={'column'}
        w={'100vw'}
        h={'100vh'}
        bg={'#FFFFFF'}
        >
            <Header />
            <Flex flex={1} w={'100%'}  overflowY={'auto'}>
            {children}
            </Flex>
            <Footer />
        </Flex>
        
    )
}