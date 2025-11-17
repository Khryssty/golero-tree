import React, { useRef, useEffect, useState } from "react";
import { Box, Flex } from "@chakra-ui/react";
import FamilyChart from "./FamilyChart";
import SearchBox from "./SearchBox";
import RandomPersonButton from "./RandomPersonButton";
import FamilyTooltip from "./FamilyTooltip";
import familyData from "../data/familyData.json";

export default function FamilyTree() {
  const chartRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 550);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <Box
      width="100%"
      height="900px"
      bg="gray.800"
      position="relative"
      overflow="visible"
    >
      {/* Actual f3 mount point */}
      <Box
        id="FamilyChart"
        ref={chartRef}
        className="f3" // IMPORTANT for FamilyChart CSS
        width="100%"
        height="100%"
        position="absolute"
        top="0"
        left="0"
        zIndex={1}
        pointerEvents={"none"}
        bg="blackAlpha.600" // Make it obvious if it's rendering
      />

      {/* Controls overlay */}
      <Flex
        position="absolute"
        // bottom={isMobile ? "20px" : "auto"}
        top={isMobile ? "auto" : "20px"}
        left="50%"
        transform="translateX(-50%)"
        direction={isMobile ? "column" : "row"}
        gap="10px"
        zIndex={2}
        //     pointerEvents="none"
      >
        <SearchBox
          data={familyData}
          chartRef={chartRef}
          isMobile={isMobile}
          //    pointerEvents="auto"
        />
        <RandomPersonButton
          data={familyData}
          chartRef={chartRef}
          isMobile={isMobile}
          //    pointerEvents="auto"
        />
      </Flex>
      <FamilyTooltip />
      <FamilyChart data={familyData} chartRef={chartRef} />
    </Box>
  );
}
