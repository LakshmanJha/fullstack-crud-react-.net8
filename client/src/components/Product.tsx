import React from "react";
import { Product as ProductI } from "../types";
import { Tr, Td, HStack, Avatar, Text, Badge } from "@chakra-ui/react";
import { DeleteIcon, EditIcon, ViewIcon } from "@chakra-ui/icons";

export interface ProductProps {
  product: ProductI;
  onSelectProduct: (id: number) => void;
}

export const Product: React.FC<ProductProps> = ({
  product,
  onSelectProduct,
}) => {
  return (
    <Tr>
      <Td>{product.id}</Td>
      <Td>
        <HStack>
          <Avatar
            name={product.name}
            size="sm"
          />
          <Text>{product.name}</Text>
        </HStack>
      </Td>
      <Td>{product.description}</Td>
      <Td>
        <Badge>{product.isInStore ? "Yes" : "No"}</Badge>
      </Td>
      <Td isNumeric>{product.price}</Td>
      <Td>
        <HStack>
          <EditIcon
            boxSize={22}
            color={"blue"}
            cursor={"pointer"}
            onClick={() => onSelectProduct(product.id)}
          />
          <DeleteIcon
            boxSize={22}
            color={"red"}
            cursor={"pointer"}
          />
          <ViewIcon
            boxSize={22}
            color={"green"}
            cursor={"pointer"}
          />
        </HStack>
      </Td>
    </Tr>
  );
};
