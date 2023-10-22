import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import { Box, Chip, makeStyles } from '@material-ui/core';
import { useSelector } from 'react-redux';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexFlow: 'row wrap',
    alignItems: 'center',
    padding: 0,

    margin: theme.spacing(2, 0),
    listStyleType: 'none',

    '& > li': {
      margin: 0,
      padding: theme.spacing(1),
    },
  },
}));

const FILTER_LIST = [
  {
    id: 1,
    getLabel: () => 'Giao hàng miễn phí',
    isActive: (filters) => filters.isFreeShip,
    isVisible: () => true,
    isRemovable: false,
    isCategory: false,

    onRemove: (filters) => {},
    onToggle: (filters) => {
      const newFilters = { ...filters };

      newFilters.isFreeShip = newFilters.isFreeShip === true ? false : true;

      return newFilters;
    },
  },
  {
    id: 2,
    getLabel: () => 'Có khuyễn mãi',
    isActive: () => true,
    isVisible: (filters) => filters.isPromotion,
    isRemovable: true,
    isCategory: false,

    onRemove: (filters) => {
      const newFilters = { ...filters };
      delete newFilters.isPromotion;
      return newFilters;
    },
    onToggle: () => {},
  },
  {
    id: 3,
    getLabel: (filters) => `từ ${filters.salePrice_gte} đến ${filters.salePrice_lte}`,
    isActive: () => true,
    isVisible: (filters) =>
      (Object.keys(filters).includes('salePrice_lte') && Object.keys(filters).includes('salePrice_gte')) ||
      (filters.salePrice_lte > 0 && filters.salePrice_gte > 0),
    isRemovable: true,
    isCategory: false,

    onRemove: (filters) => {
      const newFilters = { ...filters };
      delete newFilters.salePrice_gte;
      delete newFilters.salePrice_lte;

      return newFilters;
    },
    onToggle: () => {},
  },
  {
    id: 4,
    getLabel: () => '',
    isActive: () => true,
    isVisible: (filters) => Object.keys(filters).includes('category'),
    isRemovable: true,
    isCategory: true,
    onRemove: (filters) => {
      const newFilters = { ...filters };
      delete newFilters.category;

      return newFilters;
    },
    onToggle: () => {},
  },
];

FilterViewer.propTypes = {
  filters: PropTypes.object,
  onChange: PropTypes.func,
};

function FilterViewer({ filters = {}, onChange = null }) {
  console.log(filters);
  const categoryRedux = useSelector((state) => state.category.current);
  const visibleFilters = useMemo(() => {
    return FILTER_LIST.filter((x) => x.isVisible(filters));
  }, [filters]);
  const classes = useStyles();
  return (
    <Box component="ul" className={classes.root}>
      {visibleFilters.map((x) => (
        <li key={x.id}>
          <Chip
            label={
              x.isCategory ? () => categoryRedux.filter((x) => x.id == filters.category)[0].name : x.getLabel(filters)
            }
            color={x.isActive(filters) ? 'primary' : 'default'}
            clickable={!x.isRemovable}
            onClick={
              x.isRemovable
                ? null
                : () => {
                    if (!onChange) return;

                    const newFilters = x.onToggle(filters);
                    onChange(newFilters);
                  }
            }
            onDelete={
              x.isRemovable
                ? () => {
                    if (!onChange) return;

                    const newFilters = x.onRemove(filters);
                    onChange(newFilters);
                  }
                : null
            }
          />
        </li>
      ))}
    </Box>
  );
}

export default FilterViewer;
