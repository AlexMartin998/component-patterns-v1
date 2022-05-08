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
        initialValues={{
          count: 6,
          maxCount: 10,
        }}
      >
        {({ isMaxCountReached, maxCount, reset, increaseBy }) => (
          <>
            <ProductImg className="custom-image" />
            <ProductTitle className="text-bold" />
            <ProductButtons className="custom-buttons" />

            {/* Provided by my HOC: */}
            {!isMaxCountReached && (
              <button onClick={() => increaseBy(2)}>+2</button>
            )}
            <button onClick={() => increaseBy(-2)}>-2</button>
            <button onClick={reset}>Reset</button>
            <span>{maxCount}</span>
          </>
        )}
      </ProductCard>
    </div>
  );
};
