import { useState } from 'react';

import { Product, ProductInCart } from '../interfaces/interfaces';

export const useShoppingCart = () => {
  const [shoppingCart, setShoppingCart] = useState<{
    [key: string]: ProductInCart;
  }>({});

  const onProductCountChange = ({
    count,
    product,
  }: {
    count: number;
    product: Product;
  }) => {
    setShoppingCart(oldShoppingCart => {
      // count recibe el valor de prods: SIN tener el control aqui, todo lo controla el  useProduct
      console.log({ count });
      if (count <= 0) {
        // Eliminar producto: En React NO se debe mutar el State
        const { [product.id]: toDelete, ...rest } = oldShoppingCart;
        return rest;
      }

      return { ...oldShoppingCart, [product.id]: { ...product, count } };
    });
  };

  return {
    shoppingCart,
    onProductCountChange,
  };
};
