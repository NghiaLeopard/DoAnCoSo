import React from 'react';
import PropTypes from 'prop-types';
import { Box, Container, Grid, Paper, makeStyles } from '@material-ui/core';
import { useSelector } from 'react-redux';
import { cartItemsCountSelector } from './ceateSelector';

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

  return (
    <Box>
      <Container>
        <p>GIỎ HÀNG ({cartItemsCount} sản phẩm)</p>
        <Grid container spacing={2}>
          <Grid item className={classes.left}>
            <Paper elevation={0}>Left</Paper>
          </Grid>
          <Grid item className={classes.right}>
            <Paper elevation={0}>right</Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default CartFeature;
