import React, { Component } from 'react'
import { connect } from 'react-redux';
import { setShowFalse } from '../actions';
import './SignUp.css';

class SignUp extends Component {
  constructor(props) {
    super(props)

    this.state = {
      isSocialLogin: false,
      email: "",
      password: "",
      nickname: "",
      profile: "",
      tag: ""

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
                  <div >이메일
                                  <input
                      style={{
                        width: "400px",
                        height: "30px",
                        margin: "5px",
                        borderRadius: "5px",
                      }}
                      type="email"
                      placeholder="이메일을 입력 해주세요"
                    // onChange={this.handleInputValue("email")}
                    ></input>
                  </div>
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
                    // onChange={this.handleInputValue("password")}
                    ></input>
                  </div>
                </div>)}
            <div>닉네임
                        <input
                style={{
                  width: "400px",
                  height: "30px",
                  margin: "5px",
                  borderRadius: "5px",
                }}
                type="nickname"
                placeholder="닉네임을 입력 해주세요"
              // onChange={this.handleInputValue("nickname")}
              ></input>
            </div>
            <div>테그
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

      </div>

    )
  }
}

const mapStateToProps = state => ({
  ...state.showReducer
})

export default connect(mapStateToProps)(SignUp);