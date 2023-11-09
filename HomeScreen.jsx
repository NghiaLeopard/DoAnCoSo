import React from 'react';
import PropTypes from 'prop-types';
import './homescreen.css';

HomeScreen.propTypes = {};

function HomeScreen(props) {
  return (
    <div>
      <>
        {/*------------------------body--------------------------*/}
        <div className="body-container">
          <div className="body-top">
            <div className="slider">
              <div className="slide-picture">
                <img src="https://cf.shopee.vn/file/vn-50009109-3b4844af326ff3b9c1e1793d0dbda9f3_xxhdpi" />
                <img
                  id="slide-img1"
                  src="https://cf.shopee.vn/file/vn-50009109-eed652f70e6a01c52e9bc1848e731ca5_xxhdpi"
                />
                <img
                  id="slide-img1"
                  src="https://cf.shopee.vn/file/vn-50009109-6dd938c7d1e23c080fc69a576086bd05_xxhdpi"
                />
                <img src="https://cf.shopee.vn/file/vn-50009109-1a46c56c0f2797f7b925c94a77ad6146_xxhdpi" alt="" />
                <img src="https://cf.shopee.vn/file/vn-50009109-6f15a7d3b349b891a9a8f99cd1ee716d_xxhdpi" alt="" />
                <img src="https://cf.shopee.vn/file/vn-50009109-7ce429fdc815059d22cdcbb680707fae_xxhdpi" alt="" />
              </div>
              <div className="dot-container">
                <div className="dot active" />
                <div className="dot" />
                <div className="dot" />
                <div className="dot" />
                <div className="dot" />
                <div className="dot" />
              </div>
            </div>
            <div className="body-top-others">
              <a href="">
                <img src="https://cf.shopee.vn/file/vn-50009109-fdd5d8403e28107f3ed51f52ad2257c3_xhdpi" alt="" />
              </a>
              <a href="">
                <img src="https://cf.shopee.vn/file/vn-50009109-568160051c9a311e5201c97e957bfa78_xhdpi" alt="" />
              </a>
            </div>
          </div>
          <div className="body-content">
            <div className="product">
              <h1>
                Thời Trang <span style={{ color: 'red' }}>HOT</span>
              </h1>
              <div className="product-container">
                <div className="product-slider" id="product-slider">
                  <div className="product-item">
                    <div className="bestSeller">
                      <img
                        src="image/iconBestSeller.png"
                        alt=""
                        style={{ position: 'absolute', zIndex: 1000, left: '-5px' }}
                      />
                    </div>
                    <div className="product-img box-img1 box-img">
                      <a href="">
                        <img
                          src="https://pubcdn.ivymoda.com/files/product/thumab/1600/2023/03/10/17a94756b0b655127bc9460906248317.jpg"
                          alt=""
                        />
                      </a>
                      <a href="">
                        <img
                          src="https://pubcdn.ivymoda.com/files/product/thumab/1600/2023/03/10/da0c0bfe458ed8e4a85a530f4b23655f.jpg"
                          alt=""
                        />
                      </a>
                    </div>
                    <div className="product-img box-img2 box-img" style={{ display: 'none' }}>
                      <a href="">
                        <img
                          src="https://pubcdn.ivymoda.com/files/product/thumab/1600/2023/03/21/1ecdac8afe8ae7614c52818c2f92e6bc.jpg"
                          alt=""
                        />
                      </a>
                      <a href="">
                        <img
                          src="https://pubcdn.ivymoda.com/files/product/thumab/1600/2023/03/27/668d8acaa9c09e5e99b9985d7986d0ab.JPG"
                          alt=""
                        />
                      </a>
                    </div>
                    <div className="product-info">
                      <div
                        className="product-color product-detail__color__input"
                        style={{ display: 'flex', alignItems: 'center' }}
                      >
                        <label htmlFor="" className="color1" onclick="chooseColor(this)">
                          <input type="radio" name="color2" defaultChecked="" />
                          <span>
                            <a href="#">
                              <img src="https://pubcdn.ivymoda.com/ivy2/images/color/001.png" alt="" />
                            </a>
                          </span>
                        </label>
                        <label htmlFor="" className="color2" onclick="chooseColor(this)">
                          <input type="radio" name="color2" />
                          <span>
                            <a href="#">
                              <img src="https://pubcdn.ivymoda.com/ivy2/images/color/002.png" alt="" />
                            </a>
                          </span>
                        </label>
                        <i className="bx bx-heart" />
                      </div>
                      <div className="product-name">
                        <a href="">
                          <p>Áo Ren Dáng Ôm Tay Phồng</p>
                        </a>
                      </div>
                      <div className="product-price">
                        <p>
                          <b>1.490.000đ</b>
                        </p>
                        <a href="product.html">
                          <i className="bx bx-shopping-bag" />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="product-item">
                    <div className="sale">
                      -50 <sup>%</sup>
                    </div>
                    <div className="product-img box-img1 box-img">
                      <a href="">
                        <img
                          src="https://pubcdn.ivymoda.com/files/product/thumab/1600/2023/06/16/24d3c53a696a8a2c5a4a7380e84e0511.JPG"
                          alt=""
                        />
                      </a>
                      <a href="">
                        <img
                          src="https://pubcdn.ivymoda.com/files/product/thumab/1600/2023/06/16/c283ae75dcff87680406968a0887a5cb.JPG"
                          alt=""
                        />
                      </a>
                    </div>
                    <div className="product-img box-img2 box-img" style={{ display: 'none' }}>
                      <a href="">
                        <img
                          src="https://pubcdn.ivymoda.com/files/product/thumab/1600/2023/07/20/1b0e624de4f45aa11c25b0586ce87ac0.JPG"
                          alt=""
                        />
                      </a>
                      <a href="">
                        <img
                          src="https://pubcdn.ivymoda.com/files/product/thumab/1600/2023/07/20/839bb3b2d72a52ad988009479b92a831.JPG"
                          alt=""
                        />
                      </a>
                    </div>
                    <div className="product-info">
                      <div
                        className="product-color product-detail__color__input"
                        style={{ display: 'flex', alignItems: 'center' }}
                      >
                        <label htmlFor="" className="color1" onclick="chooseColor(this)">
                          <input type="radio" name="color3" defaultChecked="" />
                          <span>
                            <a href="#">
                              <img src="https://pubcdn.ivymoda.com/ivy2/images/color/001.png" alt="" />
                            </a>
                          </span>
                        </label>
                        <label htmlFor="" className="color2" onclick="chooseColor(this)">
                          <input type="radio" name="color3" />
                          <span>
                            <a href="#">
                              <img src="https://pubcdn.ivymoda.com/ivy2/images/color/013.png" alt="" />
                            </a>
                          </span>
                        </label>
                        <i className="bx bx-heart" />
                      </div>
                      <div className="product-name">
                        <a href="">
                          <p>Áo Peplum Xẻ Tà</p>
                        </a>
                      </div>
                      <div className="product-price">
                        <p>
                          <b>675.000đ</b>
                        </p>
                        <p>1.350.000đ</p>
                        <a href="product.html">
                          <i className="bx bx-shopping-bag" />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="product-item">
                    <div className="sale">
                      -50 <sup>%</sup>
                    </div>
                    <div className="product-img box-img1 box-img">
                      <a href="">
                        <img
                          src="https://pubcdn.ivymoda.com/files/product/thumab/1600/2023/01/07/d6009dcbb79e8eecfd074ef7d1b8cbbc.jpg"
                          alt=""
                        />
                      </a>
                      <a href="">
                        <img
                          src="https://pubcdn.ivymoda.com/files/product/thumab/400/2023/01/07/82384766865026b1d5130e67ddd9cff9.jpg"
                          alt=""
                        />
                      </a>
                    </div>
                    <div className="product-img box-img2 box-img" style={{ display: 'none' }}>
                      <a href="">
                        <img
                          src="https://pubcdn.ivymoda.com/files/product/thumab/1600/2023/01/07/81999fd2da47f4aba6e70e0f66adb7dc.jpg"
                          alt=""
                        />
                      </a>
                      <a href="">
                        <img
                          src="https://pubcdn.ivymoda.com/files/product/thumab/1600/2023/01/07/6785b314b44f193f3d570a9860647ee0.jpg"
                          alt=""
                        />
                      </a>
                    </div>
                    <div className="product-info">
                      <div
                        className="product-color product-detail__color__input"
                        style={{ display: 'flex', alignItems: 'center' }}
                      >
                        <label htmlFor="" className="color1" onclick="chooseColor(this)">
                          <input type="radio" name="color4" defaultChecked="" />
                          <span>
                            <a href="#">
                              <img src="https://pubcdn.ivymoda.com/ivy2/images/color/001.png" alt="" />
                            </a>
                          </span>
                        </label>
                        <label htmlFor="" className="color2" onclick="chooseColor(this)">
                          <input type="radio" name="color4" />
                          <span>
                            <a href="#">
                              <img src="https://pubcdn.ivymoda.com/ivy2/images/color/004.png" alt="" />
                            </a>
                          </span>
                        </label>
                        <i className="bx bx-heart" />
                      </div>
                      <div className="product-name">
                        <a href="">
                          <p>Áo Tapta Trễ Vai</p>
                        </a>
                      </div>
                      <div className="product-price">
                        <p>
                          <b>645.000đ</b>
                        </p>
                        <p>1.290.000đ</p>
                        <a href="product.html">
                          <i className="bx bx-shopping-bag" />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="product-item">
                    <div className="sale">
                      -50<sup>%</sup>
                    </div>
                    <div className="product-img box-img1 box-img">
                      <a href="">
                        <img
                          src="https://pubcdn.ivymoda.com/files/product/thumab/1600/2022/08/19/6375f3b5e06b411a1c187b74b05948be.jpg"
                          alt=""
                        />
                      </a>
                      <a href="">
                        <img
                          src="https://pubcdn.ivymoda.com/files/product/thumab/1600/2022/08/19/ce048043606d5d4f8bbd0f397b2de60f.jpg"
                          alt=""
                        />
                      </a>
                    </div>
                    <div className="product-img box-img2 box-img" style={{ display: 'none' }}>
                      <a href="">
                        <img
                          src="https://pubcdn.ivymoda.com/files/product/thumab/1600/2022/08/18/94296efcf32874b316c1af1acf2aec4d.jpg"
                          alt=""
                        />
                      </a>
                      <a href="">
                        <img
                          src="https://pubcdn.ivymoda.com/files/product/thumab/1600/2022/08/18/5d48f1e115f565e45145ee9844ec4d72.jpg"
                          alt=""
                        />
                      </a>
                    </div>
                    <div className="product-img box-img3 box-img" style={{ display: 'none' }}>
                      <a href="">
                        <img
                          src="https://pubcdn.ivymoda.com/files/product/thumab/1600/2022/08/19/92364e4f8d259d431a534ab15178d5af.jpg"
                          alt=""
                        />
                      </a>
                      <a href="">
                        <img
                          src="https://pubcdn.ivymoda.com/files/product/thumab/1600/2022/08/19/93b6281b502fa56e47e2e2508e7c9ecb.jpg"
                          alt=""
                        />
                      </a>
                    </div>
                    <div className="product-info">
                      <div
                        className="product-color product-detail__color__input"
                        style={{ display: 'flex', alignItems: 'center' }}
                      >
                        <label htmlFor="" className="color1" onclick="chooseColor(this)">
                          <input type="radio" name="color5" defaultChecked="" />
                          <span>
                            <a href="#">
                              <img src="https://pubcdn.ivymoda.com/ivy2/images/color/001.png" alt="" />
                            </a>
                          </span>
                        </label>
                        <label htmlFor="" className="color2" onclick="chooseColor(this)">
                          <input type="radio" name="color5" />
                          <span>
                            <a href="#">
                              <img src="https://pubcdn.ivymoda.com/ivy2/images/color/004.png" alt="" />
                            </a>
                          </span>
                        </label>
                        <label htmlFor="" className="color3" onclick="chooseColor(this)">
                          <input type="radio" name="color5" />
                          <span>
                            <a href="#">
                              <img src="https://pubcdn.ivymoda.com/ivy2/images/color/031.png" alt="" />
                            </a>
                          </span>
                        </label>
                        <i className="bx bx-heart" />
                      </div>
                      <div className="product-name">
                        <a href="">
                          <p>Áo Sơ Mi Lụa Cài Khuy Ẩn</p>
                        </a>
                      </div>
                      <div className="product-price">
                        <p>
                          <b>495.000đ</b>
                        </p>
                        <p>990.000đ</p>
                        <a href="product.html">
                          <i className="bx bx-shopping-bag" />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="product-item">
                    <div className="product-img box-img1 box-img">
                      <a href="">
                        <img
                          src="https://pubcdn.ivymoda.com/files/product/thumab/1600/2022/07/05/1e0c1098ad25b7c1bc0527b53d7533a3.jpg"
                          alt=""
                        />
                      </a>
                      <a href="">
                        <img
                          src="https://pubcdn.ivymoda.com/files/product/thumab/1600/2022/07/05/d4ccbb644c4c3f23d58d3c5f85cb8139.jpg"
                          alt=""
                        />
                      </a>
                    </div>
                    <div className="product-img box-img2 box-img" style={{ display: 'none' }}>
                      <a href="">
                        <img
                          src="https://pubcdn.ivymoda.com/files/product/thumab/1600/2022/07/07/0f1cc72d1632f8545bdfa7265948f1b7.jpg"
                          alt=""
                        />
                      </a>
                      <a href="">
                        <img
                          src="https://pubcdn.ivymoda.com/files/product/thumab/1600/2022/07/07/5591b1179ac955766e7fe64f72d77672.jpg"
                          alt=""
                        />
                      </a>
                    </div>
                    <div className="product-img box-img3 box-img" style={{ display: 'none' }}>
                      <a href="">
                        <img
                          src="https://pubcdn.ivymoda.com/files/product/thumab/1600/2023/08/16/670b0680e1f314fd40d5581ce36bf1f6.JPG"
                          alt=""
                        />
                      </a>
                      <a href="">
                        <img
                          src="https://pubcdn.ivymoda.com/files/product/thumab/1600/2023/08/16/5e737def4a12781dce7fc75fbe8616f5.JPG"
                          alt=""
                        />
                      </a>
                    </div>
                    <div className="product-info">
                      <div
                        className="product-color product-detail__color__input"
                        style={{ display: 'flex', alignItems: 'center' }}
                      >
                        <label htmlFor="" className="color1" onclick="chooseColor(this)">
                          <input type="radio" name="color6" defaultChecked="" />
                          <span>
                            <a href="#">
                              <img src="https://pubcdn.ivymoda.com/ivy2/images/color/001.png" alt="" />
                            </a>
                          </span>
                        </label>
                        <label htmlFor="" className="color2" onclick="chooseColor(this)">
                          <input type="radio" name="color6" />
                          <span>
                            <a href="#">
                              <img src="https://pubcdn.ivymoda.com/ivy2/images/color/014.png" alt="" />
                            </a>
                          </span>
                        </label>
                        <label htmlFor="" className="color3" onclick="chooseColor(this)">
                          <input type="radio" name="color6" />
                          <span>
                            <a href="#">
                              <img src="https://pubcdn.ivymoda.com/ivy2/images/color/006.png" alt="" />
                            </a>
                          </span>
                        </label>
                        <i className="bx bx-heart" />
                      </div>
                      <div className="product-name">
                        <a href="">
                          <p>Áo Sơ Mi Tencel Thêu Viền</p>
                        </a>
                      </div>
                      <div className="product-price">
                        <p>
                          <b>1.090.000đ</b>
                        </p>
                        <a href="product.html">
                          <i className="bx bx-shopping-bag" />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="product-item">
                    <div className="sale">
                      -50<sup>%</sup>
                    </div>
                    <div className="product-img box-img1 box-img">
                      <a href="">
                        <img
                          src="https://pubcdn.ivymoda.com/files/product/thumab/1600/2022/06/29/cde094d23a57bc48f019bcbeb729e36f.JPG"
                          alt=""
                        />
                      </a>
                      <a href="">
                        <img
                          src="https://pubcdn.ivymoda.com/files/product/thumab/1600/2022/06/29/882c1f80296398f42e309efe85a31387.JPG"
                          alt=""
                        />
                      </a>
                    </div>
                    <div className="product-img box-img2 box-img" style={{ display: 'none' }}>
                      <a href="">
                        <img
                          src="https://pubcdn.ivymoda.com/files/product/thumab/1600/2022/07/08/f84505053dbb38a788578e4074a0b2e5.JPG"
                          alt=""
                        />
                      </a>
                      <a href="">
                        <img
                          src="https://pubcdn.ivymoda.com/files/product/thumab/1600/2022/07/08/85aea1c72eba5a28d4278814ab8707fe.JPG"
                          alt=""
                        />
                      </a>
                    </div>
                    <div className="product-info">
                      <div
                        className="product-color product-detail__color__input"
                        style={{ display: 'flex', alignItems: 'center' }}
                      >
                        <label htmlFor="" className="color1" onclick="chooseColor(this)">
                          <input type="radio" name="color7" defaultChecked="" />
                          <span>
                            <a href="#">
                              <img src="https://pubcdn.ivymoda.com/ivy2/images/color/001.png" alt="" />
                            </a>
                          </span>
                        </label>
                        <label htmlFor="" className="color2" onclick="chooseColor(this)">
                          <input type="radio" name="color7" />
                          <span>
                            <a href="#">
                              <img src="https://pubcdn.ivymoda.com/ivy2/images/color/012.png" alt="" />
                            </a>
                          </span>
                        </label>
                        <i className="bx bx-heart" />
                      </div>
                      <div className="product-name">
                        <a href="">
                          <p>Áo Trễ Vai Bo Chun</p>
                        </a>
                      </div>
                      <div className="product-price">
                        <p>
                          <b>445.000đ</b>
                        </p>
                        <p>890.000đ</p>
                        <a href="product.html">
                          <i className="bx bx-shopping-bag" />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="product-item">
                    <div className="sale">
                      -50<sup>%</sup>
                    </div>
                    <div className="product-img box-img1 box-img">
                      <a href="">
                        <img
                          src="https://pubcdn.ivymoda.com/files/product/thumab/1600/2022/06/20/a53255493de2fab90073e2fd93cc44ef.jpg"
                          alt=""
                        />
                      </a>
                      <a href="">
                        <img
                          src="https://pubcdn.ivymoda.com/files/product/thumab/1600/2022/06/20/9db164edfb1354512d2efd0494da3870.jpg"
                          alt=""
                        />
                      </a>
                    </div>
                    <div className="product-img box-img2 box-img" style={{ display: 'none' }}>
                      <a href="">
                        <img
                          src="https://pubcdn.ivymoda.com/files/product/thumab/1600/2022/06/20/54669de65dc4ab2f12c1f92224867abe.jpg"
                          alt=""
                        />
                      </a>
                      <a href="">
                        <img
                          src="https://pubcdn.ivymoda.com/files/product/thumab/1600/2022/06/20/49fc11d9976d5171a383a90a4243952a.jpg"
                          alt=""
                        />
                      </a>
                    </div>
                    <div className="product-info">
                      <div
                        className="product-color product-detail__color__input"
                        style={{ display: 'flex', alignItems: 'center' }}
                      >
                        <label htmlFor="" className="color1" onclick="chooseColor(this)">
                          <input type="radio" name="color8" defaultChecked="" />
                          <span>
                            <a href="#">
                              <img src="https://pubcdn.ivymoda.com/ivy2/images/color/001.png" alt="" />
                            </a>
                          </span>
                        </label>
                        <label htmlFor="" className="color2" onclick="chooseColor(this)">
                          <input type="radio" name="color8" />
                          <span>
                            <a href="#">
                              <img src="https://pubcdn.ivymoda.com/ivy2/images/color/049.png" alt="" />
                            </a>
                          </span>
                        </label>
                        <i className="bx bx-heart" />
                      </div>
                      <div className="product-name">
                        <a href="">
                          <p>Áo Sơ Mi Lụa Cổ Bẻ 2 Ve</p>
                        </a>
                      </div>
                      <div className="product-price">
                        <p>
                          <b>495.000đ</b>
                        </p>
                        <p>990.000đ</p>
                        <a href="product.html">
                          <i className="bx bx-shopping-bag" />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="product-item">
                    <div className="sale">
                      -50<sup>%</sup>
                    </div>
                    <div className="product-img box-img1 box-img">
                      <a href="">
                        <img
                          src="https://pubcdn.ivymoda.com/files/product/thumab/1600/2022/06/29/2a5332d69ad1d4a2f9854efe81719be5.JPG"
                          alt=""
                        />
                      </a>
                      <a href="">
                        <img
                          src="https://pubcdn.ivymoda.com/files/product/thumab/1600/2022/06/29/a45ed61367995bfddc3dc4b2eb6e0eef.JPG"
                          alt=""
                        />
                      </a>
                    </div>
                    <div className="product-img box-img2 box-img" style={{ display: 'none' }}>
                      <a href="">
                        <img
                          src="https://pubcdn.ivymoda.com/files/product/thumab/1600/2022/06/20/d1d0bf13b04b99ed56eb8697f1bff3e2.jpg"
                          alt=""
                        />
                      </a>
                      <a href="">
                        <img
                          src="https://pubcdn.ivymoda.com/files/product/thumab/1600/2022/06/20/533aeda6033f32524d9035684ec0f1b3.jpg"
                          alt=""
                        />
                      </a>
                    </div>
                    <div className="product-info">
                      <div
                        className="product-color product-detail__color__input"
                        style={{ display: 'flex', alignItems: 'center' }}
                      >
                        <label htmlFor="" className="color1" onclick="chooseColor(this)">
                          <input type="radio" name="color9" defaultChecked="" />
                          <span>
                            <a href="#">
                              <img src="https://pubcdn.ivymoda.com/ivy2/images/color/001.png" alt="" />
                            </a>
                          </span>
                        </label>
                        <label htmlFor="" className="color2" onclick="chooseColor(this)">
                          <input type="radio" name="color9" />
                          <span>
                            <a href="#">
                              <img src="https://pubcdn.ivymoda.com/ivy2/images/color/004.png" alt="" />
                            </a>
                          </span>
                        </label>
                        <i className="bx bx-heart" />
                      </div>
                      <div className="product-name">
                        <a href="">
                          <p>Áo Sơ Mi Tencel Chun Vai Tay Bồng</p>
                        </a>
                      </div>
                      <div className="product-price">
                        <p>
                          <b>545.000đ</b>
                        </p>
                        <p>1.090.000đ</p>
                        <a href="product.html">
                          <i className="bx bx-shopping-bag" />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="product-item">
                    <div className="sale">
                      -50<sup>%</sup>
                    </div>
                    <div className="product-img box-img1 box-img">
                      <a href="">
                        <img
                          src="https://pubcdn.ivymoda.com/files/product/thumab/1600/2022/06/04/0b2d7e121026d1f0b371bbcb1729baab.JPG"
                          alt=""
                        />
                      </a>
                      <a href="">
                        <img
                          src="https://pubcdn.ivymoda.com/files/product/thumab/1600/2022/06/04/dbed028747412a5038b9a46e30d32011.JPG"
                          alt=""
                        />
                      </a>
                    </div>
                    <div className="product-img box-img2 box-img" style={{ display: 'none' }}>
                      <a href="">
                        <img
                          src="https://pubcdn.ivymoda.com/files/product/thumab/1600/2022/05/17/7100bde61aa9490c6e6ec84d2e2a60d9.JPG"
                          alt=""
                        />
                      </a>
                      <a href="">
                        <img
                          src="https://pubcdn.ivymoda.com/files/product/thumab/1600/2022/05/17/c8bde88487d94157037448533a69903e.JPG"
                          alt=""
                        />
                      </a>
                    </div>
                    <div className="product-info">
                      <div
                        className="product-color product-detail__color__input"
                        style={{ display: 'flex', alignItems: 'center' }}
                      >
                        <label htmlFor="" className="color1" onclick="chooseColor(this)">
                          <input type="radio" name="color10" defaultChecked="" />
                          <span>
                            <a href="#">
                              <img src="https://pubcdn.ivymoda.com/ivy2/images/color/001.png" alt="" />
                            </a>
                          </span>
                        </label>
                        <label htmlFor="" className="color2" onclick="chooseColor(this)">
                          <input type="radio" name="color10" />
                          <span>
                            <a href="#">
                              <img src="https://pubcdn.ivymoda.com/ivy2/images/color/005.png" alt="" />
                            </a>
                          </span>
                        </label>
                        <i className="bx bx-heart" />
                      </div>
                      <div className="product-name">
                        <a href="">
                          <p>Áo Lụa Xếp Nhấn Eo</p>
                        </a>
                      </div>
                      <div className="product-price">
                        <p>
                          <b>475.000đ</b>
                        </p>
                        <p>950.000đ</p>
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
                LAPTOP <span style={{ color: 'red' }}>HOT</span>
              </h1>
              <div className="product-container">
                <div className="product-slider" id="product-slider">
                  <div className="product-item">
                    <div className="sale">
                      -18 <sup>%</sup>
                    </div>
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
          </div>
        </div>
        {/*-------------------------footer-----------------------------------*/}
        <footer>
          <div className="footer-container">
            <div className="left-footer">
              <div className="top-left-footer">
                <a href="">
                  <img src="https://pubcdn.ivymoda.com/ivy2/images/logo-footer.png" alt="" />
                </a>
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
                  <li>
                    <a href="">Chính sách thanh toán</a>
                  </li>
                  <li>
                    <a href="">Chính sách đổi trả</a>
                  </li>
                  <li>
                    <a href="">Chính sách bảo hành</a>
                  </li>
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
