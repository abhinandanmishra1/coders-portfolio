import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { batch, useDispatch, useSelector } from "react-redux";

import {
  loadUserProfile,
  loadLanguagesCounts,
  loadTagProblemCounts,
  loadUserBadgesInfo,
  loadUserContestRatingInfo,
  loadUserContestRatingHistogram,
  loadUserProblemsSolvedInfo,
  loadUserRecentAcSubmissions,
  loadUserProfileCalendar,
} from "stores/leetcodeProfile";
import LcProfileStripData from "ui/lc-profile-ui-components/LcProfileStripData";
import LcChart from "ui/lc-profile-ui-components/LcChart";
import LcHistogram from "ui/lc-profile-ui-components/LcHistogram";
import LcSolvedProblems from "ui/lc-profile-ui-components/LcSolvedProblems";
import LcBadges from "ui/lc-profile-ui-components/LcBadges";
import LcSubmissions from "ui/lc-profile-ui-components/LcSubmissions";
import LcRecentSubmissions from "ui/lc-profile-ui-components/LcRecentSubmissions";

const LcStrips = ({ user }) => {
  return (
    <>
      {user.profile.company ? (
        <LcProfileStripData
          type="workExperience"
          desc={`${user.profile.company} | ${user.profile.jobTitle}`}
        />
      ) : null}
      {user.profile.location ? (
        <LcProfileStripData
          type="location"
          desc={user.profile.location.split("%").reverse().join(", ")}
        />
      ) : null}
      {user.profile.school ? (
        <LcProfileStripData type="education" desc={user.profile.school} />
      ) : null}
      {user.profile.websites[0] ? (
        <LcProfileStripData type="website" desc={user.profile.websites[0]} isLink={true}/>
      ) : null}
      {user.githubUrl ? (
        <LcProfileStripData type="github" desc={user.githubUrl} isSocial={true} />
      ) : null}
      {user.linkedinUrl ? (
        <LcProfileStripData type="twitter" desc={user.linkedinUrl} isSocial={true} />
      ) : null}
      {user.twitterUrl ? (
        <LcProfileStripData type="linkedin" desc={user.twitterUrl} isSocial={true} />
      ) : null}
      {user.profile.skillTags ? (
        <LcProfileStripData type="skills" skills={user.profile.skillTags} />
      ) : null}
    </>
  );
};

const LanguagesUsedUi = ({ languages }) => {
  return (
    <div className="lc-profile__languages">
      {languages.languageProblemCount.map((language) => {
        return (
          <div className="lc-profile__language">
            <div className="lc-profile__language--name">
              {language.languageName}
            </div>
            <div className="lc-profile__language--solved">
              {language.problemsSolved}{" "}
              <span>problem{language.problemsSolved > 1 && "s"} solved</span>
            </div>
          </div>
        );
      })}
    </div>
  );
};

const TaggedProblemsCountUi = ({ taggedProblemsCounts }) => {
  return (
    <div className="lc-profile__taggedProblems">
      {taggedProblemsCounts.map((tag) => {
        return (
          <div className="lc-profile__tag">
            <div className="lc-profile__tag--name">{tag.tagName}</div>
            <div className="lc-profile__tag--count">
              x<span>{tag.problemsSolved}</span>
            </div>
          </div>
        );
      })}
    </div>
  );
};

const SkillsUi = ({ skills }) => {
  if (!skills) return null;

  return (
    <div className="lc-profile__skills">
      {Object.entries(skills).map((entry) => {
        return (
          <div className="lc-profile__skill">
            <div
              className={`lc-profile__skill--title lc-profile__skill--${entry[0]}`}
            >
              {entry[0]}
            </div>
            <TaggedProblemsCountUi taggedProblemsCounts={entry[1]} />
          </div>
        );
      })}
    </div>
  );
};

const LeftProfileUi = ({ user, languages, skills }) => {
  if (!user || !languages) return null;

  return (
    <div className="lc-profile__left lc-section">
      <div className="lc-profile__header">
        <img
          className="lc-profile__header--image"
          src={user.profile.userAvatar}
          alt=""
        />
        <div className="lc-profile__identity">
          <div className="lc-profile__identity--details">
            <h4 className="lc-profile__identity--name">
              {user.profile.realName}
            </h4>
            <p className="lc-profile__identity--username">{user.username}</p>
          </div>
          <div className="lc-profile__identity--ranking">
            <span>Rank</span> {user.profile.ranking}
          </div>
        </div>
      </div>
      <h4 className="lc-profile__aboutMe">{user.profile.aboutMe}</h4>
      <LcStrips user={user} />
      <LanguagesUsedUi languages={languages} />
      <SkillsUi skills={skills && skills.tagProblemCounts} />
    </div>
  );
};

const RightProfileUi = ({
  contests,
  contestHistogram,
  calendarData,
  recentSubmissions,
  badgesData,
}) => {
  return (
    <div className="lc-profile__right">
      <div className="lc-profile__right--diagrams">
        <LcChart {...{ contests }} />
        <LcHistogram contests={contestHistogram} />
      </div>
      <div className="lc-profile__right--more-details">
        <LcSolvedProblems />
        <LcBadges {...{ badgesData }} />
      </div>
      <LcSubmissions {...{ calendarData }} />
      <LcRecentSubmissions {...{ recentSubmissions }} />
    </div>
  );
};

const Leetcode = () => {
  const { username } = useParams();
  const dispatch = useDispatch();

  const {
    badges,
    contestRatings,
    contestRatingHistogram,
    languages,
    recentSubmissions,
    solvedProblems,
    tagProblems,
    userInfo,
    userProfileCalendar,
    isLoading,
  } = useSelector((store) => store.leetcode);

  useEffect(() => {
    batch(() => {
      dispatch(loadUserProfile(username));
      dispatch(loadLanguagesCounts(username));
      dispatch(loadTagProblemCounts(username));
      dispatch(loadUserBadgesInfo(username));
      dispatch(loadUserContestRatingInfo(username));
      dispatch(loadUserContestRatingHistogram(username));
      dispatch(loadUserProblemsSolvedInfo(username));
      dispatch(loadUserRecentAcSubmissions(username));
      dispatch(loadUserProfileCalendar(username));
    });
  }, [dispatch, username]);

  return (
    <div className="lc-profile">
      {isLoading ? (
        <h1>Loading...</h1>
      ) : (
        <>
          <LeftProfileUi
            user={userInfo && userInfo.matchedUser}
            languages={languages && languages.matchedUser}
            skills={tagProblems && tagProblems.matchedUser}
          />
          <RightProfileUi
            contests={contestRatings}
            contestHistogram={
              contestRatingHistogram &&
              contestRatingHistogram.contestRatingHistogram
            }
            calendarData={
              userProfileCalendar &&
              userProfileCalendar.matchedUser &&
              userProfileCalendar.matchedUser.userCalendar
            }
            recentSubmissions={recentSubmissions}
            badgesData={badges && badges.matchedUser}
          />
        </>
      )}
    </div>
  );
};

export default Leetcode;
