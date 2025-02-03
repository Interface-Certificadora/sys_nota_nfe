import { Text, Flex, Image } from "@chakra-ui/react";

interface EnterpriseProps {
  imageSrc: string; // Caminho para o SVG
  altText: string;  // Texto alternativo para acessibilidade
  label: string;    // Texto descritivo
  h?: string;
  maxW?: string;
  w?: string;
}

const Enterprise: React.FC<EnterpriseProps> = ({ imageSrc, altText, label,h,maxW,w }) => {
  return (
    <Flex
      direction="column"
      alignItems="center"
      textAlign="center"
      w={w}
      maxW={maxW} 
      h={h}
    >
      {/* Texto do rótulo */}
      <Text fontWeight="medium" color="gray.700" mb={4}>
        {label}
      </Text>

      {/* Renderiza o SVG ou imagem */}
      <Image
        as="img"
        src={imageSrc}     // Caminho para o SVG
        alt={altText}      // Texto alternativo
        w="100%"           // Largura responsiva
        h="auto"           // Altura proporcional
        objectFit="contain" // Mantém proporções dentro do contêiner
      />
    </Flex>
  );
};

export default Enterprise;
