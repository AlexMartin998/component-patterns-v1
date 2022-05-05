import { useContext } from 'react';

import { ProductContext } from './ProductCard';

import noImg from './../assets/no-image.jpg';
import styles from './../styles/styles.module.css';

export const ProductImg = ({ img = '' }) => {
  const { product } = useContext(ProductContext);
  const src = img ? img : product.img || noImg;

  return <img src={src} alt="Product img" className={styles.productImg} />;
};
