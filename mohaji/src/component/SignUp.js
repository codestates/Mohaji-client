import React, { Component } from 'react'
import { connect } from 'react-redux';
import { setShowFalse, setSignup, setSocialLogin, setLogin } from '../actions';
import './SignUp.css';
import SortTags from './SortTags';
import axios from 'axios';
import { withRouter } from 'react-router-dom';


class SignUp extends Component {
  constructor(props) {
    super(props)

    this.state = {
      email: "",
      password: "",
      nickname: "",

    }
    this.handleInputValue = this.handleInputValue.bind(this);
    this.hideModal = this.hideModal.bind(this);

  }

  handleInputValue = (key) => (e) => {
    this.setState({ [key]: e.target.value });
  };

  hideModal() {
    this.props.dispatch(setShowFalse());
  }


  localHanglSignup = async () => {
    const { email, password, nickname } = this.state

    if (email !== '' && password !== '' && nickname !== '') {
      let result = await axios({
        method: 'post',
        url: 'http://localhost:4000/user/signup',
        data: {
          email,
          password,
          nickname
        },
        withCredentials: true
      }).catch(err => err.response)

      console.log("상태 확인", result.status)
      if (result.status === 200) {
        this.props.history.push('/')
      }
      if (result.status === 409) {
        alert('이미 존재하는 이메일 입니다.')
      }
    } else {
      alert('회원 정보를 모두 입력해 주세요.')
    }


  }

  socialHanglSignup = async () => {
    const { nickname } = this.state;
    const { googleToken } = this.props;
    console.log("토큰 들어가는지 확인", googleToken)
    if (nickname !== '') {
      let result = await axios({
        method: 'post',
        url: 'http://localhost:4000/user/social-signup',
        data: {
          nickname,
          token: googleToken,
          tag: {}
        },
        withCredentials: true
      }).catch(err => err.response)
      if (result.status === 201) {
        this.props.history.push('/')
      }
    } else {
      alert('닉네임을 입력해 주세요.')
    }
  }



  render() {
    let { isSocial } = this.props
    const { localHanglSignup, socialHanglSignup } = this;

    return (


      <div className={'modal'}>
        <div className="signup-input-box">
          <div
            style={{ textAlign: 'center' }}
          >
            <img className="signin-img" src="mohaji.png" />
            {isSocial ?
              ("") : (
                <div>
                  <span style={{
                    paddingRight: "13px"
                  }}>이메일</span>
                  <input
                    style={{
                      width: "400px",
                      height: "30px",
                      margin: "5px",
                      borderRadius: "5px",
                    }}
                    type="email"
                    placeholder="이메일을 입력 해주세요"
                    onChange={this.handleInputValue("email")}
                  ></input>

                  <div>비밀번호
                                  <input
                      style={{
                        width: "400px",
                        height: "30px",
                        margin: "5px",
                        borderRadius: "5px",
                      }}
                      type="password"
                      placeholder="비밀번호를 입력 해주세요"
                      onChange={this.handleInputValue("password")}
                    ></input>
                  </div>
                </div>)}
            <div>
              <span style={{
                paddingRight: "13px"
              }}>닉네임</span>
              <input
                style={{
                  width: "400px",
                  height: "30px",
                  margin: "5px",
                  borderRadius: "5px",
                }}
                type="nickname"
                placeholder="닉네임을 입력 해주세요"
                onChange={this.handleInputValue("nickname")}
              ></input>
            </div>
            <div>
              <span style={{
                paddingRight: "445px"
              }}>테그</span>
              <SortTags default={true} selected={false} />
            </div>
            <div><span style={{
              paddingRight: "28px"
            }}>테그</span>
              <input
                style={{
                  width: "400px",
                  height: "30px",
                  margin: "5px",
                  borderRadius: "5px",
                }}
                type="Tag"
                placeholder="테그를 클릭해주세요"
              // onChange={this.handleInputValue("Tag")}
              ></input>
            </div>
          </div>
          <button id='close' onClick={this.hideModal}>닫기</button>
          {isSocial ?
            <div><button id='signup-button' onClick={socialHanglSignup}>회원가입</button></div>
            :
            <div><button id='signup-button' onClick={localHanglSignup}>회원가입</button></div>
          }


        </div>
        {/* <button id='close' onClick={this.hideModal}>닫기</button>
        <button id='signup-button' onClick={handleSignup} >회원가입</button> */}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  ...state.showReducer,
  isSocial: state.signupReducer.isSocial,
  googleToken: state.signupReducer.googleToken
})

export default withRouter(connect(mapStateToProps)(SignUp));

