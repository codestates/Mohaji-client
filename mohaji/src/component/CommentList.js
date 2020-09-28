import './CommentList.css';
import React from 'react';
import { connect } from 'react-redux';
import { loadCommentList, setCommentList, setIsMoreRead } from '../actions';
import CommentItem from './CommentItem'

class CommentList extends React.Component {
  constructor(props) {
    super(props);
    this.handleMoreRead = this.handleMoreRead.bind(this);
  }

  componentDidMount() { // 해당 구문은 spotinfo가 완성되면 지울것.(spotinfo에서 이러한 역할이 이루어 져야 함.)
    this.props.dispatch(setCommentList(Array(5).fill('').map(() => ({
      nickname: 'Pig-Cola',
      create_at: new Date().toLocaleString(),
      msg: '안녕하세요'
    }))));
  }

  handleMoreRead() {
    if (this.props.isMoreRead) {
      this.props.dispatch(loadCommentList(Array(5).fill('').map(() => ({
        nickname: 'Pig-Cola',
        create_at: new Date().toLocaleString(),
        msg: '안녕하세요'
      }))));
    } else {
      // MoreRead 페이지로 이동 redirect

    }
  }

  render() {
    // 하단에 쓰여진 val.nickname 등의 변수 이름은
    // api에 따라 달라질 수 있음.
    return (
      <div>
        {this.props.commentList.map((val, i) => <CommentItem
          nickname={val.nickname}
          create_at={val.create_at}
          msg={val.msg}
          key={i}
        />)}
        <a href='#'><div id='more' onClick={this.handleMoreRead}>더보기</div></a>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  ...state.commentReducer,
  currSpot: state.spotReducer.currSpot
})

export default connect(mapStateToProps)(CommentList);