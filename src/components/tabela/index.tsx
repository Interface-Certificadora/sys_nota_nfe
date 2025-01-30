/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React, { useState, useEffect } from "react";
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
    Link,
} from "@chakra-ui/react";
import { ButtonPage } from "../page/button";
import { FiAlertTriangle } from "react-icons/fi";
import { AiOutlineStop } from "react-icons/ai";
// import { useRouter } from "next/navigation";


const CustomTable = () => {
    // const router = useRouter();
    const [items, setItems] = useState<any[]>([]);
    const [filteredData, setFilteredData] = useState<any[]>([]);
    const [filters, setFilters] = useState({ id: "", nome: "", cnpj: "", rs: "" });


    const [currentPage, setCurrentPage] = useState(1);
    const pageSize = 25;

    const fetchData = async () => {
        try {

            const response = await fetch(`/api/cliente/getall`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                },
            });
            if (!response.ok) {
                throw new Error(`Erro na requisição: ${response.status} - ${response.statusText}`);
            }

            const data = await response.json();

            const transformedData = data.map((item: any) => ({
                id: item.id,
                nome: item.cliente,
                rs: item.razaoSocial,
                telefone: item.telefone,
                cnpj: item.cnpj,
            }));

            setItems(transformedData);
            setFilteredData(transformedData);
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
                (filters.nome === "" || user.nome?.toLowerCase().includes(filters.nome.toLowerCase())) &&
                (filters.cnpj === "" || user.cnpj?.includes(filters.cnpj)) &&
                (filters.rs === "" || user.rs?.toLowerCase().includes(filters.rs.toLowerCase()))
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
        <Stack width="full" gap="4" h="full" color="white">

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
                        <label>Razão Social:  </label>
                        <Input
                            placeholder="Razão Social"
                            value={filters.rs}
                            onChange={(e) => handleFilterChange("rs", e.target.value)}
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


            {isMobile ? (
                <VStack>
                    {paginatedData.map((user) => (
                        <Box
                            key={user.id}
                            bg="white"
                            p={4}
                            borderRadius="lg"
                            boxShadow="sm"
                            w="full"
                            color="black"
                            _hover={{ bg: "green.100", cursor: "pointer" }}
                            onClick={() => console.log(`Card clicado: ${user.nome}`)}
                        >
                            <ButtonPage w="full" h="full" textAlign="left" variant="plain">
                                <Text>
                                    <b>ID:</b> {user.id}
                                </Text>
                                <Text>
                                    <b>Nome:</b> {user.nome}
                                </Text>
                                <Text>
                                    <b>Razão Social:</b> {user.rs}
                                </Text>
                                <Text>
                                    <b>Telefone:</b> {user.telefone}
                                </Text>
                                <Text>
                                    <b>CNPJ:</b> {user.cnpj}
                                </Text>
                            </ButtonPage>
                        </Box>
                    ))}
                </VStack>
            ) : (
                <Table.Root variant="outline" size="sm" boxShadow="lg" rounded="lg" color="black">
                    <Table.Header py="8">
                        <Table.Row bg="green.600">
                            <Table.ColumnHeader color="white">Id</Table.ColumnHeader>
                            <Table.ColumnHeader color="white">Nome</Table.ColumnHeader>
                            <Table.ColumnHeader color="white">Razão Social</Table.ColumnHeader>
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
                                    <Link color="black" _hover={{ color: "green.400" }} href={`/cliente/${user.id}`}>{user.nome}</Link>
                                    {/* <ButtonPage
                                        variant="plain"
                                        color="black"
                                        _hover={{ color: "green.200" }}
                                        onClick={() => router.push(`/cliente/${user.id}`)}
                                    >
                                        {user.nome}
                                    </ButtonPage> */}
                                </Table.Cell>
                                <Table.Cell>{user.rs}</Table.Cell>
                                <Table.Cell>{user.telefone}</Table.Cell>
                                <Table.Cell>
                                    <HStack align="center">
                                        <Box>{user.cnpj}</Box>
                                        <HStack ml={12}>
                                            <ButtonPage color="red" p="2" variant="outline" colorPalette="blue" >
                                                <AiOutlineStop />
                                            </ButtonPage>
                                            <ButtonPage color="blue" p="2" variant="outline" colorPalette="gray" >
                                                <FiAlertTriangle />
                                            </ButtonPage>
                                        </HStack>
                                    </HStack>
                                </Table.Cell>
                            </Table.Row>
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
        </Stack>
    );
};

export default CustomTable;
