import { Grid, GridItem } from "@chakra-ui/react";

function Wizard(): JSX.Element {
	return (
    <Grid h="100vh" templateColumns="repeat(9, 1fr)" gap={0}>
      <GridItem colSpan={4} bg="green" />
      <GridItem colSpan={5} bg="tomato" />
    </Grid>
  );
}

export default Wizard
