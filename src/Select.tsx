import * as React from "react"
import { useFormContext, Controller } from "react-hook-form";
import Select, { components } from "react-select";

// import GreyArrowDown from "./Icons/GreyArrowDown";
import ClearXMark from "./Icons/ClearXMark";

import formElementWrapper, { WrapperFormElementProps } from "./FormElementWrapper";

const { ValueContainer, Placeholder } = components;

interface OptionType {
  value: string | number,
  label: React.ReactNode
}

export interface Props extends WrapperFormElementProps {
  className?: string,
  options: Array<OptionType>,
  isClearable?: boolean,
  isDisabled?: boolean,
  isMulti?: boolean,
}

const SelectEl = (props: Props & React.Props<HTMLSelectElement>) => {
  const { name, className, options, ...rest } = props;
  const { errors, watch } = useFormContext();

  // classNames
  const classNames = ["coax-form--select"];
  if (className) classNames.push(className);
  if (errors[name]) classNames.push("coax-form--el__error");

  const selectedOption = options.find(o => o.value === watch(name));

  // TODO: refactor, cause i'm not sure about this interface
  interface ClearIndicatorProps {
    children: object;
    getStyles: (className: string, props: any) => void;
    innerProps?: any;
  }

  const ClearIndicator = (props: ClearIndicatorProps) => {
    const {
      children = <ClearXMark />,
      getStyles,
      innerProps: { ref, ...restInnerProps },
    } = props;
    return (
      <div
        className="coax-form--select--clear-icon-wrapper"
        {...restInnerProps}
        ref={ref}
        style={getStyles('clearIndicator', props)}
      >
        <div className="coax-form--select--clear-icon">{children}</div>
      </div>
    );
  };

  // TODO: seems like we need Flow for this - https://react-select.com/components
  // const DropdownIndicator = (
  //   props: React.ElementConfig<typeof components.DropdownIndicator>
  // ) => {
  //   return (
  //     <components.DropdownIndicator {...props}>
  //       <GreyArrowDown />
  //     </components.DropdownIndicator>
  //   );
  // };

  // const CustomValueContainer = ({ children, ...props } : { children: any, props: any }) => {
  //   return (
  //     <ValueContainer {...props}>
  //       <Placeholder {...props} isFocused={props.isFocused}>
  //         {props.selectProps.placeholder}
  //       </Placeholder>
  //       {
  //         React.Children.map(children, child =>
  //           child && child.type !== Placeholder ? child : null
  //         )
  //       }
  //     </ValueContainer>
  //   );
  // };


  const style = {
    // control - remove default border from react-select
    control: (base: any) => ({
      ...base,
      boxShadow: "none"
    }),
    // label styles
    // @ts-ignore
    container: (provided, state) => ({
      ...provided,
      marginTop: 50
    }),
    // @ts-ignore
      valueContainer: (provided, state) => ({
      ...provided,
      overflow: "visible"
    }),
    // @ts-ignore
      placeholder: (provided, state) => ({
      ...provided,
      position: "absolute",
      top: state.hasValue || state.selectProps.inputValue ? 5 : "50%",
      transition: "top 0.1s, font-size 0.1s",
      fontSize: (state.hasValue || state.selectProps.inputValue) && 13
    })
  };

  return (
    <Controller
      name={name}
      as={Select}
      options={options}
      onChange={([value]) => value ? value.value : null}
      valueName="zzz"
      value={selectedOption}
      classNamePrefix="coax-form"
      className={classNames.join(" ")}
      styles={style}
      components={{
        ClearIndicator,
        // ValueContainer: CustomValueContainer
      }}
      textFieldProps={{
        label: 'Label',
        InputLabelProps: {
          shrink: true,
        },
      }}
      {...rest}
    />
  );
};

export default formElementWrapper(SelectEl);
