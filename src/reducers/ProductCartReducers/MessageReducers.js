import * as Message from '../../constants/messageOfCart';
import * as types from '../../constants/actionType';

var initState = Message.Mess_Welcome;

const messageReducers = (state = initState, action) => {
    switch (action.type) {
        case types.Mess_Change: 
            return action.message;
        default:
            return [...state];
    }
}


export default messageReducers;