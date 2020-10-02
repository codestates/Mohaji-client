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

          <li>
            <Link to='/spot-list'>
              <button>리스트</button>
            </Link>
          </li>
          <li>
            <Link to='/my-page'>
              <button>마이페이지</button>
            </Link>
          </li>
          <li>
            <Link to='/sign-in'>
              <button>로그인</button>
            </Link>
          </li>


        </div>
      </div>
    )
  }
}
