/*global kakao*/

import React from "react";
import { connect } from "react-redux";
import { setSpotList } from "../actions";
import './Map.css';
import ReSearch from "./ReSearch";

class Map extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      map: null,
      markList: []
    }
    this.click = this.click.bind(this);
  }
  
  componentDidMount() {
    let mapContainer = document.getElementById('map'), // 지도를 표시할 div 
    mapOption = {
      center: new kakao.maps.LatLng(37.56245294682136, 126.98387128642294), // 지도의 중심좌표
      level: 2 // 지도의 확대 레벨
    }
    let map = new kakao.maps.Map(mapContainer, mapOption);
    this.setState({
      map
    })
    window.map = map
    let zoomControl = new kakao.maps.ZoomControl();
    map.addControl(zoomControl, kakao.maps.ControlPosition.BOTTOMRIGHT);
  }

  click() {
    this.state.markList.reduce((acc, val) => {
      val.setMap(null);
    }, []);
    this.setState({
      markList: []
    });
    let place = new kakao.maps.services.Places(this.state.map);
    let searchresult = [];
    (async () => {
      searchresult.push(...await new Promise((res, rej) => {
        place.keywordSearch('노래방', (result, status) => {
          if (status === kakao.maps.services.Status.OK) {
            res(result);
          } else {
            res([])
          }
        },{
          useMapCenter: true,
          useMapBounds: true
        })
      }))
      searchresult.push(...await new Promise((res, rej) => {
        place.keywordSearch('pc방', (result, status) => {
          if (status === kakao.maps.services.Status.OK) {
            res(result);
          } else {
            res([])
          }
        },{
          useMapCenter: true,
          useMapBounds: true
        })
      }))
      let markList = searchresult.reduce((acc, val, i) => {
        let position = new kakao.maps.LatLng(val.y, val.x);
        let title = val.place_name;
        let temp = new kakao.maps.Marker({
          position,
          title: title
        });
        temp.setMap(this.state.map);
        acc.push(temp);
        return acc
      }, [])
      this.setState({
        markList
      })
      this.props.dispatch(setSpotList(searchresult));
      console.log(searchresult);
    })()
  }

  render() {
    let height = window.innerHeight;
    return (
      <div>
        <ReSearch click={this.click}/>
        <div id="map" style={{height}}></div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  
})

export default connect(mapStateToProps)(Map);