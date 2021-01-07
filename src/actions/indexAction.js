import * as types from '../constants/actionType';
import ApiCall from '../utils/ApiCall';


//////////////////////Api product/////////////////////////////////
export const listAllProduct = (products) => {
    return {
        type: types.LIST_ALL_PRODUCT,
        products
    }
}
export const listAllProductRequest = () => {
    return (dispatch) => {
        return ApiCall('GET', 'products', null).then( res => {
            dispatch(listAllProduct(res.data));
        })
    }
}

export const editProduct = (product) => {//store
    return {
        type: types.EDIT_PRODUCT,
        product
    }
}
export const editProductRequest = (id) => {//khi goi len sv lay theo id
    return (dispatch) => {
        return ApiCall('GET', `products/${id}`, null).then(response => {//products tren mockAip
            dispatch(editProduct(response.data))
        });
    }
}

export const updateProduct = (product) => {
    return {
        type: types.UPDATE_PRODUCT,
        product
    }
}
export const updateProductRequest = (product) => {
    return (dispatch) => {
        return ApiCall('PUT', `products/${product.id}`, product).then( response => {
            dispatch(updateProduct(response.data))
        });
    }
}

/////////////////////Cart Shop////////////////////////////
export const actAddToCart = (product, quantity) => {
    return {
        type: types.Add_To_Cart,
        product,
        quantity
    }    
}
export const actMessageChange = (message) => {
    return {
        type: types.Mess_Change,
        message
    }
}
export const actDeleteToCart = (product) => {
    return {
        type: types.Delete_To_Cart,
        product
    }
}
export const actUpdateProductInCart = (product, quantity) => {
    return {
        type: types.Update_Product_In_Cart,
        product,
        quantity
    }
}


/////////////////////Form Chat//////////////////////////

export const actOpenFormChat = () => {
    return {
        type: types.Open_Chat
    }
}
export const actCloseFormChat = () => {
    return {
        type: types.Close_Chat
    }
}

/////////////////////////////////////////Search////////////////////////////////////////

export const actSearchProduct = (keyword) => {
    return {
        type: types.Search_Product,
        keyword
    }
}