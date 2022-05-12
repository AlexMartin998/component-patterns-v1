import { useFormik } from 'formik';
import * as yup from 'yup';

import './../styles/styles.css';

interface FormValues {
  firstName: string;
  lastName: string;
  email: string;
}

const initialValues: FormValues = {
  firstName: '',
  lastName: '',
  email: '',
};

export const FormikYupPage = () => {
  const { handleSubmit, errors, touched, getFieldProps } = useFormik({
    initialValues,
    onSubmit: values => {
      console.log(values);
    },

    validationSchema: yup.object({
      firstName: yup
        .string()
        .required('Required!')
        .max(15, 'Must be 15 characters or less!'),
      lastName: yup
        .string()
        .required('Required!')
        .max(10, 'Must be 10 characters or less!'),
      email: yup.string().required('Required!').email('Invalid email!'),
    }),
  });

  return (
    <div>
      <h1>Basic Tutorial</h1>

      <form onSubmit={handleSubmit} noValidate>
        <label htmlFor="firstName">First Name</label>
        <input
          type="text"
          id="firstName"
          {...getFieldProps('firstName')}
          /* name="firstName"
          onChange={handleChange}
          value={values.firstName}
          onBlur={handleBlur} */
        />
        {touched.firstName && errors.firstName && (
          <span>{errors.firstName}</span>
        )}

        <label htmlFor="lastName">Last Name</label>
        <input type="text" id="lastName" {...getFieldProps('lastName')} />
        {touched.lastName && errors.lastName && <span>{errors.lastName}</span>}

        <label htmlFor="email">Email</label>
        <input type="email" id="email" {...getFieldProps('email')} />
        {touched.email && errors.email && <span>{errors.email}</span>}

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};
