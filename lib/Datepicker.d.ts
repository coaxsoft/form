/// <reference types="react" />
import { EventFunction } from "react-hook-form";
import { ReactDatePickerProps } from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
export interface Props extends Omit<ReactDatePickerProps, "onBlur" | "onChange" | "name"> {
    className?: string;
    onChange?: EventFunction;
    onBlur?: EventFunction;
    name: string;
}
declare const _default: (props: Props & import("./FormElementWrapper").FormElementProps) => JSX.Element;
export default _default;
