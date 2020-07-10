import * as React from "react";
import * as ReactDOM from "react-dom";

import "./index.scss";

import { Form, FormHandles, Input, Select, Radio, Checkbox, SingleDatePicker, DateRangePicker } from "../src/index";


const App = () => {
  const ref = React.createRef<FormHandles>();

  return (
    <div className="flex">
      <Form onSubmit={console.log} ref={ref}>
        <DateRangePicker
          name="vacation"
          label="Vacation range"
          presets={[ { label: "abc", start: new Date(), end: new Date() }]}
        />

        <Input name="a" horizontal label="horizontal input"/>
        <Input name="b" label="simple input"/>

        <Radio
          name="single-radio-btn"
          values={["Yes"]}
        />
        <Radio name="gender" values={["male", "female", "other"]}/>

        <Checkbox name="cakes" labelText="Cakes"/>
        <Checkbox name="fruits" labelText="Fruits"/>

        <SingleDatePicker
          name="dob"
          label="Date of birth"
          presets={[ { label: "abc", value: new Date() }]}
        />

        <Select
          name="select"
          aria-label="horizontal select"
          options={
            [
              {value: 1, label: "nothing but a long text, nothing but a long text, nothing but a long text, nothing but a long text, nothing but a long text "},
              {value: 2, label: "2"},
              {value: 3, label: "3"},
            ]
          }
          horizontal
          isClearable
        />
        <Select
          name="multipleSelect"
          aria-label="horizontal select"
          options={
            [
              {value: 1, label: "nothing but a long text, nothing but a long text, nothing but a long text, nothing but a long text, nothing but a long text "},
              {value: 2, label: "2"},
              {value: 3, label: "3"},
            ]
          }
          horizontal
          isClearable
          isMulti
        />
        <Select
          name="disabledSelect"
          isDisabled={true}
          aria-label="horizontal select"
          options={[{value: 1, label: "form"}]}
          horizontal
        />

        <button type="submit">Submit</button>
      </Form>
    </div>
  )
}

ReactDOM.render(
  <App/>,
  document.getElementById("root")
);
