import React from "react";
import FormInput, { FormInputProps } from "../form-input/form-input.component";
import { ThemeLook } from "../../types/theme";

interface FormControlProps extends FormInputProps {
  error?: string;
  label?: string;
  optional?: boolean;
  theme?: ThemeLook;
}

const FormControl: React.FC<FormControlProps> = ({
  error,
  label,
  optional,
  theme = ThemeLook.LIGHT,
  ...props
}) => {
  return (
    <div className={`w-full flex flex-col gap-2 ${theme === ThemeLook.LIGHT ? 'text-slate-800' : 'text-slate-100'}`}>
      {label && <label>{label} {optional ? '(optional)' : '*'}</label>}
      <FormInput
        {...props}
        theme={theme}
        error={error}
      />
      <span className="text-rose-500">{error}</span>
    </div>
  );
}

export default FormControl;
