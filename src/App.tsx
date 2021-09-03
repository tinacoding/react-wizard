import { Flex } from "@chakra-ui/react";
import { useEffect, useState } from "react";

function Step1(): JSX.Element {
  return (
    <p>Step 1</p>
  );
};

function Step2(): JSX.Element {
  return (
    <p>Step 2</p>
  );
};

function App(): JSX.Element {
  const [currentStep, setCurrentStep] = useState(0);
  const steps = [Step1, Step2];
  const Content = steps[currentStep];
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (steps.length - 1 > 0) {
      const percentage = parseInt((currentStep / (steps.length - 1)).toPrecision(), 10) * 100;
      setProgress(percentage);
    }
  }, [currentStep, steps])

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
    <Flex direction="column">
      <section>
        <Content />
        Progress: {progress}%
      </section>
      <Flex direction="column" alignItems="center" justifyContent="center">
        {currentStep}
        <div>
          <button type="button" onClick={previous}>
            Back
          </button>
          <button type="button" onClick={next}>
            Next
          </button>
        </div>
      </Flex>
    </Flex>
  );
}

export default App;
