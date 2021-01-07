import React, {Component} from 'react';
import {connect} from 'react-redux';
import Cart from '../../components/editProductCart/Cart';
import * as Message from '../../constants/messageOfCart';
import CartItems from '../../components/editProductCart/CartItems';
import Result from '../../components/editProductCart/Result';
import { actDeleteToCart, actMessageChange, actUpdateProductInCart } from '../../actions/indexAction';


class CartsContainer extends Component {
  showCartItem = (carts) => {
    var result = <tbody><tr><td>{Message.Mess_Empty}</td></tr></tbody>;
    if (carts.length > 0) {
      result = carts.map( (item, index)=>{
        // truyen thong tin tung spham
        return <CartItems 
                  key={index} 
                  item={item}
                  onDeleteToCart={this.props.onDeleteToCart}
                  onChangeMessage={this.props.onChangeMessage}
                  onUpdateProductInCart={this.props.onUpdateProductInCart}
                />
      });
    }
    return result;
  }

  showTotalItem = (carts) => {
    var result = null;
    if (carts.length > 0) {
      result =  <Result carts={carts}/>
    }
    return result;
  }

  render(){
    // carts lay tu reducer su dung qua props
    var {carts} = this.props;
    
    return (
      <Cart >
        {/* show san pham them gior hang */}
        {this.showCartItem(carts)}
        {/* show tong tien san pham */}
        {this.showTotalItem(carts)}
      </Cart>
    );
    
  }
}

//cartReducers from reducers/index
const mapStateToProps = (state) => {
  return {
    carts: state.cartReducers
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    onDeleteToCart: (product) => {
      dispatch(actDeleteToCart(product))
    },
    onChangeMessage: (message) => {
      dispatch(actMessageChange(message))
    },
    onUpdateProductInCart: (product, quantity) => {
      dispatch(actUpdateProductInCart(product, quantity))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CartsContainer);