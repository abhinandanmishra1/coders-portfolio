import userProfileApi from 'api/lib/userProfile';
import { getProfileData } from 'utils/helpers';

const GET_INIT = 'user/profile/GET_INIT';
const GET_USER = 'user/GET_USER';
const USER_STORE_INIT = 'user/USER_STORE_INIT';
const GET_ERROR = 'user/profile/GET_ERROR';

export function loadUser({username, token}) {
  return async (dispatch) => {
    dispatch({ type: GET_INIT });
    try {
      const { data }= await userProfileApi.loadUser({username, token});
      const { json } = data;
      dispatch({ type: GET_USER, payload: json });
    } catch (error) {
      dispatch({ type: GET_ERROR });
    }
  };
}

export function updateUser(updatedUser) {
  return async (dispatch) => {
    dispatch({ type: GET_INIT });
    try {
      const { data }= await userProfileApi.updateUser(updatedUser);
      const { json } = data;
      dispatch({ type: GET_USER, payload: json });
      alert("Update Sucessfull")
    } catch (error) {
      dispatch({ type: GET_ERROR });
    }
  };
}

export function intializeUserStore() {
  return async (dispatch) => {
      dispatch({ type: USER_STORE_INIT });
  };
}

export default function reducer(
  state = {
    isLoading: false,
    loadError: null,
    profile: {},
    experiences: [],
    projects: [],
    education: [],
  },
  action,
) {
  switch (action.type) {
    case GET_INIT:
      return { ...state, isLoading: true, loadError: null };
    case GET_USER:
      return {
        ...state,
        isLoading: false,
        loadError: null,
        profile: getProfileData(action.payload),
        experiences: action.payload.experiences,
        projects: action.payload.projects,
        education: action.payload.education,
      };
    case USER_STORE_INIT:
      return {
        ...state,
        isLoading: false,
        loadError: null,
        profile: {},
        experiences: [],
        projects: [],
        education: [],
      };
    case GET_ERROR:
        return { ...state, isLoading: false, loadError: true}
    default:
      return state;
  }
}
