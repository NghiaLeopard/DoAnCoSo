import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

ReturnPolicy.propTypes = {};

function ReturnPolicy(props) {
  return (
    <div>
      <div className="body-container">
        <>
          <meta charSet="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <link rel="stylesheet" href="./assets/style.css" />
          <title />
          <div className="body-title">
            <p>Trang chủ - Chính sách đổi trả</p>
            <img
              src="https://i.pinimg.com/originals/ef/80/83/ef8083bfe79088dc00bd8eca9c821cd5.jpg"
              alt=""
              style={{ width: '100%' }}
            />
          </div>
          <h1 className="title">CHÍNH SÁCH ĐỔI HÀNG</h1>
          <h2 className="item">1. THỜI GIAN ĐỔI TRẢ</h2>
          <p className="desc">Thời gian đổi trả trong vòng 15 ngày kể từ ngày khách nhận được hàng.</p>
          <h2 className="item">2. ĐỊA ĐIỂM ĐỔI HÀNG</h2>
          <p className="desc">
            Áp dụng tại tất cả các cửa hàng trên toàn hệ thống của EZ SHOP và Hệ thống Kho hàng Online của EZ SHOP. .
          </p>
          <h2 className="item">3. ĐIỀU KIỆN ĐỔI TRẢ</h2>
          <p className="desc">
            - Hàng đổi phải còn nguyên nhãn mác, mã vạch, chưa qua sử dụng và có hóa đơn mua hàng nguyên vẹn kèm theo
            (bao gồm cả các sản phẩm chất liệu thun/len/thun len, jeans).
          </p>
          <p className="desc">
            - Với các trường hợp đổi trả không có hóa đơn, Quý khách vui lòng quay lại showroom đã mua hàng để được hỗ
            trợ.
          </p>
          <p className="desc">- Đơn hàng chỉ được đổi 01 lần theo đúng quy định.</p>
          <p className="desc">- Giá trị sản phẩm đổi/trả được tính theo đơn giá trên hóa đơn mua hàng.</p>
          <p className="desc">
            - IVY moda chỉ sử dụng “Biên lai đặt cọc” để hoàn lại tiền thừa sau khi đổi và giá trị hàng trả cho khách,
            không hoàn tiền mặt trong mọi trường hợp.
          </p>
          <p className="desc">- Nếu lỗi do nhà sản xuất, IVY sẽ chịu hoàn toàn phí ship đổi trả sản phẩm</p>
          <h2 className="item">4. CÁC TRƯỜNG HỢP TỪ CHỐI ĐỔI TRẢ</h2>
          <p className="desc">- Sản phẩm nằm trong chương trình đồng giá, giảm giá trên 50%</p>
          <p className="desc">- Thời gian mua hàng quá 15 ngày.</p>
          <p className="desc">- Nhãn mác, mã vạch không còn nguyên vẹn.</p>
          <p className="desc">
            - Sản phẩm đã chỉnh sửa, đã qua sử dụng (bị bẩn, rách, hỏng, rút sợi, phai màu, có mùi hôi, mùi hóa chất
            khác thường) hoặc bị lỗi do những tác động bên ngoài sau khi mua, hoặc các phụ kiện/chi tiết gắn liền của
            sản phẩm không còn đầy đủ/hư hại.
          </p>
          <p className="desc">
            - Sản phẩm mang nhãn IVY Secret, áo quây, áo 2 dây, các loại phụ kiện (túi xách, giày, thắt lưng…)…
          </p>
          <h2 className="item">5. HƯỚNG DẪN ĐỔI HÀNG ONLINE</h2>
          <h3 className="item--big">Cách 1: Đổi hàng tại kho của IVY moda.</h3>
          <h4 className="item--small">1. Khách hàng gửi hàng về kho với nội dung và địa chỉ:</h4>
          <p className="desc__small">
            <strong>Nội dung ghi trên đơn hàng gửi:</strong> Đổi Size/ Màu/ Mẫu/ Lỗi – Mã IVM 123xxx – Mã sản phẩm sang
            Size/ Màu/ Mã sản phẩm. (Ví dụ: Đổi Mẫu – IVM 1234567 – 17E1234 sang 22E1234 size L màu xanh)
          </p>
          <strong>Khách ở Khu vực Miền Bắc và Miền Trung gửi về:</strong>
          <p className="desc__small">Người nhận: Kho Online – Mã nhân viên hỗ trợ</p>
          <p className="desc__small">SĐT: 024.2246.4869</p>
          <p className="desc__small">Địa chỉ: Số 126 Lê Trọng Tấn, La Khê, Hà Đông, TP. Hà Nội</p>
          <strong>Khách ở Khu vực Miền Nam gửi về:</strong>
          <p className="desc__small">Người nhận: Kho Online – Mã nhân viên hỗ trợ</p>
          <p className="desc__small">SĐT: 028.3636.9498</p>
          <p className="desc__small">Địa chỉ: Số 1/7 đường số 33, Phường An Khánh, TP. Thủ Đức - TP HCM.</p>
          <p className="desc__small">
            <strong>*** Lưu ý:</strong> Đối với đơn hàng đổi do lỗi phát sinh từ nhà sản xuất IVY moda như: Sản phẩm
            lỗi; Giao nhầm sản phẩm;… IVY moda hỗ trợ toàn bộ phí ship vận chuyển. Khi gửi hàng, khách hàng vui lòng báo
            bên vận chuyển người nhận chịu phí ship.
          </p>
          <h3 className="item--big">2. IVY moda xử lý đơn hàng đổi:</h3>
          <p className="desc__small">
            Khi nhận được hàng gửi, IVY moda sẽ kiểm tra và gọi điện thông báo, xác nhận yêu cầu Đổi hàng và gửi lại
            hàng cho khách trong vòng từ 1 đến 3 ngày làm việc.
          </p>
          <h3 className="item--big">3. KH cần hỗ trợ vui lòng liên hệ:</h3>
          <strong>Số Hotline: 0246.662.3434</strong>
          <p className="desc">- Hỗ trợ đặt đơn, tư vấn size, sản phẩm: Ấn phím 1</p>
          <p className="desc">- Tra cứu thông tin đơn hàng: Ấn phím 2</p>
          <p className="desc">- Các thông tin cần hỗ trợ khác: Ấn phím 3</p>
          <p className="desc">
            Hoặc gửi yêu cầu qua email: cskhonline@ivy.com.vn (https://ivymoda.com/lien-he), KH cung cấp mã đơn hàng và
            vấn đề cần xử lý.
          </p>
          <p className="desc">
            Nhân viên phụ trách sẽ liên hệ qua số điện thoại đặt hàng hoặc Add Zalo của khách hàng (trong giờ hành
            chính) để hỗ trợ xử lý
          </p>
          <h3 className="item--big">Cách 2: Đổi hàng tại Hệ thống cửa hàng của IVY moda</h3>
          <h4 className="item--small">1. Khách hàng đến cửa hàng IVY moda gần nhất.</h4>
          <p className="desc">Hệ thống của hàng của IVY moda: https://ivymoda.com/page/cuahang</p>
          <h4 className="item--small">2. Yêu cầu khi đổi hàng.</h4>
          <p className="desc">
            KH cần mang hóa đơn và sản phẩm đổi còn nguyên tem mác đến trực tiếp cửa hàng IVY moda để đổi size/ màu/ mẫu
            trong vòng 5 ngày kể từ ngày nhận hàng.
          </p>
          <strong>
            Cảm ơn bạn đã yêu thích sản phẩm và đồng hành cùng IVY moda! Mọi thắc mắc liên quan đến chính sách đổi hàng,
            vui lòng liên hệ 0246.662.3434
          </strong>
        </>
      </div>
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
                <li>
                  <a href="">Chính sách đổi trả</a>
                </li>
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
    </div>
  );
}

export default ReturnPolicy;
