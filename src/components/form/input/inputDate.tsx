import { Box, Input, InputProps, Text } from "@chakra-ui/react";

interface CustomInputDateProps extends InputProps {
    label: string;
    obrigatorio?: boolean;
}

export default function InputDate({label, obrigatorio, ...rest}: CustomInputDateProps) {
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
            <Input type="date" colorScheme={'black'}{...rest} />
        </Box>
        </>
    );
}