import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import {
  loadLanguagesCounts,
  loadTagProblemCounts,
  loadUserBadgesInfo,
  loadUserContestRatingInfo,
  loadUserProblemsSolvedInfo,
  loadUserRecentAcSubmissions,
} from "stores/leetcodeProfile";

const Leetcode = () => {
  const { username } = useParams();
  const dispatch = useDispatch();
  const lcProfile = useSelector((store) => store.leetcode);
  console.log(lcProfile);
  
  useEffect(() => {
    dispatch(loadLanguagesCounts(username));
    dispatch(loadTagProblemCounts(username));
    dispatch(loadUserBadgesInfo(username));
    dispatch(loadUserContestRatingInfo(username));
    dispatch(loadUserProblemsSolvedInfo(username));
    dispatch(loadUserRecentAcSubmissions(username));
  }, [dispatch, username]);
  return (
    <div>Leetcode</div>
  )
}

export default Leetcode