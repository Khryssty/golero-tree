import { Box, Flex, Text, Heading } from "@chakra-ui/react";

export default function Legend() {
  return (
    <Box
      bg="rgba(15, 23, 42, 0.7)" // slate-900/70
      border="1px solid"
      borderColor="gray.700"
      rounded="2xl"
      p={3}
      fontSize="xs"
      color="gray.200"
      display="flex"
      flexWrap="wrap"
      alignItems="center"
      gap={4}
    >
      <Heading size="xs" fontWeight="semibold" marginRight={2}>
        Legend
      </Heading>

      {/* Male */}
      <Flex align="center" gap={2}>
        <Box w="12px" h="12px" rounded="full" bg="blue.400" />
        <Text>Male</Text>
      </Flex>

      {/* Female */}
      <Flex align="center" gap={2}>
        <Box w="12px" h="12px" rounded="full" bg="pink.300" />
        <Text>Female</Text>
      </Flex>

      {/* First Marriage */}
      <Flex align="center" gap={2}>
        <Box
          w="16px"
          h="12px"
          borderBottom="2px solid"
          borderColor="green.300"
        />
        <Text>Child from First Marriage</Text>
      </Flex>

      {/* Second Marriage */}
      <Flex align="center" gap={2}>
        <Box
          w="16px"
          h="12px"
          borderBottom="2px solid"
          borderColor="purple.300"
        />
        <Text>Child from Second Marriage</Text>
      </Flex>
    </Box>
  );
}
