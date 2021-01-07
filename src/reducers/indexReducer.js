import {combineReducers} from 'redux';
import products from './ProductsReducer';
import itemEdit from './ItemEdit';
import cartReducers from './ProductCartReducers/CartReducers';
import messageReducers from './ProductCartReducers/MessageReducers';
import productReducers from './ProductCartReducers/ProductReducers';
import displayFormChat from './displayFormChat';
import searchProduct from './searchProduct';

const myReducer = combineReducers ({
    products,
    itemEdit,
    cartReducers,
    messageReducers,
    productReducers,
    displayFormChat,
    searchProduct
});

export  default myReducer;