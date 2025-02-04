import TableManual from "@/app/components/table/tablemanual";
import { Flex, Box, Text, Image, Link } from "@chakra-ui/react";

export default function ClientesEProdutos() {
  return (
    <Flex
      w={"full"}
      h={"full"}
      p={{ base: 3, lg: 0 }}
      flexDir={"column"}
      alignItems={"center"}
    >
      <Flex
        pb={6}
        flexDir={"column"}
        w={{ base: "100%", lg: "50%" }}
        alignItems={"center"}
        gap={4}
      >
        <Box>
          <Text color={"black"} fontSize={"2xl"} fontWeight={"bold"}>
            Clientes e Produtos
          </Text>
        </Box>
        <Text color={"black"} mt={10} fontSize={"1xl"} fontWeight={"bold"}>
          Cadastrando Clientes
        </Text>
        <Flex alignItems={"center"} gap={2} flexDir={"column"}>
          <Box w={{ base: "100%", lg: "50%" }}>
            <Image src="/img/cliente1.jpg" alt="acessando1"></Image>
          </Box>
          <Box>
            <Text color={"black"}>
              Dentro do menu CLIENTES, em PROCURAR, você irá fazer uma busca por
              qualquer letra. No exemplo colocamos a letra “A”, então a busca
              trouxe todos os clientes que possuem a letra A no nome. Quanto
              mais específica a busca, menos resultados ela trará. Outra opção é
              a busca pelo número do CPF ou CNPJ, mas tem que ser o número
              inteiro, ele irá retornar o resultado exato se existir
            </Text>
          </Box>
          <Box mt={10}>
            <Text color={"black"}>
              Dentro do menu CLIENTES, em NOVO, você irá cadastrar o seu
              cliente. Os campos com asterisco (*) são obrigatórios.
            </Text>
          </Box>
          <Box w={{ base: "100%", lg: "50%" }}>
            <Image src="/img/cliente2.jpg" alt="acessando2"></Image>
          </Box>
          <Box display={"flex"} flexDir={"column"} gap={4}>
            <Text color={"black"}>
              Cód.Cliente: Será cadastrado pelo sistema, é um número sequencial
              de controle do sistema. Não é possível o cliente criar esse
              código.
            </Text>
            <Text color={"black"}>
              ATENÇÃO: os Campos Numéricos devem ser preenchidos somente com
              números, caracteres como “ . , - / ” não devem ser inseridos.
            </Text>
            <Text color={"black"}>
              CPF/CNPJ: inserir o número do CPF ou CNPJ do cliente. Caso seja um
              CPF, o preenchimento da RG/IE não é obrigatório. Caso seja um
              CNPJ, preencher com a IE, caso o CNPJ seja isento escrever ISENTO,
              caso o CNPJ seja Não Contribuinte, escrever NÃOCONTRIBUINTE sem
              espaço.
            </Text>
            <Text color={"black"}>NOME/RAZÃO: Preenchimento Obrigatório.</Text>
            <Text color={"black"}>
              SOBRENOME/FANTASIA: Preenchimento Opcional.
            </Text>
            <Text color={"black"}>
              Preenchendo o campo CEP corretamente, o sistema irá retornar
              automaticamente o Logradouro, Bairro, Cidade, UF, Cod.IBGE. Apenas
              os campos Número e Complemento deverão ser preenchidos pelo
              cliente.
            </Text>
            <Text color={"black"}>
              Caso a base de consulta dos CORREIOS estiver fora do ar, preencher
              as informações de Logradouro, Bairro, Cidade, UF e Cod IBGE
              Manualmente. O código do município no IBGE pode ser consultado
              através do link:{" "}
              <Link color={"blue.500"} href="https://cidades.ibge.gov.br/">
                https://cidades.ibge.gov.br/
              </Link>
            </Text>
            <Text color={"black"}>
              Clique em SALVAR para cadastrar o cliente.
            </Text>
          </Box>
          <Box mt={10}>
            <Text color={"black"} mt={10} fontSize={"1xl"} fontWeight={"bold"}>
              Cadastrando Produtos
            </Text>
          </Box>
          <Box w={{ base: "100%", lg: "50%" }}>
            <Image src="/img/produto1.png" alt="acessando1"></Image>
          </Box>
          <Box>
            <Text color={"black"}>
              Dentro do menu PRODUTOS, em PROCURAR, você irá fazer uma busca por
              qualquer letra. No exemplo colocamos a letra “C”, então ela trouxe
              todos os clientes que possuem a letra C no nome. Quanto mais
              específica a busca, menos resultados ela trará.
            </Text>
          </Box>
          <Box mt={10} w={{ base: "100%", lg: "50%" }}>
            <Image src="/img/produto2.png" alt="acessando2"></Image>
          </Box>
          <Box display={"flex"} flexDir={"column"} gap={4}>
            <Text color={"black"}>
              Cód.Produto: Será cadastrado pelo sistema, é um número seqüencial
              de controle do sistema. Não é possível o cliente criar esse
              código.
            </Text>
            <Text color={"black"}>
              Nome Produto*: Inserir o nome dos produtos e detalhes, quando
              necessário.
            </Text>
            <Text color={"black"}>
              Valor Unitário*: Valor de venda Unitário, o valor de um produto.
            </Text>
            <Text color={"black"}>
              ATENÇÃO: os Campos Numéricos devem ser preenchidos somente com
              números, caracteres como “. , - /” não devem ser inseridos. Sempre
              digite os números, evite copiar e colar.
            </Text>
            <Text color={"black"}>
              Origem*: origem da compra do produtos, se foi Nacional de dentro
              do Brasil ou se foi importada.
            </Text>
            <Text color={"black"}>
              NCM*: (Nomenclatura Comum do Mercosul), todo produto tem um código
              numérico que o identifica, esse código pode ser localizado na nota
              fiscal de compra do seu fornecedor ou pelo site:
              <Link
                color={"blue.500"}
                href="https://portalunico.siscomex.gov.br/classif/#/sumario?perfil=publico"
              >
                https://portalunico.siscomex.gov.br/classif/#/sumario?perfil=publico
              </Link>
            </Text>
            <Text color={"black"}>
              Substituição Tributária*: Marque esta opção quando você souber que
              há substituição tributária para esses produtos, normalmente
              bebidas, como refrigerantes, cervejas, destilados entre outras.
            </Text>
          </Box>
          <Flex mt={20}>
            <TableManual />
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
}
