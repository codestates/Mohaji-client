import React from 'react';
import { Switch, Route } from 'react-router-dom';
import MoreReadPage from './MoreReadPage';
import MyPage from './MyPage';
import './SideBar.css';
import SignIn from './SignIn';
import SpotInfo from './SpotInfo';
import SpotList from './SpotList';
import { connect } from 'react-redux';
import CommentCreate from './CommentCreate';

class SideBar extends React.Component {
  constructor(props) {
    super(props);
  }


  render() {
    let height = window.innerHeight;
    return (
      <div>

        <Switch>
          <Route path='/spot-list' >
            <div id='side-bar' style={{ height }}>
              <SpotList />
            </div>
          </Route>
          <Route path="/my-page" >
            <div id='side-bar' style={{ height }}>
              <MyPage />
            </div>
          </Route>
          <Route path="/sign-in" >
            <div id='side-bar' style={{ height }}>
              <SignIn />
            </div>
          </Route>

        </Switch>
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

const mapStateToProps = state => ({
})

export default connect(mapStateToProps)(SideBar)