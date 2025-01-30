import { Checkbox, Box, Text } from "@chakra-ui/react";

const InputCheckbox = ({ label, name, isChecked, onChange }) => {
    return (
        <Box display="flex" alignItems="center">
            <Checkbox name={name} isChecked={isChecked} onChange={onChange} colorScheme="green">
                <Text ml={2} fontSize="sm" color="black">{label}</Text>
            </Checkbox>
        </Box>
    );
};

export default InputCheckbox;
