import * as React from "react";
import { FormContext, useForm } from "react-hook-form";


export interface Props {
  /** Default values of form inputs */
  defaultValues?: object;
  /** validationSchema created by yup */
  validationSchema?: object;
  onSubmit: (values: object) => void
}


const Form: React.FC<Props> = props => {
  const { defaultValues, validationSchema, onSubmit, children } = props;

  const methods = useForm({ defaultValues, validationSchema });

  return (
    <FormContext {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        {children}
      </form>
    </FormContext>

  )
};

export default Form;
