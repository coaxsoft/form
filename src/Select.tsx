import * as React from "react"
import { useFormContext, Controller } from "react-hook-form";
import Select, { components, IndicatorProps } from "react-select";

import GreyArrowDown from "./Icons/GreyArrowDown";
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


  // Replace default arrow down
  const DropdownIndicator = (
    props: IndicatorProps<any>
  ) => {
    return (
      <components.DropdownIndicator {...props}>
        <GreyArrowDown />
      </components.DropdownIndicator>
    );
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
      components={{
        ClearIndicator,
        DropdownIndicator
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
