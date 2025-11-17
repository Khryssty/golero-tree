import { Box, Text } from "@chakra-ui/react";

export default function PersonHoverCard({ person, x, y }) {
  if (!person) return null;

  return (
    <Box
      position="absolute"
      top={y}
      left={x}
      bg="gray.700"
      color="white"
      p="10px"
      borderRadius="8px"
      boxShadow="lg"
      zIndex={9999}
      pointerEvents="none"
      minW="200px"
    >
      <Text fontWeight="bold" fontSize="lg">
        {person.firstName} {person.lastName}
      </Text>

      {person.birthday && (
        <Text fontSize="sm">Born: {person.birthday}</Text>
      )}

      {person.gender && (
        <Text fontSize="sm">Gender: {person.gender}</Text>
      )}

      {person.description && (
        <Text fontSize="sm" mt="5px">
          {person.description}
        </Text>
      )}
    </Box>
  );
}
