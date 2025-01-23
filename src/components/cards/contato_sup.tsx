import { Button, Flex, Text } from "@chakra-ui/react";


export default function ContatoSup() {
    return(
        <>
        <Flex
        w={{base: '90%', lg: '60%'}}
        h={'120%'}
        bg={'#99E9A0'}
        position={'absolute'}
        rounded={'lg'}
        top={'-70%'}
        shadow={'lg'}
        p={{base: '4', lg: '4'}}
        justifyContent={'space-between'}
        alignItems={'center'}
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
            <Button
            bg={'#00713C'}
            color={'white'}
            shadow={'md'}>
                Suporte
            </Button>
        

        </Flex>
        </>
    )
}