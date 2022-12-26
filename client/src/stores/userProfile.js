import userProfileApi from 'api/lib/userProfile';

const GET_INIT = 'user/profile/GET_INIT';
const GET_USER = 'user/GET_USER';
const GET_ERROR = 'user/profile/GET_ERROR';

export function loadUser(username) {
  return async (dispatch) => {
    dispatch({ type: GET_INIT });
    try {
      const { data }= await userProfileApi.loadUser(username);
      const { json } = data;
      dispatch({ type: GET_USER, payload: json });
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
    case GET_USER:
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
