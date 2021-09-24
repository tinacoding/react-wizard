import { Container, Grid, GridItem } from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import WizardBody from "src/components/Wizard/WizardContent/WizardBody";
import WizardFooter from "src/components/Wizard/WizardContent/WizardFooter";
import WizardHeader from "src/components/Wizard/WizardContent/WizardHeader";
import { WizardFormProvider } from "src/context/WizardFormContext";

type WizardContentProps = {
  title: string;
};

function WizardContent({ title }: WizardContentProps): JSX.Element {
  const form = useForm();
  return (
    <Container maxW="xl" paddingX="8" paddingY="12" color="blackAlpha.800">
      <Grid h="700px" w="100%" templateRows="repeat(6, 1fr)" templateColumns="repeat(12, 1fr)" gap={2}>
        <GridItem rowSpan={1} colSpan={12}>
          <WizardHeader title={title} />
        </GridItem>
        <WizardFormProvider form={form}>
          <GridItem rowSpan={4} colSpan={12} padding="8">
            <WizardBody />
          </GridItem>
          <GridItem rowSpan={1} colSpan={12} paddingY="2">
            <WizardFooter />
          </GridItem>
        </WizardFormProvider>
      </Grid>
    </Container>
  );
}

export default WizardContent;
