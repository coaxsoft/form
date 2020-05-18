import * as React from "react";
import * as ReactDOM from "react-dom";

import "./index.scss";

import { Form, Input } from "../src/index";


const App = () => {
    return (
      <div className="flex">
          <Form onSubmit={console.log}>
            <Input name="a"/>
            <Input name="b"/>

            <button type="submit">Submit</button>
          </Form>
      </div>
    )
}

ReactDOM.render(
  <App/>,
  document.getElementById("root")
);
