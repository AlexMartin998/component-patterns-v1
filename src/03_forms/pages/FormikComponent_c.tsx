import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as yup from 'yup';

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

export const FormikComponent = () => {
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
            <label htmlFor="firstName">First Name</label>
            <Field
              name="firstName"
              type="text"
              id="firstName"
              placeholder="First Name"
            />
            <ErrorMessage name="firstName" component="span" />
            {/* <input type="text" id="firstName" {...getFieldProps('firstName')} /> */}
            {/* {touched.firstName && errors.firstName && (
              <span>{errors.firstName}</span>
            )} */}

            <label htmlFor="lastName">Last Name</label>
            <Field name="lastName" type="text" id="lastName" />
            <ErrorMessage name="lastName" component="span" />

            <label htmlFor="email">Email</label>
            <Field name="email" type="text" id="email" />
            <ErrorMessage name="email" component="span" />

            <label htmlFor="jobType">Job Type</label>
            <Field name="jobType" as="select" id="jobType">
              <option value="">Pick somethig</option>
              <option value="developer">Developer</option>
              <option value="it-senior">IT Senior</option>

              <option value="it-junior">IT Junior</option>
            </Field>
            <ErrorMessage name="jobType" component="span" />

            <div>
              <Field name="terms" type="checkbox" id="terms" />
              <label htmlFor="terms">Terms and Conditions</label>
            </div>
            <ErrorMessage name="terms" component="span" />

            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
