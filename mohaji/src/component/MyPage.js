import React, { Component } from 'react';
import './MyPage.css';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'
import { setNavMyPage, setNavNull } from '../actions';
import Axios from 'axios';
import SortTags from './SortTags';


class MyPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      info: {}
    };
  }

  componentDidMount() {
    this.props.dispatch(setNavMyPage());
    (async () => {
      let result = await Axios({
        method: 'get',
        url: 'http://localhost:4000/user/info',
        withCredentials: true
      }).catch(err=>err.response);
      if (result.status === 200) {
        this.setState({
          info: {...result.data}
        });
      }
    })()
  }

  componentWillUnmount() {
    this.props.dispatch(setNavNull());
  }


  render() {
    return (
      <div className='mypage'>
        <div style={{ display: 'inline-block', width: '100%' }}>
          {this.props.isLogin ? <div className='mypage-info-1'>
            <div className='mypage-nickname'>닉네임 : {this.state.info.nickname}</div>
            <div className='MYPage-tag'>선호하는 태그</div>
            {
              this.state.info.tag ?
              <SortTags default={false} selected={true} usertags={[...this.state.info.tag]} noclicked={true}/> :
              undefined
            }
          </div> : <Link to='/sign-in'><div>로그인이 필요합니다.</div></Link>}

        </div>
      </div>


    )
  }
}

const mapStateToProps = state => ({
  isLogin: state.signinReducer.isLogin,
  ...state.navReducer
})

export default connect(mapStateToProps)(MyPage);