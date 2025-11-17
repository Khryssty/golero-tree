import { Box, Input, VStack, Text } from "@chakra-ui/react";
import React, { useState, useMemo } from "react";

export default function SearchBox({ data, chartRef, isMobile }) {
  const [query, setQuery] = useState("");
  const [show, setShow] = useState(false);

  const options = useMemo(
    () =>
      data.map((d) => ({
        label: `${d.data.firstName} ${d.data.lastName}`,
        value: d.id,
      })),
    [data]
  );

  const filtered = options.filter((o) =>
    o.label.toLowerCase().includes(query.toLowerCase())
  );

const handleSelect = (id) => {
  const chart = chartRef.current?.f3Chart;
  if (!chart) {
   // console.warn("SearchBox: chart not ready yet");
    return;
  }
  chart.updateMainId(id);
  chart.updateTree({ initial: true });
  setShow(false);
};


  return (
    <Box width={isMobile ? "80vw" : "230px"} position="relative">
      <Input
        placeholder="Search..."
        value={query}
        bg="white"
        fontSize="sm"
        color={"black"}
        onFocus={() => setShow(true)}
        onChange={(e) => setQuery(e.target.value)}
      />

      {show && filtered.length > 0 && (
        <VStack
          align="stretch"
          spacing={0}
          bg="white"
          position="absolute"
          width="100%"
          maxH="40vh"
          overflow="auto"
          mt={2}
          borderRadius="md"
          boxShadow="md"
          border="1px solid #e2e8f0"
          zIndex={1500}
        >
          {filtered.map((item) => (
            <Box
              key={item.value}
              px={3}
              py={2}
              _hover={{ bg: "gray.100" }}
              cursor="pointer"
              onClick={() => handleSelect(item.value)}
            >
              <Text fontSize="sm"
              color={"black"}   
              >{item.label}</Text>
            </Box>
          ))}
        </VStack>
      )}
    </Box>
  );
}
