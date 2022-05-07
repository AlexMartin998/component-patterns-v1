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
      // Tengo el control del state aqui. Me viene 1/-1 y con eso juego
      const productInCart: ProductInCart = oldShoppingCart[product.id] || {
        ...product,
        count: 0,
      };

      // Si el count del productInCart > 0 lo agrego al Obj de Objs
      if (Math.max(productInCart.count + count, 0) > 0) {
        productInCart.count += count;
        return { ...oldShoppingCart, [product.id]: productInCart };
      }

      // Borrar el produto
      const { [product.id]: toDelete, ...rest } = oldShoppingCart;
      return rest;

      /* Otra forma de hacerlo
       // Aqui tengo el control del state aqui. Me viene 1/-1 y con eso juego
      const productInCart: ProductInCart = oldShoppingCart[product.id] || {
        ...product,
        count: 0,
      };

      // Modificar el count contralandolo aqui
      productInCart.count += count;

      // Eliminar el produto
      if (productInCart.count <= 0) {
        const { [product.id]: toDelete, ...rest } = oldShoppingCart;
        return rest;
      }

      return { ...oldShoppingCart, [product.id]: productInCart };
      */

      /* SIN tener el control aqui, todo lo controla el  useProduct
       if (count <= 0) {
        // Eliminar producto: En React NO se debe mutar el State
        const { [product.id]: toDelete, ...rest } = oldShoppingCart;
        return rest;
      }

      return { ...oldShoppingCart, [product.id]: { ...product, count } }; */
    });
  };

  return {
    shoppingCart,
    onProductCountChange,
  };
};
