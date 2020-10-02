import React from 'react';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import { setCurrSpot } from '../actions';
import './SpotItem.css';

class SpotItem extends React.Component{
  constructor(props) {
    super(props);
  }

  render() {
    let style = this.props.currSpot === this.props.spot ?
    {border: 'solid 1px #00ff00'} : undefined
    return (
      <Link to='/spot-list/info'>
      <div
        className='spot-item'
        onClick={this.props.onItemClick}
        style={style}
      >
        <div style={{display: 'block', width: '100%'}}>
          <div className='spot-name'>{this.props.spot.spotName}</div>
          <div className='spot-time'>영업시간</div>
        </div>
        <div>{this.props.spot.spotAdress}</div>
      </div>
      </Link>
    );
  }
}

const mapStateToProps = state => ({
  currSpot: state.spotReducer.currSpot
})

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onItemClick: () => {
      return dispatch(setCurrSpot(ownProps.spot))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SpotItem);