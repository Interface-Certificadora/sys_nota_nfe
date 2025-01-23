import React from 'react';
import { 
  Accordion, 
  Blockquote, 
  Box, 
  Flex, 
  Text
} from "@chakra-ui/react";
import { MdOutlineQuestionMark } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";
import { TbError404 } from "react-icons/tb";

export default function FaqCard() {
  const questions = [
    {
      value: "a",
      title: "Lorem ipsum dolor sit amet consectetur",
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero odit culpa unde. Dicta, et, quaerat consequuntur aspernatur "
    },
    {
      value: "b",
      title: "Lorem ipsum dolor sit amet consectetur",
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero odit culpa unde. Dicta, et, quaerat consequuntur aspernatur "
    },
    {
      value: "c",
      title: "Lorem ipsum dolor sit amet consectetur",
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero odit culpa unde. Dicta, et, quaerat consequuntur aspernatur "
    },
    {
      value: "d",
      title: "Lorem ipsum dolor sit amet consectetur",
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero odit culpa unde. Dicta, et, quaerat consequuntur aspernatur "
    },
    {
      value: "e",
      title: "Lorem ipsum dolor sit amet consectetur",
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero odit culpa unde. Dicta, et, quaerat consequuntur aspernatur "
    },
    {
      value: "f",
      title: "Lorem ipsum dolor sit amet consectetur",
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero odit culpa unde. Dicta, et, quaerat consequuntur aspernatur "
    }
  ];

  return (
    <Flex
      flexDir="row"
      w="100%"
      h="100%"
      gap={[2, 4, 6]}
      justifyContent={["flex-start", "center"]}
      p={[4, 6, 8]}
      overflowX={["scroll", "visible"]}
      css={{
        "&::-webkit-scrollbar": {
          display: "none"
        }
      }}
    >
              <Flex
          mt={[4, 6, 6]}
          flexDir="column"
          h={'fit-content'}
          w={["90%", "45%", "30%"]}
          minW={["90%", "45%", "25%"]}
          bg="#99E9C3"
          shadow="md"
          rounded="xl"
          ms={[4, 0]}
          me={[4, 0]}
          alignItems="center"
          position="relative"
          justifyContent="center"
          py={[8, 12, 16]}
          gap={2}
        >
          <Box
            h={[10, 12, 14]}
            w={[10, 12, 14]}
            bg="#FFFFFF"
            rounded="full"
            mt={3}
            display="flex"
            justifyContent="center"
            alignItems="center"
            shadow="md"
            position="absolute"
            top="-8%"
          >
            <MdOutlineQuestionMark size={30} color="#00713C" />
          </Box>
          <Text 
          color={'#00713C'} 
          fontSize={['sm', 'md', 'lg']}>
            Topico
          </Text>
          <Flex
            direction="column"
            w="90%"
            bg="white"
            rounded="xl"
            color="black"
            overflowY="auto"
            shadow="md"
          >
            <Accordion.Root
              variant="plain"
              shadow="md"
              rounded="xl"
              bg="#99E9C3"
              collapsible
            >
              {questions.map((question, index) => (
                <Accordion.Item 
                  bg="white" 
                  key={index} 
                  value={question.value}
                >
                  <Accordion.ItemTrigger
                    fontSize={["sm", "md", "lg"]}
                    justifyContent="center"
                    color="#00713C"
                    _open={{ bg: "#99E9C3" }}
                    _hover={{ bg: "#99E9C3", cursor: "pointer" }}
                  >
                    {question.title}
                  </Accordion.ItemTrigger>
                  <Accordion.ItemContent 
                    bg="white" 
                    _open={{ bg: "#99E9C3" }}
                  >
                    <Accordion.ItemBody ml={1} bg="white">
                      <Blockquote.Root>
                        <Blockquote.Content>
                          {question.text}
                        </Blockquote.Content>
                      </Blockquote.Root>
                    </Accordion.ItemBody>
                  </Accordion.ItemContent>
                </Accordion.Item>
              ))}
            </Accordion.Root>
          </Flex>
        </Flex>
        <Flex
          mt={[4, 6, 6]}
          flexDir="column"
          h={'fit-content'}
          w={["90%", "45%", "30%"]}
          minW={["90%", "45%", "25%"]}
          bg="#99E9C3"
          shadow="md"
          rounded="xl"
          ms={[4, 0]}
          me={[4, 0]}
          alignItems="center"
          position="relative"
          justifyContent="center"
          py={[8, 12, 16]}
          gap={2}
        >
          <Box
            h={[10, 12, 14]}
            w={[10, 12, 14]}
            bg="#FFFFFF"
            rounded="full"
            mt={3}
            display="flex"
            justifyContent="center"
            alignItems="center"
            shadow="md"
            position="absolute"
            top="-8%"
          >
            <RiLockPasswordLine size={30} color="#00713C" />
          </Box>
          <Text 
          color={'#00713C'} 
          fontSize={['sm', 'md', 'lg']}>
            Topico
          </Text>
          <Flex
            direction="column"
            w="90%"
            bg="white"
            rounded="xl"
            color="black"
            overflowY="auto"
            shadow="md"
          >
            <Accordion.Root
              variant="plain"
              shadow="md"
              rounded="xl"
              bg="#99E9C3"
              collapsible
            >
              {questions.map((question, index) => (
                <Accordion.Item 
                  bg="white" 
                  key={index} 
                  value={question.value}
                >
                  <Accordion.ItemTrigger
                    fontSize={["sm", "md", "lg"]}
                    justifyContent="center"
                    color="#00713C"
                    _open={{ bg: "#99E9C3" }}
                    _hover={{ bg: "#99E9C3", cursor: "pointer" }}
                  >
                    {question.title}
                  </Accordion.ItemTrigger>
                  <Accordion.ItemContent 
                    bg="white" 
                    _open={{ bg: "#99E9C3" }}
                  >
                    <Accordion.ItemBody ml={1} bg="white">
                      <Blockquote.Root>
                        <Blockquote.Content>
                          {question.text}
                        </Blockquote.Content>
                      </Blockquote.Root>
                    </Accordion.ItemBody>
                  </Accordion.ItemContent>
                </Accordion.Item>
              ))}
            </Accordion.Root>
          </Flex>
        </Flex>
        <Flex
          mt={[4, 6, 6]}
          flexDir="column"
          h={'fit-content'}
          w={["90%", "45%", "30%"]}
          minW={["90%", "45%", "25%"]}
          bg="#99E9C3"
          shadow="md"
          rounded="xl"
          ms={[4, 0]}
          me={[4, 0]}
          alignItems="center"
          position="relative"
          justifyContent="center"
          py={[8, 12, 16]}
          gap={2}
        >
          <Box
            h={[10, 12, 14]}
            w={[10, 12, 14]}
            bg="#FFFFFF"
            rounded="full"
            mt={3}
            display="flex"
            justifyContent="center"
            alignItems="center"
            shadow="md"
            position="absolute"
            top="-8%"
          >
            <TbError404 size={30} color="#00713C" />
          </Box>
          <Text 
          color={'#00713C'} 
          fontSize={['sm', 'md', 'lg']}>
            Topico
          </Text>
          <Flex
            direction="column"
            w="90%"
            bg="white"
            rounded="xl"
            color="black"
            overflowY="auto"
            shadow="md"
          >
            <Accordion.Root
              variant="plain"
              shadow="md"
              rounded="xl"
              bg="#99E9C3"
              collapsible
            >
              {questions.map((question, index) => (
                <Accordion.Item 
                  bg="white" 
                  key={index} 
                  value={question.value}
                >
                  <Accordion.ItemTrigger
                    fontSize={["sm", "md", "lg"]}
                    justifyContent="center"
                    color="#00713C"
                    _open={{ bg: "#99E9C3" }}
                    _hover={{ bg: "#99E9C3", cursor: "pointer" }}
                  >
                    {question.title}
                  </Accordion.ItemTrigger>
                  <Accordion.ItemContent 
                    bg="white" 
                    _open={{ bg: "#99E9C3" }}
                  >
                    <Accordion.ItemBody ml={1} bg="white">
                      <Blockquote.Root>
                        <Blockquote.Content>
                          {question.text}
                        </Blockquote.Content>
                      </Blockquote.Root>
                    </Accordion.ItemBody>
                  </Accordion.ItemContent>
                </Accordion.Item>
              ))}
            </Accordion.Root>
          </Flex>
        </Flex>
    </Flex>
  );
}