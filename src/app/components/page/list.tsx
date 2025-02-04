import { Box } from "@chakra-ui/react";

const FeatureList = () => {
  return (
    <Box as="ul" mb={2} ml={6} listStyleType="disc">
      <Box as="li" color="gray.700" mb={"4"}>
        Acesse a plataforma de qualquer lugar e a qualquer hora.
      </Box>
      <Box as="li" color="gray.700">
        Seja no escritório ou em casa, a Nota NFE está sempre à sua disposição.
      </Box>
    </Box>
  );
};

export default FeatureList;
