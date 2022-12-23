import { batch } from 'react-redux';
import hackerrankProfileApi from 'api/lib/hackerrankProfile';
import { formatCertificateData,formatBadgesData } from 'utils/helpers';

const GET_INIT = 'hr/profile/GET_INIT';
const GET_DONE = 'hr/profile/GET_DONE';
const GET_CERTIFICATES_DONE = 'hr/profile/GET_CERTIFICATES_DONE';
const GET_BADGES_DONE = 'hr/profile/GET_BADGES_DONE';
const GET_EXPERIENCES_DONE = 'hr/profile/GET_EXPERIENCES_DONE';
const GET_SCHOOLS_DONE = 'hr/profile/GET_SCHOOLS_DONE';
const GET_ERROR = 'hr/profile/GET_ERROR';

export function loadHackerrankProfile(username) {
  return async (dispatch) => {
    batch(() => {
      dispatch(loadProfile(username));
      dispatch(loadCertificates(username));
      dispatch(loadBadges(username));
      dispatch(loadExperiences(username));
      dispatch(loadSchools(username));
    });
  };
}

export function loadProfile(username) {
  return async (dispatch) => {
    dispatch({ type: GET_INIT });
    try {
      const { data } = await hackerrankProfileApi.loadProfile(username);
      const { json } = data;
      dispatch({ type: GET_DONE, payload: json });
    } catch (error) {
    //   cogoToast.error('Something Went Wrong! Please reload the page');
      dispatch({ type: GET_ERROR });
    }
  };
}

export function loadCertificates(username) {
  return async (dispatch) => {
    dispatch({ type: GET_INIT });
    try {
      const { data } = await hackerrankProfileApi.loadCertificates(username);
      const { json } = data;

      dispatch({ type: GET_CERTIFICATES_DONE, payload: json });
    } catch (error) {
    //   cogoToast.error('Something Went Wrong! Please reload the page');
      dispatch({ type: GET_ERROR });
    }
  };
}

export function loadBadges(username) {
  return async (dispatch) => {
    dispatch({ type: GET_INIT });
    try {
      const { data } = await hackerrankProfileApi.loadBadges(username);
      const { json } = data;
      dispatch({ type: GET_BADGES_DONE, payload: json });
    } catch (error) {
    //   cogoToast.error('Something Went Wrong! Please reload the page');
      dispatch({ type: GET_ERROR });
    }
  };
}

export function loadExperiences(username) {
  return async (dispatch) => {
    dispatch({ type: GET_INIT });
    try {
      const { data } = await hackerrankProfileApi.loadExperiences(username);
      const { json } = data;
      dispatch({ type: GET_EXPERIENCES_DONE, payload: json });
    } catch (error) {
    //   cogoToast.error('Something Went Wrong! Please reload the page');
      dispatch({ type: GET_ERROR });
    }
  };
}

export function loadSchools(username) {
  return async (dispatch) => {
    dispatch({ type: GET_INIT });
    try {
      const { data } = await hackerrankProfileApi.loadSchools(username);
      const { json } = data;
      dispatch({ type: GET_SCHOOLS_DONE, payload: json });
    } catch (error) {
    //   cogoToast.error('Something Went Wrong! Please reload the page');
      dispatch({ type: GET_ERROR });
    }
  };
}

export default function reducer(
  state = {
    isLoading: false,
    loadError: null,
    userProfile: null,
    certificates: [],
    badges: [],
    experiences: [],
    schools: []
  },
  action,
) {
  switch (action.type) {
    case GET_INIT:
      return { ...state, isLoading: true, loadError: null };
    case GET_DONE:
      return {
        ...state,
        isLoading: false,
        loadError: null,
        userProfile: action.payload,
      };
    case GET_CERTIFICATES_DONE:
      return {
        ...state,
        isLoading: false,
        loadError: null,
        certificates: formatCertificateData(action.payload)
      };
    case GET_BADGES_DONE:
      return {
        ...state,
        isLoading: false,
        loadError: null,
        badges: formatBadgesData(action.payload)
      };
    case GET_EXPERIENCES_DONE:
      return {
        ...state,
        isLoading: false,
        loadError: null,
        experiences: action.payload
      };
    case GET_SCHOOLS_DONE:
      return {
        ...state,
        isLoading: false,
        loadError: null,
        schools: action.payload
      };
    case GET_ERROR:
      return { ...state, isLoading: false, loadError: true };
    default:
      return state;
  }
}
