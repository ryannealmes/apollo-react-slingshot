import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import routes from '../routes';
import { Router } from 'react-router';
import { ApolloProvider } from 'react-apollo';

export default class Root extends Component {
  render() {
    const { store, history, apolloClient } = this.props;
    return (
      <ApolloProvider store={store} client={apolloClient}>
        <Router history={history} routes={routes} />
      </ApolloProvider>
    );
  }
}

Root.propTypes = {
  store: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
  apolloClient: PropTypes.object.isRequired
};
