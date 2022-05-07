import { useState, useEffect, useRef } from 'react';
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

  const isControlled = useRef(!!onChange);

  useEffect(() => {
    // Actualiza en local a c/child q use este hook - desde el padre
    setCounter(value);
  }, [value]);

  const increaseBy = (value: number) => {
    // Si tengo l f(x) onChange <- La propiedad es controlada desde afuera:
    if (isControlled.current) return onChange!({ count: value, product });

    const newValue = Math.max(counter + value, 0);
    setCounter(newValue); // counter tiene el value anterior x eso no lo uso

    // Aqui se Dispara este evento onchange y Emite los args q recibira el handler
    onChange && onChange({ count: newValue, product });
  };

  return { counter, increaseBy };
};
