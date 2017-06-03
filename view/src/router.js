import React from 'react';
import { Router, Route } from 'dva/router';
import IndexPage from './routes/IndexPage';
import LoginPage from './routes/LoginPage';

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Route path="/" component={LoginPage} >
        <Route path="login" component={LoginPage} />
      </Route>
    </Router>
  );
}

export default RouterConfig;
