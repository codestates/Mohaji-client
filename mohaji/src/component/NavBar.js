import React, { Component } from 'react';
import './NavBar.css';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Axios from 'axios';
import { GoogleLogout } from 'react-google-login';
import { setLogin } from '../actions';

class NavBar extends Component {
  constructor(props) {
    super(props)
    this.logout = this.logout.bind(this);
  }

  logout() {
    Axios({
      method: 'post',
      url: 'http://localhost:4000/user/signout',
      withCredentials: true
    });
    this.props.dispatch(setLogin(false));
  }

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

        
        {this.props.isLogin ?
          (<div id='nav-sign-in'>
            <GoogleLogout 
              clientId={"320452447938-pfoe0mkhd8777imaagpkakfo8ttird0k.apps.googleusercontent.com"}
              render={(ren) => (
                <div className='nav-item'
                onClick={() => {
                  ren.onClick();
                  this.logout();
                }}>
                  로그아웃
                </div>
              )}
            />
          </div>) :
          (this.props.component === 'SignIn' ?
            <Link to='/' id='nav-sign-in'>
              <div className='nav-item'>
                로그인
              </div>
            </Link> :
            <Link to='/sign-in' id='nav-sign-in'>
              <div className='nav-item'>
                로그인
              </div>
            </Link>)}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  ...state.listReducer,
  ...state.navReducer,
  isLogin: state.signinReducer.isLogin
})

export default connect(mapStateToProps)(NavBar)