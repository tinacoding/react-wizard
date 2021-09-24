import { restaurants } from "src/components/Wizard/steps/api";
import Select from "react-select";
import { useContext, useEffect, useState } from "react";
import { WizardFormContext } from "src/context/WizardFormContext";
import { Controller } from "react-hook-form";

type SelectOption = { value: string; label: string };
function Step1(): JSX.Element {
  const [options, setOptions] = useState([] as SelectOption[]);
  const { control } = useContext(WizardFormContext);

  useEffect(() => {
    const restuarantOptions = restaurants.map(({ name, id }) => ({ value: id, label: name }));
    setOptions(restuarantOptions);
  }, []);

  return (
    <div>
      Step 1
      <Controller
        render={({ field: { onChange } }) => (
          <Select
            options={options}
            placeholder="Select a restaurant"
            onChange={(e) => onChange(e?.value)}
            isClearable
          />
        )}
        control={control}
        name="restaurant"
      />
    </div>
  );
}

export default Step1;
