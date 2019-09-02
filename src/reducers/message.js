import * as types from './../constant/TypeList'
import * as messages from './../constant/messsageTypes';
const instialState = messages.MSG_WELCOME

const message = (state = instialState, action) => {
    switch (action.type) {
        case types.CHANGE_MESSAGE:
            state = action.payload;
            return state;
        default: return state
    }
    return state
}

export default message