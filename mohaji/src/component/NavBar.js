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
      <div className="navbar"
        style={{height:window.innerHeight}}
      >

          <Link to='/spot-list'>
            <div id='nav-list' className='nav-item'>
              리스트
            </div>
          </Link>

          <Link to='/my-page'>
            <div id='nav-my-page' className='nav-item'>
              마이페이지
            </div>
          </Link>
          <div id='nav-blank'/>
          <Link to='/sign-in'>
            <div id='nav-sign-in' className='nav-item'>
              로그인
            </div>
          </Link>

      </div>
    )
  }
}
