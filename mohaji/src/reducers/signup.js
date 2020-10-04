import { SET_SIGNUP } from '../actions';
import { SET_SOCIALLOGIN } from '../actions';
import { SET_TOKEN } from '../actions';


const init = {
    userInfo: {
        id: null,
        nickname: null
    },
    isSignup: false,
    isSocial: false,
    googleToken: null
}

const signupReducer = (state = init, action) => {
    switch (action.type) {
        case SET_SIGNUP:
            return { ...state, isSignup: action.bool }

        case SET_SOCIALLOGIN:
            return { ...state, isSocial: action.bool }

        case SET_TOKEN:
            return { ...state, googleToken: action.string }

        default:
            return state;
    }
}

export default signupReducer;