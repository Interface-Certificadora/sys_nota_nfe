import { Checkbox } from "@/components/ui/checkbox";
import { Box, Text } from "@chakra-ui/react";

const InputCheckbox = ({ label, name, isChecked, onChange }) => {
    return (
        <Box display="flex" alignItems="center">
            <Checkbox name={name} defaultChecked={isChecked} onChange={onChange} colorScheme="green" readOnly>
                <Text ml={2} fontSize="sm" color="black">{label}</Text>
            </Checkbox>
        </Box>
    );
};

export default InputCheckbox;
