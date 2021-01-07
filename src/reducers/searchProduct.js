import * as types from "../constants/actionType";

//string
var initState = '';

var searchProduct = (state = initState, action) => {
    switch (action.type) {
        case types.Search_Product:
            
            return action.keyword;           
        default:
            return state;
    }
}

export default searchProduct;