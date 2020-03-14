import * as React from "react"
import { useFormContext } from "react-hook-form";

import formElementWrapper, { FormElementProps } from "./FormElementWrapper";


export interface Props extends FormElementProps {
  name: string,
  className?: string,
  hasError: boolean,
  options: Array<string | number | { value: string | number; label: string}>
}

const Select: React.FC<Props> = props => {
  const { name, className, options, hasError, ...rest } = props;
  const { register } = useFormContext();


  // classNames
  const classNames = ["coax-form--el"];
  if (className) classNames.push(className);
  if (hasError) classNames.push("coax-form--el__error");

  return (
    <select className={classNames.join(" ")} name={name} ref={register} {...rest}>
      {
        options.map((item) => {
          let value = typeof item === "object" ? item.value : item;
          let label = typeof item === "object" ? item.label : item;

          return (
            <option key={value} value={value}>{label}</option>
          )
        })
      }
    </select>
  )
};

export default formElementWrapper(Select);
