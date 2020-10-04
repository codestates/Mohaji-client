import React from 'react';
import './CommentItem.css';

class CommentItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='comment'>
        <div style={{ display: 'inline-block', width: '100%' }}>
          <div className='nickname'>{this.props.nickname}</div>
          <div className='create_at'>{this.props.create_at}</div>
        </div>
        <div className='msg'>{this.props.message}</div>
      </div>
    );
  }
}

export default CommentItem;