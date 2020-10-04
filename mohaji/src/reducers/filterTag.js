import { SET_SELECT_TAG } from "../actions";

const init = {
    filter_selected: {}
}

const filterTagReducer = (state = init, action) => {
    switch (action.type) {
        case SET_SELECT_TAG:
            return { ...state, filter_selected: action.obj }

        default:
            return state;
    }
}

export default filterTagReducer;