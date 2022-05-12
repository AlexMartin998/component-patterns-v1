import { Formik, Form } from 'formik';
import * as yup from 'yup';

import { MyCheckbox, MySelect, MyTextInput } from './../components';
import './../styles/styles.css';

interface FormValues {
  firstName: string;
  lastName: string;
  email: string;
  terms: boolean;
  jobType: string;
}

const initialValues: FormValues = {
  firstName: '',
  lastName: '',
  email: '',
  terms: false,
  jobType: '',
};

export const FormikAbstraction = () => {
  return (
    <div>
      <h1>Basic Tutorial</h1>
      <hr />

      <Formik
        initialValues={initialValues}
        onSubmit={values => {
          console.log(values);
        }}
        validationSchema={yup.object({
          firstName: yup
            .string()
            .required('Required!')
            .max(15, 'Must be 15 characters or less!'),
          lastName: yup
            .string()
            .required('Required!')
            .max(10, 'Must be 10 characters or less!'),
          email: yup.string().required('Required!').email('Invalid email!'),

          terms: yup
            .boolean()
            .oneOf([true], 'Debe aceptar las condiciones de uso'),
          jobType: yup
            .string()
            .notOneOf(['it-junior'], 'Invalid option!')
            .required('Required!'),
        })}
      >
        {() => (
          <Form>
            <MyTextInput
              label="First Name"
              name="firstName"
              id="firstName"
              placeholder="First Name"
            />
            <MyTextInput
              label="Last Name"
              name="lastName"
              id="lastName"
              placeholder="Last Name"
            />
            <MyTextInput
              type="email"
              label="Email"
              name="email"
              id="email"
              placeholder="email@email.com"
            />

            <MySelect label="Job Type" name="jobType">
              <option value="">Pick somethig</option>
              <option value="developer">Developer</option>
              <option value="designer">Designer</option>
              <option value="it-senior">IT Senior</option>
              <option value="it-junior">IT Junior</option>
            </MySelect>

            <MyCheckbox label="Terms and conditions" name="terms" id="terms" />

            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
