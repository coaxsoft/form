import * as React from "react";
import { useFormContext } from "react-hook-form";

import formElementWrapper, { WrapperFormElementProps } from "./FormElementWrapper";


export interface Props extends WrapperFormElementProps {
  className?: string;
  children?: React.ReactNode;
  labelText?: string
}

const Checkbox = (props: Props & React.HTMLProps<HTMLInputElement>) => {
  const { name, className, labelText } = props;
  const { register, errors } = useFormContext();


  // classNames
  const classNames = ["coax-form--checkbox-el"];
  if (className) classNames.push(className);
  if (errors[name]) classNames.push("coax-form--checkbox-el__error");

  return (
    <div className="coax-form--checkbox-wrapper">
      <input id={name} className={classNames.join(" ")} name={name} ref={register} type="checkbox"/>
      <span className="checkmark"/>
      {props.children || null}
      <label className="coax-form--checkbox-label" htmlFor={name}>
        {labelText}
      </label>
    </div>

  );
};

export default formElementWrapper(Checkbox);
