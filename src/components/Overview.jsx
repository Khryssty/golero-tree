import { Box, Heading, Text, List } from "@chakra-ui/react";

export default function Overview() {
  return (
    <Box
      bg="rgba(15, 23, 42, 0.7)"
      border="1px solid"
      borderColor="gray.700"
      rounded="2xl"
      p={{ base: 4, sm: 6 }}
      shadow="lg"
    >
      <Heading size="md" mb={2}>
        Family Overview
      </Heading>

      <Text fontSize="sm" color="gray.300" lineHeight="1.6">
        This demo shows a fictional Golero family:
      </Text>

      <List.Root
        mt={2}
        gap={1}
        fontSize="sm"
        color="gray.300"
        styleType="disc"
      >
        <List.Item>
          One father: <strong>John Golero</strong>
        </List.Item>
        <List.Item>
          First wife: <strong>Mary Golero</strong> — together they have{" "}
          <strong>7 children</strong> (5 sons, 2 daughters).
        </List.Item>
        <List.Item>
          Second wife: <strong>Laura Golero</strong> — together they have{" "}
          <strong>3 children</strong> (2 sons, 1 daughter).
        </List.Item>
      </List.Root>
    </Box>
  );
}
