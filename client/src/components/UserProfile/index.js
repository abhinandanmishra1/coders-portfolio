import FixedNavigation from 'common/components/FixedNavigation';
import Portfolio from 'components/Portfolio';
import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const UserProfile = () => {

  const { 
    profile
  } = useSelector((store) => store.user);

  const {
    username,
    leetcodeUsername,
    codeforcesUsername,
    githubUsername,
    codechefUsername,
    hackerrankUsername,
  } = profile || {};

  return (
    <>
      <FixedNavigation />
      <div className='user'>
        <Portfolio />
      </div>
    </>
  )
}

export default UserProfile;
