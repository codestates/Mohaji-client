import React from 'react';
import {Switch, Route} from 'react-router-dom';
import './SideBar.css';
import SpotInfo from './SpotInfo';
import SpotList from './SpotList';

class SideBar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div id='side-bar'>
          <Switch>
            <Route path='/spot-list' component={SpotList} />
          </Switch>
        </div>
        <div id='side-extend'>
          <Switch>
            <Route path='/spot-list/info' component={SpotInfo}/>
          </Switch>
        </div>
      </div>
    );
  }
}

export default SideBar;