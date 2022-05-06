import { CSSProperties, useContext } from 'react';

import { ProductContext } from './ProductCard';

import noImg from './../assets/no-image.jpg';
import styles from './../styles/styles.module.css';

export interface Props {
  img?: string;
  className?: string;
  style?: CSSProperties;
}

export const ProductImg = ({ img, className, style }: Props) => {
  const { product } = useContext(ProductContext);
  const src = img ? img : product.img || noImg;

  return (
    <img
      src={src}
      alt="Product img"
      className={`${styles.productImg} ${className}`}
      style={style}
    />
  );
};
