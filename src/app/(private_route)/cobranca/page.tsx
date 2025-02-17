"use client";
import Dialog from "@/app/components/dialog/dialog_pagamentos";
import {
  SelectRoot,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValueText
} from "@/app/components/ui/select";
import { Cobrancas, ItemCobrancas } from "@/types/cobrancas.type";
import {
  useBreakpointValue,
  HStack,
  Spinner,
  Stack,
  Flex,
  Box,
  Input,
  Button,
  VStack,
  Table,
  LinkBox,
  LinkOverlay,
  PaginationRoot,
  PaginationPrevTrigger,
  PaginationItem,
  PaginationNextTrigger,
  Text,
  createListCollection
} from "@chakra-ui/react";
import { useState, useEffect } from "react";

export default function CobrancaPage() {
  const [items, setItems] = useState<ItemCobrancas[]>([]);
  const [filteredData, setFilteredData] = useState<ItemCobrancas[]>([]);
  const [filters, setFilters] = useState({
    id: "",
    nomecliente: "",
    status: null
  });
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 14;

  const fetchData = async () => {
    try {
      const response = await fetch(`/api/cobranca/getall`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json"
        }
      });
      if (!response.ok) {
        throw new Error(
          `Erro na requisição: ${response.status} - ${response.statusText}`
        );
      }

      const data: Cobrancas[] = await response.json();

      const transformedData : ItemCobrancas[] = data.map((item: Cobrancas) => ({
        id: item.id,
        nomecliente: item.cliente.cliente,
        status: item.status,
        venc: item.venc,
        obs: item.obs,
        valor: item.valor,
        link_boleto: item.link_boleto
      }));

      setItems(transformedData);
      setFilteredData(transformedData);
      setLoading(false);
    } catch (error) {
      console.error("Erro ao buscar dados:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const applyFilters = () => {
    const newFilteredData = items.filter((user) => {
      return (
        (filters.id === "" || user.id?.toString().includes(filters.id)) &&
        (filters.nomecliente === "" ||
          user.nomecliente
            ?.toLowerCase()
            .includes(filters.nomecliente.toLowerCase())) &&
        (filters.status === null || user.status === Boolean(filters.status))
      );
    });

    setFilteredData(newFilteredData);
    setCurrentPage(1);
  };

  const totalPages = Math.ceil(filteredData.length / pageSize);
  const paginatedData = filteredData.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize
  );

  const handleFilterChange = (
    field: string,
    value: string | boolean | null
  ) => {
    setFilters((prev) => ({ ...prev, [field]: value }));
  };

  const isMobile = useBreakpointValue({ base: true, md: false });

  const options = createListCollection({
    items: [
      { key: "status", label: "Todos", value: "Todos", status: null },
      { key: "status", label: "Pendente", value: "Pendente", status: true },
      { key: "status", label: "Pago", value: "Pago", status: false }
    ]
  });

  return loading ? (
    <HStack
      justify="center"
      align="center"
      gap="5"
      position="absolute"
      top="50%"
      left="50%"
      transform="translate(-50%, -50%)"
      w="full"
      h="full"
    >
      <Spinner color="green.800" size="lg" />
      <Text color="green.800" fontSize="xl">
        Carregando...
      </Text>
    </HStack>
  ) : (
    <Stack width="full" gap="4" h="fit" color="white">
      <Flex
        bg="green.600"
        py={4}
        borderRadius="lg"
        direction="column"
        gap={4}
        boxShadow="md"
      >
        <Flex wrap="wrap" gap={4} justify="space-around">
          <Box>
            <label>ID: </label>
            <Input
              placeholder="Filtrar por ID"
              value={filters.id}
              onChange={(e) => handleFilterChange("id", e.target.value)}
              size="sm"
              maxW="200px"
              bg="white"
              color="black"
            />
          </Box>

          <Box>
            <label>Nome: </label>
            <Input
              placeholder="Filtrar por Nome"
              value={filters.nomecliente}
              onChange={(e) =>
                handleFilterChange("nomecliente", e.target.value)
              }
              size="sm"
              maxW="200px"
              bg="white"
              color="black"
            />
          </Box>

          <Box display={"flex"} flexDir={"row"} alignItems={"center"}>
            <label>Status:</label>
            <SelectRoot
              bg={"white"}
              color={"black"}
              rounded={"md"}
              size={"sm"}
              w={"150px"}
              maxW={"200px"}
              collection={options}
            >
              <SelectTrigger>
                <SelectValueText placeholder="Status" />
              </SelectTrigger>
              <SelectContent bg={"white"} color={"black"}>
                {options.items.map((item) => (
                  <SelectItem
                    key={item.label}
                    item={item}
                    onClick={() => handleFilterChange("status", item.status)}
                  >
                    {item.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </SelectRoot>
          </Box>

          <Button
            onClick={applyFilters}
            colorScheme="green"
            size="sm"
            alignSelf="flex-end"
          >
            Aplicar Filtros
          </Button>
        </Flex>
      </Flex>

      {isMobile ? (
        <VStack w="full" align="stretch">
          <Flex w="full" justify="center" wrap="wrap" gap={4}>
            {paginatedData.map((user) => (
              <Box
                key={user.id}
                bg="white"
                p={4}
                borderRadius="lg"
                boxShadow="sm"
                color="black"
                transition="0.2s"
                _hover={{ bg: "green.100", transform: "scale(1.02)" }}
                w={{ base: "100%", sm: "100%", md: "320px" }}
                minW="280px"
                cursor="pointer"
              >
                <Flex direction="column" align="start" w="full">
                  <Text>
                    <b>ID:</b> {user.id}
                  </Text>
                  <Text>
                    <b>Nome:</b> {user.nomecliente}
                  </Text>
                  <Text>
                    <b>Valor:</b> {user.valor}
                  </Text>
                  <Text>
                    <b>Status:</b> {user.status ? "Pendente" : "Pago"}
                  </Text>
                  <Dialog itemCobranca={user} />
                </Flex>
              </Box>
            ))}
          </Flex>
        </VStack>
      ) : (
        <Table.Root
          variant="outline"
          size="sm"
          boxShadow="lg"
          rounded="lg"
          color="black"
        >
          <Table.Header py={4}>
            <Table.Row bg="green.600">
              <Table.ColumnHeader
                py="4"
                fontSize="lg"
                color="white"
                minW="50px"
                textAlign="center"
              >
                ID
              </Table.ColumnHeader>
              <Table.ColumnHeader
                py="4"
                fontSize="lg"
                color="white"
                minW="150px"
                textAlign="center"
              >
                Nome
              </Table.ColumnHeader>
              <Table.ColumnHeader
                py="4"
                fontSize="lg"
                color="white"
                minW="200px"
                textAlign="center"
              >
                Valor
              </Table.ColumnHeader>
              <Table.ColumnHeader
                py="4"
                fontSize="lg"
                color="white"
                minW="180px"
                textAlign="center"
              >
                Status
              </Table.ColumnHeader>
              <Table.ColumnHeader
                py="4"
                fontSize="lg"
                color="white"
                minW="180px"
                textAlign="center"
              >
                Funções
              </Table.ColumnHeader>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {paginatedData.map((user) => (
              <LinkBox
                as={Table.Row}
                key={user.id}
                _hover={{ bg: "green.100" }}
                fontWeight="bold"
                color="black"
              >
                <Table.Cell
                  fontSize={"sm"}
                  px={6}
                  py={3}
                  textAlign="center"
                  verticalAlign="middle"
                >
                  <LinkOverlay>{user.id}</LinkOverlay>
                </Table.Cell>
                <Table.Cell
                  fontSize={"sm"}
                  px={6}
                  py={3}
                  textAlign="center"
                  verticalAlign="middle"
                >
                  {user.nomecliente}
                </Table.Cell>
                <Table.Cell
                  fontSize={"sm"}
                  px={6}
                  py={3}
                  textAlign="center"
                  verticalAlign="middle"
                >
                  R$ {user.valor}
                </Table.Cell>
                <Table.Cell
                  fontSize={"sm"}
                  px={6}
                  py={3}
                  textAlign="center"
                  verticalAlign="middle"
                >
                  {user.status ? "Pendente" : "Pago"}
                </Table.Cell>
                <Table.Cell
                  fontSize={"sm"}
                  px={6}
                  py={3}
                  textAlign="center"
                  verticalAlign="middle"
                >
                  {user.status ? <Dialog itemCobranca={user} /> : null}
                </Table.Cell>
              </LinkBox>
            ))}
          </Table.Body>
        </Table.Root>
      )}

      <PaginationRoot
        count={filteredData.length}
        pageSize={pageSize}
        page={currentPage}
        onChange={(e) => {
          const page = Number((e.target as HTMLButtonElement).value);
          setCurrentPage(page);
        }}
      >
        <HStack wrap="wrap" justify="end">
          <PaginationPrevTrigger
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            _hover={{ bg: "green.600", color: "white" }}
            bg="green.400"
            color="white"
            px={4}
            py={2}
            borderRadius="md"
            boxShadow="sm"
          >
            Anterior
          </PaginationPrevTrigger>

          {Array.from({ length: totalPages }, (_, index) => (
            <PaginationItem
              key={index}
              value={index + 1}
              type="page"
              _hover={{
                bg: "green.400",
                color: "white"
              }}
              _active={{
                bg: "green.600",
                color: "white",
                fontWeight: "bold"
              }}
              bg={currentPage === index + 1 ? "green.700" : "green.400"}
              color="white"
              px={4}
              boxShadow="sm"
              py={2}
              borderRadius="md"
              onClick={() => setCurrentPage(index + 1)}
            >
              {index + 1}
            </PaginationItem>
          ))}

          <PaginationNextTrigger
            onClick={() =>
              setCurrentPage((prev) => Math.min(prev + 1, totalPages))
            }
            _hover={{ bg: "green.600", color: "white" }}
            bg="green.400"
            color="white"
            px={4}
            py={2}
            borderRadius="md"
            boxShadow="sm"
          >
            Próximo
          </PaginationNextTrigger>
        </HStack>
      </PaginationRoot>
    </Stack>
  );
}
