/// <reference types="react" />
import { FormElementProps } from "./FormElementWrapper";
export interface Props extends FormElementProps {
    name: string;
    className?: string;
    hasError: boolean;
    options: Array<string | number | {
        value: string | number;
        label: string;
    }>;
}
declare const _default: (props: FormElementProps) => JSX.Element;
export default _default;
