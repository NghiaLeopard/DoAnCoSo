import React from 'react';
import PropTypes from 'prop-types';
import { Box, Button, Container, Grid, Paper, makeStyles } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { cartItemsCountSelector } from './createSelector';
import ProductsListSell from './components/ProductsListSell';
import TotalPrice from './components/TotalPrice';
import { removeCart } from './cartSelector';

CartFeature.propTypes = {};

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      marginTop: theme.spacing(2),
    },
  },

  left: {
    flex: '1 1 0',
  },

  right: {
    width: '350px',
  },
}));

function CartFeature(props) {
  const cartItemsCount = useSelector(cartItemsCountSelector);
  const classes = useStyles();
  const dispatch = useDispatch();

  const handleRemoveCart = (id) => {
    dispatch(removeCart(id));
  };

  return (
    <Box>
      <Container>
        <p>GIỎ HÀNG ({cartItemsCount} sản phẩm)</p>
        <Grid container spacing={2}>
          <Grid item className={classes.left}>
            <Paper elevation={0}>
              <ProductsListSell onChange={handleRemoveCart} />
            </Paper>
          </Grid>
          <Grid item className={classes.right}>
            <Paper elevation={0}>
              <TotalPrice />
            </Paper>

            <Button variant="contained" color="secondary" style={{ padding: '10px 90px', marginTop: '20px' }}>
              Tiến hành đặt hàng
            </Button>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default CartFeature;
