import React from 'react';
import PropTypes from 'prop-types';
import './homescreen.css';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

HomeScreen.propTypes = {};

function HomeScreen(props) {
  return (
    <div>
      <>
        {/*------------------------body--------------------------*/}
        <div className="body-container">
          <div className="body-top">
            <div className="body-top-others left">
              <a href="">
                <img src="https://laptopworld.vn/media/banner/22_Jul85a07726bacaaaad724c15432bdd6b5b.jpg" alt="" />
              </a>
              <a href="">
                <img src="https://laptopworld.vn/media/banner/27_Aprfbd049e3b892817dd6313b7204a4fce8.jpg" alt="" />
              </a>
            </div>
            <div className="slider">
              <div className="slide-picture">
                <img src="https://laptopworld.vn/media/banner/01_Juna5173b92722475e40b9fb74e94bbf084.png" />
                <img src="https://laptopworld.vn/media/banner/31_Octe1bea4595f5def58f31239a5e23bebf1.jpg" />
                <img src="https://laptopworld.vn/media/banner/04_Augd1d317b15266ea6e98e8d26022ff0d9c.jpg" />
                <img src="https://laptopworld.vn/media/banner/08_Nov68740aff875d582c6af7dae156099f08.jpg" alt="" />
              </div>
              <div className="dot-container">
                <div className="dot active" />
                <div className="dot" />
                <div className="dot" />
                <div className="dot" />
              </div>
            </div>
            <div className="body-top-others right">
              <a href="">
                <img src="https://laptopworld.vn/media/banner/10_Dec0b4ea268dca9cfc14acd1fbc92b520e8.jpg" alt="" />
              </a>
              <a href="">
                <img src="https://laptopworld.vn/media/banner/10_Dec6944b83b2859fbf5f5d0517a42d3b348.jpg" alt="" />
              </a>
            </div>
          </div>
          <div className="body-content">
            <div className="product">
              <h1>
                LAPTOP <span style={{ color: 'red' }}>HOT</span>
              </h1>
              <div className="product-container">
                <div className="product-slider" id="product-slider">
                  <div className="product-item">
                    <div className="laptop-product-img">
                      <a href="">
                        <img src="https://laptop88.vn/media/product/pro_poster_7683.jpg" alt="" />
                      </a>
                    </div>
                    <div className="laptop-product-info">
                      <a href="" className="product-name">
                        <p>[New 100%] Laptop Dell Inspiron 14 5420 R1608S - Intel Core i5...</p>
                      </a>
                      <img src="https://laptop88.vn/template/giaodien_2022/images/sticker-3.png" alt="" />
                      <table>
                        <tbody>
                          <tr>
                            <td>
                              <p>CPU</p>
                            </td>
                            <td>
                              <p>i5 - 1240P</p>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <p>RAM</p>
                            </td>
                            <td>
                              <p>16GB DDR4</p>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <p>Ổ cứng</p>
                            </td>
                            <td>
                              <p>SSD 512GB NVMe</p>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <p>Card</p>
                            </td>
                            <td>
                              <p>Intel Iris Xe Graphics</p>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <p>M.Hình</p>
                            </td>
                            <td>
                              <p>14" 2.2K</p>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                      <div className="laptop-product-price">
                        <p>
                          14.790.000đ<span>17.990.000đ</span>
                        </p>
                        <a href="product.html">
                          <i className="bx bx-shopping-bag" />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="product-item">
                    <div className="sale">
                      -31 <sup>%</sup>
                    </div>
                    <div className="laptop-product-img">
                      <a href="">
                        <img src="https://laptop88.vn/media/product/pro_poster_8488.jpg" alt="" />
                      </a>
                    </div>
                    <div className="laptop-product-info">
                      <a href="" className="product-name">
                        <p>[New 100%] Asus Vivobook 16X M1603QA-90NB0Y81-M00SC0...</p>
                      </a>
                      <img src="https://laptop88.vn/template/giaodien_2022/images/sticker-4.png" alt="" />
                      <table>
                        <tbody>
                          <tr>
                            <td>
                              <p>CPU</p>
                            </td>
                            <td>
                              <p>AMD R7-5800HS</p>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <p>RAM</p>
                            </td>
                            <td>
                              <p>12GB DDR4</p>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <p>Ổ cứng</p>
                            </td>
                            <td>
                              <p>SSD 512GB NVMe</p>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <p>Card</p>
                            </td>
                            <td>
                              <p>AMD Radeon Graphics</p>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <p>M.Hình</p>
                            </td>
                            <td>
                              <p>16 inch Full HD+</p>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                      <div className="laptop-product-price">
                        <p>
                          13.990.000đ<span>19.990.000đ</span>
                        </p>
                        <a href="product.html">
                          <i className="bx bx-shopping-bag" />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="product-item">
                    <div className="sale">
                      -40 <sup>%</sup>
                    </div>
                    <div className="laptop-product-img">
                      <a href="">
                        <img src="https://laptop88.vn/media/product/pro_poster_8550.jpg" alt="" />
                      </a>
                    </div>
                    <div className="laptop-product-info">
                      <a href="" className="product-name">
                        <p>[New Outlet] Laptop Lenovo Flex 7 14IAU7 82VC0001US - Intel...</p>
                      </a>
                      <img src="https://laptop88.vn/template/giaodien_2022/images/sticker-4.png" alt="" />
                      <table>
                        <tbody>
                          <tr>
                            <td>
                              <p>CPU</p>
                            </td>
                            <td>
                              <p>i5 - 1240P</p>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <p>RAM</p>
                            </td>
                            <td>
                              <p>16GB DDR4</p>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <p>Ổ cứng</p>
                            </td>
                            <td>
                              <p>SSD 512GB</p>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <p>Card</p>
                            </td>
                            <td>
                              <p>Intel® Iris® Xe Graphics</p>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <p>M.Hình</p>
                            </td>
                            <td>
                              <p>14 2.2K 100% sRGB</p>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                      <div className="laptop-product-price">
                        <p>
                          14.590.000đ<span>23.990.000đ</span>
                        </p>
                        <a href="product.html">
                          <i className="bx bx-shopping-bag" />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="product-item">
                    <div className="sale">
                      -14 <sup>%</sup>
                    </div>
                    <div className="laptop-product-img">
                      <a href="">
                        <img src="https://laptop88.vn/media/product/pro_poster_5117.jpg" alt="" />
                      </a>
                    </div>
                    <div className="laptop-product-info">
                      <a href="" className="product-name">
                        <p>[New 100%] Laptop HP Envy X360 2 in 1 14-es0013dx...</p>
                      </a>
                      <img src="https://laptop88.vn/template/giaodien_2022/images/sticker-1.png" alt="" />
                      <table>
                        <tbody>
                          <tr>
                            <td>
                              <p>CPU</p>
                            </td>
                            <td>
                              <p>i5-1335U</p>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <p>RAM</p>
                            </td>
                            <td>
                              <p>8GB DDR4</p>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <p>Ổ cứng</p>
                            </td>
                            <td>
                              <p>SSD 512GB NVMe</p>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <p>Card</p>
                            </td>
                            <td>
                              <p>Intel Iris Xe</p>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <p>M.Hình</p>
                            </td>
                            <td>
                              <p>14" Full HD Touch</p>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                      <div className="laptop-product-price">
                        <p>
                          15.490.000đ<span>17.990.000đ</span>
                        </p>
                        <a href="product.html">
                          <i className="bx bx-shopping-bag" />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="product-item">
                    <div className="sale">
                      -38 <sup>%</sup>
                    </div>
                    <div className="laptop-product-img">
                      <a href="">
                        <img src="https://laptop88.vn/media/product/pro_poster_8441.jpg" alt="" />
                      </a>
                    </div>
                    <div className="laptop-product-info">
                      <a href="" className="product-name">
                        <p>Laptop Cũ Asus Vivobook Pro K3400P-90NB0UY3 | Intel Core...</p>
                      </a>
                      <img src="https://laptop88.vn/template/giaodien_2022/images/sticker-1.png" alt="" />
                      <table>
                        <tbody>
                          <tr>
                            <td>
                              <p>CPU</p>
                            </td>
                            <td>
                              <p>i5-11300H</p>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <p>RAM</p>
                            </td>
                            <td>
                              <p>16GB DDR4</p>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <p>Ổ cứng</p>
                            </td>
                            <td>
                              <p>SSD 512GB NVMe</p>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <p>Card</p>
                            </td>
                            <td>
                              <p>Intel Iris Xe</p>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <p>M.Hình</p>
                            </td>
                            <td>
                              <p>14" 2.8K 100% sRGB</p>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                      <div className="laptop-product-price">
                        <p>
                          23.990.000đ<span>14.990.000đ</span>
                        </p>
                        <a href="product.html">
                          <i className="bx bx-shopping-bag" />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="product-item">
                    <div className="sale">
                      -38 <sup>%</sup>
                    </div>
                    <div className="laptop-product-img">
                      <a href="">
                        <img src="https://laptop88.vn/media/product/pro_poster_8441.jpg" alt="" />
                      </a>
                    </div>
                    <div className="laptop-product-info">
                      <a href="" className="product-name">
                        <p>Laptop Cũ Asus Vivobook Pro K3400P-90NB0UY3 | Intel Core...</p>
                      </a>
                      <img src="https://laptop88.vn/template/giaodien_2022/images/sticker-1.png" alt="" />
                      <table>
                        <tbody>
                          <tr>
                            <td>
                              <p>CPU</p>
                            </td>
                            <td>
                              <p>i5-11300H</p>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <p>RAM</p>
                            </td>
                            <td>
                              <p>16GB DDR4</p>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <p>Ổ cứng</p>
                            </td>
                            <td>
                              <p>SSD 512GB NVMe</p>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <p>Card</p>
                            </td>
                            <td>
                              <p>Intel Iris Xe</p>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <p>M.Hình</p>
                            </td>
                            <td>
                              <p>14" 2.8K 100% sRGB</p>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                      <div className="laptop-product-price">
                        <p>
                          23.990.000đ<span>14.990.000đ</span>
                        </p>
                        <a href="product.html">
                          <i className="bx bx-shopping-bag" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <i className="bx bx-left-arrow-alt" onclick="left()" />
                <i className="bx bx-right-arrow-alt" onclick="right()" />
              </div>
              <div className="link-product">
                <a href="" className="viewAll">
                  Xem tất cả
                </a>
              </div>
            </div>
            <div className="product">
              <h1>
                Điện thoại <span style={{ color: 'red' }}>HOT</span>
              </h1>
              <div className="product-container">
                <div className="product-slider" id="product-slider1">
                  <div className="product-item phone-product">
                    <div className="laptop-product-img">
                      <a href="">
                        <img
                          src="https://cdn.hoanghamobile.com/i/productlist/ts/Uploads/2022/02/09/image-removebg-preview-19.png"
                          alt=""
                        />
                      </a>
                    </div>
                    <div className="laptop-product-info">
                      <a href="" className="product-name">
                        <p>Samsung Galaxy S22 Ultra - 8GB/128GB - Chính hãng</p>
                      </a>
                      <div className="laptop-product-price">
                        <p>
                          16.980.000đ<span>30.990.000đ</span>
                        </p>
                        <a href="product.html">
                          <i className="bx bx-shopping-bag" />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="product-item phone-product">
                    <div className="laptop-product-img">
                      <a href="">
                        <img
                          src="https://cdn.hoanghamobile.com/i/productlist/ts/Uploads/2023/02/02/image-removebg-preview-2.png"
                          alt=""
                        />
                      </a>
                    </div>
                    <div className="laptop-product-info">
                      <a href="" className="product-name">
                        <p>Samsung Galaxy S23 - 8GB/256GB - Hàng nguyên seal, Đã kích hoạt (DA)</p>
                      </a>
                      <div className="laptop-product-price">
                        <p>
                          14.990.000đ<span>24.990.000đ</span>
                        </p>
                        <a href="product.html">
                          <i className="bx bx-shopping-bag" />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="product-item phone-product">
                    <div className="laptop-product-img">
                      <a href="">
                        <img
                          src="https://cdn.hoanghamobile.com/i/productlist/ts/Uploads/2023/09/27/samsung-galaxy-a05-4.png"
                          alt=""
                        />
                      </a>
                    </div>
                    <div className="laptop-product-info">
                      <a href="" className="product-name">
                        <p>Samsung Galaxy S22 Ultra - 8GB/128GB - Chính hãng</p>
                      </a>
                      <div className="laptop-product-price">
                        <p>
                          2.950.000đ<span>3.090.000đ</span>
                        </p>
                        <a href="product.html">
                          <i className="bx bx-shopping-bag" />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="product-item phone-product">
                    <div className="laptop-product-img">
                      <a href="">
                        <img
                          src="https://cdn.hoanghamobile.com/i/productlist/ts/Uploads/2023/09/27/samsung-galaxy-a05-1.png"
                          alt=""
                        />
                      </a>
                    </div>
                    <div className="laptop-product-info">
                      <a href="" className="product-name">
                        <p>Samsung Galaxy A05S - 4GB/128GB - Chính hãng</p>
                      </a>
                      <div className="laptop-product-price">
                        <p>
                          3.790.000đ<span>3.990.000đ</span>
                        </p>
                        <a href="product.html">
                          <i className="bx bx-shopping-bag" />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="product-item phone-product">
                    <div className="laptop-product-img">
                      <a href="">
                        <img
                          src="https://cdn.hoanghamobile.com/i/productlist/ts/Uploads/2020/09/29/S20%20FE%20(1).png"
                          alt=""
                        />
                      </a>
                    </div>
                    <div className="laptop-product-info">
                      <a href="" className="product-name">
                        <p>Samsung Galaxy S20 FE 256GB - Chính hãng </p>
                      </a>
                      <div className="laptop-product-price">
                        <p>
                          6.990.000đ<span>15.490.000đ</span>
                        </p>
                        <a href="product.html">
                          <i className="bx bx-shopping-bag" />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="product-item phone-product">
                    <div className="laptop-product-img">
                      <a href="">
                        <img src="https://cdn.hoanghamobile.com/i/productlist/ts/Uploads/2023/05/17/a34-3.png" alt="" />
                      </a>
                    </div>
                    <div className="laptop-product-info">
                      <a href="" className="product-name">
                        <p>Samsung Galaxy A34 5G 8GB/128GB - Chính hãng</p>
                      </a>
                      <div className="laptop-product-price">
                        <p>
                          7.070.000đ<span>8.490.000đ</span>
                        </p>
                        <a href="product.html">
                          <i className="bx bx-shopping-bag" />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="product-item phone-product">
                    <div className="laptop-product-img">
                      <a href="">
                        <img
                          src="https://cdn.hoanghamobile.com/i/productlist/ts/Uploads/2022/08/10/z-flip-4.jpg"
                          alt=""
                        />
                      </a>
                    </div>
                    <div className="laptop-product-info">
                      <a href="" className="product-name">
                        <p>Samsung Galaxy Z Fold4 - 512GB -Chính hãng </p>
                      </a>
                      <div className="laptop-product-price">
                        <p>
                          22.990.000đ<span>44.990.000đ</span>
                        </p>
                        <a href="product.html">
                          <i className="bx bx-shopping-bag" />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="product-item phone-product">
                    <div className="laptop-product-img">
                      <a href="">
                        <img
                          src="https://cdn.hoanghamobile.com/i/productlist/ts/Uploads/2023/07/26/fold-5-chinh-thuc-2.png"
                          alt=""
                        />
                      </a>
                    </div>
                    <div className="laptop-product-info">
                      <a href="" className="product-name">
                        <p>Samsung Galaxy Z Fold5 12GB/256GB - Chính hãng</p>
                      </a>
                      <div className="laptop-product-price">
                        <p>
                          31.990.000đ<span>40.990.000đ</span>
                        </p>
                        <a href="product.html">
                          <i className="bx bx-shopping-bag" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <i className="bx bx-left-arrow-alt" onclick="left1()" />
                <i className="bx bx-right-arrow-alt" onclick="right1()" />
              </div>
            </div>
            <div className="link-product">
              <a href="" className="viewAll">
                Xem tất cả
              </a>
            </div>
          </div>
        </div>
        {/*-------------------------footer-----------------------------------*/}
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
                  <li>
                    <a href="">Hệ thống cửa hàng</a>
                  </li>
                  <li>
                    <a href="">Q&amp;A</a>
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
                      <a href="">Live Chat</a>
                    </li>
                    <li>
                      <a href="">Messenger</a>
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

export default HomeScreen;
