import React from 'react';
import { 
  Accordion, 
  Blockquote, 
  Box, 
  Flex, 
  Link, 
  Text
} from "@chakra-ui/react";
import { MdOutlineQuestionMark } from "react-icons/md";
import { LuExternalLink } from 'react-icons/lu';
// import { RiLockPasswordLine } from "react-icons/ri";
// import { TbError404 } from "react-icons/tb";

export default function FaqCard() {

  const card1 = [
    {
      value: "a",
      title: "Como acesso o sistema de emissão de notas fiscais?",
      text: "Abra o navegador Google Chrome ou Safari no seu dispositivo e digite o endereço fornecido no campo DOMÍNIO do formulário do emitente."
    },
    {
      value: "b",
      title: "Quais são as credenciais de login iniciais?",
      text: "Utilize o nome de usuário do administrador da empresa e a senha pré-definida pelo gestor do sistema para o primeiro acesso."
    },
    {
      value: "c",
      title: "Como cadastro um novo cliente?",
      text: "No menu CLIENTES, selecione NOVO e preencha os campos obrigatórios, como CPF/CNPJ, Nome/Razão Social e endereço. Campos numéricos devem ser preenchidos apenas com números, sem caracteres especiais."
    },
    {
      value: "d",
      title: "O que fazer se o sistema não preencher automaticamente o endereço pelo CEP?",
      text: "Caso a base de consulta dos CORREIOS esteja fora do ar, preencha manualmente os campos de Logradouro, Bairro, Cidade, UF e Código IBGE. O código do município no IBGE pode ser consultado em: ",
      link: 'https://cidades.ibge.gov.br/'
    },
    {
      value: "e",
      title: "Como cadastro um novo produto?",
      text: "No menu PRODUTOS, selecione NOVO e preencha os campos obrigatórios, como Nome do Produto, Valor Unitário, Origem e NCM. Campos numéricos devem ser preenchidos apenas com números, sem caracteres especiais."
    },
    {
      value: "f",
      title: "Onde encontro o código NCM do produto?",
      text: `O código NCM pode ser localizado na nota fiscal de compra do seu fornecedor ou no site: `,
      link: 'https://portalunico.siscomex.gov.br/classif/#/sumario?perfil=publico'
    },
    {
      value: "g",
      title: "Como busco um cliente ou produto já cadastrado?",
      text: "No menu CLIENTES ou PRODUTOS, selecione PROCURAR e digite uma letra ou termo relacionado ao nome. Quanto mais específica a busca, menos resultados serão exibidos."
    },
    {
      value: "h",
      title: "Como edito meu perfil de acesso?",
      text: "No canto superior esquerdo, clique no ícone de três tracinhos para expandir o menu e acesse as opções de perfil para editar suas informações de acesso."
    }

  ]

  // const questions = [
  //   {
  //     value: "a",
  //     title: "Lorem ipsum dolor sit amet consectetur",
  //     text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero odit culpa unde. Dicta, et, quaerat consequuntur aspernatur "
  //   },
  //   {
  //     value: "b",
  //     title: "Lorem ipsum dolor sit amet consectetur",
  //     text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero odit culpa unde. Dicta, et, quaerat consequuntur aspernatur "
  //   },
  //   {
  //     value: "c",
  //     title: "Lorem ipsum dolor sit amet consectetur",
  //     text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero odit culpa unde. Dicta, et, quaerat consequuntur aspernatur "
  //   },
  //   {
  //     value: "d",
  //     title: "Lorem ipsum dolor sit amet consectetur",
  //     text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero odit culpa unde. Dicta, et, quaerat consequuntur aspernatur "
  //   },
  //   {
  //     value: "e",
  //     title: "Lorem ipsum dolor sit amet consectetur",
  //     text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero odit culpa unde. Dicta, et, quaerat consequuntur aspernatur "
  //   },
  //   {
  //     value: "f",
  //     title: "Lorem ipsum dolor sit amet consectetur",
  //     text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero odit culpa unde. Dicta, et, quaerat consequuntur aspernatur "
  //   }
  // ];

  return (
    <Flex
      flexDir="row"
      w="100%"
      h="100%"
      gap={[2, 4, 6]}
      justifyContent={["flex-start", "center"]}
      p={[4, 6, 8]}
>
              <Flex
          mt={[4, 6, 6]}
          flexDir="column"
          h={'fit-content'}
          w={["95%", "45%", "30%"]}
          minW={["95%", "45%", "25%"]}
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
            Sistema NFE
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
              {card1.map((question, index) => (
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
                          {question.text}{question.link && <Link target='_blank' fontSize={'sm'} color={'blue.600'} href={question.link}>{question.link}<LuExternalLink /></Link>}
                        </Blockquote.Content>
                      </Blockquote.Root>
                    </Accordion.ItemBody>
                  </Accordion.ItemContent>
                </Accordion.Item>
              ))}
            </Accordion.Root>
          </Flex>
        </Flex>
        {/* <Flex
          mt={[4, 6, 6]}
          flexDir="column"
          h={'fit-content'}
          w={["95%", "45%", "30%"]}
          minW={["95%", "45%", "25%"]}
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
          w={["95%", "45%", "30%"]}
          minW={["95%", "45%", "25%"]}
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
        </Flex> */}
    </Flex>
  );
}