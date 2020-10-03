import Axios from 'axios';
import React, { useEffect } from 'react';
import './App.css';
import Map from './Map';
import NavBar from './NavBar';
import SideBar from './SideBar';
import { connect } from 'react-redux';
import { setLogin } from '../actions';


function App(props) {
  useEffect(() => {
    (async () => {
      let result = await Axios.get('http://localhost:4000', {
        withCredentials: true
      }).catch(err => err.response);
      if (result.status === 200) {
        props.dispatch(setLogin(result.data.exist));
      }
    })()
  }, [])
  return (
    <div>
      <NavBar />
      <SideBar />
      <Map />
    </div>
  );
}


const mapStateToProps = (state) => ({
  isLogin: state.signinReducer.isLogin
})

export default connect(mapStateToProps)(App);
