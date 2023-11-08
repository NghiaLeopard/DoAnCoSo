import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import ProductsSell from './ProductsSell';

ProductsListSell.propTypes = {};

function ProductsListSell(props) {
  const cartItems = useSelector((state) => state.cart.cartItems);

  console.log(cartItems);
  return (
    <div>
      <div style={{ padding: '20px 0px 20px 15px' }}>DACS Trading </div>

      <ul style={{ listStyle: 'none' }}>
        {cartItems.map((products) => (
          <li key={products.id}>
            <ProductsSell products={products} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProductsListSell;
