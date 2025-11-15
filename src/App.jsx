import { useState } from "react";
import { Box, Flex, Grid, Heading, Text } from "@chakra-ui/react";

import AppHeader from "./components/AppHeader.jsx";
import TopPanel from "./components/TopPanel.jsx";
import FamilyTreeChart from "./components/FamilyTreeChart.jsx";
import Sidebar from "./components/Sidebar.jsx";
import AppFooter from "./components/AppFooter.jsx";

export default function App() {
  const [selectedPerson, setSelectedPerson] = useState(null);

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
        <TopPanel />

        {/* Tree + Sidebar Section */}
        <Box w="100%">
          <Grid
            templateColumns={{ base: "1fr", lg: "2fr 1fr" }}
            gap={4}
            height="calc(100vh - 250px)" 
            /* Full screen height minus header + top panels + footer */
          >
            {/* Chart Container */}
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
                Interactive Family Tree
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
                <FamilyTreeChart onSelectPerson={setSelectedPerson} />
              </Box>
            </Box>

            {/* Sidebar */}
            <Sidebar selectedPerson={selectedPerson} />
          </Grid>
        </Box>
      </Flex>

      <AppFooter />
    </Flex>
  );
}
