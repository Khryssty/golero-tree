import { Box, Flex, Heading, Text, Badge } from "@chakra-ui/react";

export default function AppHeader() {
  return (
    <Box
      as="header"
      borderBottom="1px solid"
      borderColor="gray.700"
      bg="rgba(17, 24, 39, 0.6)" // slate-900/60 equivalent
      backdropFilter="blur(8px)"
      w="100%"
    >
      <Flex
        px={4}
        py={4}
        direction={{ base: "column", sm: "row" }}
        align={{ sm: "center" }}
        justify="space-between"
        gap={3}
        w="100%"
      >
        <Box>
          <Heading
            size="lg"
            fontWeight="semibold"
            letterSpacing="-0.5px"
          >
            The Golero Family Tree
          </Heading>

          <Text mt={1} fontSize="sm" color="gray.300">
            Two generations, multiple spouses, and 10 children — visualized with
            React and Family Chart.
          </Text>
        </Box>

        <Badge
          fontSize="0.65rem"
          textTransform="uppercase"
          letterSpacing="wide"
          colorScheme="gray"
          px={3}
          py={1}
          borderRadius="full"
          border="1px solid"
          borderColor="gray.600"
          bg="gray.800"
        >
          About
        </Badge>
      </Flex>
    </Box>
  );
}
