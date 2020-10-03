import React, { Component } from 'react'
import './NavBar.css'
import { Link, Redirect, Route, Switch } from 'react-router-dom'
import SpotList from './SpotList'
import { connect } from 'react-redux'
import { setList } from '../actions'

class NavBar extends Component {
  constructor(props) {
    super(props)

  }


  //  {setList ? : 
  render() {
    return (
      <div className="navbar"
        style={{ height: window.innerHeight }}
      >
        {this.props.component === 'SpotList' ?
          <Link to='/'>
            <div id='nav-list' className='nav-item'>
              리스트
          </div>
          </Link> :
          <Link to='/spot-list'>
            <div id='nav-list' className='nav-item'>
              리스트
            </div>
          </Link>}

        {this.props.component === 'MyPage' ?
          <Link to='/'>
            <div id='nav-my-page' className='nav-item'>
              마이페이지
          </div>
          </Link> :
          <Link to='/my-page'>
            <div id='nav-my-page' className='nav-item'>
              마이페이지
       </div>
          </Link>}

        <div id='nav-blank' />

        {this.props.component === 'SignIn' ?
          <Link to='/'>
            <div id='nav-sign-in' className='nav-item'>
              로그인
           </div>
          </Link> :
          <Link to='/sign-in'>
            <div id='nav-sign-in' className='nav-item'>
              로그인
            </div>
          </Link>}


      </div>
    )
  }
}

const mapStateToProps = state => ({
  ...state.listReducer,
  ...state.navReducer
})

export default connect(mapStateToProps)(NavBar)