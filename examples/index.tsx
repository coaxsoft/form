import * as React from "react";
import * as ReactDOM from "react-dom";

import "./index.scss";

import { Form, FormHandles, Input, Select, Radio, Checkbox } from "../src/index";


const App = () => {
  const ref = React.createRef<FormHandles>();

  return (
    <div className="flex">
      <Form onSubmit={console.log} ref={ref}>
        <Input name="a" horizontal label="horizontal input"/>
        <Input name="b" label="simple input"/>
        <Select name="c" label="horizontal select" options={[{ value: 1, label: "form" }]} horizontal/>
        <Radio name="gender" values={["male", "female", "other"]}/>
        <Checkbox name="cakes" label="Cakes"/>
        <Checkbox name="fruits" label="Fruits"/>

        <button type="submit">Submit</button>
      </Form>
    </div>
  )
}

ReactDOM.render(
  <App/>,
  document.getElementById("root")
);
