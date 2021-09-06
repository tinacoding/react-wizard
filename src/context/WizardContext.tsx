import { createContext, useCallback, useState } from "react";

type SideEffect = () => void;

const initialState = {
  currentStep: 0,
  totalSteps: 0,
  previous: (() => null) as SideEffect,
  next: (() => null) as SideEffect,
};

export const WizardContext = createContext(initialState);

type WizardProviderProps = { children: React.ReactNode; steps: JSX.Element[] };

export function WizardProvider({ children, steps }: WizardProviderProps): JSX.Element {
  const [currentStep, setCurrentStep] = useState(0);

  const previous = useCallback(() => {
    if (currentStep > 0) {
      setCurrentStep((prev) => prev - 1);
    }
  }, [currentStep]);

  const next = useCallback(() => {
    if (currentStep < steps.length - 1) {
      setCurrentStep((prev) => prev + 1);
    }
  }, [currentStep, steps]);

  return (
    <WizardContext.Provider value={{ currentStep, totalSteps: steps.length, previous, next }}>
      {children}
    </WizardContext.Provider>
  );
}
