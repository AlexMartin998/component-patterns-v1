import { useState } from 'react';

export const useProduct = () => {
  const [counter, setCounter] = useState(0);

  const increaseBy = (value: number) => {
    setCounter(Math.max(counter + value, 0));
  };

  return { counter, increaseBy };
};
