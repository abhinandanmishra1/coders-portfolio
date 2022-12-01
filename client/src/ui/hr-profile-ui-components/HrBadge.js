import React from 'react';

const HrBadge = ({title, shortTitle, imgUrl, stars}) => {
  if (!stars || !title) return null;
  return (
    <div className={`hr-badge  hr-badge--${stars}star`}>
        <img src={imgUrl} alt="" />
        <p className='hr-badge__title'>{shortTitle || title}</p>
        <div className="hr-badge__stars">
          {
            stars && 
            [...Array(stars)].map(() => <div className={`hr-badge__star`}></div>)
          }
        </div>
    </div>
  )
}

export default HrBadge