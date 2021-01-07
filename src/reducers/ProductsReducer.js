import * as types from '../constants/actionType';

var initState = [];

const products = (state = initState, action ) => {
    switch (action.type) {
        case types.LIST_ALL_PRODUCT:
            state = action.products;
            return [...state];
        default:
            return [...state];
    }
}

// var findIndex = (products, id) => {
//     var result = -1;
//     if( products.length > 0) {
//         for (var i = 0; i < products.length; i++) {
//             if (products[i].id === id) {
//                 result = i;
//                 break;
//             }
//         } 
//     }
//     return result;
// }

export default products;