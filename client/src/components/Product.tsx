import React from "react";
import { Product as ProductI } from "../types";
import { Tr, Td, HStack, Avatar, Text, Badge } from "@chakra-ui/react";
import { DeleteIcon, EditIcon, ViewIcon } from "@chakra-ui/icons";

export interface ProductProps {
  product: ProductI;
}

export const Product: React.FC<ProductProps> = ({ product }) => {
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
          />
          <DeleteIcon
            boxSize={22}
            color={"red"}
          />
          <ViewIcon
            boxSize={22}
            color={"green"}
          />
        </HStack>
      </Td>
    </Tr>
  );
};
