import React from "react";

const LcRecentSubmissions = ({ recentSubmissions }) => {
  if (!recentSubmissions) return <h1>No data available</h1>;

  const { recentAcSubmissionList } = recentSubmissions;

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
        <div className="lc-recentSubmissions__recentAc">Recent AC</div>
      </div>
      <div className="lc-recentSubmissions__details">
        {recentAcSubmissionList.map((submission) => {
          return (
            <div className="lc-recentSubmissions__detail">
              <div className="lc-recentSubmissions__detail--title">
                {submission.title}
              </div>
              <div className="lc-recentSubmissions__detail--daysAgo">
                {getDiff(submission.timestamp)}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default LcRecentSubmissions;
