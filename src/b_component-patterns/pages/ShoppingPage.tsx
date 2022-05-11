import {
  ProductCard,
  ProductImg,
  ProductTitle,
  ProductButtons,
} from '../components';
import { products } from '../data/products';

const product = products[1];

export const ShoppingPage = () => {
  return (
    <div>
      <h1>Shopping Store</h1>
      <hr />

      <ProductCard
        key={product.id}
        product={product}
        initialValues={{
          count: 6,
          maxCount: 10,
        }}
      >
        {({ isMaxCountReached, maxCount, reset, increaseBy }) => (
          <>
            <ProductImg />
            <ProductTitle />
            <ProductButtons />
          </>
        )}
      </ProductCard>
    </div>
  );
};
