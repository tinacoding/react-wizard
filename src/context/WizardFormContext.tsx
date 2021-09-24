import { createContext } from "react";
import { FieldValues, UseFormReturn } from "react-hook-form";

// eslint-disable-next-line @typescript-eslint/ban-types
type FormContext = UseFormReturn<FieldValues, object>;

export const WizardFormContext = createContext({} as FormContext);

type WizardFormProviderProps = { children: React.ReactNode; form: FormContext };

export function WizardFormProvider({ children, form }: WizardFormProviderProps): JSX.Element {
  return <WizardFormContext.Provider value={{ ...form }}>{children}</WizardFormContext.Provider>;
}
