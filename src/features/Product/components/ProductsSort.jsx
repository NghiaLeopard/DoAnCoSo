import React from 'react';
import PropTypes from 'prop-types';
import { Tab, Tabs, makeStyles } from '@material-ui/core';



ProductsSort.propTypes = {
  currentSort: PropTypes.string.isRequired,
  onChange: PropTypes.func,
};

function ProductsSort({ currentSort, onChange }) {
  const handleSortChange = (event, newValue) => {
    if (onChange) onChange(newValue);
  };

  return (
    // cho biết current sort là thằng nào rồi lấy value của tab đó
    <Tabs
      value={currentSort}
      indicatorColor="primary"
      textColor="primary"
      onChange={handleSortChange}
      aria-label="disabled tabs example"
    >
      <Tab label="Giá thấp tới cao" value="salePrice:ASC"></Tab>
      <Tab label="Giá cao xuống thấp" value="salePrice:DESC"></Tab>
    </Tabs>
  );
}

export default ProductsSort;
