import React from "react";
import CircularProgressBar from "common/components/CircularProgressBar";
import ProgressBar from "common/components/ProgressBar";

const LcSolvedProblems = () => {
  const total = {
    easy: 611,
    medium: 1330,
    hard: 72,
  };

  const userTotal = {
    easy: 182,
    medium: 325,
    hard: 72,
  };

  const getPercentage = (userTotal, total) => {
    return `${((userTotal / total) * 100).toFixed(1)}%`;
  };

  return (
    <div className="lc-solved lc-section">
      <div className="lc-solved__title">Solved Problems</div>
      <div
        className="lc-solved__stats"
        aria-valuenow="65"
        aria-valuemin="0"
        aria-valuemax="100"
      >
        <CircularProgressBar
          indicatorColor="rgba(255, 161, 22, 1)"
          progress="60"
          progressContent="60%"
          trackWidth="5"
          indicatorWidth="7"
          label="Solved"
          labelColor="#fff"
          trackColor="hsla(0,0%,100%,.1)"
          size={120}
        />
        <div className="lc-solved__pcount">
          <div className="lc-solved__pcount--level">
            <div className="lc-solved__pcount--progress">
              <div className="lc-solved__pcount--title">Easy</div>
              <div className="lc-solved__pcount--details">
                <span>{userTotal.easy}</span>/{total.easy}
              </div>
              <div className="lc-solved__pcount--beats">
                Beats {getPercentage(userTotal.easy, total.easy)}
              </div>
            </div>
            <div className="lc-solved__pcount--progressBar">
              <ProgressBar completed={50} bgcolor="green" />
            </div>
          </div>
          <div className="lc-solved__pcount--level">
            <div className="lc-solved__pcount--progress">
              <div className="lc-solved__pcount--title">Medium</div>
              <div className="lc-solved__pcount--details">
              <span>{userTotal.medium}</span>/{total.medium}
              </div>
              <div className="lc-solved__pcount--beats">
                Beats {getPercentage(userTotal.medium, total.medium)}
              </div>
            </div>
            <div className="lc-solved__pcount--progressBar">
              <ProgressBar completed={50} bgcolor="yellow" />
            </div>
          </div>
          <div className="lc-solved__pcount--level">
            <div className="lc-solved__pcount--progress">
              <div className="lc-solved__pcount--title">Hard</div>
              <div className="lc-solved__pcount--details">
              <span>{userTotal.hard}</span>/{total.hard}
              </div>
              <div className="lc-solved__pcount--beats">
                Beats {getPercentage(userTotal.hard, total.hard)}
              </div>
            </div>
            <div className="lc-solved__pcount--progressBar">
              <ProgressBar completed={50} bgcolor="red" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LcSolvedProblems;
