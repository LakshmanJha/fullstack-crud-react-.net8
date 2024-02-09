import { AddIcon } from "@chakra-ui/icons";
import {
  TableContainer,
  Table,
  Thead,
  Tr,
  Th,
  Tbody,
  Box,
  Flex,
  Heading,
  Button,
} from "@chakra-ui/react";
import React from "react";
import { useFetchProducts } from "../hooks";
import { Product } from "./Product";
import { Information } from "./Information";
import { ProductSkeleton } from "./ProductSkeleton";

export interface ProductsProps {}

export const Products: React.FC<ProductsProps> = ({}) => {
  const { products, isLoading, error } = useFetchProducts();

  if (isLoading) return <ProductSkeleton />;

  if (error) return <Information message={error} />;

  return (
    <Box
      shadow={"md"}
      rounded={"md"}
      m={32}
    >
      <Flex
        px="5"
        mb={5}
        justifyContent={"space-between"}
        alignItems={"center"}
      >
        <Heading fontSize="20">Products</Heading>
        <Button
          colorScheme="blue"
          leftIcon={<AddIcon />}
        >
          Add Product
        </Button>
      </Flex>
      <TableContainer>
        <Table variant="striped">
          <Thead>
            <Tr>
              <Th>ID</Th>
              <Th>Name</Th>
              <Th>Description</Th>
              <Th>Is In Store?</Th>
              <Th isNumeric>Price</Th>
              <Th>Actions</Th>
            </Tr>
          </Thead>
          <Tbody>
            {products.map((product) => (
              <Product
                key={product.id}
                product={product}
              />
            ))}
          </Tbody>
        </Table>
      </TableContainer>
      {!isLoading && !error && products.length === 0 && (
        <Information message={"No products available"} />
      )}
    </Box>
  );
};
