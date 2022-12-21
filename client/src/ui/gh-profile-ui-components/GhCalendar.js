import React from 'react'
import GitHubCalendar from 'react-github-calendar';

const GhCalendar = ({username}) => {
  return (
    <GitHubCalendar username={username} />
  )
}

export default React.memo(GhCalendar);