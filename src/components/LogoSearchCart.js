import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import '../myCSS/Logo-Search-CartShop.css';
import { Badge } from 'antd';
import 'antd/dist/antd.css';
import { connect } from 'react-redux';
import { actSearchProduct } from '../actions/indexAction';


class LogoSearchCart extends Component {
    constructor(props) {
        super(props);

        this.state = {
            scrolled: false,
            keyword: ''
        }
    }

    componentDidMount() {
        window.addEventListener('scroll', () => {
            const isTop = window.scrollY < 100;
            if (isTop !== true) {
                this.setState({
                    scrolled: true
                });
            } else {
                this.setState({
                    scrolled: false
                });
            }
        });
    }
    //action search
    onHandleChange = (event) => {
        this.setState({
            keyword: event.target.value
        });
    }
    onSearch = () => {
        this.props.onSearchProduct(this.state.keyword);
    }


    render() {
        const { carts } = this.props;

        return (
            <div className="LSC">
                <div className="container">
                    <div className="row">
                        <img style={{ width: '150px' }} src="https://i.imgur.com/EmBuGM0.png?1" alt="logo" />

                        <div className="LSC-search">
                            <div className="search-box">
                                <input type="text"
                                    className="search-Term"
                                    placeholder="Search..."
                                    name="keyword"
                                    value={this.state.keyword}
                                    onChange={(event) => this.onHandleChange(event)}
                                />
                                <button type="submit"
                                    className="search-Button"
                                    onClick={() => this.onSearch()}
                                >
                                    <i className="fa fa-search"></i>
                                </button>
                            </div>
                        </div>
                        <div className={this.state.scrolled ? 'nav scrolled' : 'nav'}>
                            <Badge count={carts.length}>
                                <NavLink to="/danhsachsanpham">
                                    <i className="fa fa-cart-arrow-down" aria-hidden="true"></i>
                                </NavLink>
                            </Badge>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}


const mapStateToProps = (state) => {
    return {
        carts: state.cartReducers
    }
}
const mapDispatchToProps = (dispatch, props) => {
    return {
        onSearchProduct: (keyword) => {
            dispatch(actSearchProduct(keyword))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LogoSearchCart);