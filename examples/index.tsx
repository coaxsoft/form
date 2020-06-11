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
        <Select name="c" label="horizontal select" options={[{ value: 1, label: "form" }]} horizontal/>
        <Radio name="gender" values={["male", "female", "other"]}/>
        <Checkbox name="cakes" label="Cakes"/>
        <Checkbox name="fruits" label="Fruits"/>
        <SingleDatePicker name="dob" label="Date of birth" presets={[ { label: "abc", value: new Date() }]}/>

        <button type="submit">Submit</button>
      </Form>
    </div>
  )
}

ReactDOM.render(
  <App/>,
  document.getElementById("root")
);
