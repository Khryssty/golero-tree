import { Box } from "@chakra-ui/react";

export default function FamilyTooltip() {
  return (
    <Box
      id="FamilyTooltip"
      position="fixed"
      zIndex={99999}
      pointerEvents="none"
      px="10px"
      py="6px"
      bg="yellow.800"
      color="white"
      borderRadius="6px"
      fontSize="12px"
      shadow="md"
      visibility="hidden"
      transition="opacity 0.1s ease"
      opacity={0}
    ></Box>
  );
}
