import { Box, Container, Heading, Text } from "@chakra-ui/react";

function WizardInstructions(): JSX.Element {
  return (
    <Container maxW="xl" padding="64">
      <Box padding="4" maxW="3xl">
        <Heading as="h1" size="4xl" marginBottom="12">
          Step Instructions
        </Heading>
        <Text fontSize="2xl" lineHeight="2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid saepe id veritatis eum placeat expedita
          quasi. Repellat at quaerat omnis ad explicabo non, tenetur provident corrupti nemo laboriosam. Voluptatum,
          dolorem.
        </Text>
      </Box>
    </Container>
  );
}

export default WizardInstructions;
