import * as React from "react";
import { WrapperFormElementProps } from "./FormElementWrapper";
declare type RadioValue = string | number;
export interface Props extends WrapperFormElementProps {
    className?: string;
    value?: RadioValue;
    values?: Array<RadioValue>;
}
declare const _default: (props: Props & React.HTMLProps<HTMLInputElement> & import("./FormElementWrapper").FormElementProps) => JSX.Element;
export default _default;
