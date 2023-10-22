import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Box, Typography } from '@material-ui/core';
import { Skeleton } from '@material-ui/lab';
import { STATIC_HOST, THUMBNAIL_PLACEHOLDER } from 'constants/index';
import { useHistory, useRouteMatch } from 'react-router-dom/cjs/react-router-dom.min';
import { formatPrice } from './utils';

Product.propTypes = {};

function Product({ product }) {
  const history = useHistory();
  const {
    params: { productId },
  } = useRouteMatch();

  const thumbnailUrl = product.thumbnail ? `${STATIC_HOST}${product.thumbnail?.url}` : THUMBNAIL_PLACEHOLDER;

  const handleClick = () => {
    history.push(`/products/${product.id}`);
  };

  return (
    <Box padding={1} onClick={handleClick}>
      <Box padding={1} minHeight="215px">
        <img src={thumbnailUrl} alt={product.name} width="100%" />
      </Box>

      <Typography variant="body2">{product.name}</Typography>
      <Typography variant="body2">
        <Box component="span" fontWeight="bold" mr="1">
          {formatPrice(product.salePrice)}
        </Box>
        {product.promotionPercent ? ` -${product.promotionPercent}%` : ''}
      </Typography>
    </Box>
  );
}

export default Product;
