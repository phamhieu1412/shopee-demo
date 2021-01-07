import React, { Component, Fragment } from 'react';
import { NavLink } from 'react-router-dom';


class ContentAddProduct extends Component {

  render() {
    var { product } = this.props;

    return (
      <Fragment>
        <li>
          <NavLink to={`/chitietsanpham/${product.id}`}>
            <img alt="" style={{ backgroundImage: `url(${product.image})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }} />
            <div className="content">
              <h4>{product.name}</h4>
              <p>{product.description}</p>
              <div>
                <span className="price" style={{ color: 'red' }}><small>đ</small> {product.price}</span>
                <small className="selled" style={{ opacity: '0.6', float: 'right', padding: '3px 5px 0px 0px' }}>Đã bán {product.selled}</small>
              </div>
            </div>
          </NavLink>
          <div className="more">
            <NavLink to={`/chitietsanpham/${product.id}`}>Xem chi tiết</NavLink>
          </div>
        </li>
      </Fragment>
    );
  }
}


export default ContentAddProduct;
