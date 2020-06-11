import 'react-dates/initialize';

import * as React from "react";
import { DateRangePicker, DateRangePickerShape } from "react-dates";
import * as moment from "moment";

import 'react-dates/lib/css/_datepicker.css';
import formElementWrapper from "../FormElementWrapper";
import LeftArrow from "./LeftArrow";
import RightArrow from "./RightArrow";
import {useFormContext} from "react-hook-form";


export interface Props extends Omit<DateRangePickerShape, "onBlur"| "onChange"| "startDateId" | "endDateId" | "startDate" | "endDate" | "focusedInput" | "onDatesChange" | "onFocusChange">  {
  name: string;
  presets?: { label: string, start: Date, end: Date }[]
  className?: string;
}

const DateRangePickerEl = (props: Props) => {
  const { name, presets, ...otherProps } = props;
  const [focused, setFocused] = React.useState<"startDate" | "endDate" | null>(null);
  const { register, unregister, setValue, watch } = useFormContext();


  React.useEffect(() => {
    register({ name: `${name}.startDate` });
    register({ name: `${name}.endDate` });

    return () => {
      unregister(`${name}.startDate`)
      unregister(`${name}.endDate`)
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
                  setValue(`${name}.startDate`, row.start);
                  setValue(`${name}.endDate`, row.end);
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

  const startDate = watch(`${name}.startDate`);
  const endDate = watch(`${name}.endDate`);
  const extraProps:{ [key: string]: any } = {};

  // Add presets
  if (presets?.length) {
    extraProps.calendarInfoPosition = "before";
    extraProps.renderCalendarInfo = renderCalendarInfo;
  }

  return (
    <DateRangePicker
      startDate={startDate ? moment(startDate) : null}
      endDate={endDate ? moment(endDate) : null}
      onDatesChange={({ startDate, endDate }) => {
        setValue(`${name}.startDate`, startDate ? startDate.toDate() : null )
        setValue(`${name}.endDate`, endDate ? endDate.toDate() : null )
      }}
      focusedInput={focused}
      onFocusChange={setFocused}
      numberOfMonths={1}
      startDateId="start_date_input"
      endDateId="end_date_input"
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

export default formElementWrapper(DateRangePickerEl);
