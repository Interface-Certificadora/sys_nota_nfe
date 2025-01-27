'use client';

import { Box, Input, InputProps, Text } from "@chakra-ui/react";

interface CustomInputNumberProps extends InputProps {
    label: string;
    obrigatorio?: boolean;
}

export default function InputNumber({
    label,
    obrigatorio,
    ...rest
}: CustomInputNumberProps) {
    return (
        <>
        <Box>
            <label>
                <Text fontSize="sm" color="#000000">
                    {label}
                    {obrigatorio && (
                        <Text as="span" color="red.500" >
                            *
                        </Text>
                    )}
                </Text>
            </label>
            <Input {...rest} />
        </Box>
        </>
    );
}
