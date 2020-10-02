import React, { Component } from 'react';
import './MyPage.css';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'


class MyPage extends Component {
    constructor(props) {
        super(props)

    }




    render() {
        return (
            <div className='mypage'>
                <div style={{ display: 'inline-block', width: '100%' }}>
                    {this.props.isLogin ? <div className='mypage-info-1'>
                        <div className='mypage-nickname'>닉네임 : {this.props.nickname}</div>
                        <div className='mypage-email'>이메일: {this.props.email}</div>
                        <div className='MYPage-tag'>선호하는테그: {this.props.tag}</div>
                    </div> : <Link to='/sign-in'><div>로그인이 필요합니다.</div></Link>}

                </div>
            </div>


        )
    }
}

const mapStateToProps = state => ({
    isLogin: state.signinReducer.isLogin
})

export default connect(mapStateToProps)(MyPage);