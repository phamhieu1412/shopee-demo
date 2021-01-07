import React, { Component } from 'react';
import * as messageOfCart from '../../constants/messageOfCart';


export default class CartItems extends Component {

    //action
    onUpdateQuantity = (product, quantity) => {
        if (quantity > 0) {
            this.props.onUpdateProductInCart(product, quantity);
            this.props.onChangeMessage(messageOfCart.Mess_UpdateCartSuccess);
        }
    }
    showTotal = (price, quantity) => {
        return price * quantity;
    }
    onDeleteToCart = (product) => {
        //ondeletetocart & ondeteletocart o tren va duoi khac nhau
        this.props.onDeleteToCart(product)
        this.props.onChangeMessage(messageOfCart.Mess_DeleteCartSuccess)
    }

    render() {
        var { item } = this.props;// item tu cartcontainer
        var { quantity } = item;

        return (

            <tbody>
                <tr>
                    <th scope="row">
                        <img src={item.product.imageProd}
                            alt="" className="img-fluid z-depth-0" />
                    </th>
                    <td>
                        <h5>
                            <strong>{item.product.nameProd}</strong>
                        </h5>
                    </td>
                    <td>
                        <h6>
                            {item.product.priceProd} Đ
                        </h6>
                    </td>
                    <td className="center-on-small-only">
                        {/* so luong */}
                        <span className="">{quantity}</span>
                        <br />
                        <div className="btn-group radio-group" data-toggle="buttons">
                            <label className="btn btn-sm btn-primary btn-rounded waves-effect waves-light"
                                onClick={() => this.onUpdateQuantity(item.product, item.quantity - 1)}
                            >
                                <a href="https://google.com">—</a>
                            </label>
                            <label className="btn btn-sm btn-primary btn-rounded waves-effect waves-light"
                                onClick={() => this.onUpdateQuantity(item.product, item.quantity + 1)}>
                                <a href="https://google.com">+</a>
                            </label>
                        </div>
                    </td>
                    <td>
                        <h6>
                            {this.showTotal(item.product.priceProd, item.quantity)} Đ
                        </h6>
                    </td>
                    <td>
                        <button type="button"
                            className="btn btn-sm btn-primary waves-effect waves-light"
                            data-toggle="tooltip"
                            data-placement="top"
                            title=""
                            data-original-title="Remove item"
                            onClick={() => this.onDeleteToCart(item.product)}>
                            X
                    </button>
                    </td>
                </tr>
            </tbody>
        );
    }
}


