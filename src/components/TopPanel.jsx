import { Grid } from "@chakra-ui/react";
import Overview from "./Overview.jsx";
import Legend from "./Legend.jsx";

export default function TopPanel() {
  return (
    <Grid
      w="100%"
      templateColumns={{ base: "1fr", md: "1fr 1fr" }}
      gap={4}
    >
      <Overview />
      <Legend />
    </Grid>
  );
}
