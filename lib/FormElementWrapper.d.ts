import * as React from "react";
export interface FormElementProps {
    wrapperClassName?: string;
    labelClassName?: string;
    errorClassName?: string;
    label?: string;
    horizontal?: boolean;
    name: string;
}
export interface WrapperFormElementProps {
    name: string;
}
declare const formElementWrapper: <P extends object>(Component: React.ComponentType<P>) => (props: P & FormElementProps) => JSX.Element;
export default formElementWrapper;
