import { Box, Flex, Text } from "@chakra-ui/react";

export default function AppFooter() {
  return (
    <Box
      as="footer"
      borderTop="1px solid"
      borderColor="gray.700"
      bg="gray.900"
      py={3}
      px={4}
    >
      <Flex
        direction={{ base: "column", sm: "row" }}
        align={{ sm: "center" }}
        justify="space-between"
        gap={2}
        fontSize="xs"
        color="gray.400"
        w="100%"
      >
        <Text>Built with React, JSX &amp; family-chart.</Text>
        <Text>Styling powered by Chakra UI.</Text>
      </Flex>
    </Box>
  );
}
