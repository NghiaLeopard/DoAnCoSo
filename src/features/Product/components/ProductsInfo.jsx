import React from 'react';
import PropTypes from 'prop-types';
import { Box, Typography, makeStyles } from '@material-ui/core';
import { formatPrice } from './utils';

ProductsInfo.propTypes = {};

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
    borderBottom: `1px solid ${theme.palette.grey[200]}`,
  },

  description: {
    margin: theme.spacing(2, 0),
  },

  priceBox: {
    padding: theme.spacing(2),
    background: theme.palette.grey[200],
  },

  salePrice: {
    marginRight: theme.spacing(3),
    fontSize: theme.typography.h4.fontSize,
    fontWeight: 'bold',
  },

  originalPrice: {
    marginRight: theme.spacing(2),
    textDecoration: 'line-through',
  },
}));

function ProductsInfo({ product = {} }) {
  const classes = useStyles();
  const { name, shortDescription, salePrice, originalPrice, promotionPercent } = product;
  return (
    <Box className={classes.root}>
      <Typography component="h1" variant="h4">
        {name}
      </Typography>
      <Typography variant="body2" className={classes.description}>
        {shortDescription}
      </Typography>

      <Box className={classes.priceBox}>
        <Box component="span" className={classes.salePrice}>
          {formatPrice(salePrice)}
        </Box>

        {promotionPercent > 0 && (
          <>
            <Box component="span" className={classes.originalPrice}>
              {formatPrice(originalPrice)}
            </Box>
            <Box component="span">{` -${promotionPercent}%`}</Box>
          </>
        )}
      </Box>
    </Box>
  );
}

export default ProductsInfo;
