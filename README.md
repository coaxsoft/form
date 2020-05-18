# COAX Form
Fully customizable form component.

## Features
- Multiple form Elements
- Full control of form values and submit process
- Easy styling / restyling


## Install
    npm install @coax/form


## Quickstart 
```jsx
import React from "react";
import { Form, Input, Select, Datepicker, Checkbox } from "@coax/form";

function App() {
 
  const onSubmit = data => {
    console.log(data);
  };

  return (
    <Form onSubmit={onSubmit}>
      <Input name="name" /> {/* register an input */}
      
      <Select
        name="gender"
        options={[
          { value: "man", label: "Man" },
          { value: "woman", label: "Woman"}
        ]}
      />
      
      <Datepicker label="Date of birth" name="dob" horizontal/>
      
      <Checkbox label="Agree Terms" name="terms" />
      
      <button type="submit">Submit</button>
    </Form>
  );
}
```
