import { Container, Grid, GridItem } from "@chakra-ui/react";
import WizardFooter from "src/components/Wizard/WizardContent/WizardFooter";
import WizardHeader from "src/components/Wizard/WizardContent/WizardHeader";

type WizardContentProps = {
  children: React.ReactNode;
  title: string;
  currentStep: number;
  totalSteps: number;
  previous: () => void;
  next: () => void;
};

function WizardContent({ children, title, currentStep, totalSteps, previous, next }: WizardContentProps): JSX.Element {
  return (
    <Container maxW="xl" paddingX="8" paddingY="12">
      <Grid h="700px" w="100%" templateRows="repeat(6, 1fr)" templateColumns="repeat(12, 1fr)" gap={2}>
        <GridItem rowSpan={1} colSpan={12}>
          <WizardHeader currentStep={currentStep} title={title} totalSteps={totalSteps} />
        </GridItem>
        <GridItem rowSpan={4} colSpan={12} bg="papayawhip">
          {children}
        </GridItem>
        <GridItem rowSpan={1} colSpan={12} paddingY="2">
          <WizardFooter previous={previous} next={next} />
        </GridItem>
      </Grid>
    </Container>
  );
}

export default WizardContent;
