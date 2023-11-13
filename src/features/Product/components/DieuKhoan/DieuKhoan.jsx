import React from 'react';
import PropTypes from 'prop-types';
import './style.css';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

DieuKhoan.propTypes = {};

function DieuKhoan(props) {
  return (
    <div>
      <>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Chính sách điều khoản | EZ Shop</title>
        <link rel="stylesheet" href="./payment.css" className="css" />
        <link rel="stylesheet" href="./footer.css" className="css" />
        <link rel="stylesheet" href="./terms.css" className="css" />
        <section>
          <div className="body-container">
            <div className="body-title">
              <p>Trang chủ - Chính sách điều khoản</p>
              <img
                src="https://i.pinimg.com/originals/ef/80/83/ef8083bfe79088dc00bd8eca9c821cd5.jpg"
                alt=""
                style={{ width: '100%' }}
              />
            </div>
            <div className="body-content">
              <h1>CHÍNH SÁCH ĐIỀU KHOẢN SỬ DỤNG</h1>
              <h2>1. EZSHOP.COM LÀ WEBSITE BÁN ĐỒ CÔNG NGHỆ</h2>
              <p>EZShop.com là kênh mua sắm và hỗ trợ đắc lực công tác chăm sóc Khách Hàng của chúng tôi</p>
              <h2>2. CHÍNH SÁCH THẺ THÀNH VIÊN ONLINE</h2>
              <h3>2.1 THẺ BẠC / SILVER</h3>
              <h2>ĐIỀU KIỆN</h2>
              <p>
                Khách hàng có tổng giá trị hóa đơn từ: 12.000.000 VNĐ trong 01 năm kể từ ngày bắt đầu sử dụng thẻ <br />
                Điều kiện gia hạn thẻ: Khách hàng có tổng giá trị mua hàng từ 12.000.000 VNĐ trong 01 năm tiếp theo sử
                dụng thẻ <br />
                Điều kiện nâng hạng thẻ VÀNG/GOLD MEMBERSHIP: Khách hàng có tổng giá trị mua hàng từ 23.000.00 VNĐ kể từ
                ngày đạt hạng thẻ BẠC/SILVER MEMBERSHIP
              </p>
              <h2>QUYỀN LỢI</h2>
              <p>
                Giảm 10% khi mua hàng tại hệ thống EZ SHOP trong vòng 01 năm kể từ ngày đạt hạng thẻ <br />
                Nhận quà tặng sinh nhật của khách hàng, kèm theo những chính sách ưu đãi dành riêng cho khách hàng VIP
                vào các dịp lễ đặc biệt.
                <br />
                Khách hàng sẽ được nhận thêm các ưu đãi hấp dẫn từ các đối tác của EZ SHOP trong các lĩnh vực: Mỹ Phẩm,
                Nước hoa, Trang sức, Beauty - Spa, Nhà hàng, Tạp chí…
              </p>
              <h3>2.2 THẺ VÀNG / GOLD</h3>
              <h2>ĐIỀU KIỆN</h2>
              <p>
                Khách hàng có tổng giá trị mua hàng từ 35.000.000 VNĐ trong 01 năm Hoặc Khách hàng có tổng giá trị mua
                hàng từ: 23.000.000 VNĐ trong vòng 01 năm kể từ ngày đạt hạng thẻ BẠC/SILVER MEMBERSHIP <br />
                Điều kiện gia hạn thẻ: Khách hàng có tổng giá trị mua hàng từ 35.000.000 VNĐ trong 01 năm tiếp theo sử
                dụng thẻ <br />
                Điều kiện nâng hạng thẻ KIM CƯƠNG/DIAMOND MEMBERSHIP: Khách hàng có tổng giá trị mua hàng từ 25.000.000
                VNĐ trong 01 năm kể từ ngày đạt hạng thẻ VÀNG/GOLD MEMBERSHIP <br />
              </p>
              <h2>QUYỀN LỢI</h2>
              <p>
                Giảm 20% khi mua hàng tại hệ thống IVY moda trong vòng 01 năm kể từ ngày đạt hạng thẻ <br />
                Nhận quà tặng sinh nhật của khách hàng, kèm theo những chính sách ưu đãi dành riêng cho khách hàng VIP
                vào các dịp lễ đặc biệt. <br />
                Khách hàng sẽ được nhận thêm các ưu đãi hấp dẫn từ các đối tác của IVY Moda trong các lĩnh vực: Mỹ Phẩm,
                Nước hoa, Trang sức, Beauty – Spa, Nhà hàng, Tạp chí…
              </p>
              <h3>2.3 ĐIỀU KHOẢN SỬ DỤNG THẺ THÀNH VIÊN ONLINE</h3>
              <h2>ĐIỀU KIỆN</h2>
              <p>
                Khách hàng có tổng giá trị mua hàng từ 60.000.000 VNĐ trong 01 năm Hoặc Khách hàng có tổng giá trị mua
                hàng từ: 25.000.000 VNĐ trong vòng 01 năm kể từ ngày đạt hạng thẻ VÀNG/GOLD MEMBERSHIP <br />
                Điều kiện gia hạn thẻ: Khách hàng có tổng giá trị mua hàng từ 60.000.000 VNĐ trong 01 năm kể từ ngày đạt
                hạng thẻ KIM CƯƠNG/DIAMOND MEMBERSHIP
              </p>
              <h2>QUYỀN LỢI</h2>
              <p>
                Giảm 30% khi mua hàng tại hệ thống IVY moda trong vòng 01 năm kể từ ngày đạt hạng thẻ. Ngoài Chiết khấu
                thẻ, Khách hàng được giảm giá thêm 5% khi mua hàng trong chương trình giảm giá 30% <br />
                Nhận quà tặng sinh nhật của khách hàng, kèm theo những chính sách ưu đãi dành riêng cho khách hàng VIP
                vào các dịp lễ đặc biệt. <br />
                Khách hàng sẽ được nhận thêm các ưu đãi hấp dẫn từ các đối tác của IVY Moda trong các lĩnh vực: Mỹ Phẩm,
                Nước hoa, Trang sức, Beauty - Spa, Nhà hàng, Tạp chí…
              </p>
              <h2>3. ĐIỀU KHOẢN SỬ DỤNG THẺ THÀNH VIÊN ONLINE</h2>
              <p>
                hẻ có giá trị duy nhất đối với chủ thẻ. Không được phép sang nhượng hay cho mượn thẻ dưới mọi hình thức;{' '}
                <br />
                Vui lòng xuất trình thẻ khi thanh toán để tích lũy điểm và áp dụng chiết khấu của thẻ
                <br />
                Chiết khấu thẻ chỉ được áp dụng với hàng nguyên giá;
                <br />
                Điểm tích lũy của chủ thẻ (tương ứng với giá trị mua hàng) sẽ được quy đổi thành các phần quà có giá
                trị, duy trì và nâng hạng thẻ;
                <br />
                Thẻ có giá trị sử dụng trong vòng 01 năm kể từ ngày đăng ký, đạt hạng thẻ, gia hạn hoặc nâng hạng thẻ;
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
                  <li>
                    <a href="">Chính sách điều khoản</a>
                  </li>
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

export default DieuKhoan;
