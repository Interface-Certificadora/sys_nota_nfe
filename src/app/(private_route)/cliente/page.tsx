import React from 'react';
import { Box } from '@chakra-ui/react';
import CustomTable from '@/app/components/tabela';


const usuario = () => {
    return (

        <Box w={"full"} h={"100%"}  p={4}>
            <CustomTable />
        </Box>
    );
};

export default usuario;
