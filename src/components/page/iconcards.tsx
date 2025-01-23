import React from "react";
import { Flex, Box, Image, Text } from "@chakra-ui/react";


interface FeatureCardProps {
    icon?: any;
    title: any;
    description: any;
  }
const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description }) => {
  return (
    <Flex align="center">
      <Box
        w={16}
        h={16}
        bg="white"
        display="flex"
        alignItems="center"
        justifyContent="center"
        borderRadius="lg"
        mr={4}
      >
        <Image src={icon} alt={title} boxSize={8} />
      </Box>
      <Box color="white">
        <Text fontSize="lg" fontWeight="bold" mb={2}>
          {title}
        </Text>
        <Text>
          {description}
        </Text>
      </Box>
    </Flex>
  );
};

export default FeatureCard;
