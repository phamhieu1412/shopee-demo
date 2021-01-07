import React from 'react';
import '../myCSS/Poster.scss';


function Poster(props) {
    return (
        <div className="container">
            <div className="row">
                {/* carousel */}
                <div className="poster">
                    <div className="p-carousel ">
                        <div id="carousel-poster" className="carousel slide" data-ride="carousel">
                            <ol className="carousel-indicators">
                                <li data-target="#carousel-poster" data-slide-to="0" className="active"></li>
                                <li data-target="#carousel-poster" data-slide-to="1" ></li>
                                <li data-target="#carousel-poster" data-slide-to="2" ></li>
                                <li data-target="#carousel-poster" data-slide-to="3" ></li>
                                <li data-target="#carousel-poster" data-slide-to="4" ></li>
                                <li data-target="#carousel-poster" data-slide-to="5" ></li>
                            </ol>
                            <div className="carousel-inner">
                                <div className="item active">
                                    <img data-src="https://cf.shopee.vn/file/79c726e560649c9d49f13d5f30f63be5_xxhdpi" alt="First" src="https://cf.shopee.vn/file/79c726e560649c9d49f13d5f30f63be5_xxhdpi" />
                                </div>
                                <div className="item">
                                    <img data-src="https://cf.shopee.vn/file/1a69282d46a29f4a371e87316daa6c63_xxhdpi" alt="Second" src="https://cf.shopee.vn/file/1a69282d46a29f4a371e87316daa6c63_xxhdpi" />
                                </div>
                                <div className="item">
                                    <img data-src="https://cf.shopee.vn/file/151c4253037eeeec161eb288fcc3fae3_xxhdpi" alt="Third" src="https://cf.shopee.vn/file/151c4253037eeeec161eb288fcc3fae3_xxhdpi" />
                                </div>
                                <div className="item">
                                    <img data-src="https://cf.shopee.vn/file/b53572091c11932109a705aac12cf46a_xxhdpi" alt="Four" src="https://cf.shopee.vn/file/b53572091c11932109a705aac12cf46a_xxhdpi" />
                                </div>
                                <div className="item">
                                    <img data-src="https://cf.shopee.vn/file/19225944506cbd8102840997cbade1f2_xxhdpi" alt="Five" src="https://cf.shopee.vn/file/19225944506cbd8102840997cbade1f2_xxhdpi" />
                                </div>
                                <div className="item">
                                    <img data-src="https://cf.shopee.vn/file/580caac40c9e9659aa9892154c4ee32f_xxhdpi" alt="Six" src="https://cf.shopee.vn/file/580caac40c9e9659aa9892154c4ee32f_xxhdpi" />
                                </div>
                            </div>
                            <a className="left carousel-control" href="#carousel-poster" data-slide="prev"><span className="glyphicon glyphicon-chevron-left"></span></a>
                            <a className="right carousel-control" href="#carousel-poster" data-slide="next"><span className="glyphicon glyphicon-chevron-right"></span></a>
                        </div>
                    </div>
                    <div className="p-right">
                        <div className="">
                            <img src="https://cf.shopee.vn/file/98fd90c5e5e5c0f5099148f10f8fc5d4_xhdpi" alt="backgroung-1" style={{ width: '100%' }} />
                        </div>
                        <div className="">
                            <img src="https://cf.shopee.vn/file/5da201a6af1ce77aadc431fe0c478b64_xhdpi" alt="backgroung-1" style={{ width: '100%' }} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Poster;