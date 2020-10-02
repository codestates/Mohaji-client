import React from 'react';
import './App.css';
import NavBar from './NavBar';
import SideBar from './SideBar';

function App() {
  return (
    <div>
      <NavBar />
      <SideBar />
    </div>
  );
}
//소통이 이루어져야 한다. app이 새로고침했을때 state 값 유지 
//componentdidmount
export default App;
