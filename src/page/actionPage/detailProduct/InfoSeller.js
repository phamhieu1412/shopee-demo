import React, { Component, Fragment } from 'react';

class InfoSeller extends Component {

    render() {
        
        return (
            <Fragment>
                <div className="container block__seller mt-20 mb-20" >
                    <div className="row">
                        <div className="col-sm-4 col-md-4 col-lg-4 block__seller-info">
                            <div>
                                <img src={this.props.dataOfProd.imageShop} alt="" style={{width:'60px'}}/>
                            </div>
                            <div className="ml-10">
                                <h5>{this.props.dataOfProd.nameShop}</h5>
                                <p>Online 23 phút trước</p>
                                <button>
                                    <i className="fa fa-commenting-o mr-5" aria-hidden="true"></i>
                                    Chat ngay
                                </button>
                                <button>
                                    <i className="fa fa-home mr-5" aria-hidden="true"></i>
                                    Xem Shop
                                </button>
                            </div>
                        </div>
                        <div className="col-sm-8 col-md-8 col-lg-8 block__seller-view">
                            <div className="col-sm-4 col-md-4 col-lg-4">
                                <p>Đánh Giá <span>572,8k</span></p>
                                <p>Sản Phẩm <span>274</span></p>
                            </div>
                            <div className="col-sm-4 col-md-4 col-lg-4">
                                <p>Tỉ Lệ Phản Hồi <span>100%</span></p>
                                <p>Thời Gian Phản Hồi <span>trong vài giờ</span></p>
                            </div>
                            <div className="col-sm-4 col-md-4 col-lg-4">
                                <p>Tham Gia <span>10 tháng trước</span></p>
                                <p>Người Theo Dõi <span>35,4k</span></p>
                            </div>
                        </div>
                    </div>
                </div>
            </Fragment>
        );
    }
}


export default InfoSeller;