import { Flex, Text, Progress } from "@chakra-ui/react";
import { useContext, useEffect, useState } from "react";
import { WizardContext } from "src/context/WizardContext";

function WizardProgress(): JSX.Element {
  const { currentStep, totalSteps } = useContext(WizardContext);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (totalSteps > 0) {
      const percentage = parseFloat((currentStep / totalSteps).toPrecision()) * 100;
      setProgress(percentage);
    }
  }, [currentStep, totalSteps]);

  return <Progress value={progress} rounded="full" colorScheme="purple" />;
}

type StepTitleProps = { title: string };
function StepTitle({ title }: StepTitleProps): JSX.Element {
  const { currentStep, totalSteps } = useContext(WizardContext)
  return (
    <Flex justifyContent="space-between" alignItems="center" py="4">
      <Text fontSize="sm" casing="uppercase" fontWeight="semibold">
        {title}
      </Text>
      <Text fontSize="sm" casing="uppercase" fontWeight="semibold">
        Step {currentStep}/{totalSteps}
      </Text>
    </Flex>
  );
}

type WizardHeaderProps = { title: string };
function WizardHeader({ title }: WizardHeaderProps): JSX.Element {
  return (
    <div>
      <StepTitle title={title} />
      <WizardProgress />
    </div>
  );
}

export default WizardHeader;
