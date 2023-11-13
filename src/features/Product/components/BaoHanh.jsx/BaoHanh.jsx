import React from 'react';
import PropTypes from 'prop-types';
import './style.css';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

BaoHanh.propTypes = {};

function BaoHanh(props) {
  return (
    <div>
      <>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Chính sách bảo hành | EZ Shop</title>
        <link rel="stylesheet" href="./payment.css" className="css" />
        <link rel="stylesheet" href="./footer.css" className="css" />
        <section>
          <div className="body-container">
            <div className="body-title">
              <p>Trang chủ - Chính sách bảo hành</p>
              <img
                src="https://i.pinimg.com/originals/ef/80/83/ef8083bfe79088dc00bd8eca9c821cd5.jpg"
                alt=""
                style={{ width: '100%' }}
              />
            </div>
            <div className="body-content">
              <h1>CHÍNH SÁCH BẢO HÀNH &amp; SỬA CHỮA TRỌN ĐỜI CỦA EZ SHOP</h1>
              <p>
                <span>Khi mua sắm sản phẩm tại IVY moda, bạn sẽ nhận được đặc quyền bảo hành trọn đời miễn phí!</span>{' '}
                <br />
                <span>Tuy nhiên, trong chính sách này không bao gồm những trường hợp đặc biệt như sau:</span>
                - Các sản phẩm mang nhãn IVY Secret hoặc IVY Accessories: đồ lót, áo 2 dây, các loại phụ kiện (túi xách,
                giày, thắt lưng…) và các săn phẩm chất liệu thun/ len/ thun len, sản phẩm chất liệu jeans…. <br />
                - Cửa hàng chỉ bảo hành/sửa chữa đơn giản như cắt gấu, bóp nới sản phẩm. Không nhận sửa chữa các tình
                tiết phức tạp có thể làm thay đổi thiết kế chuẩn của sản phẩm hoặc các sản phẩm gặp vấn đề như bị phai
                màu, lỗi hỏng nặng trong quá trình sử dụng do lỗi từ phía cá nhân người dùng. <br />- Đối với sản phẩm
                đồ da: Chỉ bảo hành dòng sản phẩm da thật, lưu ý thời hạn bảo hành trong vòng 06 tháng kể từ ngày mua
                trên hóa đơn. <br />- Nếu muốn chỉnh sửa sản phẩm theo yêu cầu cá nhân, quý khách vui lòng mất thêm chi
                phí nguyên vật liệu. <br />
                - Đặc quyền với khách hàng mua hàng online: Quý khách có yêu cầu sửa chữa bảo hành sản phẩm, có thể đến
                bất kỳ showroom chính hãng của IVY moda để sử dụng dịch vụ. <br />
                <span>
                  “Cảm ơn bạn đã yêu thích sản phẩm và đồng hành cùng EZ Shop!” <br />
                  Mọi thắc mắc liên quan đến chính sách bảo hành trọn đời. Vui lòng liên hệ: 0905.092.886
                </span>
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
                  <Link to="/mainpages/sellPolicy">
                    <li>
                      <a href="">Chính sách thanh toán</a>
                    </li>
                  </Link>

                  <Link to="/mainpages/returnPolicy">
                    <li>
                      <a href="">Chính sách đổi trả</a>
                    </li>
                  </Link>
                  <li>
                    <a href="">Chính sách bảo hành</a>
                  </li>
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

export default BaoHanh;
