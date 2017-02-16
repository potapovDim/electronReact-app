import React from 'react';
import { IndexRoute, Route, Router, browserHistory } from 'react-router';
import {RootContainer} from './app/containers/root'
import MainContainer from './app/containers/main'

export default (
  <Router history={browserHistory}>
    <Route component={RootContainer}>
      <Route path="/" component={MainContainer} />
    </Route>
  </Router>
)