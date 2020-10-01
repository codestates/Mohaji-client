import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Signin.css';
import { Link } from 'react-router-dom';
import { setLogin } from '../actions'
import axios from 'axios'

class SignIn extends Component {
    constructor(props) {
        super(props)

        this.state = {
            email: "",
            password: ""
        }

        this.handleInputValue = this.handleInputValue.bind(this);
        this.handleLoginClick = this.handleLoginClick.bind(this);
    }


    handleInputValue = (key) => (e) => {
        this.setState({ [key]: e.target.value });
    };

    async handleLoginClick() {
        let result = await axios.post(`http://localhost:4000/user/signin`, this.state)
            .catch(err => (err.response));
        if (result.status === 200) {
            this.props.dispatch(setLogin(true))
        } else if (result.status === 404) {
            alert('잘못된 아이디 혹은 비밀번호입니다')
        } else if (result.status === 500) {
            alert('unknown error')
        }
    }






    render() {
        return (
            <div className='signin'>
                <img className="signin-img" src="/mohaji.png"
                />
                <div>
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
                </div>
                <div>
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
                <button
                    style={{
                        width: "200px",
                        height: "30px",
                        margin: "5px",
                        borderRadius: "5px",
                        backgroundColor: "skyblue",
                    }}
                    onClick={this.handleLoginClick}
                >
                    로그인
            </button>
                <button className="signin-signup-button"><Link to="/SignUp">회원가입</Link></button>
                <div class="g-signin2" data-onsuccess="onSignIn"></div>


            </div>
        )
    }
}


const mapStateToProps = state => ({
    ...state.signinReducer
})

export default connect(mapStateToProps)(SignIn)
//
//state islogin=false, 로그인 여부 변경 
//login reducer 
//안되었을때 false, 로그인 true 
//
