import React, { Component, Fragment } from 'react';
import Slider from "react-slick";
import '../../../myCSS/Detail-Product.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Fee from './TransportFee';
import Address from './TransportAddress';
import { connect } from 'react-redux';
import { actAddToCart } from '../../../actions/indexAction';

import Swal from 'sweetalert2';
// import 'sweetalert2/src/sweetalert2.scss';
import { NavLink } from 'react-router-dom';


class MainDetail extends Component {
    onAddToCart = (product) => {
        this.props.onAddToCart(product)
        Swal.fire(
            'Thêm vào giỏ hàng thành công',
            '',
            'success'
        )
    }

    onBuyNow = (product) => {
        this.props.onAddToCart(product)
        Swal.fire(
            'Thêm vào giỏ hàng thành công',
            '',
            'success'
        )
    }

    render() {

        const settings = {
            customPaging: function () {
                return (
                    <Fragment>
                        {/* <a>
                            <img src={this.props.dataOfProd.imageProd} alt="" />
                        </a>
                        <a>
                            <img src={this.props.dataOfProd.imageProd1} alt="" />
                        </a>
                        <a>
                            <img src={this.props.dataOfProd.imageProd2} alt="" />
                        </a>
                        <a>
                            <img src={this.props.dataOfProd.imageProd3} alt="" />
                        </a> */}
                    </Fragment>
                );
            },
            dots: true,
            dotsClass: "slick-dots slick-thumb",
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1
        };
        return (
            <Fragment>
                <div className="container" style={{ backgroundColor: 'white', paddingBottom: '30px', paddingTop: '20px' }}>
                    <div className="row">
                        <div className="col-md-6">
                            <div className="slick">
                                <Slider {...settings}>
                                    <div>
                                        <img src={this.props.dataOfProd.imageProd} alt="" />
                                    </div>
                                    <div>
                                        <img src={this.props.dataOfProd.imageProd1} alt="" />
                                    </div>
                                    <div>
                                        <img src={this.props.dataOfProd.imageProd2} alt="" />
                                    </div>
                                    <div>
                                        <img src={this.props.dataOfProd.imageProd3} alt="" />
                                    </div>
                                </Slider>
                            </div>
                            {/* share */}
                            <div style={{ marginTop: '80px' }} className="item-icon">
                                Share:
                                <i style={{ color: '#367cb6' }} className="fa fa-comments" aria-hidden="true"></i>
                                <i style={{ color: '#3737dd' }} className="fa fa-facebook-square" aria-hidden="true"></i>
                                <i style={{ color: '#f44747' }} className="fa fa-google-plus" aria-hidden="true"></i>
                                <i style={{ color: 'aqua' }} className="fa fa-twitter" aria-hidden="true"></i>
                                <i style={{ color: 'gray' }} className="fa fa-pinterest-square" aria-hidden="true"></i>
                            </div>
                        </div>

                        {/* thong tin san pham */}
                        <div className="col-md-6 detail__product">
                            <div className="row">
                                <h2>{this.props.dataOfProd.nameProd}</h2>
                            </div>
                            <div className="row" style={{ display: 'flex' }}>
                                <h3><strong>đ</strong>{this.props.dataOfProd.priceProd}</h3>
                                &nbsp; &nbsp;
                                <h3><del>xxx</del></h3>
                                &nbsp; &nbsp;
                                <h2 className="text-success">{this.props.dataOfProd.discount}% off</h2>
                            </div>
                            <div className="row" style={{ display: 'flex', alignItems: 'center' }}>
                                <h3 className="text-warning">
                                    <i className="fa fa-star" aria-hidden="true"></i>
                                    <i className="fa fa-star" aria-hidden="true"></i>
                                    <i className="fa fa-star" aria-hidden="true"></i>
                                    <i className="fa fa-star-half-o" aria-hidden="true"></i>
                                    <i className="fa fa-star-o" aria-hidden="true"></i>
                                </h3>
                                &nbsp; &nbsp;
                                <h5>1200 star rating | 250 reviews | Selled: {this.props.dataOfProd.selled}</h5>
                            </div>
                            <div className="row">
                                <div>
                                    <i className="text-success fa fa-check-square-o mr-5" aria-hidden="true"></i>
                                    <strong>Mã giảm giá của shop</strong>
                                    <div className="scene">
                                        <div className="ticket"><p>Giảm 8k</p></div>
                                        <div className="ticket"><p>Giảm 15k</p></div>
                                        <div className="ticket"><p>Giảm 35k</p></div>
                                        <div className="ticket"><p>Giảm 46k</p></div>
                                    </div>
                                </div>
                                <div>
                                    <i className="text-success fa fa-check-square-o mr-5" aria-hidden="true"></i>
                                    <strong>Combo khuyến mãi</strong>
                                    20% Instant Discount on SBI Credit Cards
                                </div>
                                <div>
                                    <i className="text-success fa fa-check-square-o mr-5" aria-hidden="true"></i>
                                    <strong>Vận chuyển</strong>
                                    <div className="shop-ship ml-20">
                                        <div >
                                            <span>Vận Chuyển Tới</span>
                                            <Address />
                                        </div>
                                        <div >
                                            <span>Phí Vận Chuyển</span>
                                            <Fee />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row mt-4 detail__product-btn">
                                <h4>Size: &nbsp; &nbsp;</h4>
                                <button className="btn" >Size 37</button>
                                <button className="btn" >Size 38</button>
                                <button className="btn" >Size 39</button>
                                <button className="btn" >Size 40</button>
                                <button className="btn" >Size 41</button>
                                <button className="btn" >Size 42</button>
                                <button className="btn" >Size 43</button>
                                <button className="btn" >Size 44</button>
                            </div>
                            <div className="row mt-4 detail__product-btn">
                                <h4>Colors: &nbsp; &nbsp; </h4>
                                <button className="btn" >Vàng</button>
                                <button className="btn" >Đen</button>
                                <button className="btn" >Xám</button>
                                <button className="btn" >Xanh dương</button>
                                <button className="btn" >Xanh da trời</button>
                                <button className="btn" >Tím than</button>
                                <button className="btn" >Hồng</button>
                            </div>
                            <div className="row mt-20 detail__product-action">
                                <NavLink to="/danhsachsanpham"
                                    className="btn detail__product-BuyNow"
                                    onClick={() => this.onBuyNow(this.props.dataOfProd)}
                                >Mua ngay</NavLink>
                                &nbsp;
                                <button
                                    className="btn detail__product-AddToCart"
                                    onClick={() => this.onAddToCart(this.props.dataOfProd)}>
                                    <i className="fa fa-cart-plus mr-10" aria-hidden="true"></i>
                                    Thêm vào giỏ hàng
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </Fragment>
        );
    }
}

var mapStateToProps = (state) => {
    return {
        product: state.productReducers
    }
}
//dispatch action edit theo id
var mapDispatchToProps = (dispatch) => {
    return {
        onAddToCart: (product) => {
            dispatch(actAddToCart(product, 1));
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(MainDetail);