"use client";

import React, { useState } from "react";
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
} from "@chakra-ui/react";
import { ButtonPage } from "../page/button";
import { FiAlertTriangle } from "react-icons/fi";
import { AiOutlineStop } from "react-icons/ai";


const items = [
    { id: 1, nome: "João Silva", telefone: "(11) 99999-1111", cnpj: "12345678000111" },
    { id: 2, nome: "Maria Oliveira", telefone: "(21) 98888-2222", cnpj: "98765432000199" },
    { id: 3, nome: "Pedro Santos", telefone: "(31) 97777-3333", cnpj: "45612378000233" },
    { id: 4, nome: "Ana Paula", telefone: "(41) 96666-4444", cnpj: "78945612000344" },
    { id: 5, nome: "Lucas Lima", telefone: "(51) 95555-5555", cnpj: "15975348000455" },
    { id: 6, nome: "Carla Mendes", telefone: "(61) 94444-6666", cnpj: "75315926000566" },
    { id: 7, nome: "João Silva", telefone: "(11) 99999-1111", cnpj: "12345678000111" },
    { id: 8, nome: "Maria Oliveira", telefone: "(21) 98888-2222", cnpj: "98765432000199" },
    { id: 9, nome: "Pedro Santos", telefone: "(31) 97777-3333", cnpj: "45612378000233" },
    { id: 10, nome: "Ana Paula", telefone: "(41) 96666-4444", cnpj: "78945612000344" },
    { id: 11, nome: "Lucas Lima", telefone: "(51) 95555-5555", cnpj: "15975348000455" },
    { id: 12, nome: "Carla Mendes", telefone: "(61) 94444-6666", cnpj: "75315926000566" },
    { id: 13, nome: "João Silva", telefone: "(11) 99999-1111", cnpj: "12345678000111" },
    { id: 14, nome: "Maria Oliveira", telefone: "(21) 98888-2222", cnpj: "98765432000199" },
    { id: 15, nome: "Pedro Santos", telefone: "(31) 97777-3333", cnpj: "45612378000233" },
    { id: 16, nome: "Ana Paula", telefone: "(41) 96666-4444", cnpj: "78945612000344" },
    { id: 17, nome: "Lucas Lima", telefone: "(51) 95555-5555", cnpj: "15975348000455" },
    { id: 18, nome: "Carla Mendes", telefone: "(61) 94444-6666", cnpj: "75315926000566" },
];

const CustomTable = () => {

    const [filters, setFilters] = useState({ id: "", nome: "", cnpj: "" });

    const [filteredData, setFilteredData] = useState(items);

    const [currentPage, setCurrentPage] = useState(1);
    const pageSize = 25;

    const totalPages = Math.ceil(filteredData.length / pageSize);

    const paginatedData = filteredData.slice(
        (currentPage - 1) * pageSize,
        currentPage * pageSize
    );

    const handleFilterChange = (field: string, value: string) => {
        setFilters((prev) => ({ ...prev, [field]: value }));
    };


    const applyFilters = () => {
        const newFilteredData = items.filter((user) => {
            return (
                (filters.id === "" || user.id.toString().includes(filters.id)) &&
                (filters.nome === "" ||
                    user.nome.toLowerCase().includes(filters.nome.toLowerCase())) &&
                (filters.cnpj === "" || user.cnpj.includes(filters.cnpj))
            );
        });
        setFilteredData(newFilteredData);
        setCurrentPage(1);
    };

    return (
        <Stack width="full" gap="4" h="full" color="white" px="24" py="4">
            <Flex
                bg="green.600"
                p={4}
                borderRadius="lg"
                direction="column"
                gap={4}
                boxShadow="md"
            >

                <Flex wrap="wrap" gap={4} justify="space-around">
                    <Box>
                        <label>ID:  </label>
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
                        <label>Nome:  </label>
                        <Input
                            placeholder="Filtrar por Nome"
                            value={filters.nome}
                            onChange={(e) => handleFilterChange("nome", e.target.value)}
                            size="sm"
                            maxW="200px"
                            bg="white"
                            color="black"
                        />
                    </Box>

                    <Box>
                        <label>CNPJ:  </label>
                        <Input
                            placeholder="Filtrar por CNPJ"
                            value={filters.cnpj}
                            onChange={(e) => handleFilterChange("cnpj", e.target.value)}
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


            <Table.Root variant="outline" size="sm" boxShadow="lg" rounded="lg" color="black"  >
                <Table.Header py="8">
                    <Table.Row bg="green.600" >
                        <Table.ColumnHeader color="white">Id</Table.ColumnHeader>
                        <Table.ColumnHeader color="white">Nome</Table.ColumnHeader>
                        <Table.ColumnHeader color="white">Telefone</Table.ColumnHeader>
                        <Table.ColumnHeader color="white">CNPJ</Table.ColumnHeader>
                    </Table.Row>
                </Table.Header>
                <Table.Body>
                    {paginatedData.map((user) => (
                        <Table.Row
                            key={`${user.id}-${Math.random()}`}
                            _hover={{ bg: "green.100" }}
                            fontWeight="bold"
                            color="black"
                        >
                            <Table.Cell>{user.id}</Table.Cell>
                            <Table.Cell>
                                <ButtonPage
                                    variant="plain"
                                    color="black"
                                    _hover={{ color: "green.200" }}
                                >
                                    {user.nome}
                                </ButtonPage>
                            </Table.Cell>
                            <Table.Cell>{user.telefone}</Table.Cell>
                            <Table.Cell>
                                <HStack align="center">
                                    <Box>{user.cnpj}</Box>
                                    <HStack ml={12}>
                                        <ButtonPage color="red" p="2" variant="outline" colorPalette="blue" >
                                            <AiOutlineStop />
                                        </ButtonPage>


                                        <ButtonPage color="blue" p="2" variant="outline"  colorPalette="gray" >
                                            <FiAlertTriangle />
                                        </ButtonPage>
                                    </HStack>
                                </HStack>
                            </Table.Cell>
                        </Table.Row>
                    ))}
                </Table.Body>
            </Table.Root>

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
                <HStack wrap="wrap" justify="end" mt={4} >

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
        </Stack>
    );
};

export default CustomTable;
