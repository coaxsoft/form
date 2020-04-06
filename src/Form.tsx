import * as React from "react";
import { FormContext, useForm } from "react-hook-form";
import {forwardRef} from "react";


export type Props = {
  /** Default values of form inputs */
  defaultValues?: object;
  /** validationSchema created by yup */
  validationSchema?: object;
  onSubmit: (values: object, actions: object) => void,
  children: React.ReactNode
}

export type FormHandles = {
  log(): void,
  reset(): void,
}


const Form = forwardRef<FormHandles, Props>((props, ref) => {
  const { defaultValues, validationSchema, onSubmit, children } = props;
  const methods = useForm({ defaultValues, validationSchema });

  React.useImperativeHandle(ref, () => ({
    log: () => console.log("log"),
    reset: methods.reset
  }));

  // Methods
  const onFormSubmit = (values: object) => {
    const actions = {
      reset: methods.reset,
      setValue: methods.setValue,
      setError: methods.setError
    };
    onSubmit(values, actions)
  };

  return (
    <FormContext {...methods}>
      <form className="coax-form" onSubmit={methods.handleSubmit(onFormSubmit)}>
        {children}
      </form>
    </FormContext>

  )
});

export default Form;
