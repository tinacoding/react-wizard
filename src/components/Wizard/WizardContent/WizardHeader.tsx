import { Flex, Text, Progress } from "@chakra-ui/react";
import { useEffect, useState } from "react";

type ProgressProps = { currentStep: number, totalSteps: number };
function WizardProgress({ currentStep, totalSteps }: ProgressProps): JSX.Element {
	const [progress, setProgress] = useState(0);

  useEffect(() => {
		if (totalSteps > 0) {
			const percentage = parseInt((currentStep / (totalSteps)).toPrecision(), 10) * 100;
      setProgress(percentage);
    }
  }, [currentStep, totalSteps]);

	return (
      <Progress value={progress} rounded="full" />
  );
	}

type StepTitleProps = { title: string, currentStep: number, totalSteps: number };
function StepTitle({ title, currentStep, totalSteps }: StepTitleProps): JSX.Element {
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

type WizardHeaderProps = { title: string; currentStep: number; totalSteps: number };
function WizardHeader({ currentStep, totalSteps, title }: WizardHeaderProps): JSX.Element {
  return (
    <div>
      <StepTitle currentStep={currentStep} totalSteps={totalSteps} title={title} />
      <WizardProgress currentStep={currentStep} totalSteps={totalSteps} />
    </div>
  );
}



export default WizardHeader
