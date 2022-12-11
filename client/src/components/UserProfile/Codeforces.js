import React, { useEffect } from "react";
import { batch, useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import {
  loadProfile,
  loadContestRatings,
  loadUserStatus,
} from "stores/codeforcesProfile";
import CfChart from "ui/cf-profile-ui-components/CfChart";
import CfHistogram from "ui/cf-profile-ui-components/CfHistogram";
import CfSubmissionsGraph from "ui/cf-profile-ui-components/CfSubmissionsGraph";

const TaggedProblemsCountUi = ({ taggedProblemsCounts }) => {
  return (
    <div className="cf-profile__taggedProblems">
      {taggedProblemsCounts.map((tag) => {
        return (
          <div className="cf-profile__tag">
            <div
              className="cf-profile__tag--name"
            >
              {tag.tagName}
            </div>
            <div className="cf-profile__tag--count">
              x<span>{tag.problemsCount}</span>
            </div>
          </div>
        );
      })}
    </div>
  );
};

const Codeforces = () => {
  const { username } = useParams();
  const dispatch = useDispatch();

  const { userProfile, userContestRatings, tagProblems, problemRatingsCount, submissionsData } =
    useSelector((store) => store.codeforces);

  console.log({
    userProfile,
    userContestRatings,
    tagProblems,
    problemRatingsCount,
    submissionsData
  });
  useEffect(() => {
    batch(() => {
      dispatch(loadProfile(username));
      dispatch(loadContestRatings(username));
      dispatch(loadUserStatus(username));
    });
  }, [dispatch, username]);

  return (
    <>
      {userProfile && tagProblems ? (
        <div className=" cf-profile">
          <div className="cf-profile__left cf-section">
            <div className="cf-profile__header">
              <img
                className="cf-profile__header--image"
                src={userProfile.titlePhoto || userProfile.avatar}
                alt=""
              />
              <div className="cf-profile__identity">
                <div className="cf-profile__identity--details">
                  <h4 className="cf-profile__identity--name">
                    {userProfile.firstName} {userProfile.lastName}
                  </h4>
                  <p
                    className={`cf-profile__identity--username cf-profile__identity--${userProfile.rank.split(' ').join('-')}`}
                  >
                    {userProfile.handle}
                  </p>
                </div>
                <div className="cf-profile__identity--ranking">
                  <span>Rank: </span>{" "}
                  <span className={`cf-profile__identity--${userProfile.rank.split(' ').join('-')}`}>
                    {userProfile.rank}
                  </span>
                </div>
              </div>
            </div>
            <h4 className="cf-profile__origin">
              {userProfile.city}, {userProfile.country}
            </h4>
            <h4 className="cf-profile__organization">
              {userProfile.organization ||  "Madan Mohan Malaviya University of Technology" }
            </h4>
            <div className="cf-profile__contest-rating">
              <div className="cf-profile__contest-rating--title">
                Contest Rating:
              </div>
              <div className="cf-profile__contest-rating--details">
                <span className={`cf-profile__identity--${userProfile.rank.split(' ').join('-')}`}>
                  {userProfile.rating}
                </span>{" "}
                {"( max. "}{" "}
                <span className={`cf-profile__identity--${userProfile.rank.split(' ').join('-')}`}>
                  {userProfile.rank}, {userProfile.maxRating}{" "}
                </span>{" "}
                {")"}
              </div>
            </div>
            <div className="cf-profile__skills">
              <TaggedProblemsCountUi taggedProblemsCounts={tagProblems}/>
            </div>
          </div>
          <div className="cf-profile__right">
            {
              submissionsData && (
                <CfSubmissionsGraph submissionsData={submissionsData}/>
              )
            }
            {
              userContestRatings && (
                <CfChart contests={userContestRatings} />
              )
            }
            {
              problemRatingsCount && (
                <CfHistogram problemRatingsCount={problemRatingsCount} />
              )
            }
          </div>
        </div>
      ) : null}
    </>
  );
};

export default Codeforces;
