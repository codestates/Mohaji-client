import React, { Component } from 'react'
import './NavBar.css'
import { Link, Redirect, Route, Switch } from 'react-router-dom'
import SpotList from './SpotList'

export default class NavBar extends Component {
  constructor(props) {
    super(props)

    this.state = {

      ListVisible: false
    }
  }

  showList = () => {
    this.setState({ ListVisible: true });
  };

  render() {
    return (
      <div className="navbar">
        <div className="navbar=menu">

          <Link to='/spot-list'>
            <button className='button-list'>리스트</button>
          </Link>

          <Link to='/my-page'>
            <button className='button-mypage'>마이페이지</button>
          </Link>

          <Link to='/sign-in'>
            <button className='button-login'>로그인</button>
          </Link>



        </div>
      </div>
    )
  }
}
