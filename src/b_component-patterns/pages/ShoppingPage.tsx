import {
  ProductCard,
  ProductImg,
  ProductTitle,
  ProductButtons,
} from '../components';
import { products } from '../data/products';
import './../styles/custom-styles.css';

const product = products[1];

export const ShoppingPage = () => {
  return (
    <div>
      <h1>Shopping Store</h1>
      <hr />

      <ProductCard
        key={product.id}
        product={product}
        className="bg-dark text-white"
      >
        <ProductImg className="custom-image" />
        <ProductTitle className="text-bold" />
        <ProductButtons className="custom-buttons" />
      </ProductCard>
    </div>
  );
};
