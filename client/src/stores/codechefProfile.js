import { batch } from "react-redux";
import codechefProfile from "api/lib/codechefProfile"

const GET_INIT = 'cc/profile/GET_INIT';
const GET_PROFILE = 'cc/GET_PROFILE';
const GET_ERROR = 'cc/profile/GET_ERROR';

export function loadCodechefProfile(username){
  return async (dispatch) => {
    batch(() => {
      dispatch(loadProfile(username));
    });
  };
}

export function loadProfile(username) {
  return async (dispatch) => {
    dispatch({ type: GET_INIT });
    try {
      const { data } = await codechefProfile.loadProfile(username);
      const { json } = data;
      dispatch({ type: GET_PROFILE, payload: json });
    } catch (error) {
      dispatch({ type: GET_ERROR });
    }
  };
}

export default function reducer(
  state = {
    isLoading: false,
    loadError: null,
    profile: null,
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
        profile: action.payload,
      };
    case GET_ERROR:
        return { ...state, isLoading: false, loadError: true}
    default:
      return state;
  }
}
