import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import CfChart from "ui/cf-profile-ui-components/CfChart";
import CfHistogram from "ui/cf-profile-ui-components/CfHistogram";
import CfSubmissionsGraph from "ui/cf-profile-ui-components/CfSubmissionsGraph";
import FixedNavigation from 'components/FixedNavigation';
import { loadCodeforcesProfile } from "stores/codeforcesProfile";
import { loadUser } from "stores/userProfile";
import { useParams } from "react-router-dom";

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
  const dispatch = useDispatch();

  const { 
    userProfile, 
    userContestRatings, 
    tagProblems, 
    problemRatingsCount, 
    submissionsData 
  } = useSelector((store) => store.codeforces);

  const { profile } = useSelector((store) => store.user);

  const { username } = useParams();

  useEffect(() => {
    if (!profile.username) {
      dispatch(loadUser({username}))
    }else if(!userProfile && profile.codeforcesUsername){
      dispatch(loadCodeforcesProfile(profile.codeforcesUsername));
    }
  }, [dispatch, profile, userProfile, username]);

  return (
    <>
      <FixedNavigation />
      {userProfile && tagProblems && userContestRatings && problemRatingsCount && submissionsData ? (
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
