import { Container, Grid, GridItem } from "@chakra-ui/react";
import WizardHeader from "src/components/Wizard/WizardContent/WizardHeader";

type WizardContentProps = { children: React.ReactNode, title: string, currentStep: number, totalSteps: number };
function WizardContent({ children, title, currentStep, totalSteps }: WizardContentProps): JSX.Element {
  return (
    <Container maxW="xl" paddingX="8" paddingY="12">
      <Grid h="700px" w="100%" templateRows="repeat(6, 1fr)" templateColumns="repeat(12, 1fr)" gap={4}>
        <GridItem rowSpan={1} colSpan={12}>
          <WizardHeader currentStep={currentStep} title={title} totalSteps={totalSteps} />
        </GridItem>
        <GridItem rowSpan={4} colSpan={12} bg="papayawhip">
          {children}
        </GridItem>
        <GridItem rowSpan={1} colSpan={12} bg="olive" />
      </Grid>
    </Container>
  );
}

export default WizardContent;