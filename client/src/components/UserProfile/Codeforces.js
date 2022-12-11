import React, { useEffect } from "react";
import { batch, useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import { 
    loadProfile,
    loadContestRatings,
  } from "stores/codeforcesProfile";

const Codeforces = () => {
    const { username } = useParams();
    const dispatch = useDispatch();

    const store = useSelector(store => store.codeforces);
    console.log(store);
    useEffect(() => {
      batch(() => {
        dispatch(loadProfile(username));
        dispatch(loadContestRatings(username));
      })
    }, [dispatch, username]);
  return (
    <div>Codeforces</div>
  )
}

export default Codeforces