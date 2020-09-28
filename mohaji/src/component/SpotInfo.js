import React from 'react';
import './SpotInfo.css';
import { connect } from 'react-redux';
import { setCommentList } from '../actions';
import CommentList from './CommentList';

class SpotInfo extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() { // 해당 구문은 spotinfo가 완성되면 지울것.(spotinfo에서 이러한 역할이 이루어 져야 함.)
    this.props.dispatch(setCommentList(Array(5).fill('').map(()=>({
      nickname: 'Pig-Cola',
      create_at: new Date().toLocaleString(),
      msg: '안녕하세요'
    }))));
  }

  render() {
    return (
      <div>
        <div className='spot-info'>
          <div>업체사진</div>
          <div className='spot-info-1'>
            <div className='spot-name'>업체이름</div>
            <div className='spot-time'>영업 시간</div>
          </div>
          <div>주소</div>
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