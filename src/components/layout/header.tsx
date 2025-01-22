import { Flex  } from "@chakra-ui/react";
import Menu from "../menu";

export default function Header() {
    return(
        <>
        <Flex 
        justifyContent={'center'} 
        alignItems={'center'}
        justifySelf={'flex-start'}
        h={'6%'}
        w={'100%'}
        bg={'#FFFFFF'}
        >
           <Menu />
        </Flex>
        </>
    )
}