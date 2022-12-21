import React from 'react'
import { ReactComponent as GoRight } from "assets/svg/lc/goRight.svg";

const LcBadge = ({badge, index, badgeSize}) => {
  const basePath = "https://leetcode.com";
  const imgUrl = badge.icon[0]==='/'? `${basePath}${badge.icon}` : badge.icon;
  return (
    <img className={`lc-badges__icon lc-badges__icon--${badgeSize}-${index}`} src={imgUrl} alt={badge.displayName} />
  );
}

const LcBadges = ({badgesData}) => {
  if(!badgesData) return null;
  const {badges, upcomingBadges} = badgesData;
  const badgeSize = Math.min(3, badges.length);

  return (
    <div className='lc-badges lc-section'>
        <div className="lc-badges__header">
          <div className="lc-badges__header--left">
            <p>Badges</p>
            <p>{badges.length}</p>
          </div>
          <div className="lc-badges__header--right">
            <GoRight />
          </div>
        </div>
        <div className="lc-badges__display">
          {
             badges && badges.length>0 &&
            badges.slice(0,badgeSize).map((badge, index) => <LcBadge key={index} {...{badgeSize,index,badge}} />)
          }
        </div>
        {
          badges && badges.length>0 && (
            <div className="lc-badges__footer">
              <p>Most Recent Badge</p>
              <p>{badges[0]?.displayName}</p>
            </div>
          )
        }
    </div>
  )
}

export default LcBadges