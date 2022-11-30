import React, { useEffect } from 'react';
import {useParams} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { loadProfile } from 'stores/hackerrankProfile';

const HackerrankProfile = () => {
  const {username} = useParams();
  const dispatch = useDispatch();
  const store = useSelector(store => store);
  console.log(store);

  useEffect(() => {
    dispatch(loadProfile(username));
  }, [dispatch, username]);
  
  return (
    <div>HackerrankProfile {username} </div>
  )
}

export default HackerrankProfile