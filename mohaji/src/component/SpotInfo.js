import React from 'react';
import './SpotInfo.css';
import { connect } from 'react-redux';
// import { setCommentList } from '../actions';
import CommentList from './CommentList';

class SpotInfo extends React.Component {
  constructor(props) {
    super(props);
  }

  // componentDidMount() { // 해당 구문은 comment를 불러오는 API를 호출 하여야 함.
  //   this.props.dispatch(setCommentList(Array(5).fill('').map(()=>({
  //     nickname: 'Pig-Cola',
  //     create_at: new Date().toLocaleString(),
  //     msg: '안녕하세요'
  //   }))));
  // }

  render() {
    let { spotName, spotAdress } = this.props.currSpot || {}
    return (
      <div>
        <div className='spot-info'>
          <div>업체사진</div>
          <div className='spot-info-1'>
            <div className='spot-name'>{spotName || '업체이름'}</div>
            <div className='spot-time'>영업 시간</div>
          </div>
          <div>{spotAdress || '주소'}</div>
          <div>상세정보</div>
        </div>
        <CommentList />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  ...state.commentReducer,
  currSpot: state.spotReducer.currSpot
})

export default connect(mapStateToProps)(SpotInfo);