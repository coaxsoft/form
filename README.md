# COAX Form
Fully customizable form component.


## Features
- Multiple form Elements
- Full control of form values and submit process
- Easy styling / restyling
- Handle server validation
- Dynamic fields
- Validation with Yup
- Custom form elements


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
 
  const onSubmit = values => {
    console.log(values);
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
      
      <Datepicker name="dob" label="Date of birth" horizontal/>
      
      <Checkbox name="terms" label="Agree Terms" />
      
      <button type="submit">Submit</button>
    </Form>
  );
}
```

## Api

### Form props
| Prop             | Description                                        | Type                                              | Default          |
| ---------------- | -------------------------------------------------- | ------------------------------------------------- | ---------------- |
| onSubmit         | (required) Triggered when form submitted           | (values, actions): void                           | -                |
| mode             | Submition mode (onSubmit, onChange, onBlur)        | "onSubmit" \| "onChange" \| "onBlur" \| undefined | -                |
| defaultValues    | Initial value of Form                              | Object                                            | -                |
| validationSchema | Yup validation Schema                              | [Yup schema](https://github.com/jquense/yup)      | -                |
| serverErrors     | Server (external) validation errors                | { [fieldName]: string \| string[] }               | -                |
| ref              | Form reference for inner methods                   | React.refObject                                   | -                |
| listen           | List of names to listen for changes or `true`      | string[] \| boolean                               | -                |
| onChange         | Triggered when `listen` is provided                | (values, actions): void                           | -                |

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

### Datepicker form element props
Props from [react-datepicker](https://reactdatepicker.com/)


## Other examples

### Validation
```jsx
import React from "react";
import { Form, Input, Checkbox } from "@coax/form";
import * as yup from "yup";

const FormSchema = yup.object().shape({
  name: yup.string().required(),
  lastName: yup.string(),
  terms: yup.bool().oneOf([true], 'Field must be checked')
});


function App() {

  const onSubmit = values => {
    // 
    // do something with values
    //
  };

  return (
    <Form onSubmit={onSubmit} validationSchema={FormSchema}>
      <Input name="name" /> 

      <Input name="lastName"/>
      
      <Checkbox name="terms" label="Agree Terms" />
      
      <button type="submit">Submit</button>
    </Form>
  );
}
```

### Reset form
```jsx
import React from "react";
import { Form, Input, Checkbox, Datepicker } from "@coax/form";

function App() {
 
  const onSubmit = (values, actions) => {
    // 
    // do something with values
    //

    actions.reset();
  };

  return (
    <Form onSubmit={onSubmit}>
      <Input name="name" /> 

      <Input name="lastName"/>
      
      <Datepicker name="dob" label="Date of birth" horizontal/>
      
      <Checkbox name="terms" label="Agree Terms" />
      
      <button type="submit">Submit</button>
    </Form>
  );
}
```

### Dynamic fields
```jsx
import React from "react";
import { Form, Input, Checkbox } from "@coax/form";

function App() {
  const [showLastNameField, setShowLastNameField] = React.useState(false);
 
  const onSubmit = values => {
    // 
    // do something with values
    //
  };

  const onChange = values => {
    setShowLastNameField(!!values.showLastName)
  }

  return (
    <Form onSubmit={onSubmit} onChange={onChange} listen={[]}>
      <Input name="name" /> 
      
      <Checkbox name="showLastName" label="Show full name field"  />
  
      {
        showLastNameField && <Input name="lastName" /> 
      }     
      
      <button type="submit">Submit</button>
    </Form>
  );
}
```

### Handling Server Validation
```jsx
import React ,{useState}from "react";
import { Form, Input, Checkbox } from "@coax/form";

function App() {
  const [serverErrors, setServerErrors] = useState({})

  const onSubmit = values => {
    fetch("https://example.com/api/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(values)
    })
      .then(response => response.json())
      .then(response => // do something with it)
      .catch(err => {

        // We expect your server errors to have following format:
        // err = {
        //   [fieldName]: string | string[],
        // }

        setServerErrors(err)
      })
  };

  return (
    <Form onSubmit={onSubmit} serverErrors={serverErrors}>
      <Input name="name" /> 

      <Input name="lastName"/>
      
      <Checkbox name="terms" label="Agree Terms" />
      
      <button type="submit">Submit</button>
    </Form>
  );
}
```

### Custom form elements (can access ref)
```jsx
import React from "react";
import { Form, Input, useFormContext } from "@coax/form";


const CustomInput = () => {
  const { register } = useFormContext()

  return (
    <div className="custom-holder">
      <input name="phone" ref={register}/>
    </div>
  )
}


function App() {
 
  const onSubmit = values => {
    // 
    // do something with values
    //
  };

  return (
    <Form onSubmit={onSubmit}>
      <Input name="name" /> 

      <Input name="lastName"/>
      
      <CustomInput/>
      
      <button type="submit">Submit</button>
    </Form>
  );
}
```
More info about `register` [here](https://react-hook-form.com/api#register)

### Custom form elements (can't access ref)
```jsx
import React from "react";
import { Form, Input, Controller } from "@coax/form";


const CustomInput = () => {
  return (
    <Controller
      name="phone"
      as={<input/>}
    />
  )
}


function App() {
 
  const onSubmit = values => {
    // 
    // do something with values
    //
  };

  return (
    <Form onSubmit={onSubmit}>
      <Input name="name" /> 

      <Input name="lastName"/>
      
      <CustomInput/>
      
      <button type="submit">Submit</button>
    </Form>
  );
}
```
More info about `Controller` [here](https://react-hook-form.com/api#Controller)
