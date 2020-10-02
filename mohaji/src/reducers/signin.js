import { SET_LOGIN } from '../actions';

const init = {
    userInfo: {
        id: null,
        nickname: null
    },
    isLogin: false
}

const signinReducer = (state = init, action) => {
    switch (action.type) {
        case SET_LOGIN:
            return { ...state, isLogin: action.bool }

        default:
            return state;
    }
}

export default signinReducer;