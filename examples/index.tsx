import * as React from "react";
import * as ReactDOM from "react-dom";

import "./index.scss";

import { Form, FormHandles, Input } from "../src/index";


const App = () => {
    const ref = React.createRef<FormHandles>();

    return (
      <div className="flex">
          <Form onSubmit={console.log} ref={ref}>
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
