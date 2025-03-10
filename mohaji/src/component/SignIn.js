import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Signin.css';
import {
    setLogin, setNavSignIn,
    setShowTrue, setNavNull, setSocialLogin, setToken
} from '../actions'
import axios from 'axios';
import { GoogleLogin } from 'react-google-login'
import SignUp from './SignUp';
import { withRouter } from 'react-router-dom';

class SignIn extends Component {
    constructor(props) {
        super(props)

        this.state = {
            email: "",
            password: ""
        };
        ([
            this.handleInputValue,
            this.handleLoginClick,
            this.showModal
        ] = [
                this.handleInputValue.bind(this),
                this.handleLoginClick.bind(this),
                this.showModal.bind(this)
            ])

    }

    componentDidMount() {
        this.props.dispatch(setNavSignIn());
    }

    componentWillUnmount() {
        this.props.dispatch(setNavNull());
    }

    showModal() {
        this.props.dispatch(setShowTrue());
    }

    // componentDidMount() {
    //     this.googleSDK();
    // }

    // 이전에 소셜 로그인으로 회원 가입을 했었는지 검증
    // 회원가입 안했다면 회원가입 화면으로
    // 회원가입 했다면 바로 로그인

    responseGoogle = async (googleUser) => {
        console.log(googleUser);
        let profile = googleUser.getBasicProfile();
        let id_token = googleUser.getAuthResponse().id_token;
        console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
        console.log('Name: ' + profile.getName());
        console.log('Image URL: ' + profile.getImageUrl());
        console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.
        console.log(`id_token: ${id_token}`);
        let result = await axios({
            method: 'post',
            url: 'http://localhost:4000/user/social-signin',
            data: {
                token: id_token
            },
            withCredentials: true
        }).catch(err => (err.response))

        console.log("소셜 파운드 확인", result.data.found)
        if (result.status === 200) {
            if (result.data.found) {
                this.props.dispatch(setLogin(true));
                this.props.history.push('/');
            } else {
                this.props.dispatch(setSocialLogin(true))
                this.props.dispatch(setToken(id_token))
                this.showModal()
            }
        } else if (result.status === 400) {
            alert('올바르지 않은 접근입니다.')
        }
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
        if (this.state.password === "") {
            alert('input password');
        } else if (this.state.email === "") {
            alert('input email');
        } else {
            let result = await axios({
                method: 'post',
                data: this.state,
                withCredentials: true,
                url: 'http://localhost:4000/user/signin'
            })
                .catch(err => (err.response));
            if (result.status === 200) {
                this.props.dispatch(setLogin(true));
                this.props.history.push('/');
            } else if (result.status === 404) {
                alert('잘못된 아이디 혹은 비밀번호입니다')
            } else if (result.status === 500) {
                alert('unknown error')
            }
        }
    }




    render() {
        return (
            <div className='signin'>
                <div className='signin-center' style={{ width: '100%' }}>
                    <img className="signin-img" src="/mohaji.png"
                    />
                    <div className='signin-email-input' style={{ width: '100%' }}>
                        <input
                            style={{
                                width: '100%',
                                height: "30px",
                                borderRadius: "5px",
                                padding: '1px',
                                fontSize: '0.75em'
                            }}
                            type="email"
                            placeholder="이메일을 입력 해주세요"
                            onChange={this.handleInputValue("email")}
                        ></input>
                    </div>
                    <div className='signin-password-input'>
                        <input
                            style={{
                                width: '100%',
                                height: "30px",
                                borderRadius: "5px",
                                padding: '1px',
                                fontSize: '0.75em'
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
                {this.props.show ? <SignUp /> : undefined}
                <button className="signin-signup-button" type='button' onClick={this.showModal}>회원가입</button>

                <div className='google'>
                    <div className="g-signin2" data-onsuccess="onSignIn"></div>
                    <script src="https://apis.google.com/js/platform.js" async defer></script>


                    <GoogleLogin
                        clientId={"320452447938-pfoe0mkhd8777imaagpkakfo8ttird0k.apps.googleusercontent.com"}
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
    ...state.signinReducer,
    ...state.showReducer
})

export default withRouter(connect(mapStateToProps)(SignIn));
//
//state islogin=false, 로그인 여부 변경 
//login reducer 
//안되었을때 false, 로그인 true 
//
