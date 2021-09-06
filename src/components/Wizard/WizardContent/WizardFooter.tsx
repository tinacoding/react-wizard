import { Button, Flex } from "@chakra-ui/react";
import { useContext } from "react";
import { WizardContext } from "src/context/WizardContext";

function WizardFooter(): JSX.Element {
  const { previous, next } = useContext(WizardContext);
  return (
    <Flex alignItems="center" justifyContent="space-between">
      <Button isFullWidth marginRight="12" colorScheme="gray" shadow="md" variant="solid" onClick={previous}>
        Back
      </Button>
      <Button isFullWidth colorScheme="purple" variant="solid" shadow="md" onClick={next}>
        Next
      </Button>
    </Flex>
  );
}

export default WizardFooter;
