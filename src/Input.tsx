import * as React from "react";
import { useFormContext } from "react-hook-form";

import formElementWrapper, { FormElementProps } from "./FormElementWrapper";


export interface Props extends FormElementProps {
  name: string,
  hasError: boolean,
  className?: string,
  type: string
}


const Input: React.FC<Props & FormElementProps> = props => {
  const { name, className, hasError, ...rest } = props;
  const { register } = useFormContext();


  // classNames
  const classNames = ["coax-form--el"];
  if (className) classNames.push(className);
  if (hasError) classNames.push("coax-form--el__error");

  return (
    <input className={classNames.join(" ")} name={name} ref={register} {...rest} />
  );
};

export default formElementWrapper(Input);
