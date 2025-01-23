import { Box, Flex, Image } from "@chakra-ui/react";
import ContatoSup from "../cards/contato_sup";

export default function Footer() { 
    return(
        <>
        <Flex 
        justifyContent={'center'} 
        alignItems={'center'}
        h={'8%'}
        w={'100%'}
        bg={'#99E9C3'}
        alignSelf={'flex-end'}
        justifySelf={'flex-end'}
        position={'relative'}
        >
            <ContatoSup />
        </Flex>
        </>
    )
}