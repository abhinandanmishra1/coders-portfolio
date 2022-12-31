import React from 'react';
import LcIcon from './LcIcon';

const LcProfileStripData = ({type, desc, skills, isLink, isSocial}) => {
  return (
    <div className='lc-profile__strip'>
        <LcIcon type={type} />
        <p className='lc-profile__strip--desc' onClick={isLink || isSocial ? () => window.open(desc) : undefined}>{isSocial? desc.split('/').pop() : desc}</p>
        {
            skills && (
                <div className="lc-profile__strip--skills">
                    {
                        skills.slice(0,5).map((sk, index) => <div key={index} className="lc-profile__strip--skill">{sk}</div>)
                    }
                </div>
            )
        }
    </div>
  )
}

export default LcProfileStripData