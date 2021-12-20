import React from 'react';
import { Route, Switch } from 'react-router-dom';
import NoMatch from '../components/NoMatch/NoMatch';
import Registration from "../pages/Registration/Registration";
import Home from "../pages/Home/Home";
import Preview from "../pages/Preview/Preview";
import Room from "../pages/Room/Room";
import Login from "../pages/Login/Login";

const Routes = () => (
  <Switch>
      <Route exact path="/" component={Login} key="login" />
      <Route exact path="/register" component={Registration} key="register" />
      <Route exact path="/robots" component={Home} key="robots" />
      <Route exact path="/profile" component={Preview} key="Rooms"/>
      <Route exact path="/rooms/room/:id" component={Room} key="Room" />
    <Route render={() => <NoMatch />} />
  </Switch>
);

export default Routes;
