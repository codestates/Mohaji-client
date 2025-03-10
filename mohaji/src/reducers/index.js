import { combineReducers } from "redux";
import spotReducer from './spot';
import commentReducer from './comment';
import signinReducer from './signin';
import showReducer from './show';
import navReducer from './nav';
import signupReducer from './signup';
import filterTagReducer from './filterTag'

export default combineReducers({
  spotReducer,
  commentReducer,
  signinReducer,
  showReducer,
  navReducer,
  signupReducer,
  filterTagReducer
});
