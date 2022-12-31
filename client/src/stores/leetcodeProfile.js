import { batch } from "react-redux";
import leetcodeProfileApi from "api/lib/leetcodeProfile";
import { formatLeecodeContestHistoryData, formatCalendarData } from "utils/helpers";

const GET_INIT = "lc/profile/GET_INIT";
const GET_ERROR = "lc/profile/GET_ERROR";
const GET_USER_INFO = "lc/profile/GET_USER_INFO";
const GET_LANGUAGES_COUNT = "lc/profile/GET_LANGUAGES_COUNT";
const GET_TAG_PROBLEMS_COUNT = "lc/profile/GET_TAG_PROBLEMS_COUNT";
const GET_CONTEST_RATING_INFO = "lc/profile/GET_CONTEST_RATING_INFO";
const GET_CONTEST_RATING_HISTOGRAM_INFO = "lc/profile/GET_CONTEST_RATING_HISTOGRAM_INFO";
const GET_PROBLEMS_SOLVED_INFO = "lc/profile/GET_PROBLEMS_SOLVED_INFO";
const GET_BADGES_INFO = "lc/profile/GET_BADGES_INFO";
const GET_RECENT_SUBMISSIONS = "lc/profile/GET_RECENT_SUBMISSIONS";
const GET_USER_DISCUSSION_SOLUTIONS = "lc/profile/GET_USER_DISCUSSION_SOLUTIONS";
const GET_USER_PROFILE_CALENDAR = "lc/profile/GET_USER_PROFILE_CALENDAR";

export function loadLeetcodeProfile(username) {
  return async (dispatch) => {
    batch(() => {
      dispatch(loadUserProfile(username));
      dispatch(loadLanguagesCounts(username));
      dispatch(loadTagProblemCounts(username));
      dispatch(loadUserContestRatingInfo(username));
      dispatch(loadUserContestRatingHistogram(username));
      dispatch(loadUserProblemsSolvedInfo(username));
      dispatch(loadUserBadgesInfo(username));
      dispatch(loadUserRecentAcSubmissions(username));
      dispatch(loadUserDiscussionSolutions(username));
      dispatch(loadUserProfileCalendar(username));
    });
  };
};

export function loadUserProfile(username) {
  return async (dispatch) => {
    dispatch({ type: GET_INIT });
    try {
      const { data } = await leetcodeProfileApi.getUserInfo(username);
      const { json } = data;
      dispatch({ type: GET_USER_INFO, payload: json });
    } catch (error) {
      dispatch({ type: GET_ERROR });
    }
  };
}

export function loadLanguagesCounts(username) {
  return async (dispatch) => {
    dispatch({ type: GET_INIT });
    try {
      const { data } = await leetcodeProfileApi.getLanguagesCount(username);
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
      const { data } = await leetcodeProfileApi.getTagProblemCounts(username);
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
      const { data } = await leetcodeProfileApi.getUserContestRatingInfo(username);
      const { json } = data;
      dispatch({ type: GET_CONTEST_RATING_INFO, payload: json });
    } catch (error) {
      dispatch({ type: GET_ERROR });
    }
  };
}

export function loadUserContestRatingHistogram(username) {
  return async (dispatch) => {
    dispatch({ type: GET_INIT });
    try {
      const { data } = await leetcodeProfileApi.getUserContestRatingHistogram(username);
      const { json } = data;
      dispatch({ type: GET_CONTEST_RATING_HISTOGRAM_INFO, payload: json });
    } catch (error) {
      dispatch({ type: GET_ERROR });
    }
  };
}

export function loadUserProblemsSolvedInfo(username) {
  return async (dispatch) => {
    dispatch({ type: GET_INIT });
    try {
      const { data } = await leetcodeProfileApi.getUserProblemsSolvedInfo(username);
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
      const { data } = await leetcodeProfileApi.getUserBadgesInfo(username);
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
      const { data } = await leetcodeProfileApi.getUserRecentAcSubmissions(username);
      const { json } = data;
      dispatch({ type: GET_RECENT_SUBMISSIONS, payload: json });
    } catch (error) {
      dispatch({ type: GET_ERROR });
    }
  };
}

export function loadUserDiscussionSolutions(username, orderBy="newest_to_oldest") {
  return async (dispatch) => {
    dispatch({ type: GET_INIT });
    try {
      const { data } = await leetcodeProfileApi.getUserDiscussionSolutions(username, orderBy);
      const { json } = data;
      dispatch({ type: GET_USER_DISCUSSION_SOLUTIONS, payload: json });
    } catch (error) {
      dispatch({ type: GET_ERROR });
    }
  };
}

export function loadUserProfileCalendar(username, year = null) {
  return async (dispatch) => {
    dispatch({ type: GET_INIT });
    try {
      const { data } = await leetcodeProfileApi.getUserProfileCalendar(username, year);

      const { json } = data;
      dispatch({ type: GET_USER_PROFILE_CALENDAR, payload: json });
    } catch (error) {
      dispatch({ type: GET_ERROR });
    }
  };
}

export default function reducer(
  state = {
    isLoading: false,
    loadError: null,
    userInfo: null,
    languages: null,
    tagProblems: null,
    contestRatings: null,
    contestRatingHistogram: null,
    solvedProblems: null,
    badges: [],
    recentSubmissions: {},
    userDiscussionSolutions: {},
    userProfileCalendar: null,
  },
  action
) {
  switch (action.type) {
    case GET_INIT:
      return { ...state, isLoading: true, loadError: null };
    case GET_USER_INFO:
      return {
        ...state,
        isLoading: false,
        loadError: null,
        userInfo: action.payload,
      };
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
        contestRatings: formatLeecodeContestHistoryData(action.payload),
      };
    case GET_CONTEST_RATING_HISTOGRAM_INFO:
      return {
        ...state,
        isLoading: false,
        loadError: null,
        contestRatingHistogram: action.payload,
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
    case GET_USER_DISCUSSION_SOLUTIONS:
      return {
        ...state,
        isLoading: false,
        loadError: null,
        userDiscussionSolutions: action.payload,
      };
    case GET_USER_PROFILE_CALENDAR:
      return {
        ...state,
        isLoading: false,
        loadError: null,
        userProfileCalendar: formatCalendarData(action.payload),
      };
    case GET_ERROR:
      return { ...state, isLoading: false, loadError: true };
    default:
      return state;
  }
}
