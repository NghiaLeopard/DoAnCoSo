import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { cartItemsTotalSelector } from '../ceateSelector';

TotalPrice.propTypes = {};

function TotalPrice(props) {
  const cartTotalPrice = useSelector(cartItemsTotalSelector);

  return (
    <div>
      <div style={{ display: 'flex', padding: '20px', borderBottom: '1px solid gray' }}>
        <div style={{ fontSize: '20px', color: 'gray' }}>Tạm Tính</div>
        <div style={{ marginLeft: '130px', fontSize: '20px' }}>{cartTotalPrice} đ</div>
      </div>
      <div style={{ display: 'flex', padding: '20px' }}>
        <div style={{ fontSize: '20px', color: 'gray' }}>Thành Tiền</div>
        <div style={{ marginLeft: '100px', fontSize: '25px', color: 'red' }}>{cartTotalPrice} đ</div>
      </div>
    </div>
  );
}

export default TotalPrice;
