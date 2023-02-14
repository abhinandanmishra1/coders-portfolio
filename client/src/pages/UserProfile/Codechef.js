import React from 'react';
import { useSelector } from "react-redux";
import FixedNavigation from 'components/FixedNavigation';

const Codechef = () => {
  const { 
    profile,
  } = useSelector((store) => store.codechef);
  
  return (
    <>
      <FixedNavigation />
      <div dangerouslySetInnerHTML={{ __html: profile }} />
    </>
  )
}

export default Codechef;