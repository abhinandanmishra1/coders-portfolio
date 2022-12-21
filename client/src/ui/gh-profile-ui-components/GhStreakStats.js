import React from 'react'

const GhStreakStats = ({username}) => {
  return (
    <div className='gh-streak'><img src={`https://streak-stats.demolab.com?user=${username}&theme=dark`} alt="" /></div>
  )
}

export default React.memo(GhStreakStats);
