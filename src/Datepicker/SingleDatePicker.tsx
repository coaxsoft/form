import 'react-dates/initialize';

import * as React from "react";
import { SingleDatePicker, SingleDatePickerShape } from "react-dates";
import * as moment from "moment";

import "react-dates/lib/css/_datepicker.css";
import formElementWrapper from "../FormElementWrapper";
import LeftArrow from "./LeftArrow";
import RightArrow from "./RightArrow";
import {useFormContext} from "react-hook-form";


export interface Props extends Omit<SingleDatePickerShape, "onBlur"| "onChange"| "id" | "date" | "focused" | "onDateChange" | "onFocusChange">  {
  name: string;
  presets?: { label: string, value: Date }[]
  className?: string;
}

const SingleDatePickerEl = (props: Props) => {
  const { name, presets, ...otherProps } = props;
  const [focused, setFocused] = React.useState<boolean | null>(null);
  const { register, unregister, setValue, errors, watch } = useFormContext();


  React.useEffect(() => {
    register({ name });

    return () => {
      unregister(name)
    }
  }, []);


  const renderCalendarInfo = () => {
    return (
      <div className="coax-form--calendar-presets">
        {
          presets?.map((row, index) => {
            return (
              <span
                key={index}
                className="coax-form--calendar-preset-row"
                onClick={() => {
                  setValue(name, row.value);
                  setFocused(null);
                }}
              >
                {row.label}
              </span>
            )
          })
        }
      </div>
    )
  }

  const extraProps:{ [key: string]: any } = {};

  // Add presets
  if (presets?.length) {
    extraProps.calendarInfoPosition = "before";
    extraProps.renderCalendarInfo = renderCalendarInfo;
  }

  return (
    <SingleDatePicker
      date={moment(watch(name))}
      onDateChange={date => setValue(name, date ? date.toDate() : null )}
      focused={focused}
      onFocusChange={({ focused }) => setFocused(focused)}
      id="date_input"
      numberOfMonths={1}
      block
      small
      firstDayOfWeek={0}
      hideKeyboardShortcutsPanel
      navPrev={<LeftArrow className="coax-form--calendar-header-icon" fill="rgba(0, 0, 0, 0.87)"/>}
      navNext={<RightArrow className="coax-form--calendar-header-icon" fill="rgba(0, 0, 0, 0.87)"/>}
      {...extraProps}
      {...otherProps}
    />
  )
}

export default formElementWrapper(SingleDatePickerEl);
