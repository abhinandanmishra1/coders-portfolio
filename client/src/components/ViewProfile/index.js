import React, { useState, useCallback } from 'react';
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from  "react-redux";
import { loadUser } from 'stores/userProfile';
import { useEffect } from 'react';

const ViewProfile = () => {
  const [username, setUsername] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { profile } = useSelector(store => store.user);

  const showProfile = useCallback(
    (username) => {
      dispatch(loadUser(username));
    },
    [dispatch],
  );

  useEffect(()=> {
    if (profile) {
      navigate(`/${username}/profile/codeforces`);
    }
  }, [navigate, username, profile]);

  return (
    <div>
      <input type="text" onChange={(e)=> {
        setUsername(e.target.value);
        console.log(e.target.value);
      }} />
      <button onClick={() => {
        showProfile(username);
      }}>showProfile</button>
    </div>
  )
}

export default ViewProfile;