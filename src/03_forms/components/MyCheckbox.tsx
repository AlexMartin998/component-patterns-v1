import { useField, ErrorMessage } from 'formik';

interface Props {
  label: string;
  name: string;
  id?: string;
  [x: string]: any;
}

export const MyCheckbox = ({ label, ...props }: Props) => {
  const [field] = useField({ ...props, type: 'checkbox' });

  return (
    <>
      <div>
        <input type="checkbox" {...field} {...props} />
        <label htmlFor={props.id || props.name}>{label}</label>
      </div>
      <ErrorMessage name={props.name} component="span" />
    </>
  );
};
