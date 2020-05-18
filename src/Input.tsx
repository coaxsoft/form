import * as React from "react";
import {useFormContext} from "react-hook-form";

import formElementWrapper, {WrapperFormElementProps} from "./FormElementWrapper";

export interface Props extends WrapperFormElementProps {
    className?: string,
    horizontal?: boolean;
}

const Input = (props: Props & React.HTMLProps<HTMLInputElement>) => {
    const {name, className, horizontal, ...rest} = props;
    const {register, errors} = useFormContext();


    // classNames
    const classNames = ["coax-form--el"];
    if (className) classNames.push(className);
    if (horizontal) {
        classNames.push("coax-form--input__horizontal");
    } else classNames.push("coax-form--input");

    if (errors[name]) classNames.push("coax-form--el__error");

    return (
        <div>
            <input
                className={classNames.join(" ")}
                name={name}
                ref={register}
                {...rest}
            />
        </div>

    );
};

export default formElementWrapper(Input);
