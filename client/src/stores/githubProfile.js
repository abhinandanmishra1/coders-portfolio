import { batch } from "react-redux";
import githubProfileApi from 'api/lib/githubProfile';

const GET_INIT = 'gh/profile/GET_INIT';
const GET_PROFILE = 'gh/GET_PROFILE';
const GET_FOLLOWERS = 'gh/GET_FOLLOWERS';
const GET_FOLLOWING = 'gh/GET_FOLLOWING';
const GET_REPOS = 'gh/GET_REPOS';
const GET_ORGS = 'gh/GET_ORGS';
const GET_ERROR = 'gh/profile/GET_ERROR';

export function loadGithubProfile(username){
  return async (dispatch) => {
    batch(() => {
      dispatch(loadProfile(username));
      dispatch(loadFollowers(username));
      dispatch(loadFollowing(username));
      dispatch(loadOrgs(username));
      dispatch(loadRepos(username));
    });
  };
}

export function loadProfile(username) {
  return async (dispatch) => {
    dispatch({ type: GET_INIT });
    try {
      const { data } = await githubProfileApi.loadProfile(username);
      const { json } = data;
      dispatch({ type: GET_PROFILE, payload: json });
    } catch (error) {
      dispatch({ type: GET_ERROR });
    }
  };
}

export function loadFollowers(username) {
  return async (dispatch) => {
    dispatch({ type: GET_INIT });
    try {
      const { data } = await githubProfileApi.loadFollowers(username);
      const { json } = data;
      dispatch({ type: GET_FOLLOWERS, payload: json });
    } catch (error) {
      dispatch({ type: GET_ERROR });
    }
  };
}

export function loadFollowing(username) {
  return async (dispatch) => {
    dispatch({ type: GET_INIT });
    try {
      const { data } = await githubProfileApi.loadFollowing(username);
      const { json } = data;
      dispatch({ type: GET_FOLLOWING, payload: json });
    } catch (error) {
      dispatch({ type: GET_ERROR });
    }
  };
}

export function loadOrgs(username) {
  return async (dispatch) => {
    dispatch({ type: GET_INIT });
    try {
      const { data } = await githubProfileApi.loadOrgs(username);
      const { json } = data;
      dispatch({ type: GET_ORGS, payload: json });
    } catch (error) {
      dispatch({ type: GET_ERROR });
    }
  };
}

export function loadRepos(username) {
  return async (dispatch) => {
    dispatch({ type: GET_INIT });
    try {
      const { data } = await githubProfileApi.loadRepos(username);
      const { json } = data;
      dispatch({ type: GET_REPOS, payload: json });
    } catch (error) {
      dispatch({ type: GET_ERROR });
    }
  };
}

export default function reducer(
  state = {
    isLoading: false,
    loadError: null,
    userProfile: null,
    followers: [],
    following: [],
    orgs: [],
    repos: [],
  },
  action,
) {
  switch (action.type) {
    case GET_INIT:
      return { ...state, isLoading: true, loadError: null };
    case GET_PROFILE:
      return {
        ...state,
        isLoading: false,
        loadError: null,
        userProfile: action.payload,
      };
    case GET_FOLLOWERS:
      return {
        ...state,
        isLoading: false,
        loadError: null,
        followers: action.payload,
      };
    case GET_FOLLOWING:
      return {
        ...state,
        isLoading: false,
        loadError: null,
        following: action.payload,
      };
    case GET_ORGS:
      return {
        ...state,
        isLoading: false,
        loadError: null,
        orgs: action.payload,
      };
    case GET_REPOS:
      return {
        ...state,
        isLoading: false,
        loadError: null,
        repos: action.payload,
      };
    case GET_ERROR:
        return { ...state, isLoading: false, loadError: true}
    default:
      return state;
  }
}
