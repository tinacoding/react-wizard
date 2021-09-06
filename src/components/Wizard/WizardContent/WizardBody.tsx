import { useContext } from "react";
import { WizardContext } from "src/context/WizardContext";

function WizardBody(): JSX.Element{
	const { currentStep, steps } = useContext(WizardContext);
	const Content = steps[currentStep];
	return <Content />
}

export default WizardBody
