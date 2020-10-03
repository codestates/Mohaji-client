import { SET_NAV } from '../actions';

const init = {
    component: null,
}

const navReducer = (state = init, action) => {
    switch (action.type) {
        case SET_NAV:
            return { ...state, component: action.component }

        default:
            return state;
    }
}
export default navReducer;