import { combineReducers } from "redux";
import spotReducer from './spot';
import commentReducer from './comment';
import signinReducer from './signin';


export default combineReducers({
  spotReducer,
  commentReducer,
  signinReducer
});
