/// <reference types="react" />
import { FormElementProps } from "./FormElementWrapper";
export interface Props extends FormElementProps {
    name: string;
    className?: string;
    hasError: boolean;
}
declare const _default: (props: FormElementProps) => JSX.Element;
export default _default;
