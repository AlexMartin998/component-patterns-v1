import { ErrorMessage, useField } from 'formik';

interface Props {
  label: string;
  name: string;
  id?: string;
  placeholder?: string;
  type?: 'text' | 'email' | 'password';
  [x: string]: any;
}
export const MyTextInput = ({ label, ...props }: Props) => {
  const [field] = useField(props);

  // console.log({ field });

  return (
    <>
      <label htmlFor={props.id || props.name}>{label}</label>
      <input className="text-input" {...field} {...props} />
      <ErrorMessage name={props.name} component="span" />

      {/* Obtener el error con el  meta
      {meta.touched && meta.error && <span>{meta.error}</span>} */}
    </>
  );
};
