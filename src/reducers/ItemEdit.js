import * as  types from "../constants/actionType";

var initState = {};

const itemEdit = (state = initState, action) => {

    switch (action.type) {    
        case types.EDIT_PRODUCT:
            return action.product;//action of indexaction of editProduct
        default:
            return state;
    }
}


export default itemEdit;