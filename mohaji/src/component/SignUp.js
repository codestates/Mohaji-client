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
    this.handleInput = this.handleInput.bind(this)
  }

  handleInputValue = (key) => (e) => {
    this.setState({ [key]: e.target.value });
  };

  handleInput = async () => {
    const { email, password, nickname } = this.state
    let result = await axios
      .post("http://localhost:4000//user/signup", {
        email: email,
        password: password,
        nickname: nickname,

      })

    // if (result.status === 200) {

    // } else if ( ) { }
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
              <SortTags id='sorttags' default={true} selected={false} />
            </div>

          </div>
          <button id='close' onClick={this.hideModal}>닫기</button>
          <button id='signup-button' onClick={this.handleInput} >회원가입</button>
        </div>


      </div>



    )
  }
}

const mapStateToProps = state => ({
  ...state.showReducer
})

export default connect(mapStateToProps)(SignUp);