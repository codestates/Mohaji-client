/*global kakao*/

import React from "react";
import { connect } from "react-redux";
import { setSpotList } from "../actions";
import FilterOfTags from "./FilterOfTags";
import ReSearch from "./ReSearch";
import Axios from "axios";
import './Map.css';
import Maphelper from "./Maphelper";

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
      let tag = await Axios({
        method: 'get',
        url: 'http://localhost:4000/spot/taginfo',
        withCredentials: true
      });
      let searchTag = tag.data.reduce((acc, val)=>{
        if (Object.keys(this.props.filter_selected).length === 0) {
          acc.push(val.tag_name);
          return acc;
        }
        if (this.props.filter_selected[val.id]) {
          acc.push(val.tag_name);
        }
        return acc;
      }, [])
      for (let i of searchTag) { // i가 현재 search하는 tag이다.
        searchresult.push(...await new Promise((res, rej) => {
          let temp = [];
          place.keywordSearch(i, (result, status, p) => {
            if (status === kakao.maps.services.Status.OK) {
              temp.push(...result);
              if (p.hasNextPage) {
                p.nextPage();
              } else {
                res(temp);
              }
            } else {
              res(temp);
            }
          }, {
            useMapCenter: true,
            useMapBounds: true
          });
        }));
      };
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
    })()
  }

  render() {
    let height = window.innerHeight;
    return (
      <div>
        <ReSearch click={this.click}/>
        <FilterOfTags />
        <Maphelper map={this.state.map}/>
        <div id="map" style={{height}}></div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  ...state.filterTagReducer
})

export default connect(mapStateToProps)(Map);