import * as React from "react";
export interface Props {
    /** Default values of form inputs */
    defaultValues?: object;
    /** validationSchema created by yup */
    validationSchema?: object;
    onSubmit: (values: object) => void;
}
declare const Form: React.FC<Props>;
export default Form;
