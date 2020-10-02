import React from 'react';
import { Switch, Route } from 'react-router-dom';
import MoreReadPage from './MoreReadPage';
import MyPage from './MyPage';
import './SideBar.css';
import SignIn from './SignIn';
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
            <Route path="/my-page" component={MyPage} />
            <Route path="/sign-in" component={SignIn} />

          </Switch>
        </div>
        <div id='side-extend'>
          <Switch>
            <Route path='/spot-list/info' component={SpotInfo} />
            <Route path='/spot-list/more-read' component={MoreReadPage} />


          </Switch>
        </div>
      </div>
    );
  }
}

export default SideBar;