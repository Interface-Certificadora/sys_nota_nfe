import {
    Table,
  } from "@chakra-ui/react";
  
  const dados = [
    {
        id: 1,
      data: "06/10/2020",
      versao: "1.0",
      observacao:
        "Desenvolvimento do Material de suporte por escrito de como utilizar o emissor de notas fiscais DANFE. (Ariel, Alexandre, Jessica)",
    },
    {
        id: 2,
      data: "23/11/2020",
      versao: "1.01",
      observacao:
        "Inclusão de campo Cobrança com informações de início do plano e início da cobrança das mensalidades. (Ariel)\nInclusão do campo Contabilidade, com informações do nome da Contabilidade, telefone e responsável contábil. (Ariel)",
    },
    {
        id: 3,
      data: "21/12/2020",
      versao: "1.02",
      observacao:
        "Atualização do texto cadastro de cliente, com a inclusão da busca pelo número do CPF/CNPJ. (Ariel)",
    },
    {
        id: 4,
      data: "30/12/2020",
      versao: "1.03",
      observacao:
        "Inclusão da linha no Domínio Auxiliar no Formulário do Emitente. (Ariel)",
    },
    {
        id: 5,
      data: "19/02/2021",
      versao: "1.04",
      observacao:
        "Inclusão/reordenação de linhas em Dados do Emitente, CFOP e CSOSN do ICMS com/sem Sub. Trib.\nAlteração da linha, Série da NFE/Nota para, Número da última NFE emitida.\nExclusão da linha Inscrição Municipal.",
    },
  ];
  
export default function TableManual() {
    
    return (
        <Table.Root borderWidth="1px" showColumnBorder size="sm">
        <Table.Header >
          <Table.Row bg={'transparent'} >
            <Table.ColumnHeader color={'black'} >Data</Table.ColumnHeader>
            <Table.ColumnHeader color={'black'}>Versão</Table.ColumnHeader>
            <Table.ColumnHeader color={'black'} >Observação</Table.ColumnHeader>
          </Table.Row>
        </Table.Header >
        <Table.Body >
          {dados.map((item) => (
            <Table.Row bg={'transparent'} key={item.id}>
              <Table.Cell color={'black'}>{item.data}</Table.Cell>
              <Table.Cell color={'black'}>{item.versao}</Table.Cell>
              <Table.Cell color={'black'}>{item.observacao}</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table.Root>
    );
}
  