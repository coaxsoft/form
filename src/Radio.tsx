import * as React from "react";
import { useFormContext } from "react-hook-form";

import formElementWrapper, { WrapperFormElementProps } from "./FormElementWrapper";

type RadioValue = string | number;

export interface Props extends WrapperFormElementProps {
  className?: string;
  value?: RadioValue;
  values?: Array<RadioValue>;
}

interface RadioElProps {
  value: RadioValue;
  className: string;
  name: string;
  register: () => void;
}

const RadioEl = (props: RadioElProps) => {
  const { name, value, register, className } = props;

  return (
    <div className="coax-form--radio-block">
      <label className="coax-form--radio-label" htmlFor={`${name}:${value}`}>
        <input
          id={`${name}:${value}`}
          className={className}
          type="radio"
          name={name}
          ref={register}
          value={value}/>
        {value}
        <span className="checkmark"/>
      </label>
    </div>
  )
};

const Radio = (props: Props & React.HTMLProps<HTMLInputElement>) => {
  const { name, className, value, values } = props;
  const { register, errors } = useFormContext();


  // classNames
  const classNames = ["coax-form--radio-el"];
  if (className) classNames.push(className);
  if (errors[name]) classNames.push("coax-form--radio-el__error");

  let content: Array<React.ReactNode> = [];
  if (value) {
    content.push(
      <RadioEl key={`r:${value}`} className={classNames.join(" ")} name={name} register={register} value={value}/>
    )
  } else if (values) {
    content = values.map(value => {
      return (
        <RadioEl key={`r:${value}`} className={classNames.join(" ")} name={name} register={register}
                 value={value}/>
      )
    })
  }

  return (
    <div className="coax-form--radio-wrapper">
      {content}
    </div>
  );
};

export default formElementWrapper(Radio);
