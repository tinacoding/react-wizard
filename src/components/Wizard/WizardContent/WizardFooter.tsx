import { Button, Flex } from "@chakra-ui/react";

type Props = { previous: () => void, next: () => void };
function WizardFooter({ previous, next }: Props): JSX.Element{
	return (
    <Flex alignItems="center" justifyContent="space-between">
      <Button isFullWidth marginRight="12"  colorScheme="gray" variant="solid" onClick={previous}>
        Back
      </Button>
      <Button isFullWidth colorScheme="teal" variant="solid" onClick={next}>
        Next
      </Button>
    </Flex>
  );
}

export default WizardFooter
