import React from 'react';
import { connect } from 'react-redux';
import { setSpotList } from '../actions';
import SpotItem from './SpotItem';

class SpotList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        {this.props.spotList.map((val, i) => (<SpotItem
          spot={val}
          key={i}
        />))}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  spotList: state.spotReducer.spotList
});

export default connect(mapStateToProps)(SpotList);