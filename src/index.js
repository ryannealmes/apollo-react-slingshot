import React from 'react';
import { render } from 'react-dom';
import { browserHistory } from 'react-router';
import { AppContainer } from 'react-hot-loader';
import Root from './components/Root';
import ApolloClient, { createBatchingNetworkInterface } from 'apollo-client';
import configFor from './config';
const { graphqlUrl } = configFor('graphql');

import configureStore from './store/configureStore';
require('./favicon.ico'); // Tell webpack to load favicon.ico
import './styles/styles.scss'; // Yep, that's right. You can import SASS/CSS files too! Webpack will run the associated loader and plug this into the page.
import { syncHistoryWithStore } from 'react-router-redux';

const apolloClient = new ApolloClient({
  networkInterface: createBatchingNetworkInterface({
    uri: graphqlUrl,
    batchInterval: 10
  }),
  dataIdFromObject: o => o.id,
  queryDeduplication: true
});

const store = configureStore(apolloClient);
const history = syncHistoryWithStore(browserHistory, store);

render(
  <AppContainer>
    <Root store={store} history={history} apolloClient={apolloClient} />
  </AppContainer>,
  document.getElementById('app')
);

if (module.hot) {
  module.hot.accept('./components/Root', () => {
    const NewRoot = require('./components/Root').default;
    render(
      <AppContainer>
        <NewRoot store={store} history={history} apolloClient={apolloClient} />
      </AppContainer>,
      document.getElementById('app')
    );
  });
}
