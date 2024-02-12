import {
  Button,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  Text,
  DrawerFooter,
  HStack,
  Avatar,
  Heading,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import { Product } from "../types";

interface ViewDetailsProps {
  isOpen: boolean;
  product: Product;
  onClose: () => void;
}

export const ViewDetails: React.FC<ViewDetailsProps> = ({
  isOpen,
  onClose,
  product,
}) => {
  return (
    <>
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>View Detail {product.name}</DrawerHeader>

          <DrawerBody>
            <HStack>
              <Avatar
                name={product.name}
                size={"sm"}
              />
              <VStack alignItems={"self-start"}>
                <Heading fontSize={16}>{product.name}</Heading>
                <Heading fontSize={20}>${product.price}</Heading>
                <Text>{product.description}</Text>
              </VStack>
            </HStack>
          </DrawerBody>

          {/* <DrawerFooter>
            <Button
              variant="outline"
              mr={3}
              onClick={onClose}
            >
              Cancel
            </Button>
            <Button colorScheme="blue">Save</Button>
          </DrawerFooter> */}
        </DrawerContent>
      </Drawer>
    </>
  );
};
