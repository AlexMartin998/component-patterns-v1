import {
  ProductCard,
  ProductImg,
  ProductTitle,
  ProductButtons,
} from '../components';

const product = {
  id: '1',
  title: 'Coffee mug - card',
  img: './coffee-mug.png',
};

export const ShoppingPage = () => {
  return (
    <div>
      <h1>Shopping Store</h1>
      <hr />

      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'wrap',
        }}
      >
        {/* Compound Component Pattern: */}
        <ProductCard product={product}>
          <ProductCard.Image />
          <ProductCard.Title title="Cafe" />
          <ProductCard.Buttons />
        </ProductCard>

        {/* Le gusta a FH: */}
        <ProductCard product={product}>
          <ProductImg />
          <ProductTitle title="Hello World" />
          <ProductButtons />
        </ProductCard>
      </div>
    </div>
  );
};
