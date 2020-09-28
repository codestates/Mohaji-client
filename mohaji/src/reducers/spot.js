import { SET_CURRSPOT, SET_SPOTLIST } from '../actions';

const initialState = {
  spotList:[],
  currSpot:null
}

const spotReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_SPOTLIST:
      return {...state, spotList: action.spotList};
    
    case SET_CURRSPOT:
      return {...state, currSpot: action.spot};
    
    default:
      return state;
  }
}

export default spotReducer;