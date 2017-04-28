import { combineReducers } from 'redux';
import {routerReducer} from 'react-router-redux';

const rootReducer = apolloClient => combineReducers({
  routing: routerReducer,
  apollo: apolloClient.reducer(),
});

export default rootReducer;
