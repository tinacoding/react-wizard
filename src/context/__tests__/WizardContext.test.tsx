/* eslint-disable react/jsx-props-no-spreading */
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import WizardConsumer from "src/context/helpers/WizardConsumer";
import { WizardContext } from "src/context/WizardContext";

const Step1 = () => <p>Step 1</p>
const Step2 = () => <p>Step 2</p>

test("WizardConsumer shows default value", () => {
	render(<WizardConsumer />);

  expect(screen.getByText(/^Current step:/)).toHaveTextContent("0");
  expect(screen.getByText(/^Total steps:/)).toHaveTextContent("0");
});

type ProviderProps = {
	value: {
		currentStep: number;
		steps: (() => JSX.Element)[];
		totalSteps: number;
		previous: () => void;
		next: () => void;
	}
};

type CustomRenderOptions = {
	providerProps: ProviderProps,
	[x: string]: unknown
}

const customRender = (ui: JSX.Element, { providerProps, ...renderOptions }: CustomRenderOptions) => render(<WizardContext.Provider {...providerProps}>{ui}</WizardContext.Provider>, renderOptions);

test("WizardConsumer shows value from provider", () => {
	const steps = [Step1, Step2]
  const providerProps = {
    value: {
      currentStep: 1,
      steps,
      totalSteps: steps.length - 1,
      previous: (() => null),
      next: (() => null),
    },
  };
  customRender(<WizardConsumer />, { providerProps });
	expect(screen.getByText(/^Current step:/)).toHaveTextContent("1");
  expect(screen.getByText(/^Total steps:/)).toHaveTextContent("1");
  expect(screen.getByText(/^Step 1/)).toBeInTheDocument();
  expect(screen.getByText(/^Step 2/)).toBeInTheDocument();
});

test("WizardProvider shows full name", () => {
	const providerProps = {
		value: {
			first: "Jack",
			last: "Dawson",
		}
  };
	customRender(<WizardContext.Consumer>{({ first, last }) => <span>Received: {first} {last}</span>}</WizardContext.Consumer>, {
    providerProps,
  });
  expect(screen.getByText(/^Received:/).textContent).toBe("Received: Jack Dawson");
});