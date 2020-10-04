import React from 'react';
import './Tag.css'

class Tag extends React.Component {
  
  render() {
    if (this.props.selected) {
      if (this.props.isSelect) {
        return (
          <div 
            className={`tag ${this.props.isSelect ? 'tag-s' : 'tag-u'}`}
            onClick={this.props.click}
          >
            {this.props.tagName}
          </div>
        );
      } else {
        return (<span></span>)
      }
    } else {
      return (
        <div 
          className={`tag ${this.props.isSelect ? 'tag-s' : 'tag-u'}`}
          onClick={this.props.click}
        >
          {this.props.tagName}
        </div>
      );
    }
  }
}
// className에서 tag-u는 unselected를 의미하며
// tag-s 는 selected를 의미함.

export default Tag;