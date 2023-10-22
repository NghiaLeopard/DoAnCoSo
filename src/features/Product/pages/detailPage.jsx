import React from 'react';
import PropTypes from 'prop-types';
import { Box, Container, Grid, Paper, makeStyles } from '@material-ui/core';
import ProductsThumbNail from '../components/ProductsThumbnail';
import { Route, Router, Switch, useRouteMatch } from 'react-router-dom/cjs/react-router-dom.min';
import useProductDetail from '../hooks/useProductDetail';
import ProductsInfo from '../components/ProductsInfo';
import AddToCartForm from '../components/AddToCartForm';
import ProductMenu from '../components/ProductMenu';
import ProductDescription from '../components/ProductDescription';
import ProductAdditional from '../components/ProductAdditional';
import ProductReviews from '../components/ProductReviews';

DetailPage.propTypes = {};

const useStyles = makeStyles((theme) => ({
  root: {},

  left: {
    width: '400px',
    borderRight: `1px solid ${theme.palette.grey[300]}`,
    padding: theme.spacing(1.5),
  },

  right: {
    flex: '1 1 0',
    padding: theme.spacing(1.5),
  },
}));

function DetailPage() {
  const classes = useStyles();
  const {
    params: { productId },
    url,
  } = useRouteMatch();

  const { product, loading } = useProductDetail(productId);

  if (loading) {
    return <Box>Loading</Box>;
  }

  const handleAddToCartSubmit = (formValues) => {
    console.log(formValues);
  };

  return (
    <Box className={classes.root}>
      <Container>
        <Paper elevation={0}>
          <Grid container>
            <Grid item className={classes.left}>
              <ProductsThumbNail product={product} />
            </Grid>
            <Grid item className={classes.right}>
              <ProductsInfo product={product} />
              <AddToCartForm onSubmit={handleAddToCartSubmit} />
            </Grid>
          </Grid>
        </Paper>

        <ProductMenu />

        <Switch>
          <Route path={url} exact>
            <ProductDescription product={product} />
          </Route>

          <Route path={`${url}/additional`} component={ProductAdditional} />
          <Route path={`${url}/reviews`} component={ProductReviews} />
        </Switch>
      </Container>
    </Box>
  );
}

export default DetailPage;
