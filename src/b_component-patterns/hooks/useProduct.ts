import { useState, useEffect } from 'react';
import { onChangeArgs, Product } from '../interfaces/interfaces';

interface useProductArgs {
  product: Product;
  onChange?: (args: onChangeArgs) => void;
  value?: number;
}

export const useProduct = ({
  onChange,
  product,
  value = 0,
}: useProductArgs) => {
  const [counter, setCounter] = useState(value);

  useEffect(() => {
    // Actualiza en local a c/child q use este hook - desde el padre
    setCounter(value);
  }, [value]);

  const increaseBy = (value: number) => {
    const newValue = Math.max(counter + value, 0);
    /* if (newValue === 0) {
      onChange && onChange({ count: 0.01, product });
    return setCounter(0);
    } */
    setCounter(newValue); // counter tiene el value anterior x eso no lo uso

    // Aqui se Dispara este evento onchange y Emite los args q recibira el handler
    onChange && onChange({ count: newValue, product });
  };

  return { counter, increaseBy };
};
