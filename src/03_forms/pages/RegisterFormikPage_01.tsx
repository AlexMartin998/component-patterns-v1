import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { MyTextInput } from '../components';

import { RegisterFormData } from '../interfaces/interfaces';
import './../styles/styles.css';

const initState: RegisterFormData = {
  name: '',
  email: '',
  password: '',
  repeatPassword: '',
};

export const RegisterFormikPage = () => {
  return (
    <div>
      <h1>Register Formik Page</h1>

      <Formik
        initialValues={initState}
        onSubmit={(values, { resetForm }) => {
          console.log(values);

          resetForm();
        }}

        validationSchema={Yup.object({
          name: Yup.string()
            .required('Required!')
            .min(2, 'Must be 2 or more characters')
            .max(15, 'Must be 15 characters or less!'),
          email: Yup.string().required('Required!').email('Invalid email!'),
          password: Yup.string()
            .required('Required!')
            .min(6, 'Must be 6 or more characters!')
            .max(30, 'Must be 30 characters or less!')
            .matches(/[a-zA-Z]/, 'Password can only contain Latin letters.'),
          repeatPassword: Yup.string()
            .required('Required!')
            .min(6, 'Must be 6 or more characters!')
            .max(30, 'Must be 30 characters or less!')
            .oneOf([Yup.ref('password'), null], 'Passwords must match'),
        })}

      >
        {({ handleReset }) => (
          <Form>
            <MyTextInput
              name="name"
              label="Name"
              id="name"
              placeholder="Name"
            />

            <MyTextInput
              name="email"
              label="Email"
              type="email"
              id="email"
              placeholder="Email"
            />

            <MyTextInput
              name="password"
              label="Password"
              type="password"
              id="password"
              placeholder="Password"
            />

            <MyTextInput
              name="repeatPassword"
              label="Repeat Password"
              type="password"
              id="repeatPassword"
              placeholder="Repeat Password"
            />

            <button type="submit">Create</button>
            <button type="button" onClick={handleReset}>
              Reset
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
