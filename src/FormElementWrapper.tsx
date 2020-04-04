import * as React from "react";
import { useFormContext } from "react-hook-form";


export interface FormElementProps {
  wrapperClassName?: string;
  labelClassName?: string;
  errorClassName?: string;
  label?: string;
  horizontal?: boolean;
  name: string;
}

export interface WrapperFormElementProps {
  name: string,
}



const formElementWrapper = <P extends object>(Component: React.ComponentType<P>) => {
  return (props: P & FormElementProps) => {
    const {
      wrapperClassName, labelClassName, errorClassName,
      label, horizontal, name,
      ...innerProps
    } = props;
    const { errors } = useFormContext();


    // Wrapper className
    const wClassName = ["coax-form--el-holder"];
    if (wrapperClassName) wClassName.push(wrapperClassName);
    if (horizontal) wClassName.push("coax-form--el-holder__horizontal");

    // Label className
    const lClassName = ["coax-form--el-label"];
    if (labelClassName) lClassName.push(labelClassName);
    if (horizontal) lClassName.push("coax-form--el-label__horizontal");

    // Error className
    const eClassName = ["coax-form--el-error"];
    if (errorClassName) eClassName.push(errorClassName);

    let errorMessage = "";
    if (errors[name]) errorMessage = (errors[name] as any).message;


    return (
      <div className={wClassName.join(" ")}>
        {
          label && (
            <span className={lClassName.join(" ")}>{label}</span>
          )
        }

        <Component {...innerProps as P} name={name}/>

        {
          errors[name] && (
            <span className={eClassName.join(" ")}>{errorMessage}</span>
          )
        }
      </div>
    )
  };
};

// const formElementWrapper = <P extends FormElementProps = FormElementProps>(Component: React.ComponentType<P>) => (props: FormElementProps) => {
//   const {
//     wrapperClassName, labelClassName, errorClassName,
//     label, horizontal, name,
//     ...innerProps
//   } = props;
//   const { errors } = useFormContext();
//
//
//   // Wrapper className
//   const wClassName = ["coax-form--el-holder"];
//   if (wrapperClassName) wClassName.push(wrapperClassName);
//   if (horizontal) wClassName.push("coax-form--el-holder__horizontal");
//
//   // Label className
//   const lClassName = ["coax-form--el-label"];
//   if (labelClassName) lClassName.push(labelClassName);
//
//   // Error className
//   const eClassName = ["coax-form--el-error"];
//   if (errorClassName) eClassName.push(errorClassName);
//
//   let errorMessage = "";
//   if (errors[name]) errorMessage = (errors[name] as any).message;
//
//
//   return (
//     <div className={wClassName.join(" ")}>
//       {
//         label && (
//           <span className={lClassName.join(" ")}>{label}</span>
//         )
//       }
//
//       <Component {...innerProps as P} name={name} hasError={!!errors[name]}/>
//
//       {
//         errors[name] && (
//           <span className={eClassName.join(" ")}>{errorMessage}</span>
//         )
//       }
//     </div>
//   )
// };

export default formElementWrapper;
