import { useState, useEffect, useRef } from 'react';
import { InitialValues, onChangeArgs, Product } from '../interfaces/interfaces';

interface useProductArgs {
  product: Product;

  onChange?: (args: onChangeArgs) => void;
  value?: number;

  initialValues?: InitialValues;
}

export const useProduct = ({
  onChange,
  product,
  value = 0,
  initialValues,
}: useProductArgs) => {
  const [counter, setCounter] = useState(initialValues?.count || value);
  const isMounted = useRef(false); // component q usa nuestro hook esta montado?

  // Se dispara cuanso se carga x 1ra vez y cuando cambia la dependencia
  useEffect(() => {
    if (!isMounted.current) return;

    // Actualiza en local a c/child q use este hook - desde el padre
    setCounter(value);
  }, [value]);

  useEffect(() => {
    isMounted.current = true;
  }, []);

  const increaseBy = (value: number) => {
    const newValue = Math.min(
      Math.max(counter + value, 0),
      initialValues?.maxCount || Infinity
    );

    /* // // // 3 > +(undefined || null)
    // const newValue = initialValues?.maxCount
    //   ? Math.max(Math.min(initialValues?.maxCount, counter + value), 0)
    //   : Math.max(counter + value, 0);

    // let newValue = Math.max(counter + value, 0);
    // newValue = initialValues?.maxCount
    //   ? Math.min(newValue, initialValues.maxCount)
    //   : newValue; */

    setCounter(newValue); // counter tiene el value anterior x eso no lo uso - newValue

    // Aqui se Dispara este evento onchange y Emite los args q recibira el handler
    onChange && onChange({ count: newValue, product });
  };

  const reset = () => {
    setCounter(initialValues?.count || value);
  };

  return {
    counter,
    isMaxCountReached:
      !!initialValues?.count && initialValues.maxCount === counter,

    increaseBy,
    reset,
  };
};
