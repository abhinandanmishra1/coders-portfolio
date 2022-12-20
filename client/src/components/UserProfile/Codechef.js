import React from 'react';
import { useSelector } from "react-redux";

const Codechef = () => {
  const { 
    profile
  } = useSelector((store) => store.codechef);

  return (
    <div dangerouslySetInnerHTML={{ __html: profile }} />
  )
}

export default Codechef;