import React, { useState, useCallback } from 'react';
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from  "react-redux";
import { loadUser, intializeUserStore } from 'stores/userProfile';

const ViewProfile = () => {
  const [message, setMessage] = useState('');
  const [username, setUsername] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { profile } = useSelector(store => store.user);

  const showProfile = useCallback(
    (username) => {
      dispatch(intializeUserStore());
      dispatch(loadUser({username}));
      if (profile && profile.username) {
        setMessage('');
        navigate(`/${profile.username}/profile`);
      } else {
        setMessage('Please load profile first');
      }
    },
    [dispatch, profile, navigate],
  );

  return (
    <div className='view-user-profile'>
      <input type="text" onChange={(e)=> {
        setUsername(e.target.value);
      }} />
      <button onClick={() => {
        showProfile(username);
      }}>showProfile</button>
      <p>{message}</p>
    </div>
  )
}

export default ViewProfile;
