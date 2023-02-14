import React, { useState, useCallback } from "react";
import CircularProgressBar from "components/CircularProgressBar";
import ProgressBar from "components/ProgressBar";

const LcSolvedProblems = ({solvedProblems}) => {
  const getPercentage = (userTotal, total) => {
    return `${((userTotal / total) * 100).toFixed(1)}%`;
  };

  const completedQuestionProgress = useCallback((userTotal, total) => {
      return Math.round(userTotal/total *100);
  }, [])

  const [ progressContent, setProgressContent ] = useState(1);

  const changeProgressContent = useCallback(
    () => {
      setProgressContent(!progressContent);
    },
    [progressContent, setProgressContent],
  );

  if ( !solvedProblems || !solvedProblems.matchedUser || !solvedProblems.matchedUser.submitStatsGlobal) {
    return null;
  }

  const { allQuestionsCount } = solvedProblems || {};
  const { problemsSolvedBeatsStats: solvedStats } = solvedProblems?.matchedUser || {};
  const { acSubmissionNum } = solvedProblems?.matchedUser?.submitStatsGlobal || {};

  const { count: solvedProblemsCounts } = acSubmissionNum[0] || {};
  const { count: solvedEasyProblemsCounts } = acSubmissionNum[1] || {};
  const { count: solvedMediumProblemsCounts } = acSubmissionNum[2] || {};
  const { count: solvedHardProblemsCounts } = acSubmissionNum[3] || {};

  const { count: allProblemsCounts } = allQuestionsCount[0] || {};
  const { count: allEasyProblemsCounts } = allQuestionsCount[1] || {};
  const { count: allMediumProblemsCounts } = allQuestionsCount[2] || {};
  const { count: allHardProblemsCounts } = allQuestionsCount[3] || {};

  const solvedProblemsPercentage = (solvedProblemsCounts/allProblemsCounts*100).toFixed(1);
  const progressContent1 = solvedProblemsCounts;
  const progressContent2 = `${solvedProblemsPercentage}%`;

  return (
    <div className="lc-solved lc-section">
      <div
        className="lc-solved__stats"
        aria-valuenow="65"
        aria-valuemin="0"
        aria-valuemax="100"
      >
        <div className="lc-solved__bar">
          <div className="lc-solved__title">Solved Problems</div>
          <div className="lc-solved__circular-stats" onMouseEnter={changeProgressContent}
          onMouseLeave={changeProgressContent}>
            <CircularProgressBar
              indicatorColor="rgba(255, 161, 22, 1)"
              progress={solvedProblemsPercentage}
              progressContent={progressContent? progressContent1 : progressContent2}
              trackWidth="5"
              indicatorWidth="7"
              label="Solved"
              labelColor="#fff"
              trackColor="hsla(0,0%,100%,.1)"
              size={120}
              changeProgressContent={changeProgressContent}
            />
          </div>
        </div>
        <div className="lc-solved__pcount">
          <div className="lc-solved__pcount--level">
            <div className="lc-solved__pcount--progress">
              <div className="lc-solved__pcount--title">Easy</div>
              <div className="lc-solved__pcount--details">
                <span>{solvedEasyProblemsCounts}</span>/{allEasyProblemsCounts}
              </div>
              <div className="lc-solved__pcount--beats">
                Beats {getPercentage(solvedEasyProblemsCounts, allEasyProblemsCounts)}
              </div>
            </div>
            <div className="lc-solved__pcount--progressBar">
              <ProgressBar completed={completedQuestionProgress(solvedEasyProblemsCounts,allEasyProblemsCounts)} bgcolor="green" />
            </div>
          </div>
          <div className="lc-solved__pcount--level">
            <div className="lc-solved__pcount--progress">
              <div className="lc-solved__pcount--title">Medium</div>
              <div className="lc-solved__pcount--details">
                <span>{solvedMediumProblemsCounts}</span>/{allMediumProblemsCounts}
              </div>
              <div className="lc-solved__pcount--beats">
                Beats {getPercentage(solvedMediumProblemsCounts, allMediumProblemsCounts)}
              </div>
            </div>
            <div className="lc-solved__pcount--progressBar">
              <ProgressBar completed={completedQuestionProgress(solvedMediumProblemsCounts,allMediumProblemsCounts)} bgcolor="yellow" />
            </div>
          </div>
          <div className="lc-solved__pcount--level">
            <div className="lc-solved__pcount--progress">
              <div className="lc-solved__pcount--title">Hard</div>
              <div className="lc-solved__pcount--details">
                <span>{solvedHardProblemsCounts}</span>/{allHardProblemsCounts}
              </div>
              <div className="lc-solved__pcount--beats">
                Beats {getPercentage(solvedHardProblemsCounts, allHardProblemsCounts)}
              </div>
            </div>
            <div className="lc-solved__pcount--progressBar">
              <ProgressBar completed={completedQuestionProgress(solvedHardProblemsCounts,allHardProblemsCounts)} bgcolor="red" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LcSolvedProblems;
