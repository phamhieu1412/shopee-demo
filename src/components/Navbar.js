import React, { Component } from 'react';
import { NavLink, Link } from 'react-router-dom';
import '../myCSS/Navbar.css';
import { Popover } from 'antd';
import 'antd/dist/antd.css';

const content = (
    <div>
        <img src="https://i.imgur.com/Qyx7WEj.jpg" alt="QR-Shopee" style={{width:'100px'}} />
    </div>
);

class Navbar extends Component {
    render() {
        return (
            <div className="nav-fixed navbar-fixed-top">
                <nav className="navbar navbar-default" role="navigation">
                    <div className="container">
                        <div className="row">
                            <div className="navbar-header">
                                <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-ex1-collapse">
                                    <span className="icon-bar"></span>
                                    <span className="icon-bar"></span>
                                    <span className="icon-bar"></span>
                                </button>
                            </div>

                            <div className="collapse navbar-collapse navbar-ex1-collapse">
                                <ul className="nav navbar-nav">
                                    <li>
                                        <NavLink to="/seller">Kênh Người Bán</NavLink>
                                    </li>
                                    <li>
                                        <Popover placement="bottomLeft" title="" content={content} trigger="hover">

                                            <NavLink to="https://www.google.com/">
                                                Tải Ứng Dụng
                                            </NavLink>
                                        </Popover>
                                    </li>
                                    <li className="navbar-brand">
                                        Kết Nối
                                    </li>
                                    <li>
                                        <NavLink to="/dangki"><i className="fa fa-facebook-official" aria-hidden="true"></i></NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/dangki"><i className="fa fa-instagram" aria-hidden="true"></i></NavLink>
                                    </li>
                                </ul>

                                <ul className="nav navbar-nav navbar-right">
                                    <li>
                                        <Link to="/"><i className="fa fa-newspaper-o" aria-hidden="true"></i>Thông Báo</Link>
                                    </li>
                                    <li>
                                        <NavLink to="/support"><i className="fa fa-question-circle" aria-hidden="true"></i>Trợ Giúp</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/dangki">Đăng Ký</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/dangnhap">Đăng Nhập</NavLink>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        );
    }
}

export default Navbar;