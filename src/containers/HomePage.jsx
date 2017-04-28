import React from 'react';
import gql from 'graphql-tag';
import { graphql, compose } from 'react-apollo';
import HomePage from '../components/HomePage.jsx';

const query = gql`query TestThingsAreWorking {
  testString
}`;

const config = {};

export default compose(
  graphql(query, config)
)(HomePage);
