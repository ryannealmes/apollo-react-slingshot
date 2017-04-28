import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/App.jsx';
import HomePage from './containers/HomePage.jsx';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage}/>
  </Route>
);
