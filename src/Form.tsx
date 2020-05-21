import * as React from "react";
import { FormContext, useForm } from "react-hook-form";

import usePrevious from "./hooks/usePrevious";


export type Props = {
  onSubmit: (values: object, actions: FormActions) => void;
  children: React.ReactNode;
  mode?: "onSubmit" | "onChange" | "onBlur";
  /** Default values of form inputs */
  defaultValues?: object;
  /** validationSchema created by yup */
  validationSchema?: object;
  className?: string;
  serverErrors?: object;
  onChange?: (values: object, actions: FormActions) => void;
  listen?: boolean | string[]
}

export type FormHandles = {
  reset(): void,
  setValue(name: string, value: any): void,
  setError(name: string, value: string): void,
  getValues(): void,
}

export type FormActions = {
  reset(): void,
  setValue(name: string, value: any): void,
  setError(name: string, value: string): void,
}

export type FormValues = {
  [key: string]: any
}


export const Form = React.forwardRef<FormHandles, Props>((props, ref) => {
  const {
    mode, defaultValues, validationSchema,
    onSubmit, children, className, serverErrors, onChange, listen
  } = props;
  const methods = useForm({ mode: mode, defaultValues, validationSchema });

  // Pass control methods to form holder
  React.useImperativeHandle(ref, () => ({
    reset: methods.reset,
    setValue: methods.setValue,
    setError: methods.setError,
    getValues: methods.getValues
  }));

  // Set errors from server validation
  const previousServerErrors = usePrevious(serverErrors);
  React.useEffect(() => {
    // Don't reset error if values didn't change
    if (
      serverErrors && previousServerErrors &&
      JSON.stringify(previousServerErrors) !== JSON.stringify(serverErrors)
    ) {
      Object.entries(serverErrors).forEach(([key, value]) => {
        let errorText = value;
        if (Array.isArray(value)) errorText = value.join(" ");

        methods.setError(key, errorText);
      })
    }
  }, [serverErrors]);

  // Listen to changes in fields
  if (listen && typeof onChange === "function") {
    const newValues = methods.watch((Array.isArray(listen) && listen.length) ? listen : undefined);
    const oldValues = usePrevious(newValues);

    React.useEffect(() => {
      // Don't trigger on initial load
      // Don't trigger if values are the same
      if (
        oldValues && Object.keys(oldValues!).length &&
        JSON.stringify(newValues) !== JSON.stringify(oldValues)
      ) {
        onChange(newValues, {
          reset: methods.reset,
          setValue: methods.setValue,
          setError: methods.setError
        })
      }
    }, [newValues, oldValues])
  }


  // Methods
  const onFormSubmit = (values: FormValues) => {
    const actions = {
      reset: methods.reset,
      setValue: methods.setValue,
      setError: methods.setError
    };
    onSubmit(values, actions)
  };


  const formClassNames = ["coax-form"]
  if (className) formClassNames.push(className)

  return (
    <FormContext {...methods}>
      <form className={formClassNames.join(" ")} onSubmit={methods.handleSubmit(onFormSubmit)}>
        {children}
      </form>
    </FormContext>
  )
});
