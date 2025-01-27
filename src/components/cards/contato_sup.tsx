import { Flex, Text } from "@chakra-ui/react";
import { ButtonPage } from "../page/button";

interface ContatoSupProps {
    w?: string;
    h?: string;
}

export default function     ContatoSup(props: ContatoSupProps) {
    const {w, h} = props
    return(
        <>
        <Flex
        w={{base: '90%', lg: w ? w : '40%'}}
        h={h ? h : '80%'}
        bg={'#99E9A0'}
        // position={'absolute'}
        rounded={'lg'}
        // bottom={{base: '-10%', lg:'-10%'}}
        shadow={'lg'}
        p={{base: '4', lg: '4'}}
        justifyContent={'space-between'}
        alignItems={'center'}
        zIndex={1}
        >
            <Flex
            flexDir={'column'}
            justifyContent={'center'}
            gap={2}
            >
                <Text
                fontWeight={'bold'}
                color={'black'}
                >
                Ainda tem Duvidas? 
                </Text>
                <Text
                display={{base: 'none', lg: 'block'}}
                fontSize={'sm'}
                color={'#00713C'}>
                Não conseguiu achar a solução? Solicite ajuda do nosso time de suporte.
                </Text>
                
            </Flex>
            <ButtonPage 
            callnum="551632897402"
             bg={'#00713C'}
             color={'white'}
             shadow={'md'}
             >Suporte</ButtonPage>
        </Flex>
        </>
    )
}