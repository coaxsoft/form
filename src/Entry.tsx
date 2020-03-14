import * as React from "react";

import { Form, Input, Select } from "./index";


const Entry:React.FC = () => {
  const onSubmit = (values: object) => {

  };

  return (
    <div>
      Form
      <Form onSubmit={onSubmit}>
        <Input name="a" type={10}/>
      </Form>
    </div>
  )
};
