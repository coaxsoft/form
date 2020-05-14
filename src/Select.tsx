import * as React from "react"
import { useFormContext, Controller } from "react-hook-form";
import Select from "react-select";

import formElementWrapper, { WrapperFormElementProps } from "./FormElementWrapper";

interface OptionType {
  value: string | number,
  label: React.ReactNode
}

export interface Props extends WrapperFormElementProps {
  className?: string,
  options: Array<OptionType>,
  isClearable?: boolean,
}

const SelectEl = (props: Props & React.Props<HTMLSelectElement>) => {
  const { name, className, options, ...rest } = props;
  const { errors, watch } = useFormContext();

  // classNames
  const classNames = ["coax-form--el"];
  if (className) classNames.push(className);
  if (errors[name]) classNames.push("coax-form--el__error");

  const selectedOption = options.find(o => o.value === watch(name));

  return (
    <Controller
      name={name}
      as={Select}
      options={options}
      onChange={([value]) => value ? value.value : null}
      valueName="zzz"
      value={selectedOption}
      classNamePrefix="coax-form"
      {...rest}
    />
  );
};

export default formElementWrapper(SelectEl);
