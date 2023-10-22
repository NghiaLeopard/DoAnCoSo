import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import { Box, Container, Grid, Paper, Typography, makeStyles } from '@material-ui/core';
import { useEffect } from 'react';
import productApi from 'api/productApi';
import { useState } from 'react';
import queryString from 'query-string';
import ProductsListSkeleton from '../components/ProductsListSkeleton';
import ProductList from '../components/ProductsList';
import Pagination from '@material-ui/lab/Pagination';
import ProductsSort from '../components/ProductsSort';
import ProductFilter from '../components/ProductFilter';
import FilterViewer from '../components/FilterViewer';
import { useHistory, useLocation } from 'react-router-dom/cjs/react-router-dom.min';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      marginTop: theme.spacing(2),
    },
  },

  left: {
    width: '250px',
  },

  right: {
    flex: '1 1 0',
  },

  pagination: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: '30px',
    paddingBottom: '20px',
  },
}));

ListPage.propTypes = {};
function ListPage(props) {
  const classes = useStyles();
  const history = useHistory();
  const location = useLocation();
  // chuyển về 1 filters , cũng như filter kia thôi nhưng mà sẽ handle được back lại các sự kiện
  const queryParam = useMemo(() => {
    const params = queryString.parse(location.search);

    return {
      ...params,
      _page: Number(params._page) || 1,
      _limit: Number(params._limit) || 12,
      _sort: params._sort || 'salePrice:ASC',
      isPromotion: params.isPromotion === 'true',
      isFreeShip: params.isFreeShip === 'true',
    };
  }, [location.search]);
  const [productList, setProductList] = useState([]);
  const [pagination, setPagination] = useState({
    limit: 12,
    page: 1,
    total: 120,
  });

  const [loading, setLoading] = useState(true);
  // Param trả về 1 object nên phải chuyển thành số
  // const [filters, setFilters] = useState({
  //   ...queryParam,
  //   _page: Number(queryParam._page) || 1,
  //   _limit: Number(queryParam._limit) || 12,
  //   _sort: queryParam._sort || 'salePrice:ASC',
  // });

  useEffect(() => {
    (async () => {
      try {
        const { data, pagination } = await productApi.getAll(queryParam);
        setProductList(data);
        setPagination(pagination);
        console.log({ data, pagination });
      } catch (error) {
        console.log('failed to fetch product list', error);
      }

      setLoading(false);
    })();
  }, [queryParam]);

  // useEffect(() => {
  //   history.push({
  //     pathname: history.location.pathname,
  //     search: queryString.stringify(queryParam),
  //   });
  // }, [history, queryParam]);
  // tại sao ở đây không dùng location bởi vì mỗi khi push lại thì location nó thay đổi nên sẽ tạo ra vòng lặp vô hạn
  // còn history.location thì nó là 1 object chứa location nên sẽ không thay đổi về tham chiếu nên không bị vòng lặp vô hạn

  const handleOnChange = (e, page) => {
    // setFilters((prevFilters) => ({
    //   ...prevFilters,
    //   _page: page,
    // }));

    const filter = {
      ...queryParam,
      _page: page,
    };

    history.push({
      pathname: history.location.pathname,
      search: queryString.stringify(filter),
    });
  };

  const handleSortChange = (newSortChange) => {
    // setFilters((prevFilters) => ({
    //   ...prevFilters,
    //   _sort: newSortChange,
    // }));

    const filter = {
      ...queryParam,
      _sort: newSortChange,
    };

    history.push({
      pathname: history.location.pathname,
      search: queryString.stringify(filter),
    });
  };

  const handleFilterChange = (newFilters) => {
    // setFilters((prevFilters) => ({
    //   ...prevFilters,
    //   ...newFilters,
    // }));

    const filter = {
      ...queryParam,
      ...newFilters,
    };
    history.push({
      pathname: history.location.pathname,
      search: queryString.stringify(filter),
    });
  };

  const setNewFilter = (newFilters) => {
    // setFilters(newFilters);

    history.push({
      pathname: history.location.pathname,
      search: queryString.stringify(newFilters),
    });
  };
  return (
    <Box>
      <Container>
        <Grid container spacing={1}>
          <Grid item className={classes.left}>
            <Paper elevation={0}>
              <ProductFilter filters={queryParam} onChange={handleFilterChange} />
            </Paper>
          </Grid>

          <Grid item className={classes.right}>
            <Paper elevation={0}>
              <ProductsSort currentSort={queryParam._sort} onChange={handleSortChange} />

              <FilterViewer filters={queryParam} onChange={setNewFilter} />

              {loading ? <ProductsListSkeleton length={9} /> : <ProductList data={productList} />}

              <Box className={classes.pagination}>
                <Pagination
                  count={Math.ceil(pagination.total / pagination.limit)}
                  page={pagination.page}
                  color="primary"
                  onChange={handleOnChange}
                />
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default ListPage;
