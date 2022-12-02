import leetcodeProfileApi from "api/lib/hackerrankProfile";

const GET_INIT = "lc/profile/GET_INIT";
const GET_ERROR = "lc/profile/GET_ERROR";
const GET_LANGUAGES_COUNT = "lc/profile/GET_LANGUAGES_COUNT";
const GET_TAG_PROBLEMS_COUNT = "lc/profile/GET_TAG_PROBLEMS_COUNT";
const GET_CONTEST_RATING_INFO = "lc/profile/GET_CONTEST_RATING_INFO";
const GET_PROBLEMS_SOLVED_INFO = "lc/profile/GET_PROBLEMS_SOLVED_INFO";
const GET_BADGES_INFO = "lc/profile/GET_BADGES_INFO";
const GET_RECENT_SUBMISSIONS = "lc/profile/GET_RECENT_SUBMISSIONS";

export function loadLanguagesCounts(username) {
  return async (dispatch) => {
    dispatch({ type: GET_INIT });
    try {
      const { data } = await leetcodeProfileApi.loadProfile(username);
      const { json } = data;
      dispatch({ type: GET_LANGUAGES_COUNT, payload: json });
    } catch (error) {
      dispatch({ type: GET_ERROR });
    }
  };
}

export function loadTagProblemCounts(username) {
  return async (dispatch) => {
    dispatch({ type: GET_INIT });
    try {
      const { data } = await leetcodeProfileApi.loadProfile(username);
      const { json } = data;
      dispatch({ type: GET_TAG_PROBLEMS_COUNT, payload: json });
    } catch (error) {
      dispatch({ type: GET_ERROR });
    }
  };
}

export function loadUserContestRatingInfo(username) {
  return async (dispatch) => {
    dispatch({ type: GET_INIT });
    try {
      const { data } = await leetcodeProfileApi.loadProfile(username);
      const { json } = data;
      dispatch({ type: GET_CONTEST_RATING_INFO, payload: json });
    } catch (error) {
      dispatch({ type: GET_ERROR });
    }
  };
}

export function loadUserProblemsSolvedInfo(username) {
  return async (dispatch) => {
    dispatch({ type: GET_INIT });
    try {
      const { data } = await leetcodeProfileApi.loadProfile(username);
      const { json } = data;
      dispatch({ type: GET_PROBLEMS_SOLVED_INFO, payload: json });
    } catch (error) {
      dispatch({ type: GET_ERROR });
    }
  };
}

export function loadUserBadgesInfo(username) {
  return async (dispatch) => {
    dispatch({ type: GET_INIT });
    try {
      const { data } = await leetcodeProfileApi.loadProfile(username);
      const { json } = data;
      dispatch({ type: GET_BADGES_INFO, payload: json });
    } catch (error) {
      dispatch({ type: GET_ERROR });
    }
  };
}

export function loadUserRecentAcSubmissions(username) {
  return async (dispatch) => {
    dispatch({ type: GET_INIT });
    try {
      const { data } = await leetcodeProfileApi.loadProfile(username);
      const { json } = data;
      dispatch({ type: GET_RECENT_SUBMISSIONS, payload: json });
    } catch (error) {
      dispatch({ type: GET_ERROR });
    }
  };
}

export default function reducer(
  state = {
    isLoading: false,
    loadError: null,
    languages: null,
    tagProblems: null,
    contestRatings: null,
    solvedProblems: null,
    badges: [],
    recentSubmissions: null,
  },
  action
) {
  switch (action.type) {
    case GET_INIT:
      return { ...state, isLoading: true, loadError: null };
    case GET_LANGUAGES_COUNT:
      return {
        ...state,
        isLoading: false,
        loadError: null,
        languages: action.payload,
      };
    case GET_TAG_PROBLEMS_COUNT:
      return {
        ...state,
        isLoading: false,
        loadError: null,
        tagProblems: action.payload,
      };
    case GET_CONTEST_RATING_INFO:
      return {
        ...state,
        isLoading: false,
        loadError: null,
        contestRatings: action.payload,
      };
    case GET_PROBLEMS_SOLVED_INFO:
      return {
        ...state,
        isLoading: false,
        loadError: null,
        solvedProblems: action.payload,
      };
    case GET_BADGES_INFO:
      return {
        ...state,
        isLoading: false,
        loadError: null,
        badges: action.payload,
      };
    case GET_RECENT_SUBMISSIONS:
      return {
        ...state,
        isLoading: false,
        loadError: null,
        recentSubmissions: action.payload,
      };
    case GET_ERROR:
      return { ...state, isLoading: false, loadError: true };
    default:
      return state;
  }
}
