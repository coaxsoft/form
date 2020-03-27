/// <reference types="react" />
import { EventFunction } from "react-hook-form";
import { ReactDatePickerProps } from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { WrapperFormElementProps } from "./FormElementWrapper";
export interface Props extends WrapperFormElementProps {
    className?: string;
    onChange?: EventFunction;
    onBlur?: EventFunction;
}
declare const _default: (props: Props & ReactDatePickerProps & import("./FormElementWrapper").FormElementProps) => JSX.Element;
export default _default;
