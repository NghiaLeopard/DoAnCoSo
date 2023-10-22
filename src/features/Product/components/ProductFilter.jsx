import React from 'react';
import PropTypes from 'prop-types';
import FilterByCategory from './Filters/FilterByCategory';
import FilterByPrice from './Filters/FilterByPrice';
import { Box } from '@material-ui/core';
import FilterByService from './Filters/FilterByService';

ProductFilter.propTypes = {
  filters: PropTypes.object,
  onChange: PropTypes.func,
};

function ProductFilter({ filters, onChange }) {
  const handleFilterChange = (newCategoryId) => {
    if (!onChange) return;

    const newFilters = {
      category: newCategoryId,
    };

    onChange(newFilters);
  };

  const handleChanges = (values) => {
    if (onChange) onChange(values);
  };

  return (
    <Box>
      <FilterByCategory onChange={handleFilterChange} />
      <FilterByPrice onChange={handleChanges} />
      <FilterByService filters={filters} onChange={handleChanges} />
    </Box>
  );
}

export default ProductFilter;
