import React from 'react';
import { Box } from '@chakra-ui/react';
import CustomTable from '@/components/tabela';


const usuario = () => {
    return (

        <Box w={"full"} h={"fit-content"} p={4}>
            <CustomTable></CustomTable>
        </Box>
    );
};

export default usuario;
