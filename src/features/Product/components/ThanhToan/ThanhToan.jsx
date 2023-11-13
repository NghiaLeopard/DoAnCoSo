import React from 'react';
import PropTypes from 'prop-types';
import './ThanhToan.jsx';
import { Link } from 'react-router-dom/cjs/react-router-dom.min.js';
ThanhToan.propTypes = {};

function ThanhToan(props) {
  return (
    <div>
      <>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Chính sách thanh toán | EZ Shop</title>
        <link rel="stylesheet" href="./payment.css" className="css" />
        <link rel="stylesheet" href="./footer.css" className="css" />
        <section>
          <div className="body-container">
            <div className="body-title">
              <p>Trang chủ - Chính sách thanh toán</p>
              <img
                src="https://i.pinimg.com/originals/ef/80/83/ef8083bfe79088dc00bd8eca9c821cd5.jpg"
                alt=""
                style={{ width: '100%' }}
              />
            </div>
            <div className="body-content">
              <h1>CHÍNH SÁCH THANH TOÁN</h1>
              <p>
                <span>Có 2 hình thức thanh toán khi mua hàng online tại IVY moda</span> <br />
                Hình thức thu tiền tận nơi (COD) : Khách hàng sẽ thanh toán tiền khi nhận hàng và thanh toán tiền hàng
                và cước phí vận chuyển cho nhân viên chuyển phát. <br />
                Thanh toán trực tuyến OnePay qua thẻ ATM nội địa hoặc thẻ quốc tế trực tiếp tại website.
                <br />
                <span>Question and answer</span>
                <span>Tại sao thẻ tín dụng của tôi có thể bị từ chối?</span>
                <br />
                Thẻ tín dụng của quý khách có thể bị từ chối vì bất kỳ lý do nào sau đây:
                <br />
                - Thẻ có thể đã hết hạn. Kiểm tra xem thẻ của quý khách còn hiệu lực không. <br />
                - Quý khách có thể đã đạt đến hạn mức tín dụng. Liên hệ với ngân hàng để kiểm tra xem quý khách có vượt
                quá giới hạn mua hàng được ủy quyền không. <br />
                - Quý khách có thể đã nhập thông tin nào đó không chính xác. Kiểm tra xem quý khách đã điền đúng tất cả
                các trường bắt buộc chưa. <br />
                <span>Tôi có thể đưa thông tin chi tiết của công ty mình vào hóa đơn không?</span> <br />
                - Có. Chỉ cần nhấp vào tùy chọn doanh nghiệp trong thông tin chi tiết cá nhân rồi điền thông tin thuế mà
                chúng tôi yêu cầu. <br />
                <span>Có an toàn khi sử dụng thẻ tín dụng của tôi trên trang web không?</span> <br />- Đúng, các dữ liệu
                được truyền đi bằng cách mã hóa theo giao thức SSL. Đối với việc thanh toán bằng thẻ tín dụng và thẻ ghi
                nợ, yêu cầu phải nhập số CVV (Card Verification Value, Mã Xác thực Thẻ), là mã số in trên thẻ được sử
                dụng như một biện pháp bảo mật trong các giao dịch thương mại điện tử.
              </p>
            </div>
            <div className="body-bottom">
              <div className="body-bottom-img">EZ SHOP</div>
              <div className="body-bottom-content">
                <h1>Đồng hành cùng EZ Shop</h1>
                <p>
                  Cảm ơn bạn đã yêu thích sản phẩm và đồng hành cùng EZ Shop. Mọi thắc mắc liên quan đến chính sách
                  thanh toán, vui lòng liên hệ theo số thông tin bên dưới
                </p>
                <a href="#">GỌI NGAY: 0905092886</a>
              </div>
            </div>
          </div>
        </section>
        <footer>
          <div className="footer-container">
            <div className="left-footer">
              <div className="top-left-footer">
                <a href="">
                  <img
                    src="https://images.dmca.com/Badges/dmca_protected_16_120.png?ID=0cfdeac4-6e7f-4fca-941f-57a0a0962777"
                    alt=""
                  />
                </a>
                <a href="">
                  <img src="https://pubcdn.ivymoda.com/ivy2/images/img-congthuong.png" alt="" />
                </a>
              </div>
              <div className="content-left-footer">
                <div className="info-left-footer">
                  <p>Công ty Cổ phần Dự Kim với số đăng ký kinh doanh: 0105777650</p>
                  <p>
                    <b>Địa chỉ đăng ký: </b>TP.Hà Nội, Việt Nam
                  </p>
                  <p>
                    <b>Số điện thoại: </b>0243 205 2222/ 090 589 8683
                  </p>
                  <p>
                    <b>Email: </b>cskh@ez.com.vn
                  </p>
                </div>
                <div className="list-social">
                  <a href="">
                    <img src="https://pubcdn.ivymoda.com/ivy2/images/ic_fb.svg" alt="" />
                  </a>
                  <a href="">
                    <img src="https://pubcdn.ivymoda.com/ivy2/images/ic_gg.svg" alt="" />
                  </a>
                  <a href="">
                    <img src="https://pubcdn.ivymoda.com/ivy2/images/ic_instagram.svg" alt="" />
                  </a>
                  <a href="">
                    <img src="https://pubcdn.ivymoda.com/ivy2/images/ic_pinterest.svg" alt="" />
                  </a>
                  <a href="">
                    <img src="https://pubcdn.ivymoda.com/ivy2/images/ic_ytb.svg" alt="" />
                  </a>
                </div>
                <div className="hotline">
                  <a href="">HOTLINE: 0905092886</a>
                </div>
              </div>
            </div>
            <div className="center-footer">
              <div className="left-center-footer">
                <p className="title-footer">Giới thiệu</p>
                <ul>
                  <li>
                    <a href="">Về EZ Shop</a>
                  </li>
                  <li>
                    <a href="">Tuyển dụng</a>
                  </li>
                  <li>
                    <a href="">Hệ thống cửa hàng</a>
                  </li>
                </ul>
              </div>
              <div className="main-center-footer">
                <p className="title-footer">Dịch vụ khách hàng</p>
                <ul>
                  <Link to="/mainpages/Khoanpolicy">
                    <li>
                      <a href="">Chính sách điều khoản</a>
                    </li>
                  </Link>
                  <li>
                    <a href="">Hướng dẫn mua hàng</a>
                  </li>
                  <li>
                    <a href="">Chính sách thanh toán</a>
                  </li>
                  <Link to="/mainpages/returnPolicy">
                    <li>
                      <a href="">Chính sách đổi trả</a>
                    </li>
                  </Link>

                  <Link to="/mainpages/baoPolicy">
                    <li>
                      <a href="">Chính sách bảo hành</a>
                    </li>
                  </Link>
                  <li>
                    <a href="">Chính sách giao nhận vận chuyển</a>
                  </li>
                  <li>
                    <a href="">Chính sách thẻ thành viên</a>
                  </li>
                </ul>
              </div>
              <div className="right-center-footer">
                <div className="left-center-footer">
                  <p className="title-footer">Liên hệ</p>
                  <ul>
                    <li>
                      <a href="">Hotline</a>
                    </li>
                    <li>
                      <a href="">Email</a>
                    </li>
                    <li>
                      <a href="https://www.messenger.com/t/100041120348231">Messenger</a>
                    </li>
                    <li>
                      <a href="">Liên hệ</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="right-footer">
              <div className="register-form">
                <p className="title-footer">Nhận thông tin các chương trình của EZ Shop</p>
                <form id="frm-subcribe">
                  <input type="text" name="email" placeholder="Nhập địa chỉ email" required="required" />
                  <button>Đăng ký</button>
                </form>
              </div>
              <div className="info-right-footer">
                <p className="title-footer">Download App</p>
                <ul>
                  <li>
                    <a href="">
                      <img src="https://pubcdn.ivymoda.com/ivy2/images/appstore.png" alt="" />
                    </a>
                  </li>
                  <li>
                    <a href="">
                      <img src="https://pubcdn.ivymoda.com/ivy2/images/googleplay.png" alt="" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="end">
            <p>©EZShop All rights reserved</p>
          </div>
        </footer>
      </>
    </div>
  );
}

export default ThanhToan;
