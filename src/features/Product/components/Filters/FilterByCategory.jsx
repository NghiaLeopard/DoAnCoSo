import React from 'react';
import PropTypes from 'prop-types';
import { useState } from 'react';
import { useEffect } from 'react';
import categoryApi from 'api/categoryApi';
import { Box, Typography, makeStyles } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { categoryRedux } from 'features/Auth/userSlice';
import { data } from './categorySlice';

FilterByCategory.propTypes = {
  onChange: PropTypes.func,
};

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },

  menu: {
    padding: 0,
    margin: 0,
    listStyleType: 'none',

    '& > li': {
      marginTop: theme.spacing(1),
      Transition: 'all .25s',

      '&:hover': {
        color: theme.palette.primary.main,
        cursor: 'pointer',
      },
    },
  },
}));

function FilterByCategory({ onChange }) {
  const [categoryList, setCategoryList] = useState([]);
  const dispatch = useDispatch();

  const classes = useStyles();

  useEffect(() => {
    (async () => {
      try {
        const list = await categoryApi.getAll();
        const data1 = list.filter((x) => x.name !== 'Khẩu trang');
        const data2 = data1.filter((x) => x.name !== 'Thời trang');
        const newData = data2.filter((x) => x.name !== 'Làm đẹp');
        setCategoryList(
          newData.map((x) => ({
            id: x.id,
            name: x.name,
          }))
        );

        dispatch(data(list));
      } catch (error) {}
    })();
  }, []);

  const handleCategoryClick = (category) => {
    if (onChange) {
      onChange(category.id);
    }
  };

  return (
    <Box className={classes.root}>
      <Typography variant="subtitle2">DANH MỤC SẢN PHẨM</Typography>

      <ul className={classes.menu}>
        {categoryList.map((category) => (
          <li key={category.id} onClick={() => handleCategoryClick(category)}>
            <Typography variant="body2">{category.name}</Typography>
          </li>
        ))}
      </ul>
    </Box>
  );
}

export default FilterByCategory;
