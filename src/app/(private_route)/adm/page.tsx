import { Button, Flex } from "@chakra-ui/react";

export default function Adm() {
    return (
        <>
            <Flex
            w={'full'}
            flexDirection={{base: 'column', lg: 'row'}}
            p={2}
            justifyContent={'space-around'}
            h={'full'}>
                <Button
                w={'10%'}
                bg={'#00713C'}
                color={'white'}
                >Financeiro</Button>
                                <Button
                w={'10%'}
                bg={'#00713C'}
                color={'white'}
                >Parceiros</Button>
                                <Button
                w={'10%'}
                bg={'#00713C'}
                color={'white'}
                >Financeiro</Button>
            </Flex>
        </>
    );
}