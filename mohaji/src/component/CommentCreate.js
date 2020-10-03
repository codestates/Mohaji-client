import React, { Component } from 'react'
import './CommentCreate.css';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';
import axios from 'axios';
import { setCommentList, setCurrSpot, loadCommentList } from '../actions';


class CommentCreate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comment: '',
      // nickname ?
    }
  };

  handleCommentChange = (e) => {
    this.setState({
      comment: e.target.value
    })
  };

  handleCreate = async () => {
    const { comment } = this.state
    const { currSpot } = this.props
    //서버에 포스트 요청 
    //스테이트 상태 변경
    // 로그인 상태를 어떻게 확인?
    // params로?
    const postInfo = {
      method: "POST",
      body: JSON.stringify({ message: comment, playspot_id: currSpot.id }),
      headers: {
        "Content-Type": "application/json"
      },
      credentials: 'include'
    };

    await fetch("http://localhost:4000/spot/comment", postInfo);
    (async () => {
      if (this.props.currSpot) {
        let { data: result } = await axios.get(`http://localhost:4000/spot/comment/${this.props.currSpot.id}`, {
          withCredentials: true
        }).catch(err => err.response)
        this.props.dispatch(setCommentList(result))
      }
    })()
    this.setState({
      comment: ''
    })


    // if (currSpot) {
    //     console.log("확인!!!! : ", currSpot.id)
    //     axios.post("http://localhost:4000/spot/comment", {
    //         message: comment,
    //         playspot_id: currSpot.id
    //     })
    //         .then(res => this.setState({ comment: '' }))
    // }




  }

  hnadleKeyPres = (e) => {
    if (e.key === 'Enter') {
      this.handleCreate();
    }
  };

  render() {
    const { comment } = this.state;
    const { handleCreate, handleCommentChange, hnadleKeyPres } = this
    const { isLogin } = this.props

    return (
      <>
        <div className='comment-input'>
          {isLogin ? <div><input
            value={comment}
            onChange={handleCommentChange}
            placeholder="공개 댓글 추가..."
            onKeyPress={hnadleKeyPres}
          >
          </input>
            <button className='create-comment' onClick={handleCreate}>댓글</button>
          </div>
            : <Link to='/sign-in'>
              <input placeholder="로그인이 필요한 서비스"></input>
              <button className='redirect-signin-button'>로그인</button></Link>}
        </div>

      </>
    )
  }
}

const mapStateToProps = state => ({
  ...state.commentReducer,
  currSpot: state.spotReducer.currSpot,
  isLogin: state.signinReducer.isLogin
})


export default connect(mapStateToProps)(CommentCreate);