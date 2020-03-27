import * as React from "react";
import { WrapperFormElementProps } from "./FormElementWrapper";
export interface Props extends WrapperFormElementProps {
    className?: string;
    children?: React.ReactNode;
}
declare const _default: (props: Props & React.HTMLProps<HTMLInputElement> & import("./FormElementWrapper").FormElementProps) => JSX.Element;
export default _default;
