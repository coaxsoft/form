import * as React from "react";
export interface FormElementProps {
    wrapperClassName?: string;
    labelClassName?: string;
    errorClassName?: string;
    label?: string;
    horizontal?: boolean;
    name: string;
}
declare const formElementWrapper: <P extends object>(Component: React.ComponentType<P>) => (props: FormElementProps) => JSX.Element;
export default formElementWrapper;
