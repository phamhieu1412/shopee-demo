import * as  types from "../constants/actionType";

var initState = false;

const displayFormChat = (state = initState, action) => {

    switch (action.type) {
        case types.Open_Chat:
            state = true;
            return state;
        case types.Close_Chat:
            state = false;
            return state;
        default:
            return state;
    }
}


export default displayFormChat;