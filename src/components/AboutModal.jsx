import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
} from "@chakra-ui/modal";

import { Text } from "@chakra-ui/react";

export default function AboutModal({ isOpen, onClose }) {
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      isCentered
      motionPreset="scale"
      trapFocus={false}
      blockScrollOnMount={false}
    >
      <ModalOverlay />

      <ModalContent
        bg="gray.900"
        border="1px solid"
        borderColor="gray.700"
        color="white"
        rounded="xl"
        p={4}
        maxW="35vw"
        minW="500px"
        maxH="80vh"
        // FORCE true centering even if outer layout breaks Chakra behavior
        margin="auto"
        position="absolute"
        top="30%"
        left="30%"
        transform="translate(-50%, -50%)"
      >
        <ModalHeader fontSize="lg">The Golero Family</ModalHeader>
        <ModalCloseButton />

        <ModalBody>
          <Text color="gray.300" fontSize="md" lineHeight="1.6">
            The Golero family spans two generations, beginning with John Golero
            and his partners Mary and Laura. Together they raised ten children
            across two branches of the family. This project visualizes the full
            family lineage, marriages, and relationships using an interactive
            tree built with React, Chakra UI, and Family Chart.
          </Text>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}
