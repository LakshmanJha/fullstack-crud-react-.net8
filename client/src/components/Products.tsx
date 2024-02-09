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
  useDisclosure,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { useFetchProducts } from "../hooks";
import { Product } from "./Product";
import { Information } from "./Information";
import { ProductSkeleton } from "./ProductSkeleton";
import { ProductForm } from "./ProductForm";
import { Product as ProductI } from "../types";

export interface ProductsProps {}

export const Products: React.FC<ProductsProps> = ({}) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { products, isLoading, error, fetchProducts } = useFetchProducts();
  const [selectProduct, setSelectProduct] = useState<ProductI | null>(null);

  if (isLoading) return <ProductSkeleton />;

  if (error) return <Information message={error} />;

  const handleSelectProduct = (id: number) => {
    const currentProduct =
      products.find((product) => product.id === id) || null;
    setSelectProduct(currentProduct);
    onOpen();
  };

  const handleOnCLose = () => {
    setSelectProduct(null);
    onClose();
  };

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
          onClick={onOpen}
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
                onSelectProduct={handleSelectProduct}
              />
            ))}
          </Tbody>
        </Table>
      </TableContainer>
      {!isLoading && !error && products.length === 0 && (
        <Information message={"No products available"} />
      )}
      {isOpen && (
        <ProductForm
          isOpen={isOpen}
          onClose={handleOnCLose}
          fetchProducts={fetchProducts}
          updateProduct={selectProduct}
        />
      )}
    </Box>
  );
};
