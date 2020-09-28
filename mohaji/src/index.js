import React from 'react';
import ReactDOM from 'react-dom';


import { compose, createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";


import {BrowserRouter} from 'react-router-dom'


import './index.css';
import App from './component/App';
import reducers from "./reducers";
import CommentList from './component/CommentList';


const composeEnhancers = compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)));


ReactDOM.render(
  <Provider store={store}>
<<<<<<< HEAD
    <App />
    <CommentList />
=======
    <BrowserRouter>
      <App />
    </BrowserRouter>
>>>>>>> befb79dace57c4cd165513429a452dcedff14070
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
