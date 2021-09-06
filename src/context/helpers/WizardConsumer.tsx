import { useContext } from "react";
import { WizardContext } from "src/context/WizardContext";

function WizardConsumer(): JSX.Element {
	const { currentStep, steps, totalSteps, previous, next } = useContext(WizardContext);
	return (
		<>
			<p>Current step: {currentStep}</p>
			<p>Total steps: {totalSteps}</p>
			{/* eslint-disable-next-line react/no-array-index-key */}
			<div>{steps.length && steps.map((Step, idx) => <Step key={idx} />)}</div>
			<button type="button" onClick={previous}>Back</button>
			<button type="button" onClick={next}>Next</button>
		</>
	)
}

export default WizardConsumer;
