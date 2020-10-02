import React, { useEffect } from 'react';
import './SpotInfo.css';
import { connect } from 'react-redux';
import { setCommentList, setCurrSpot } from '../actions';
import CommentList from './CommentList';
import { Link } from 'react-router-dom';

const SpotInfo = (props) => {
  
  // componentDidMount() { // 해당 구문은 comment를 불러오는 API를 호출 하여야 함.
  //   this.props.dispatch(setCommentList(Array(5).fill('').map(() => ({
  //     nickname: 'Pig-Cola',
  //     create_at: new Date().toLocaleString(),
  //     msg: '안녕하세요'
  //   }))));
  // }

  useEffect(() => {
    props.dispatch(setCommentList(Array(10).fill('').map(() => ({
      nickname: 'Pig-Cola',
      create_at: new Date().toLocaleString(),
      msg: '안녕하세요'
    }))));
  },[])
  
  let handleExitClick = () => {
    props.dispatch(setCurrSpot(null));
  }
  let { spotName, spotAdress } = props.currSpot || {}
  let height = window.innerHeight;
  return (
    <div style={{backgroundColor:'#ffffff', height}}>
      <Link to='/spot-list'>
        <button
          style={{ float: 'right' }}
          onClick={handleExitClick}
        >
          닫기
          </button>
      </Link>
      <br />
      <div className='spot-info'>
        <div>업체사진</div>
        <div className='spot-name'>{spotName || '업체이름'}</div>
        <div className='spot-time'>영업 시간</div>
        <div>{spotAdress || '주소'}</div>
        <div>상세정보</div>
      </div>
      <CommentList />
    </div>
  );
}

const mapStateToProps = state => ({
  ...state.commentReducer,
  currSpot: state.spotReducer.currSpot
})

export default connect(mapStateToProps)(SpotInfo);