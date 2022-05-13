import { Formik, Form } from 'formik';
import * as Yup from 'yup';

import formJSON from './../data/custom-form.json';
import { MySelect, MyTextInput } from '../components';

const initialValues: { [key: string]: any } = {};
const requiredFields: { [key: string]: any } = {};

// TODO: Refactor <- Evitar for anidado? - Switch
formJSON.forEach(input => {
  initialValues[input.name] = input.value;

  if (!input.validations) return;

  let schema = Yup.string();

  input.validations.forEach(rule => {
    if (rule.type === 'required')
      schema = schema.required('This input is required!');

    if (rule.type === 'minLength')
      schema = schema.min(
        (rule as any).value || 2,
        `Must be ${(rule as any).value || 2} characters or more`
      );

    if (rule.type === 'email') schema = schema.email('Invalid email');
  });

  requiredFields[input.name] = schema;
});

const validationSchema = Yup.object({ ...requiredFields });

export const DynamicForm = () => {
  console.log(formJSON);

  return (
    <div>
      <h1>Dynamic Form</h1>

      <Formik
        initialValues={initialValues}
        onSubmit={(values, { resetForm }) => {
          console.log(values);

          resetForm();
        }}
        validationSchema={validationSchema}
      >
        {({ handleReset }) => (
          <Form noValidate>
            {formJSON.map(({ label, name, type, placeholder, id, options }) => {
              if (['input', 'password', 'email'].includes(type))
                return (
                  <MyTextInput
                    key={name}
                    label={label}
                    name={name}
                    type={type as any}
                    placeholder={placeholder}
                    id={id}
                  />
                );
              else if (type === 'select')
                return (
                  <MySelect key={name} label={label} name={name}>
                    <option value="">Select an option</option>
                    {options?.map(({ id, label }) => (
                      <option key={id} value={id}>
                        {label}
                      </option>
                    ))}
                  </MySelect>
                );

              throw new Error(`The type: ${type} is not supported!`);
            })}

            <button type="submit">Submit</button>
            <button onClick={handleReset}>Reset</button>
            {/* <button type="reset">Reset</button> */}
          </Form>
        )}
      </Formik>
    </div>
  );
};
