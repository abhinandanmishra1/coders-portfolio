import React from 'react';

const index = ({type, title, onClick, customClass}) => {
  return (
    <div 
    className={`btn btn__${type} ${customClass || ''}`} 
    onClick={onClick}
    tabIndex={0}
    >
      {title}
    </div>
  )
}

export default index