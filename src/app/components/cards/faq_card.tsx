import React from "react";
import { Accordion, Blockquote, Box, Flex, Link, Text } from "@chakra-ui/react";
import { MdOutlineQuestionMark } from "react-icons/md";
import { LuExternalLink } from "react-icons/lu";

// import { RiLockPasswordLine } from "react-icons/ri";
// import { TbError404 } from "react-icons/tb";

export default function FaqCard() {
  const card1 = [
    {
      value: "a",
      title: "Como posso acessar o emissor de notas fiscais?",
      text: 'Você deve abrir o navegador Google Chrome ou Safari no seu computador, tablet ou celular e digitar o endereço informado no campo "DOMÍNIO" do formulário do emitente.'
    },
    {
      value: "b",
      title: "Quais são as etapas para fazer login no sistema?",
      text: 'No campo "Login", digite o nome do usuário administrador da empresa. No campo "Senha", insira a senha pré-definida pelo gestor do sistema para o primeiro acesso. Em seguida, clique no botão "LOGIN" para continuar.'
    },
    {
      value: "c",
      title: "O que encontro na tela inicial após o login?",
      text: "Na tela inicial, serão exibidas mensagens importantes, caso existam. No canto superior esquerdo, você encontrará o menu do sistema, que pode ser expandido ao clicar no ícone de três tracinhos."
    }
  ];

  const card2 = [
    {
      value: "a",
      title: "Como posso buscar clientes já cadastrados?",
      text: 'No menu "CLIENTES", na opção "PROCURAR", você pode realizar uma busca inserindo qualquer letra ou número. Por exemplo, ao digitar a letra "A", serão exibidos todos os clientes que possuem essa letra no nome. Quanto mais específica a busca, menos resultados serão retornados. Também é possível buscar pelo número completo do CPF ou CNPJ para um resultado exato, se existir.'
    },
    {
      value: "b",
      title: "Como faço para cadastrar um novo cliente?",
      text: 'No menu "CLIENTES", selecione a opção "NOVO" para cadastrar um novo cliente. Os campos com asterisco (*) são obrigatórios. Preencha as informações conforme solicitado, lembrando que campos numéricos devem ser preenchidos apenas com números, sem caracteres especiais como ".", ",", "-", ou "/". Após preencher todos os campos necessários, clique em "SALVAR" para concluir o cadastro.'
    },
    {
      value: "c",
      title: "O que devo inserir nos campos CPF/CNPJ e RG/IE?",
      text: 'No campo CPF/CNPJ, insira o número correspondente do cliente. Se for um CPF, o preenchimento do campo RG/IE não é obrigatório. Se for um CNPJ, preencha o campo IE (Inscrição Estadual); caso o CNPJ seja isento, escreva "ISENTO"; se for não contribuinte, escreva "NÃOCONTRIBUINTE" (sem espaço).'
    },
    {
      value: "d",
      title: "Como funciona o preenchimento automático de endereço pelo CEP?",
      text: 'Ao inserir o CEP corretamente, o sistema preencherá automaticamente os campos de Logradouro, Bairro, Cidade, UF e Código IBGE. Você precisará preencher manualmente apenas os campos "Número" e "Complemento". Se a base de dados dos Correios estiver indisponível, será necessário preencher todas as informações de endereço manualmente. O código do município no IBGE pode ser consultado através do link:',
      link: 'https://cidades.ibge.gov.br/'
    },
    {
      value: "e",
      title: "Como posso buscar produtos já cadastrados?",
      text: 'No menu "PRODUTOS", na opção "PROCURAR", você pode realizar uma busca inserindo qualquer letra. Por exemplo, ao digitar a letra "C", serão exibidos todos os produtos que possuem essa letra no nome. Quanto mais específica a busca, menos resultados serão retornados.'
    },
    {
      value: "f",
      title: "Como faço para cadastrar um novo produto?",
      text: 'No menu "PRODUTOS", selecione a opção "NOVO" para cadastrar um novo produto. Os campos com asterisco (*) são obrigatórios. Preencha as informações conforme solicitado, lembrando que campos numéricos devem ser preenchidos apenas com números, sem caracteres especiais como ".", ",", "-", ou "/". Após preencher todos os campos necessários, clique em "SALVAR" para concluir o cadastro.'
    },
    {
      value: "g",
      title: "O que devo inserir nos campos de cadastro do produto?",
      text: 'No campo "Nome Produto*", insira o nome do produto e detalhes relevantes. No campo "Valor Unitário*", insira o valor unitário de venda do produto. Selecione a "Origem*" do produto (nacional ou importado). No campo "NCM*", insira a Nomenclatura Comum do Mercosul correspondente'
    },
  ];

  const card3 = [
    {
      value: "d",
      title: "Como posso iniciar a emissão de uma nova nota fiscal?",
      text: 'No menu principal, clique na opção "NOTAS FISCAIS" e, em seguida, selecione "NOVA" para iniciar a emissão de uma nova nota fiscal.'
    },
    {
      value: "e",
      title: "Quais são os passos para preencher os dados da nota fiscal?",
      text: 'Após selecionar "NOVA", siga os seguintes passos: ',
      passos: [
        {
          index:1,
          text:'1 - Selecionar o Cliente: Utilize o campo de busca para encontrar e selecionar o cliente previamente cadastrado.'
        },
        {
          index:2,
          text:'2 - Adicionar Produtos: Clique em "ADICIONAR PRODUTO" e selecione os produtos desejados. Informe a quantidade e verifique se os valores estão corretos.'
        },
        {
          index:3,
          text:'3 - Informações Adicionais: Preencha campos adicionais, se necessário, como transportadora, informações de pagamento, entre outros.'
        },
        {
          index:4,
          text:'4 - Revisão: Revise todos os dados inseridos para garantir que estão corretos antes de prosseguir.'
        },
      ]
    },
    {
      value: "f",
      title: "Como finalizo e emito a nota fiscal?",
      text: 'Após revisar todas as informações, clique no botão "SALVAR" para armazenar a nota fiscal no sistema. Em seguida, para transmiti-la à SEFAZ, clique em "TRANSMITIR".'
    },
    {
      value: "g",
      title: "O que devo fazer se encontrar erros durante a emissão ou transmissão da nota fiscal?",
      text: 'Caso ocorra algum erro, o sistema exibirá uma mensagem com a descrição do problema. Corrija as informações conforme indicado e tente transmitir novamente. Se o problema persistir, entre em contato com o suporte técnico para assistência.'
    },
    {
      value: "h",
      title: "Como posso visualizar ou imprimir a DANFE após a emissão?",
      text: 'Após a emissão bem-sucedida, vá ao menu "NOTAS FISCAIS" e selecione "PROCURAR". Encontre a nota desejada e clique no ícone de impressão para visualizar ou imprimir a DANFE.'
    },
    {
      value: "i",
      title: "É possível cancelar uma nota fiscal após a emissão?",
      text: 'Sim, desde que esteja dentro do prazo legal permitido para cancelamento. No menu "NOTAS FISCAIS", selecione "PROCURAR", encontre a nota que deseja cancelar e clique no ícone de cancelamento. Siga as instruções fornecidas pelo sistema para concluir o processo.'
    },
    {
      value: "j",
      title: "Como posso exportar o arquivo XML de uma nota fiscal?",
      text: 'No menu "NOTAS FISCAIS", selecione "PROCURAR", localize a nota desejada e clique no ícone de download para exportar o arquivo XML correspondente.'
    },
    
  ];

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
        h={"fit-content"}
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
        <Text color={"#00713C"} fontSize={["sm", "md", "lg"]}>
          Acessando o Sistema
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
              <Accordion.Item bg="white" key={index} value={question.value}>
                <Accordion.ItemTrigger
                  fontSize={["sm", "md", "lg"]}
                  justifyContent="center"
                  color="#00713C"
                  _open={{ bg: "#99E9C3" }}
                  _hover={{ bg: "#99E9C3", cursor: "pointer" }}
                >
                  {question.title}
                </Accordion.ItemTrigger>
                <Accordion.ItemContent bg="white" _open={{ bg: "#99E9C3" }}>
                  <Accordion.ItemBody ml={1} bg="white">
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
        mt={[4, 6, 6]}
        flexDir="column"
        h={"fit-content"}
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
        <Text color={"#00713C"} fontSize={["sm", "md", "lg"]}>
          Cadastrando Clientes e Produtos
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
            {card2.map((question, index) => (
              <Accordion.Item bg="white" key={index} value={question.value}>
                <Accordion.ItemTrigger
                  fontSize={["sm", "md", "lg"]}
                  justifyContent="center"
                  color="#00713C"
                  _open={{ bg: "#99E9C3" }}
                  _hover={{ bg: "#99E9C3", cursor: "pointer" }}
                >
                  {question.title}
                </Accordion.ItemTrigger>
                <Accordion.ItemContent bg="white" _open={{ bg: "#99E9C3" }}>
                  <Accordion.ItemBody ml={1} bg="white">
                    <Blockquote.Root>
                      <Blockquote.Content>{question.text}{question.link && <Link target='_blank' fontSize={'sm'} color={'blue.600'} href={question.link}>{question.link}<LuExternalLink /></Link>}</Blockquote.Content>
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
        h={"fit-content"}
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
        <Text color={"#00713C"} fontSize={["sm", "md", "lg"]}>
          Nota Fiscal
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
            {card3.map((question, index) => (
              <Accordion.Item bg="white" key={index} value={question.value}>
                <Accordion.ItemTrigger
                  fontSize={["sm", "md", "lg"]}
                  justifyContent="center"
                  color="#00713C"
                  _open={{ bg: "#99E9C3" }}
                  _hover={{ bg: "#99E9C3", cursor: "pointer" }}
                >
                  {question.title}
                </Accordion.ItemTrigger>
                <Accordion.ItemContent bg="white" _open={{ bg: "#99E9C3" }}>
                  <Accordion.ItemBody ml={1} bg="white">
                    <Blockquote.Root>
                      <Blockquote.Content>{question.text}{question.passos ? question.passos.map((passo, index) => (<li key={index}>{passo.text}</li>)) : null}</Blockquote.Content>
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
