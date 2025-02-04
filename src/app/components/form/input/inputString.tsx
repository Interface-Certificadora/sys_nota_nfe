'use client'
import { Box, Input, InputProps, Text } from "@chakra-ui/react";
import React from "react";

interface CustomInputStringProps extends InputProps {
  label: string;
  obrigatorio?: boolean
}

export default function InputString({
  label,
  obrigatorio,
  ...rest
}: CustomInputStringProps) {

  
  return (
    <>
    <Box>
      <label ><Text fontSize={'sm'} color={'#000000'}>{label}{obrigatorio && (
                        <Text as="span" color="red.500" >
                            *
                        </Text>
                    )}</Text></label>
      <Input {...rest} />
    </Box>
    </>
  );
}
