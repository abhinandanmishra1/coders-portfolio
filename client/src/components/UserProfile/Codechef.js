import React from 'react';
import { useSelector } from "react-redux";
import FixedNavigation from 'common/components/FixedNavigation';

const Codechef = () => {
  const { 
    profile,
    isLoading
  } = useSelector((store) => store.codechef);
  
  return (
    <>
      <FixedNavigation />
      <div dangerouslySetInnerHTML={{ __html: profile }} />
    </>
  )
}

export default Codechef;