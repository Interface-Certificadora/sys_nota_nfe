import { Accordion, Blockquote, Box, Flex } from "@chakra-ui/react";
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
    <>
      <Flex
        flexDir={"row"}
        w="100%"
        h="100%"
        gap={6}
        justifyContent={{ base: "none", lg: "center" }}
        alignItems="center"
        overflowX={{ base: "scroll", lg: "visible" }}
        css={{
          "&::-webkit-scrollbar": {
            display: "none"
          }
        }}
      >
        <Flex
          flexDir={"column"}
          h="90%"
          w={{ base: "90%", lg: "30%" }}
          minW={{ base: "90%", lg: "25%" }}
          bg="#99E9C3"
          shadow="md"
          rounded="xl"
          ms={{ base: 6, lg: 0 }}
          alignItems={"center"}
          position={'relative'}
          justifyContent={'center'}
        >
          <Box
            h={{ base: 10, lg: 14 }}
            w={{ base: 10, lg: 14 }}
            bg="#FFFFFF"
            rounded={"full"}
            mt={3}
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
            shadow={"md"}
            position={'absolute'}
            top={'-6%'}
          >
            <MdOutlineQuestionMark size={30} color="#00713C" />
          </Box>
          <Flex
            direction="column"
            w={"90%"}
            bg={"#FFFFFF"}
            rounded={"xl"}
            color={"black"}
            overflowY="auto"
            shadow={"md"}
          >
            <Accordion.Root
              variant={"plain"}
              shadow={"md"}
              rounded={"xl"}
              bg={"#99E9C3"}
              collapsible
            >
              {questions.map((question, index) => (
                <Accordion.Item bg={"white"} key={index} value={question.value}>
                  <Accordion.ItemTrigger
                    fontSize={{ base: "lg", lg: "lg" }}
                    justifyContent={"center"}
                    color={"#00713C"}
                    _open={{ bg: "#99E9C3" }}
                    _hover={{ bg: "#99E9C3", cursor: "pointer" }}
                  >
                    {question.title}
                  </Accordion.ItemTrigger>
                  <Accordion.ItemContent bg={"white"} _open={{ bg: "#99E9C3" }}>
                    <Accordion.ItemBody ml={1} bg={"white"}>
                      <Blockquote.Root>
                        <Blockquote.Content>{question.text}</Blockquote.Content>
                      </Blockquote.Root>
                    </Accordion.ItemBody>
                  </Accordion.ItemContent>
                </Accordion.Item>
              ))}
            </Accordion.Root>
          </Flex>
        </Flex>
        <Flex
          flexDir={"column"}
          h="90%"
          w={{ base: "90%", lg: "30%" }}
          minW={{ base: "90%", lg: "25%" }}
          bg="#99E9C3"
          shadow="md"
          rounded="xl"
          alignItems={"center"}
          gap={10}
          position={'relative'}
          justifyContent={'center'}
        >
          <Box
            h={{ base: 10, lg: 14 }}
            w={{ base: 10, lg: 14 }}
            bg="#FFFFFF"
            rounded={"full"}
            mt={3}
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
            shadow={"md"}
            position={'absolute'}
            top={'-6%'}
          >
            <RiLockPasswordLine size={30} color="#00713C" />
          </Box>
          <Flex
            direction="column"
            w={"90%"}
            bg={"#FFFFFF"}
            rounded={"xl"}
            color={"black"}
            overflowY="auto"
            shadow={"md"}
          >
            <Accordion.Root
              variant={"plain"}
              shadow={"md"}
              rounded={"xl"}
              bg={"#99E9C3"}
              collapsible
            >
              {questions.map((question, index) => (
                <Accordion.Item bg={"white"} key={index} value={question.value}>
                  <Accordion.ItemTrigger
                    fontSize={{ base: "lg", lg: "lg" }}
                    justifyContent={"center"}
                    color={"#00713C"}
                    _open={{ bg: "#99E9C3" }}
                    _hover={{ bg: "#99E9C3", cursor: "pointer" }}
                  >
                    {question.title}
                  </Accordion.ItemTrigger>
                  <Accordion.ItemContent bg={"white"} _open={{ bg: "#99E9C3" }}>
                    <Accordion.ItemBody ml={1} bg={"white"}>
                      <Blockquote.Root>
                        <Blockquote.Content>{question.text}</Blockquote.Content>
                      </Blockquote.Root>
                    </Accordion.ItemBody>
                  </Accordion.ItemContent>
                </Accordion.Item>
              ))}
            </Accordion.Root>
          </Flex>
        </Flex>
        <Flex
          flexDir={"column"}
          h="90%"
          w={{ base: "90%", lg: "30%" }}
          minW={{ base: "90%", lg: "25%" }}
          bg="#99E9C3"
          shadow="md"
          rounded="xl"
          me={{ base: 6, lg: 0 }}
          alignItems={"center"}
          gap={10}
          position={'relative'}
          justifyContent={'center'}
        >
          <Box
            h={{ base: 10, lg: 14 }}
            w={{ base: 10, lg: 14 }}
            bg="#FFFFFF"
            rounded={"full"}
            mt={3}
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
            shadow={"md"}
            position={'absolute'}
            top={'-6%'}
          >
            <TbError404 size={30} color="#00713C" />
          </Box>
          <Flex
            direction="column"
            w={"90%"}
            bg={"#FFFFFF"}
            rounded={"xl"}
            color={"black"}
            overflowY="auto"
            shadow={"md"}
          >
            <Accordion.Root
              variant={"plain"}
              shadow={"md"}
              rounded={"xl"}
              bg={"#99E9C3"}
              collapsible
            >
              {questions.map((question, index) => (
                <Accordion.Item bg={"white"} key={index} value={question.value}>
                  <Accordion.ItemTrigger
                    fontSize={{ base: "lg", lg: "lg" }}
                    justifyContent={"center"}
                    color={"#00713C"}
                    _open={{ bg: "#99E9C3" }}
                    _hover={{ bg: "#99E9C3", cursor: "pointer" }}
                  >
                    {question.title}
                  </Accordion.ItemTrigger>
                  <Accordion.ItemContent bg={"white"} _open={{ bg: "#99E9C3" }}>
                    <Accordion.ItemBody ml={1} bg={"white"}>
                      <Blockquote.Root>
                        <Blockquote.Content>{question.text}</Blockquote.Content>
                      </Blockquote.Root>
                    </Accordion.ItemBody>
                  </Accordion.ItemContent>
                </Accordion.Item>
              ))}
            </Accordion.Root>
          </Flex>
        </Flex>
      </Flex>
    </>
  );
}
