import React, { useEffect } from 'react';
import './SpotInfo.css';
import { connect } from 'react-redux';
import { setCommentList, setCurrSpot } from '../actions';
import CommentList from './CommentList';
import { Link } from 'react-router-dom';
import Axios from 'axios';

const SpotInfo = (props) => {

  // componentDidMount() { // 해당 구문은 comment를 불러오는 API를 호출 하여야 함.
  //   this.props.dispatch(setCommentList(Array(5).fill('').map(() => ({
  //     nickname: 'Pig-Cola',
  //     create_at: new Date().toLocaleString(),
  //     msg: '안녕하세요'
  //   }))));
  // }

  useEffect(() => {
    (async () => {
      if (props.currSpot) {
        let { data: result } = await Axios.get(`http://localhost:4000/spot/comment/${props.currSpot.id}`, {
          withCredentials: true
        }).catch(err => err.response)
        props.dispatch(setCommentList(result))
      }
    })()
  }, [props.currSpot])

  let handleExitClick = () => {
    props.dispatch(setCurrSpot(null));
  }
  let { place_name, address_name } = props.currSpot || {}
  return (
    <div>
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
        <div className='spot-name'>{place_name || '업체이름'}</div>
        <div className='spot-adress'>{address_name || '주소'}</div>
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