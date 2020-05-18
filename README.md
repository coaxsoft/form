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

## Api

### Form

| Prop             | Description                                        | Type                                        | Default          |
| ---------------- | -------------------------------------------------- | ------------------------------------------- | ---------------- |
| onSubmit         | (required) Triggered when form submitted           | (values): void                              | -                |
| defaultValues    | Initial value of Form                              | Object                                      | -                |
| validationSchema | Yup validation Schema                              | [Yup schema](https://github.com/jquense/yup)| -                |
| serverErrors     | Server (external) validation errors                | { [fieldName]: string \| string[] }         | -                |
| ref              | Form reference for inner methods                   | React.refObject                             | -                |
