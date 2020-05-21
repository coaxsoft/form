import * as React from "react";
export declare type Props = {
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
    listen?: boolean | string[];
};
export declare type FormHandles = {
    reset(): void;
    setValue(name: string, value: any): void;
    setError(name: string, value: string): void;
    getValues(): void;
};
export declare type FormActions = {
    reset(): void;
    setValue(name: string, value: any): void;
    setError(name: string, value: string): void;
};
export declare type FormValues = {
    [key: string]: any;
};
export declare const Form: React.ForwardRefExoticComponent<Props & React.RefAttributes<FormHandles>>;
