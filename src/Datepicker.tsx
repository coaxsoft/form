import * as React from "react";
import { useFormContext, Controller, EventFunction } from "react-hook-form";
import DatePicker, { ReactDatePickerProps } from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import formElementWrapper from "./FormElementWrapper";


export interface Props extends Omit<ReactDatePickerProps, "onBlur"| "onChange"| "name">  {
  className?: string;
  onChange?: EventFunction;
  onBlur?: EventFunction;
  name: string;
}

const DatepickerEl = (props: Props) => {
  const { name, className, ...rest } = props;
  const { errors } = useFormContext();


  // classNames
  const classNames = ["coax-form--el"];
  if (className) classNames.push(className);
  if (errors[name]) classNames.push("coax-form--el__error");

  return (
    <Controller
      className={classNames.join(" ")}
      name={name}
      as={DatePicker}
      valueName="selected"
      onChange={([val]) => val}
      {...rest}
    />
  );
};

export default formElementWrapper(DatepickerEl);
