import { SET_SHOW } from '../actions';

const init = {
    show: false
}

const showReducer = (state = init, action) => {
    switch (action.type) {
        case SET_SHOW:
            return { ...state, show: action.state }

        default:
            return state;
    }
}

export default showReducer;