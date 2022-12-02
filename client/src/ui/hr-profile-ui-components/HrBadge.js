import React from 'react';
import HrSkillLogo from "./HrSkillLogo";

const HrBadge = ({title, shortTitle, stars}) => {
  if (!stars || !title) return null;

  const getskillName = (skill) => (
    skill.split(' ').map((prt) => prt[0].toUpperCase()+prt.slice(1)).join('')
  );

  return (
    <div className={`hr-badge  hr-badge--${stars}star`}>
        <HrSkillLogo skill={getskillName(shortTitle || title)} className='hr-badge__image'/>
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