import React from 'react';
import './ReSearch.css';

class ReSearch extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id='re-search' onClick={this.props.click}>
        현 위치에서 검색
      </div>
    );
  }
}

export default ReSearch;