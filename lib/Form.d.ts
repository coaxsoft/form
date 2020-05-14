import * as React from "react";
export declare type Props = {
    /** Default values of form inputs */
    defaultValues?: object;
    /** validationSchema created by yup */
    validationSchema?: object;
    onSubmit: (values: object, actions: object) => void;
    children: React.ReactNode;
    className?: string;
};
export declare type FormHandles = {
    log(): void;
    reset(): void;
};
export declare const Form: React.ForwardRefExoticComponent<Props & React.RefAttributes<FormHandles>>;
