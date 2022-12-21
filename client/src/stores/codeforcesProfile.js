import { batch } from "react-redux";
import codeforcesProfileApi from 'api/lib/codeforcesProfile';

import { getTagProblems, getProblemRatingsCount, getSubmissionsData } from "utils/helpers";
const GET_INIT = 'cf/profile/GET_INIT';
const GET_PROFILE = 'cf/GET_PROFILE';
const GET_CONTEST_RATINGS = 'cf/GET_CONTEST_RATINGS';
const GET_USER_STATUS = 'cf/GET_USER_STATUS';
const GET_ERROR = 'cf/profile/GET_ERROR';

export function loadCodeforcesProfile(username){
  return async (dispatch) => {
    batch(() => {
      dispatch(loadProfile(username));
      dispatch(loadContestRatings(username));
      dispatch(loadUserStatus(username));
    });
  };
}

export function loadProfile(username) {
  return async (dispatch) => {
    dispatch({ type: GET_INIT });
    try {
      const { data } = await codeforcesProfileApi.loadProfile(username);
      const { json } = data;
      dispatch({ type: GET_PROFILE, payload: json });
    } catch (error) {
      dispatch({ type: GET_ERROR });
    }
  };
}

export function loadContestRatings(username) {
  return async (dispatch) => {
    dispatch({ type: GET_INIT });
    try {
      const { data } = await codeforcesProfileApi.loadContestRatings(username);
      const { json } = data;
      dispatch({ type: GET_CONTEST_RATINGS, payload: json });
    } catch (error) {
      dispatch({ type: GET_ERROR });
    }
  };
}

export function loadUserStatus(username) {
  return async (dispatch) => {
    dispatch({ type: GET_INIT });
    try {
      const { data } = await codeforcesProfileApi.loadUserStatus(username);
      const { json } = data;
      dispatch({ type: GET_USER_STATUS, payload: json });
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
    userContestRatings: [],
    tagProblems: [],
    problemRatingsCount: [],
    submissionsData: null,
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
    case GET_CONTEST_RATINGS:
      return {
        ...state,
        isLoading: false,
        loadError: null,
        userContestRatings: action.payload,
      };
    case GET_USER_STATUS:
      return {
        ...state,
        isLoading: false,
        loadError: null,
        tagProblems: getTagProblems(action.payload),
        problemRatingsCount: getProblemRatingsCount(action.payload),
        submissionsData: getSubmissionsData(action.payload),
      };
    case GET_ERROR:
        return { ...state, isLoading: false, loadError: true}
    default:
      return state;
  }
}
