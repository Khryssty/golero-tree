import { Button } from "@chakra-ui/react";

export default function RandomPersonButton({ data, chartRef, isMobile }) {
  const handleClick = () => {
    const chart = chartRef.current?.f3Chart;
    if (!chart) {
     // console.warn("RandomPersonButton: chart not ready yet");
      return;
    }

    const random = data[Math.floor(Math.random() * data.length)];
    chart.updateMainId(random.id);
    chart.updateTree({ initial: false });
  };

  return (
    <Button
        bg="green.400"
      colorScheme="blue"
      color={"black"}
      width={isMobile ? "80vw" : "auto"}
      onClick={handleClick}
    >
      Click to Show Random Person
    </Button>
  );
}
