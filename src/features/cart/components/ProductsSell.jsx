import React from 'react';
import PropTypes from 'prop-types';
import { STATIC_HOST, THUMBNAIL_PLACEHOLDER } from 'constants/index';
import { Button, makeStyles } from '@material-ui/core';
import { formatPrice } from 'features/Product/components/utils';
import QuantitySellCart from 'components/form-control/quantityField/QuantitySellCart';
ProductsSell.propTypes = {};

function ProductsSell({ onChange, products }) {
  const thumbnailUrl = products.product.thumbnail
    ? `${STATIC_HOST}${products.product.thumbnail?.url}`
    : THUMBNAIL_PLACEHOLDER;
  const handleRemove = (id) => {
    onChange(id);
  };

  console.log(products);
  return (
    <div style={{ display: 'flex', marginBottom: '20px', paddingBottom: '20px' }}>
      <img src={thumbnailUrl} alt="pro" style={{ height: '150px' }} />
      <div style={{ marginLeft: '20px' }}>
        <div style={{ fontSize: '22px', fontWeight: 'bold', minWidth: '280px' }}>{products.product.name}</div>
        <Button
          style={{ marginTop: '20px' }}
          onClick={() => handleRemove(products.id)}
          variant="contained"
          color="primary"
        >
          Xóa
        </Button>
      </div>

      <div>
        <div style={{ marginLeft: '80px', fontSize: '22px', fontWeight: 'bold' }}>
          {formatPrice(products.product.salePrice)}
        </div>
        <div style={{ marginLeft: '80px', display: 'flex', fontSize: '15px' }}>
          <div style={{ textDecoration: 'line-through' }}> {products.product.originalPrice}đ </div>
          {products.product.promotionPercent ? ` | -${products.product.promotionPercent}%` : '0%'}
        </div>
      </div>
      <QuantitySellCart />
    </div>
  );
}

export default ProductsSell;
