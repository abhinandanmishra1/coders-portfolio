import FixedNavigation from 'common/components/FixedNavigation';
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
      <Link to={`hackerrank`}>Hackerrank</Link>
      <Link to={`leetcode`}>Leetcode</Link>
      <Link to={`codeforces`}>Codeforces</Link>
      <Link to={`codechef`}>Codechef</Link>
      <Link to={`github`}>Github</Link>
    </div>
    </>
  )
}

export default UserProfile;
