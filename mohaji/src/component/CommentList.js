import './CommentList.css';
import React from 'react';
import { connect } from 'react-redux';
import { loadCommentList, setIsMoreRead } from '../actions';
import CommentItem from './CommentItem'
import { Link, Redirect } from 'react-router-dom';

class CommentList extends React.Component {
  constructor(props) {
    super(props);
  }


  render() {
    // 하단에 쓰여진 val.nickname 등의 변수 이름은
    // api에 따라 달라질 수 있음.
    let { isMoreRead } = this.props
    return (

      <div>
        {this.props.commentList.reduce((acc, val, i) => {
          if (!isMoreRead) {
            if (i < 5) {
              acc.push(<CommentItem
                nickname={val.nickname}
                create_at={val.create_at}
                msg={val.msg}
                key={i}
              />)
            }
          } else {
            acc.push(<CommentItem
              nickname={val.nickname}
              create_at={val.create_at}
              msg={val.msg}
              key={i}
            />)
          }
          return acc;
        }, [])}
        {!isMoreRead ?
          <Link to='/spot-list/more-read'>
            <div id='more'>댓글 상세보기(댓글쓰기)</div>
          </Link> :
          undefined
          }
      </div>
    );
  }
}


const mapStateToProps = state => ({
  ...state.commentReducer,
  currSpot: state.spotReducer.currSpot
})

export default connect(mapStateToProps)(CommentList);