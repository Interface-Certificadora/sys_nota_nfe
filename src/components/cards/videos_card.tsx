import { AspectRatio, Box, Flex, Text } from "@chakra-ui/react";

export interface CardVideosProps {
  src: string;
  title: string;
}
export default function CardVideos(props: CardVideosProps) {
  return (
    <>
      <Flex
        w={["90%", "20%", "20%"]}
        h={["35%", "35%", "35%"]}
        alignItems={"center"}
        gap={2}
        p={2}
        flexDirection={"column"}
      >
        <Box 
        w={'100%'}
        h={'fit-content'}
        rounded={'lg'}
        overflow={'hidden'}>
          <AspectRatio maxW="100%" maxH="100%" ratio={ 16 / 9 }>
            <iframe title={props.title} src={props.src} allowFullScreen />
          </AspectRatio>
        </Box>
        <Text
          fontWeight={"bold"}
          color={"black"}
          fontSize={["sm", "sm", "md"]}>
          {props.title}
        </Text>
      </Flex>
    </>
  );
}
