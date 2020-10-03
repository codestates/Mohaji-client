import Axios from 'axios';
import React, { useEffect } from 'react';
import './App.css';
import Map from './Map';
import NavBar from './NavBar';
import SideBar from './SideBar';

function App() {
  useEffect(()=>{
    Axios.get('http://localhost:4000/', {
      withCredentials: true
    })
  },[])
  return (
    <div>
      <NavBar />
      <SideBar />
      <Map />
    </div>
  );
}

export default App;
