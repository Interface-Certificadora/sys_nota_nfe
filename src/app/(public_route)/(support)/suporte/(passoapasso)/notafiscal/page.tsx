import TableManual from "@/app/components/table/tablemanual";
import { Flex, Box, Text, Image } from "@chakra-ui/react";

export default function NotaFiscal() {
  return (
    <>
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
          w={{ base: "100%", lg: "60%" }}
          alignItems={"center"}
        >
          <Box>
            <Text color={"black"} fontSize={"2xl"} fontWeight={"bold"}>
              NOTA FISCAL - (PROCURAR, EDITAR, EXPORTAR XML)
            </Text>
          </Box>
          <Flex  mt={6} alignItems={"center"} gap={2} flexDir={"column"}>
            <Text color={"black"}>
              No menu NOTAS FISCAIS, em PROCURAR, você poderá fazer um filtro
              com um ou mais itens para localizar uma nota fiscal já emitida ou
              para editar alguma nota que está em aberto.
            </Text>
            <Text color={"black"}>
              Para exportar o arquivo XML para o seu contador, basta fazer uma
              busca no período do mês desejado e com o Status “autorizadas”.{" "}
              <span style={{ fontWeight: "bold" }}>
                É necessário clicar na caixa de seleção
              </span>{" "}
              em todas as notas que resultaram da pesquisa e por fim clicar no
              botão ``EXPORTAR XML.
            </Text>
            <Flex alignItems={"flex-end"}>
              <Box w={{ base: "100%", lg: "50%" }}>
                <Image src="/img/nota1.png" alt="nota1"></Image>
              </Box>
              <Box>
                <Image src="/img/image4.png" alt="nota"></Image>
              </Box>
            </Flex>
            <Text color={"black"}>
              Automaticamente, o sistema irá fazer o download das notas fiscais
              selecionadas salvando na sua pasta de Downloads. Por padrão, o
              arquivo irá vir no formato de PDF.
            </Text>
            <Text color={"black"}>
              Para visualizar uma nota fiscal autorizada, ou para editar uma
              nota em aberto, basta clicar no link VISUALIZAR. Você será
              direcionado para a página geral das notas fiscais.
            </Text>
            <Box w={{ base: "100%", lg: "50%" }}>
              <Image src="/img/nota2.png" alt="nota2"></Image>
            </Box>
            <Text color={"black"}>
              Quando selecionada uma nota fiscal AUTORIZADA, é possível ver um
              resumo da nota fiscal, e no rodapé da página, um botão DANFE.
            </Text>
            <Text mt={10} color={"black"}>
              Clicando no botão DANFE, uma nova aba irá abrir e será possível
              visualizar a nota fiscal para impressão ou salvamento no
              computador.
            </Text>
            <Box w={{ base: "100%", lg: "50%" }}>
              <Image src="/img/nota3.png" alt="nota3"></Image>
            </Box>
            <Text color={"black"}>
              Para imprimir, basta clicar no ícone da impressora no canto
              superior direito, e para fazer o download da nota fiscal para
              salvar no computador, basta clicar na setinha para baixo ao lado
              do ícone da impressora.
            </Text>
            <Text color={"black"} fontSize={"1xl"} fontWeight={"bold"}>
              EMITINDO A NOTA FISCAL
            </Text>
            <Box w={{ base: "100%", lg: "50%" }}>
              <Image src="/img/nota4.png" alt="nota4"></Image>
            </Box>
            <Text color={"black"}>
              Data Saída: Campo Opcional. Preencher com a data da entrega ou
              saída da nota fiscal de seu estabelecimento.
            </Text>
            <Text color={"black"}>
              Chave Acesso: quando a nota estiver autorizada, o sistema irá
              preencher automaticamente.
            </Text>
            <Text color={"black"}>
              Consumidor Final: deixe essa opção selecionada, caso a nota for
              para consumidor final. Caso seja venda de produtos nos quais o
              cliente irá revender, desmarque essa seleção.
            </Text>
            <Box w={{ base: "100%", lg: "50%" }}>
              <Image src="/img/nota5.png" alt="nota5"></Image>
            </Box>
            <Text color={"black"}>
              Para preencher o campo CLIENTE, clique no ícone da Lupa ao lado do
              campo, ele irá abrir uma janela. Digite o nome que está procurando
              ou apenas uma letra, e ele irá retornar uma lista.
            </Text>
            <Text color={"black"}>
              Por fim, basta clicar em SELECIONAR na linha do cliente que você
              deseja adicionar.
            </Text>
            <Text color={"black"}>
              Natureza Operação*: irá aparecer algumas opções pré-configuradas
              para o perfil da sua empresa, selecione uma para poder continuar.
            </Text>
            <Box w={{ base: "100%", lg: "50%" }}>
              <Image src="/img/nota6.png" alt="nota6"></Image>
            </Box>
            <Text color={"black"}>
              Frete*: irá aparecer algumas opções pré-configuradas para o perfil
              da sua empresa, selecione uma para poder continuar. Normalmente,
              recomendamos a opção 9-sem frete.
            </Text>
            <Box w={{ base: "100%", lg: "50%" }}>
              <Image src="/img/nota7.png" alt="nota7"></Image>
            </Box>
            <Text color={"black"}>
              Clique em PRODUTOS, para adicionar os produtos. O sistema abrirá
              as opções.
            </Text>
            <Text color={"black"}>
              Clique na Lupa do campo Produto, para abrir a busca de produtos.
              Digite o nome do produto que está procurando ou apenas uma letra,
              e ele irá retornar uma lista que contém na sua busca. Por fim,
              basta clicar em SELECIONAR na linha do produto que você deseja
              adicionar.
            </Text>
            <Box w={{ base: "100%", lg: "50%" }}>
              <Image src="/img/nota8.png" alt="nota8"></Image>
            </Box>
            <Text color={"black"}>
              Não é possível editar o nome do produto no momento da emissão da
              nota, somente os campos QTD (Quantidade) e VALOR UNITÁRIO.
            </Text>
            <Text color={"black"}>
              Clique em SALVAR para inserir o produto na nota fiscal. Para
              adicionar outro produto, basta clicar no botão ADICIONAR PRODUTO,
              e incluí-lo se desejado.
            </Text>
            <Text color={"black"}>
              Para adicionar informações sobre Transporte, basta clicar no ícone
              + da linha TRANSPORTES, e ele abrirá as opções que devem ser
              incluídas sobre o transporte. Todos os itens são obrigatórios.
            </Text>
            <Box w={{ base: "100%", lg: "50%" }}>
              <Image src="/img/nota9.png" alt="nota9"></Image>
            </Box>
            <Text color={"black"}>
              Para adicionar informações no campo da nota fiscal, que é de
              interesse do contribuinte, você deverá clicar no ícone + da linha
              INFORMAÇÕES ADICIONAIS. Esse campo é livre para incluir
              informações sobre pagamentos, regras para devolução, entre outras
              informações que achar relevante para o cliente saber.
            </Text>
            <Text color={"black"}>
              Nos campos FORMA PGTO* e PREÇO, o sistema irá preencher
              automaticamente. Caso queira, você pode mudar a Forma Pgto* para a
              opção que mais se ajusta à sua nota fiscal.
            </Text>
            <Box w={{ base: "100%", lg: "50%" }}>
              <Image src="/img/nota10.png" alt="nota10"></Image>
            </Box>
            <Text color={"black"}>
              Concluído o preenchimento da nota fiscal, clique em SALVAR, ou
              clique direto em TRANSMITIR que o sistema fará o resto, validando,
              assinando, transmitindo para o sistema SEFAZ e consultando o
              Retorno.
            </Text>
            <Text color={"black"}>
              Caso a nota fiscal seja recusada no SEFAZ, o sistema irá retornar
              o código do erro acusado pelo SEFAZ , e com ele a equipe de
              suporte poderá te auxiliar na edição da nota com erro.
            </Text>
            <Box w={{ base: "100%", lg: "50%" }}>
              <Image src="/img/nota11.png" alt="nota11"></Image>
            </Box>
            <Text color={"black"}>
              Se tudo estiver correto, o sistema retornará com a mensagem NOTA
              AUTORIZADA.
            </Text>
            <Box mt={5} w={{ base: "100%", lg: "50%" }}>
              <Image src="/img/nota12.png" alt="nota12"></Image>
            </Box>
            <Text color={"black"}>
              Observe que, se “Autorizada”, irão aparecer 2 novos botões no
              rodapé da nota fiscal: DANFE e CANCELAR NFe.
            </Text>
            <Text color={"black"}>
              Clique em CANCELAR NFe, para cancelar a sua nota fiscal. O sistema
              automaticamente irá enviar o relatório de cancelamento para o
              SEFAZ e cancelar a nota fiscal.
            </Text>
            <Text mt={10} color={"black"}>
              Para imprimir, basta clicar no ícone da impressora no canto
              superior direito, e para fazer o download da nota fiscal para
              salvar no computador, basta clicar na setinha para baixo ao lado
              do ícone da impressora.
            </Text>
          </Flex>
          <Flex mt={20}>
          <TableManual />
          </Flex>
        </Flex>
      </Flex>
    </>
  );
}
