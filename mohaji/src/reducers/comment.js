import {LOAD_COMMENTLIST, SET_COMMENTLIST, SET_ISMOREREAD} from '../actions';

const init = {
  commentList: [],
  isMoreRead: false
}

const commentReducer = (state = init, action) => {
  switch (action.type) {
    case SET_COMMENTLIST:
      return {...state, commentList: action.commentList};
    
    case LOAD_COMMENTLIST:
      return {...state, commentList: [].concat(state.commentList).concat(action.commentList)};

    case SET_ISMOREREAD:
      return {...state, isMoreRead: action.bool}
    
    default:
      return state;
  }
}

export default commentReducer;