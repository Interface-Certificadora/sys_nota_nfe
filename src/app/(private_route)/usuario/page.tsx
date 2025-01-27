import React from 'react';
import { Box, Flex } from '@chakra-ui/react';
import CustomTable from '@/components/tabela';


const usuario = () => {



    return (

        <Box w={"full"} h={"full"} bg={"gray.50"} p={4}>
            <CustomTable></CustomTable>
        </Box>

    );
};

export default usuario;
