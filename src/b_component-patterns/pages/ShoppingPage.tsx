import {
  ProductCard,
  ProductImg,
  ProductTitle,
  ProductButtons,
} from '../components';

import './../styles/custom-styles.css';

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
        <ProductCard
          product={product}
          className="bg-dark text-white"
          style={{ boxShadow: '10px 10px 10px rgba(0,0,0,0.2)' }}
        >
          <ProductCard.Image className="custom-image" />
          <ProductCard.Title title="Cafe" className="text-bold" />
          <ProductCard.Buttons className="custom-buttons" />
        </ProductCard>

        {/* Le gusta a FH: */}
        <ProductCard product={product} className="bg-dark text-white">
          <ProductImg className="custom-image" />
          <ProductTitle title="Hello World" className="text-bold" />
          <ProductButtons className="custom-buttons" />
        </ProductCard>

        <ProductCard product={product} style={{ backgroundColor: '#70D1F8' }}>
          <ProductImg />
          <ProductTitle title="Hello World" />
          <ProductButtons style={{ display: 'flex', justifyContent: 'end' }} />
        </ProductCard>
      </div>
    </div>
  );
};
