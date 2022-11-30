import { applyMiddleware, combineReducers, legacy_createStore as createStore, compose } from 'redux';
import thunk from 'redux-thunk';

import profileData from "./profileData";

const middleware = [thunk];

const reducers = combineReducers({
  profileData,
});

const composeEnhancers = compose;

const enhancer = composeEnhancers(
  applyMiddleware(...middleware),
  // other store enhancers if any
);

const store = createStore(reducers, enhancer);
export default store;
