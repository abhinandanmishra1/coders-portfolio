import FixedNavigation from 'components/FixedNavigation';
import Portfolio from 'pages/Portfolio';
import React from 'react';

const UserProfile = () => {
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
