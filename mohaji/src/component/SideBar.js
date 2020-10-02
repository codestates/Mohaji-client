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
    let height = window.innerHeight;
    return (
      <div>
        <div id='side-bar' style={{height}}>
          <Switch>
            <Route path='/spot-list' component={SpotList} />
            <Route path="/my-page" component={MyPage} />
            <Route path="/sign-in" component={SignIn} />

          </Switch>
        </div>
        <Switch>
          <Route path='/spot-list/info'>
            <div id='side-extend' style={{ height }}>
              <SpotInfo />
            </div>
          </Route>
          <Route path='/spot-list/more-read' >
            <div id='side-extend' style={{ height }}>
              <MoreReadPage />
            </div>
          </Route>
        </Switch>
      </div>
    );
  }
}

export default SideBar;