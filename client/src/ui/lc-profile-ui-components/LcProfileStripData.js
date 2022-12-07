import React from 'react';
import LcIcon from './LcIcon';

const LcProfileStripData = ({type, desc, skills, isLink}) => {
  return (
    <div className='lc-profile__strip'>
        <LcIcon type={type} />
        <p className='lc-profile__strip--desc'>{desc}</p>
        {
            skills && (
                <div className="lc-profile__strip--skills">
                    {
                        skills.map((sk) => <div className="lc-profile__strip--skill">{sk}</div>)
                    }
                </div>
            )
        }
    </div>
  )
}

export default LcProfileStripData