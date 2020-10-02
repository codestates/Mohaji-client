import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Signin.css';
import { setLogin } from '../actions'
import axios from 'axios'
import { GoogleLogin } from 'react-google-login'
import SignUp from './SignUp';
import { Redirect, browserHistory } from 'react-router-dom';

class SignIn extends Component {
    constructor(props) {
        super(props)

        this.state = {
            email: "",
            password: "",
            show: false,
            redirect: false
        }

        this.handleInputValue = this.handleInputValue.bind(this);
        this.handleLoginClick = this.handleLoginClick.bind(this);
    }



    // componentDidMount() {
    //     this.googleSDK();
    // }
    showModal = () => {
        this.setState({ show: true });
    };

    hideModal = () => {
        this.setState({ show: false });
    };

    responseGoogle = async (googleUser) => {
        console.log(googleUser);
        let profile = googleUser.getBasicProfile();
        let id_token = googleUser.getAuthResponse().id_token;
        console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
        console.log('Name: ' + profile.getName());
        console.log('Image URL: ' + profile.getImageUrl());
        console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.
        console.log(`id_token: ${id_token}`);
        // let result = await axios({
        //     method: 'post',
        //     url: 'http://localhost:4000/user/social-signin',
        //     data: {
        //         token: id_token
        //     },
        //     withCredentials: true
        // }).catch(err => (err.response))
        // if (result.status === 200) {
        //     if (result.data.found) {
        //         alert('')
        //     } else {
        //         window.location.href = '/signup'
        //         //link window location href 수정하면 됨, state 값이 유지되어야함.
        //         //redux 써야함 state값이 유지되는 
        //     }
        // } else if (result.status === 400) {
        //     alert('올바르지 않은 접근입니다.')
        // }
    }

    responseFail = (err) => {
        console.log(err);
    }

    handleInputValue = (key) => (e) => {
        this.setState({ [key]: e.target.value });
    };

    // signOut = () => {
    //     var auth2 = gapi.auth2.getAuthInstance();
    //     auth2.signOut().then(function () {
    //         console.log('User signed out.');
    //     })
    // };

    async handleLoginClick() {
        let result = await axios.post(`http://localhost:4000/user/signin`, this.state)
            .catch(err => (err.response));
        if (result.status === 200) {
            this.props.dispatch(setLogin(true))
        } else if (this.state.password === "") {
            alert('input password')
        } else if (this.state.email === "") {
            alert('input email')
        } else if (result.status === 404) {
            alert('잘못된 아이디 혹은 비밀번호입니다')
        } else if (result.status === 500) {
            alert('unknown error')
        }
    }




    // 200, 404 
    //signup 라우터 처리해야함 
    render() {
        return (
            <div className='signin'>
                <div className='signin-center'>
                    <img className="signin-img" src="/mohaji.png"
                    />
                    <div className='signin-email-input'>
                        <input
                            style={{
                                width: '70%',
                                height: "30px",
                                margin: "5px",
                                borderRadius: "5px",
                            }}
                            type="email"
                            placeholder="이메일을 입력 해주세요"
                            onChange={this.handleInputValue("email")}
                        ></input>
                    </div>
                    <div className='signin-password-input'>
                        <input
                            style={{
                                width: '70%',
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
                            width: "72%",
                            height: "30px",
                            margin: "5px",
                            borderRadius: "5px",
                            backgroundColor: "skyblue",
                        }}
                        onClick={this.handleLoginClick}
                    >
                        로그인
            </button>
                </div>

                <br />
                <SignUp show={this.state.show} handleClose={this.hideModal}></SignUp>
                <button className="signin-signup-button" type='button' onClick={this.showModal}>회원가입</button>

                <div className='google'>
                    <div className="g-signin2" data-onsuccess="onSignIn"></div>
                    <script src="https://apis.google.com/js/platform.js" async defer></script>


                    <GoogleLogin
                        clientId={"1014688682343-j2r0ck0oc2qvb2l32dnp1apnbjd0kfbq.apps.googleusercontent.com"}
                        buttonText="google"
                        onSuccess={this.responseGoogle}

                        onFailure={this.responseFail}
                    />
                </div>




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
