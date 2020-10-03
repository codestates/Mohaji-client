import React from 'react';
import { connect } from 'react-redux';
import { setNavNull, setNavSpotList } from '../actions';
import SpotItem from './SpotItem';

class SpotList extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.dispatch(setNavSpotList());
  }

  componentWillUnmount() {
    this.props.dispatch(setNavNull());
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
  spotList: state.spotReducer.spotList,
  ...state.navReducer
});

export default connect(mapStateToProps)(SpotList);