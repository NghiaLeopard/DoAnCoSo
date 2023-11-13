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
import { useState } from 'react';
import { useEffect } from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';

const handleShowSelect = {backgroundColor:'rgb(177, 166, 40)',color:'white',border:0}

export const OrderDetails = () => {
  const [select,setSelect] = useState(true) ;
  const [selectShipping,setSelectShipping] = useState("Giao Hàng Tiết Kiệm") ;
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
function addCommasToNumber(numberString) {
  const number = parseFloat(numberString);
  if (!isNaN(number)) {
      return number.toLocaleString();
  } else {
      return numberString;
  }
}
const handleSelect = (e) => {
  e.preventDefault() ;
  setSelect(parseInt(e.target.value)) ;
}
const handleChange = (event) => {
  setSelectShipping(event.target.value);
};

  return (
   <div className="contain">
     <div className="wrapepr">
      <Box>
        <div className='tilte-box'>
        <h2 className='text'>Sản phẩm</h2>
        <h2 className='text'>Số lượng</h2>
        <h2 className='text'>Giá</h2>
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
                <p className='text'>{item?.product?.name}</p>
              </div>
              <div className="quality text">{item.quantity}</div>
              <div className="dongia text">{addCommasToNumber(item.product.salePrice)} VNĐ</div>
            </div>
          );
        })}
       
      </div>
      </Box>
   
      <div className="wrapper-voucher">
        <div>
          <AccountBalanceOutlined /> 
          <p>Voucher của shop</p>
        </div>

        <Link>Chọn voucher</Link>
      </div>
      <div className="selectVoucher">
        <div className="message">
          <span>Lời nhắn: </span>
          <input type="text" placeholder='Lưu ý cho người bán'/>
        </div>
        <div className="shippingMoniter">
          <div className="Part1">
            <div className="title">Đơn vị vận chuyển</div>
            <FormControl size='small'>
              <InputLabel id="demo-simple-select-label">Chọn đơn vị</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={selectShipping}
                label="Chọn đơn vị"
                onChange={handleChange}
              >
                <MenuItem value={"Chuyển phát nhanh"}>Chuyển phát nhanh</MenuItem>
                <MenuItem value={"J&T"}>J&T</MenuItem>
                <MenuItem value={"Giao Hàng Tiết Kiệm"}>Giao Hàng Tiết Kiệm</MenuItem>
              </Select>
            </FormControl>
          </div>
          <hr />
          <div className="Part2">
            <p>Được đồng kiểm.  </p>
            <HelpOutlineIcon />
          </div>
        </div>
      </div>
      <hr className='global_hr'/>


      <div className="thanhtoan">
        <div className='cash_checkout'>
          <div>
            <h2>Phương thức thanh toán :</h2>
          </div>
          <div className="select-pt">
            <button onClick={handleSelect} value={1} style={select===1?handleShowSelect:null}>Thanh toán khi nhận hàng</button>
            <button onClick={handleSelect} value={2} style={select===2?handleShowSelect:null}>Chuyển khoản ngân hàng</button>
            <button onClick={handleSelect} value={3} style={select===3?handleShowSelect:null}>Thẻ Tín dụng/Ghi nợ</button>
            
          </div>
        </div>
        <div className="totalprice">
          <p className='title'>Thành tiền: </p> 
          <p className='total'>{" "+addCommasToNumber(cartTotalPrice)+" VND"}</p>
        </div>
        
      </div>
      <form ref={form} onSubmit={sendEmail}>
        <span>Họ và tên</span>
        <input type="text" name="user_name" />
        <span>Email</span>
        <input type="text" name="user_email" />
        <span>Số điện thoại</span>
        <input type="text" name="user_sdt" />
        <span>Địa chỉ</span>
        <input type="text" name="user_adrr" />
        <input type="submit" value="Xác nhận" />
        
    </form>
    </div>
    
   </div>
  );
};
