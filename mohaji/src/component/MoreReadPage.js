import React, { Component } from 'react'
import { connect } from 'react-redux'
import { setIsMoreRead } from '../actions'
import CommentList from './CommentList'


class MoreReadPage extends Component {
    constructor(props) {
        super(props)

    }

    //didmount(this.props.dispatch(setIsMoreRead(true));
    componentDidMount() {
        this.props.dispatch(setIsMoreRead(true))

    }

    componentWillUnmount() {
        this.props.dispatch(setIsMoreRead(false))
    }


    render() {
        return (
            <div className="MoreReadPage">

                <CommentList />
            </div>
        )
    }
}

const mapStateToProps = state => ({
    isMoreRead: state.commentReducer.isMoreRead
})

export default connect(mapStateToProps)(MoreReadPage);
//더보기 버튼을 눌럿을때 추가한다.
//inline block 스크롤 css 하는 방법 댓글 스크롤, 스팟 스크롤 따로 동작 방법 