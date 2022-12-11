import { applyMiddleware, combineReducers, legacy_createStore as createStore, compose } from 'redux';
import thunk from 'redux-thunk';

import hrProfile from "./hackerrankProfile";
import lcProfile from "./leetcodeProfile";
import cfProfile from "./codeforcesProfile";

const middleware = [thunk];

const reducers = combineReducers({
  hackerrank: hrProfile,
  leetcode: lcProfile,
  codeforces: cfProfile,
});

const composeEnhancers = compose;

const enhancer = composeEnhancers(
  applyMiddleware(...middleware),
  // other store enhancers if any
);

const store = createStore(reducers, enhancer);
export default store;
