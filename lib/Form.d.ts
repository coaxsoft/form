import * as React from "react";
export declare type Props = {
    /** Default values of form inputs */
    defaultValues?: object;
    /** validationSchema created by yup */
    validationSchema?: object;
    onSubmit: (values: object, actions: object) => void;
    children: React.ReactNode;
    className?: string;
    serverErrors?: object;
};
export declare type FormHandles = {
    reset(): void;
    setValue(name: string, value: any): void;
    setError(name: string, value: string): void;
    getValues(): void;
};
export declare const Form: React.ForwardRefExoticComponent<Props & React.RefAttributes<FormHandles>>;
