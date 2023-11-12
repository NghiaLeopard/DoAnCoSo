import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { Box, Button, Link, Typography, makeStyles } from '@material-ui/core';
import InputField from 'components/form-control/inputField';
import style from './style.css';
import { useSelector } from 'react-redux';
import { THUMBNAIL_PLACEHOLDER } from 'constants';
import { STATIC_HOST } from 'constants';
import { AccountBalanceOutlined } from '@material-ui/icons';
import SelectTT from 'components/form-control/selectTT/SelectTT';
import { cartItemsTotalSelector } from 'features/cart/createSelector';
import { useSnackbar } from 'notistack';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';


export const OrderDetails = () => {
  const history = useHistory();
  const { enqueueSnackbar } = useSnackbar();

  const loggedInUser = useSelector((state) => state.user.current);
  console.log(loggedInUser);
  const cartItems = useSelector((state) => state.cart.cartItems);
  const cartTotalPrice = useSelector(cartItemsTotalSelector);

const form = useRef();

const sendEmail = (e) => {
  e.preventDefault();

  emailjs.sendForm('service_wcjfvpk', 'template_s594k5n', form.current, '5bZQh-fYddDbk05st')
    .then((result) => {
      enqueueSnackbar('Đặt hàng Thành công', { variant: 'success' });
      history.push('/');



    }, (error) => {
      enqueueSnackbar(error.text, { variant: 'error' });

    });
};
  return (
   <div className="contain">
     <div className="wrapepr">
      <Box>
    
        <div className='tilte-box'>
        <h2>Sản phẩm</h2>
        <h2>Số lượng</h2>
        <h2>Giá</h2>
        </div>
        <div>
        {cartItems.map((item) => {
          const thumbnailUrl = item.product.thumbnail
            ? `${STATIC_HOST}${item.product.thumbnail?.url}`
            : THUMBNAIL_PLACEHOLDER;
          return (
            <div className="wrapper-product">
              <div className="prod-content">
                <img src={thumbnailUrl} alt="prod" />
                <p>{item?.product?.name}</p>
              </div>
              <div className="quality">{item.quantity}</div>
              <div className="dongia">{item.product.salePrice}</div>
            </div>
          );
        })}
       
      </div>
      </Box>
   
  
      <div className="wrapper-voucher">
        <div>
          <AccountBalanceOutlined /> voucher của shop
        </div>
        <Link>chọn voucher</Link>
      </div>
      <div className="totalprice">
          <p className='title'>Thành tiền :</p> {cartTotalPrice}
        </div>
      <div className="thanhtoan">
        <div>
          <h2>Phương thức thanh toán </h2>
        </div>
        <div className="select-pt">
          
          <SelectTT>Banking</SelectTT>
          <SelectTT>Thanh toán khi nhận hàng</SelectTT>
        </div>
        
      </div>
      <form ref={form} onSubmit={sendEmail}>
      <label>Name</label>
      <input type="text" name="user_name" />
      <label>Email</label>
      <input type="text" name="user_email" />
      <label>số điện thoại</label>
      <input type="text" name="user_sdt" />
      <label>địa chỉ</label>
      <input type="text" name="user_adrr" />
      <input type="submit" value="Xác nhận" />
    </form>
    </div>
    
   </div>
  );
};
