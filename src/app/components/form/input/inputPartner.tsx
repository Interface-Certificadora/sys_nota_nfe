/* eslint-disable @typescript-eslint/no-explicit-any */
import { Box, Input, Text } from "@chakra-ui/react";
import { useState } from "react";

interface InputPartnerProps {
    label: string;
    placeholder: string;
    name: string;
    options: { label: string; value: string }[]; // Lista de parceiros
    w: string;
    obrigatorio?: boolean;
    value?: string;
    onChange: (value: string) => void; // Atualiza o valor selecionado
}

export default function InputPartner({
    label,
    placeholder,
    name,
    options,
    w,
    obrigatorio = false,
    value = "",
    onChange,
}: InputPartnerProps) {
    const [inputValue, setInputValue] = useState(value);
    const [filteredOptions, setFilteredOptions] = useState(options);
    const [showDropdown, setShowDropdown] = useState(false);

    // Filtra os parceiros conforme a digitação
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = e.target.value;
        setInputValue(newValue);

        // Mostra a lista sempre que houver interação
        setShowDropdown(true);

        // Filtra parceiros que correspondem ao texto digitado
        setFilteredOptions(
            options.filter((p) => p.label.toLowerCase().includes(newValue.toLowerCase()))
        );
    };

    // Define o parceiro selecionado e fecha a lista
    const handleSelect = (selectedOption: { label: string; value: string }) => {
        setInputValue(selectedOption.label);
        onChange(selectedOption.value);
        setShowDropdown(false);
    };

    return (
        <Box position="relative" w={w}>
            <Text fontSize="sm" color="#000000">
                {label} {obrigatorio && <Text as="span" color="red.500">*</Text>}
            </Text>
            <Input
                name={name}
                value={inputValue}
                onChange={handleChange}
                placeholder={placeholder}
                color="black"
                onFocus={() => {
                    setFilteredOptions(options); 
                    setShowDropdown(true);
                }}
                onBlur={() => setTimeout(() => setShowDropdown(false), 200)} 
            />
            {showDropdown && filteredOptions.length > 0 && (
                <Box
                    position="absolute"
                    w="100%"
                    border="1px solid gray"
                    borderRadius="md"
                    mt={1}
                    bg="white"
                    zIndex={10}
                    maxH="150px"
                    overflowY="auto"
                    color={"black"}
                >
                    {filteredOptions.map((option) => (
                        <Box
                            key={option.value}
                            p={2}
                            _hover={{ bg: "green.100", cursor: "pointer" }}
                            onClick={() => handleSelect(option)}
                        >
                            {option.label}
                        </Box>
                    ))}
                </Box>
            )}
        </Box>
    );
}
