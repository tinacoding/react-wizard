import { Container, Grid, GridItem } from "@chakra-ui/react";

function WizardContent(): JSX.Element {
  return (
    <Container maxW="xl" padding="64">
      <Grid h="700px" w="100%" templateRows="repeat(6, 1fr)" templateColumns="repeat(12, 1fr)" gap={4}>
        <GridItem rowSpan={1} colSpan={12} bg="blue" />
        <GridItem rowSpan={4} colSpan={12} bg="papayawhip" />
        <GridItem rowSpan={1} colSpan={12} bg="olive" />
      </Grid>
    </Container>
  );
}

export default WizardContent;
