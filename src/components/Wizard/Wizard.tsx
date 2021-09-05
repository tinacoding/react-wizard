import { Container, Grid, GridItem } from "@chakra-ui/react";
import { useState } from "react";
import WizardContent from "src/components/Wizard/WizardContent/WizardContent";
import WizardInstructions from "src/components/Wizard/WizardInstructions";

function Step1(): JSX.Element {
  return <p>Step 1</p>;
}

function Step2(): JSX.Element {
  return <p>Step 2</p>;
}

function Wizard(): JSX.Element {
  const [currentStep, setCurrentStep] = useState(0);
  const steps = [Step1, Step2];
  const Content = steps[currentStep];

  const previous = () => {
    if (currentStep > 0) {
      setCurrentStep((prev) => prev - 1);
    }
  };

  const next = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep((prev) => prev + 1);
    }
  };
  return (
    <Container paddingY="4" maxW="container.xl" h="100vh" overflowY="hidden">
      <Grid templateColumns="repeat(9, 1fr)" gap={0}>
        <GridItem colSpan={4} bg="purple.800" borderLeftRadius="lg">
          <WizardInstructions />
        </GridItem>
        <GridItem colSpan={5} bg="gray.100" borderRightRadius="lg">
          <WizardContent
            next={next}
            previous={previous}
            currentStep={currentStep}
            totalSteps={steps.length - 1}
            title="Create Something"
          >
            <Content />
          </WizardContent>
        </GridItem>
      </Grid>
    </Container>
  );
}

export default Wizard;
