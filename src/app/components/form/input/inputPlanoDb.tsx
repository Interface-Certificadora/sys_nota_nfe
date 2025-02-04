/* eslint-disable @typescript-eslint/no-explicit-any */
import { Box, createListCollection, Text } from "@chakra-ui/react";
import {
  SelectContent,
  SelectItem,
  SelectRoot,
  SelectTrigger,
  SelectValueText
} from "@/app/components/ui/select";

interface InputSelectProps {
  label: string;
  name: string;
  options: any;
  w: string
  obrigatorio: boolean;
}
export default function InputSelect({
  label,
  obrigatorio,
  options,
  name,
  w,
}: InputSelectProps) {
    const frameworks = createListCollection({
        items: options
      })
  return (
    <>
      <Box>
        <label>
          <Text fontSize="sm" color="#000000">
            {label}
            {obrigatorio && (
              <Text as="span" color="red.500">
                *
              </Text>
            )}
          </Text>
        </label>
        <SelectRoot w={w} name={name} collection={frameworks} >
          <SelectTrigger w={-'150px'} color={'black'}>
            <SelectValueText placeholder="Ativo" />
          </SelectTrigger>
          <SelectContent color={'white'}>
            {options.map((item) => (
              <SelectItem item={item} key={item.value}>
                {item.label}
              </SelectItem>
            ))}
          </SelectContent>
        </SelectRoot>
      </Box>
    </>
  );
}


