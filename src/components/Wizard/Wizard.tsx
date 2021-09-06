import { Container, Grid, GridItem } from "@chakra-ui/react";
import { Step1, Step2 } from "src/components/Wizard/steps";
import WizardContent from "src/components/Wizard/WizardContent/WizardContent";
import WizardInstructions from "src/components/Wizard/WizardInstructions";
import { WizardProvider } from "src/context/WizardContext";

function Wizard(): JSX.Element {
  const steps = [Step1, Step2];

  return (
    <Container paddingY="4" maxW="container.xl" h="100vh" overflowY="hidden">
      <Grid templateColumns="repeat(9, 1fr)" gap={0}>
        <GridItem colSpan={4} bg="purple.800" borderLeftRadius="lg">
          <WizardInstructions />
        </GridItem>
        <GridItem colSpan={5} bg="gray.100" borderRightRadius="lg">
          <WizardProvider steps={steps}>
            <WizardContent title="Create Something" />
          </WizardProvider>
        </GridItem>
      </Grid>
    </Container>
  );
}

export default Wizard;
