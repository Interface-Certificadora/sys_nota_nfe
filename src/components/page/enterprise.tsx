import { Box, Image, Text, Flex } from "@chakra-ui/react";


interface EnterpriseProps {
    imageSrc?: any;
    altText: any;
    label: any;
  }
const Enterprise: React.FC<EnterpriseProps> = ({ imageSrc, altText, label }) => {
  return (
    <Flex
      direction="column"
      alignItems="center"
      position="relative"
      w="full"
      h="auto"
    >
      <Text
        fontWeight="medium"
        color="gray.700"
        top="10%"
        zIndex="2"
        textAlign="center"
      >
        {label}
      </Text>

      <Box position="relative" w="full" h="auto">
        <Image
          src={imageSrc}
          alt={altText}
          width="500px"
          height="80px"
        />
      </Box>
    </Flex>
  );
};

export default Enterprise;