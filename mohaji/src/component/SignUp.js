import React, { Component } from 'react'
import { connect } from 'react-redux';
import { setShowFalse } from '../actions';
import './SignUp.css';
import SortTags from './SortTags';
import axios from 'axios'

class SignUp extends Component {
  constructor(props) {
    super(props)

    this.state = {
      isSocialLogin: false,
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


  render() {
    let { isSocialLogin } = this.state

    return (


      <div className={'modal'}>
        <div className="signup-input-box">
          <div
            style={{ textAlign: 'center' }}
          >
            <img className="signin-img" src="mohaji.png" />
            {isSocialLogin ?
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
          <button id='signup-button' >회원가입</button>

        </div>
        <button id='close' onClick={this.hideModal}>닫기</button>
        <button id='signup-button' onClick={'fix this'} >회원가입</button>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  ...state.showReducer
})

export default connect(mapStateToProps)(SignUp);