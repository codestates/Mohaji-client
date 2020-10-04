/*global kakao*/
import React, { useEffect } from 'react';
import { connect } from 'react-redux';

function Maphelper(props) {
  useEffect(() => {
    if (props.map && props.currSpot) {
      props.map.setCenter(new kakao.maps.LatLng(props.currSpot.y, props.currSpot.x), 1);
      props.map.setLevel(1);
    }
  },[props.currSpot])

  return (
    <div>
    </div>
  );
}

const mapStateToProps = state => ({
  currSpot: state.spotReducer.currSpot
})

export default connect(mapStateToProps)(Maphelper);