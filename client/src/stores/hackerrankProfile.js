import hackerrankProfileApi from 'api/lib/hackerrankProfile';
import { formatCertificateData } from 'utils/helpers';

const GET_INIT = 'hr/profile/GET_INIT';
const GET_DONE = 'hr/profile/GET_DONE';
const GET_CERTIFICATES_DONE = 'hr/profile/GET_CERTIFICATES_DONE';
const GET_ERROR = 'hr/profile/GET_ERROR';

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
      console.log(data);
      const { json } = data;
      console.log(json)
      dispatch({ type: GET_CERTIFICATES_DONE, payload: json });
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
    case GET_ERROR:
      return { ...state, isLoading: false, loadError: true };
    default:
      return state;
  }
}
