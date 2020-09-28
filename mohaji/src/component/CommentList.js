import './CommentList.css';
import React from 'react';
import { connect } from 'react-redux';
import { loadCommentList, setIsMoreRead } from '../actions';
import CommentItem from './CommentItem'
<<<<<<< HEAD
import { Switch, Route, Redirect, Link } from "react-router-dom";//link: 유저라우트 component 역활 리크 구성 방법 
import MoreReadPage from './MoreReadPage';
=======
import { Link } from 'react-router-dom';
>>>>>>> befb79dace57c4cd165513429a452dcedff14070

class CommentList extends React.Component {
  constructor(props) {
    super(props);
    this.handleMoreRead = this.handleMoreRead.bind(this);
  }

<<<<<<< HEAD
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
=======
  handleMoreRead() {
    if (this.props.isMoreRead) {
      this.props.dispatch(loadCommentList(Array(10).fill('').map(()=>({
>>>>>>> befb79dace57c4cd165513429a452dcedff14070
        nickname: 'Pig-Cola',
        create_at: new Date().toLocaleString(),
        msg: '안녕하세요'
      }))));
<<<<<<< HEAD
=======
    } else {
      // MoreRead 페이지로 이동
      // <Link to='이동할 Route의 path'/> // MoreRead Component 구축 후 주석 해제
      this.props.dispatch(setIsMoreRead(true)); // 해당 라인은 MoreRead Component가 구축되면 지울것(주석처리)
>>>>>>> befb79dace57c4cd165513429a452dcedff14070
    }
    // else {
    // MoreRead 페이지로 이동 redirect
    //리엑트 라우터로 moreread에 보내고
    //리엑트 돔으로 렌더링 하라 
    // axios.post('./MoreReadPage')
    // .then(this.props.isMoreRead);
    // axios.post("./MoreReadPage")
    // .then((res) => {
    //   this.setState({setIsMoreRead})
    // }

  }




  render() {
    // 하단에 쓰여진 val.nickname 등의 변수 이름은
    // api에 따라 달라질 수 있음.
    return (

      <div>
<<<<<<< HEAD
        {this.props.commentList.map((val, i) => <CommentItem
          nickname={val.nickname}
          create_at={val.create_at}
          msg={val.msg}
          key={i}
        />)}
        <Link to="/" component={MoreReadPage} />      </div>








      // <Link to="/" component={MoreReadPage} />









=======
        {this.props.commentList.reduce((acc, val, i) => {
          if (!this.props.isMoreRead) {
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
        <div id='more' onClick={this.handleMoreRead}>더보기</div>
      </div>
>>>>>>> befb79dace57c4cd165513429a452dcedff14070
    );
  }
}


const mapStateToProps = state => ({
  ...state.commentReducer,
  currSpot: state.spotReducer.currSpot
})

export default connect(mapStateToProps)(CommentList);