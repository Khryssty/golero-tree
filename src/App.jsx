import { Box, Flex, Heading, Text } from "@chakra-ui/react";

import AppHeader from "./components/AppHeader.jsx";
import Legend from "./components/Legend.jsx";
import FamilyTree from "./components/FamilyTree.jsx";
import AppFooter from "./components/AppFooter.jsx";

export default function App() {
  return (
    <Flex
      direction="column"
      bg="gray.900"
      color="gray.100"
      minH="100vh"
      w="100vw"
    >
      <AppHeader />

      {/* MAIN CONTENT AREA */}
      <Flex
        as="main"
        direction="column"
        flex="1"
        w="100%"
        px={4}
        py={4}
        gap={4}
        overflow="hidden"
      >
        {/* Top Overview + Legend Row */}
        {/* <TopPanel /> */}

        {/* Tree + Sidebar Section */}
        <Box w="100%">
          <Box
            bg="rgba(15, 23, 42, 0.7)"
            border="1px solid"
            borderColor="gray.700"
            rounded="2xl"
            p={{ base: 2, sm: 4 }}
            shadow="lg"
            overflow="hidden"
          >
            <Heading size="md" mb={2}>
              <Flex align="center" justify="space-between" mb={2}>
                <Heading size="md">Interactive Family Tree</Heading>
                <Legend />
              </Flex>
            </Heading>

            <Text fontSize="xs" color="gray.400" mb={2}>
              Pan and zoom inside the tree. Click a person to inspect details.
            </Text>

            {/* CHART FILLS ENTIRE REMAINING HEIGHT */}
            <Box
              flex="1"
              h="100%"
              border="1px solid"
              borderColor="gray.700"
              rounded="xl"
              overflow="hidden"
              bg="gray.900"
            >
              <FamilyTree />
            </Box>
          </Box>
        </Box>
      </Flex>

      <AppFooter />
    </Flex>
  );
}
