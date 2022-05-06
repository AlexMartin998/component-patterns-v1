import { ProductCard as ProductCardHOC } from './ProductCard';

import { ProductButtons } from './ProductButtons';
import { ProductImg } from './ProductImage';
import { ProductTitle } from './ProductTitle';
import { ProductCardHOCProps } from '../interfaces/interfaces';

// export * from './ProductCard';
export * from './ProductButtons';
export { ProductImg } from './ProductImage';
export { ProductTitle } from './ProductTitle';

// // NO funciona el  spread operatos - Necesitamos q se hagan setters?
export const ProductCard: ProductCardHOCProps = Object.assign(ProductCardHOC, {
  Title: ProductTitle,
  Image: ProductImg,
  Buttons: ProductButtons,
});
