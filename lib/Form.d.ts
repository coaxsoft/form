import * as React from "react";
export declare type Props = {
    /** Default values of form inputs */
    defaultValues?: object;
    /** validationSchema created by yup */
    validationSchema?: object;
    onSubmit: (values: object) => void;
    children: React.ReactNode;
};
export declare type FormHandles = {
    log(): void;
    reset(): void;
};
declare const Form: React.ForwardRefExoticComponent<Props & React.RefAttributes<FormHandles>>;
export default Form;
