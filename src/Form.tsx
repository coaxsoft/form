import * as React from "react";
import { FormContext, useForm } from "react-hook-form";


export type Props = {
  /** Default values of form inputs */
  defaultValues?: object;
  /** validationSchema created by yup */
  validationSchema?: object;
  onSubmit: (values: object, actions: object) => void;
  children: React.ReactNode;
  className?: string;
  serverErrors?: object;
}

export type FormHandles = {
  reset(): void,
  setValue(name: string, value: any): void,
  setError(name: string, value: string): void,
  getValues(): void,
}


export const Form = React.forwardRef<FormHandles, Props>((props, ref) => {
  const { defaultValues, validationSchema, onSubmit, children, className, serverErrors } = props;
  const methods = useForm({ defaultValues, validationSchema });

  React.useImperativeHandle(ref, () => ({
    reset: methods.reset,
    setValue: methods.setValue,
    setError: methods.setError,
    getValues: methods.getValues
  }));

  // Set errors from server validation
  React.useEffect(() => {
    if (!serverErrors) return;

    Object.entries(serverErrors).forEach(([key, value]) => {
      let errorText = value;
      if (Array.isArray(value)) errorText = value.join(" ");

      methods.setError(key, errorText);
    })
  }, [serverErrors])

  // Methods
  const onFormSubmit = (values: object) => {
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
