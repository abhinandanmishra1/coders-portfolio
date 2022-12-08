import React, { useState } from "react";
import { ReactComponent as RecentSubmissionsIcons} from "assets/svg/lc/recentSubmissions.svg";
import { ReactComponent as SolutionsIcons} from "assets/svg/lc/solutions.svg";
import { ReactComponent as DiscussionsIcons} from "assets/svg/lc/discussions.svg";

const LcRecentSubmissions = ({ recentSubmissions }) => {
  const [tab, setTab] = useState(0);
  if (!recentSubmissions) return <h1>No data available</h1>;

  const { recentAcSubmissionList } = recentSubmissions;
  console.log(recentAcSubmissionList);

  const getDiff = (timestamp) => {
    const currTimeStamp = new Date().getTime();
    const prevTimeStamp = new Date(timestamp * 1000).getTime();
    const diffInTime = currTimeStamp - prevTimeStamp;

    const days = parseInt(diffInTime / (1000 * 3600 * 24));

    if (!days) {
      const hours = Math.round(diffInTime / (1000 * 3600));

      if (!hours) {
        const seconds = Math.round(diffInTime / 1000);

        return `${seconds} seconds ago`;
      }

      return `${hours} hours ago`;
    }
    return `${days} days ago`;
  };

  return (
    <div className="lc-recentSubmissions lc-section">
      <div className="lc-recentSubmissions__header">
        <div className={`lc-recentSubmissions__header--tab ${tab===0?'lc-recentSubmissions__header--active':''}`} onClick={()=> setTab(0)}><RecentSubmissionsIcons /> Recent AC</div>
        <div className={`lc-recentSubmissions__header--tab ${tab===1?'lc-recentSubmissions__header--active':''}`} onClick={()=> setTab(1)}><SolutionsIcons /> Solutions</div>
        <div className={`lc-recentSubmissions__header--tab ${tab===2?'lc-recentSubmissions__header--active':''}`} onClick={()=> setTab(2)}><DiscussionsIcons /> Discussions</div>
      </div>
      <div className="lc-recentSubmissions__details">
        {tab===0 && recentAcSubmissionList.map((submission) => {
          return (
            <div className="lc-recentSubmissions__detail" onClick={
              () => {
                const url = `https://leetcode.com/problems/${submission.titleSlug}/submissions/${submission.id}`
                window.open(url, '_blank');
              }
            }>
              <div className="lc-recentSubmissions__detail--title">
                {submission.title}
              </div>
              <div className="lc-recentSubmissions__detail--daysAgo">
                {getDiff(submission.timestamp)}
              </div>
            </div>
          );
        })}
        {
          tab===1 && (
            <h1>Solutions</h1>
          )
        }
        {
          tab===2 && (
            <h1>Discussions</h1>
          )
        }
      </div>
    </div>
  );
};

export default LcRecentSubmissions;
