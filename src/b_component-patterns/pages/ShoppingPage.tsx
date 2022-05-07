import {
  ProductCard,
  ProductImg,
  ProductTitle,
  ProductButtons,
} from '../components';
import { useShoppingCart } from '../hooks/useShoppingCart';
import { products } from '../data/products';
import './../styles/custom-styles.css';

export const ShoppingPage = () => {
  const { shoppingCart, onProductCountChange } = useShoppingCart();

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
        {products.map(product => (
          <ProductCard
            key={product.id}
            product={product}
            className="bg-dark text-white"
            /*  */
            // Value mantiene la sincronia entre las cards
            value={shoppingCart[product.id]?.count || 0}
            // Disparar EVENTOS en nuestro Component prefabricado: Eventos q emiten values
            // onChange emite lo q recibe: recive onChangeArgs y los emite y pasa a la f(x) onProductCountChange - como el  .custom() del express-validator
            onChange={onProductCountChange} //evento q se dispara con c/clic
          >
            <ProductImg className="custom-image" />
            <ProductTitle className="text-bold" />
            <ProductButtons className="custom-buttons" />
          </ProductCard>
        ))}
      </div>

      {/* Buscamos implementar aldo asi: Value va a permitir tener el counter sincronizado.
            <input 
              value={counter}
              onChange={e => setCounter(e.target.value)}
            />
        */}

      <div className="shopping-card">
        {Object.values(shoppingCart).map(product => (
          <ProductCard
            key={product.id}
            product={product}
            className="bg-dark text-white"
            style={{ width: '100px' }}
            value={product.count} // c/clic actualiza este value <- product.count
            onChange={onProductCountChange}
          >
            <ProductImg className="custom-image" />
            <ProductButtons
              className="custom-buttons"
              style={{ display: 'flex', justifyContent: 'center' }}
            />
          </ProductCard>
        ))}
      </div>
    </div>
  );
};
