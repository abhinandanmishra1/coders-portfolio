import { applyMiddleware, combineReducers, legacy_createStore as createStore, compose } from 'redux';
import thunk from 'redux-thunk';

import hrProfile from "./hackerrankProfile";
import lcProfile from "./leetcodeProfile";
import cfProfile from "./codeforcesProfile";
import ghProfile from "./githubProfile";
import ccProfile from "./codechefProfile";
import userProfile from "./userProfile";

const middleware = [thunk];

const reducers = combineReducers({
  hackerrank: hrProfile,
  leetcode: lcProfile,
  codeforces: cfProfile,
  github: ghProfile,
  codechef: ccProfile,
  user: userProfile,
});

const composeEnhancers = compose;

const enhancer = composeEnhancers(
  applyMiddleware(...middleware),
  // other store enhancers if any
);

const store = createStore(reducers, enhancer);
export default store;
