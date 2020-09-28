import React from 'react';
import { connect } from 'react-redux';
import { setSpotList } from '../actions';
import SpotItem from './SpotItem';

class SpotList extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.dispatch(setSpotList(
      Array(10).fill('').map((val,i) => ({
        spotId:i+1,
        spotName: `장소${i+1}`,
        spotAdress: `서울 어딘가`
      }))
    ));
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