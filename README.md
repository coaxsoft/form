# COAX Form
Fully customizable form component.


## Features
- Multiple form Elements
- Full control of form values and submit process
- Easy styling / restyling


## Install
    npm install @coax/form

## Dependencies
 - [react-hook-form](https://github.com/react-hook-form/react-hook-form)
 - [react-select](https://github.com/jedwatson/react-select)
 - [react-datepicker](https://github.com/Hacker0x01/react-datepicker)
 
## Available form elements
 - Input
 - Select
 - Checkbox
 - Radio
 - Datepicker

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
      <Input name="name" />
      
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

### Form props
| Prop             | Description                                        | Type                                        | Default          |
| ---------------- | -------------------------------------------------- | ------------------------------------------- | ---------------- |
| onSubmit         | (required) Triggered when form submitted           | (values): void                              | -                |
| defaultValues    | Initial value of Form                              | Object                                      | -                |
| validationSchema | Yup validation Schema                              | [Yup schema](https://github.com/jquense/yup)| -                |
| serverErrors     | Server (external) validation errors                | { [fieldName]: string \| string[] }         | -                |
| ref              | Form reference for inner methods                   | React.refObject                             | -                |

### General form element props
| Prop             | Description                                        | Type                                        | Default          |
| ---------------- | -------------------------------------------------- | ------------------------------------------- | ---------------- |
| name             | (required) Form element wrapper className          | string                                      | -                |
| wrapperClassName | Form element wrapper className                     | string                                      | -                |
| labelClassName   | Form element label className                       | string                                      | -                |
| errorClassName   | Form element error className                       | string                                      | -                |
| className        | Form element className                             | string                                      | -                |
| label            | Form element label                                 | string                                      | -                |
| horizontal       | Horizontal positioning of label and form element   | boolean                                     | -                |

### Input form element props
| Prop             | Description                                        | Type                                        | Default          |
| ---------------- | -------------------------------------------------- | ------------------------------------------- | ---------------- |
| type             | Input type                                         | string                                      | -                |
Other HTMLInputElement props

### Select form element props
| Prop             | Description                                        | Type                                                       | Default          |
| ---------------- | -------------------------------------------------- | ---------------------------------------------------------- | ---------------- |
| options          | (required) Select options                          | Array<{ label: React.ReactNode, value: string \| number }> | -                |
Other props from [react-select](https://react-select.com/props)

### Radio form element props
| Prop             | Description                                        | Type                                        | Default          |
| ---------------- | -------------------------------------------------- | ------------------------------------------- | ---------------- |
| value            | Value of radio button                              | string \| number                            | -                |
| values           | Radio group. Values of radio button                | Array<string \| number>                     | -                |
