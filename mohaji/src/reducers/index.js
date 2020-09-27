import { combineReducers } from "redux";
import spotReducer from './spot'
import commentReducer from './comment'

export default combineReducers({
  spotReducer,
  commentReducer
});
