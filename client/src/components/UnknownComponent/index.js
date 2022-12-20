import React from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';


function MyButton() {
  const navigate = useNavigate();

  function handleClick() {
    navigate(-1);
  }

  return (
    <button onClick={handleClick}>Go Back</button>
  );
}

const UnknownComponent = () => {
  return (
    <div>
      <Link to={'/'}>Go Home</Link>
      <MyButton />
    </div>
  )
}

export default UnknownComponent