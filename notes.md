# Form - Formik

## Inicio:
  -- Instalar formik
    - npm i formik

  https://formik.org/docs/tutorial



  -- Formik - Obtener información del formulario
    - onSubmit
      - Se va a disparar cuando pasen todas las reglas de validacion
    - Podemos desestructurar del useFormik lo que necesitemos



  -- Formik - Validaciones manuales
    - validate  <- f(x) para las validaciones de cada input
      - Es reemplazada por   validationSchema    q da mas power, pero mas adelante
    
    - Validate de Formik W con un Obj  errors:
      - touched, para q solo afecte al input tocado
      - handleBlur, detectar el cambio de foco

      ```js
        // Validaciones manuales con el   validate
        const validate = ({ firstName, lastName, email }: FormValues) => {
          const errors: FormikErrors<FormValues> = {};

          if ([firstName, lastName, email].includes('')) {
            errors.firstName = 'Required!';
            errors.lastName = 'Required!';
            errors.email = 'Required!';
          }

          return errors;
        };

        // useFormik
        const { handleChange, values, handleSubmit, errors, touched, handleBlur } =
          useFormik({
            initialValues: {
              firstName: '',
              lastName: '',
              email: '',
            },
            onSubmit: values => {
              console.log(values);
            },
            validate,
          });

        // Utilizar
         <input
          type="text"
          name="firstName"
          id="firstName"

          onChange={handleChange}
          value={values.firstName}
          onBlur={handleBlur}
        />
        {touched.firstName && errors.firstName && (
          <span>{errors.firstName}</span>
        )}
      ```




  -- Yup - ValidationSchema Builder
    - Hace el codigo mas legible, y a Formik le gusta mucho
      - Para NO tener tanta logica q requiere el   validate  de formik.
    - Utilizamos Yup para manejar las validaciones con el   ValidationSquema
      - El useFormik se mantiene igual, solo reemplazamos el   validate  x  validationSchema
        - Se usa casi como el  express-validator

      ```js
        const { handleChange, values, handleSubmit, errors, touched, handleBlur } =
          useFormik({
            ......

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

      ```



  -- Formik - getFieldProps
    - getFieldProps
      - Recibe el  name='' del input, y a ese le agrega el: name, onChange, value, onBlur


  -- Formik - Components
    - Funcionan en base a un ContextAPI Provider


  -- Formik - Selects y Checks
    - Selector    <-    as='selecor'
    - Checkbox    <-    type='checkbox'   


  -- Formik - Abstraction - useField
    - Creamos el componente MyTextInput 
      - Le pasamos la info con el   useField(propr)


  -- Formik - Custom Select
    - Sin mas configuracion, recibe a los  children en las  props
      - Por eso solo creo los  <option>  y y el  MySelect lo recibe en lso props


  -- Formik - Custom Checkbox
    - Especificamos el   type: 'checkbox'  en el componente

  -- 


