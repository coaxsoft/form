import * as React from "react";
import { WrapperFormElementProps } from "./FormElementWrapper";
interface OptionType {
    value: string | number;
    label: React.ReactNode;
}
export interface Props extends WrapperFormElementProps {
    className?: string;
    options: Array<OptionType>;
}
declare const _default: (props: Props & React.Props<HTMLSelectElement> & import("./FormElementWrapper").FormElementProps) => JSX.Element;
export default _default;
