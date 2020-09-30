import React, { Component } from 'react'
import './MyPage.css'

class MyPage extends Component {
    constructor(props) {
        super(props)
    }

    //


    render() {
        return (
            <div className='mypage'>
                <div style={{ display: 'inline-block', width: '100%' }}>
                    <div>프로필 사진</div>
                    <div className='mypage-info-1'>
                        <div className='mypage-nickname'>닉네임 : 파니니</div>
                        <div className='mypage-email'>이메일: rolenche@gmail.com</div>
                        <div className='MYPage-tag'>선호하는테그: #노래방 #피씨방</div>
                    </div>
                </div>
            </div>
        )
    }
}

export default MyPage