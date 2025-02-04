"use client";

import { useEffect, useState } from "react";
import {
  HStack,
  Stack,
  Table,
  PaginationItem,
  PaginationNextTrigger,
  PaginationPrevTrigger,
  PaginationRoot,
  Flex,
  Box,
  Input,
  Button,
  VStack,
  Text,
  useBreakpointValue,
  LinkBox,
  LinkOverlay,
} from "@chakra-ui/react";

interface Log {
  id: number;
  ip: string;
  accessed_at: string;
}

const LogsTable = () => {
  const [logs, setLogs] = useState<Log[]>([]);
  const [filteredData, setFilteredData] = useState<Log[]>([]);
  const [filters, setFilters] = useState({ id: "", ip: "" });

  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 10;

  const fetchData = async () => {
    try {
      const response = await fetch("/api/ip/logs", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error(`Erro na requisição: ${response.status} - ${response.statusText}`);
      }

      const data = await response.json();
      setLogs(data);
      setFilteredData(data);
    } catch (error) {
      console.error("Erro ao buscar logs:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const applyFilters = () => {
    const newFilteredData = logs.filter((log) => {
      return (
        (filters.id === "" || log.id.toString().includes(filters.id)) &&
        (filters.ip === "" || log.ip.includes(filters.ip))
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

  const handleFilterChange = (field: string, value: string) => {
    setFilters((prev) => ({ ...prev, [field]: value }));
  };

  const isMobile = useBreakpointValue({ base: true, md: false });

  return (
    <Stack width="full" gap="4" p={2} h="full" color="white">
      <Flex bg="green.600" p={4} borderRadius="lg" direction="column" gap={4} boxShadow="md">
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
            <label>IP: </label>
            <Input
              placeholder="Filtrar por IP"
              value={filters.ip}
              onChange={(e) => handleFilterChange("ip", e.target.value)}
              size="sm"
              maxW="200px"
              bg="white"
              color="black"
            />
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

      {logs.length === 0 ? (
        <Text textAlign="center" fontSize="lg" fontWeight="bold">
          Nenhum log encontrado
        </Text>
      ) : (
        <>
          {isMobile ? (
            <VStack>
              {paginatedData.map((log) => (
                <Box
                  key={log.id}
                  bg="white"
                  p={4}
                  borderRadius="lg"
                  boxShadow="sm"
                  w="full"
                  color="black"
                  _hover={{ bg: "green.100", cursor: "pointer" }}
                >
                  <Text>
                    <b>ID:</b> {log.id}
                  </Text>
                  <Text>
                    <b>IP:</b> {log.ip}
                  </Text>
                  <Text>
                    <b>Data de Acesso:</b> {new Date(log.accessed_at).toLocaleString()}
                  </Text>
                </Box>
              ))}
            </VStack>
          ) : (
            <Table.Root variant="outline" size="sm" boxShadow="lg" rounded="lg" color="black">
              <Table.Header py={4}>
                <Table.Row bg="green.600">
                  <Table.ColumnHeader py="5" fontSize="lg" color="white" textAlign="center">
                    ID
                  </Table.ColumnHeader>
                  <Table.ColumnHeader py="5" fontSize="lg" color="white" textAlign="center">
                    IP
                  </Table.ColumnHeader>
                  <Table.ColumnHeader py="5" fontSize="lg" color="white" textAlign="center">
                    Data de Acesso
                  </Table.ColumnHeader>
                </Table.Row>
              </Table.Header>
              <Table.Body>
                {paginatedData.map((log) => (
                  <Box as={Table.Row}
                    key={log.id}
                    _hover={{ bg: "green.100" }}
                    fontWeight="bold"
                    color="black"
                  >
                    <Table.Cell px={6} py={3} textAlign="center" verticalAlign="middle">
                     {log.id}
                    </Table.Cell>
                    <Table.Cell px={6} py={3} textAlign="center" verticalAlign="middle">
                      {log.ip}
                    </Table.Cell>
                    <Table.Cell px={6} py={3} textAlign="center" verticalAlign="middle">
                      {new Date(log.accessed_at).toLocaleString()}
                    </Table.Cell>
                  </Box>
                ))}
              </Table.Body>
            </Table.Root>
          )}

          <PaginationRoot
            pb="6"
            count={filteredData.length}
            pageSize={pageSize}
            page={currentPage}
            onChange={(e) => {
              const page = Number((e.target as HTMLButtonElement).value);
              setCurrentPage(page);
            }}
          >
            <HStack wrap="wrap" justify="end" mt={4}>
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
                    color: "white",
                  }}
                  _active={{
                    bg: "green.600",
                    color: "white",
                    fontWeight: "bold",
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
                onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
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
        </>
      )}
    </Stack>
  );
};

export default LogsTable;
