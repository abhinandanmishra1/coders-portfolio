import React from "react";
import { useSelector } from "react-redux";
import { FiGithub, FiGlobe } from "react-icons/fi";
import { RiLinkedinLine } from "react-icons/ri";
import { CgShapeHexagon } from "react-icons/cg";

import Section from "common/components/SectionCard";
import HrBadge from "ui/hr-profile-ui-components/HrBadge";
import HrCertificate from "ui/hr-profile-ui-components/HrCertificate";
import HrSectionHeader from "ui/hr-profile-ui-components/HrSectionHeader";

const LeftProfileUi = ({ profile }) => {
  if (!profile) return null;
  return (
    <div className="hr-profile__left">
      <div className="hr-profile__basic">
        <div className="hr-profile__basic--logo">
          <img src={profile.model.avatar} alt="" />
        </div>
        <h1 className="hr-profile__basic--name">{profile.model.name}</h1>
        <div className="hr-profile__basic--username">
          {profile.model.username}
        </div>
        <div className="hr-profile__basic--jobs-headline">
          {profile.model.jobs_headline}
        </div>
        <div className="hr-profile__basic--country">
          {profile.model.country}
        </div>
        <div className="hr-profile__social">
          {profile.model.github_url && (
            <a
              data-element="Github"
              href={profile.model.github_url}
              className="hr-profile__social--icon"
            >
              <FiGithub />
            </a>
          )}
          {profile.model.linkedin_url && (
            <a
              data-element="Linkedin"
              href={profile.model.linkedin_url}
              className="hr-profile__social--icon"
            >
              <RiLinkedinLine />
            </a>
          )}
          {profile.model.website && (
            <a
              data-element="Website"
              href={profile.model.website}
              className="hr-profile__social--icon"
            >
              <FiGlobe />
            </a>
          )}
        </div>
      </div>
      <div className="hr-profile__about">
        <h3 className="hr-profile__about--heading">About</h3>
        {profile.model.school && (
          <div className="hr-profile__about--school">
            <h4>Education</h4>
            <p>{profile.model.school}</p>
          </div>
        )}
        {profile.model.short_bio && (
          <div className="hr-profile__about--me">
            <h4>More about me</h4>
            <p>{profile.model.short_bio}</p>
          </div>
        )}
      </div>
    </div>
  );
};

const RightProfileUi = ({ profile, certificates, badges }) => {
  if (!profile) return null;
  return (
    <div className="hr-profile__right">
      <Section extraClass="hr-profile__section">
        <HrSectionHeader title="Badges" />
        <div className="hr-profile__badges">
            {
              badges && (
                badges.map((badge) => <HrBadge title={badge.title} shortTitle={badge.short_title} stars={badge.stars}/>)
              )
            }
        </div>
      </Section>
      <Section extraClass="hr-profile__section">
        <HrSectionHeader title="Certificates" />
        {certificates && (
          <>
            <div className="hr-profile__certificates">
              {
                certificates.map((certificate) => <HrCertificate {...certificate} />)
              }
            </div>
          </>
        )}
        {
          !certificates && (
            <>
              {profile.model.username} has no certificates.
            </>
          )
        }
      </Section>
      <Section extraClass="">
        <HrSectionHeader title="Work Experience" />
        <div className="hr-profile__text">
          {profile.model.username} has not updated employment details yet.
        </div>
      </Section>
      <Section extraClass="">
        <HrSectionHeader title="Education" />
        <div className="hr-profile__school">
          <CgShapeHexagon className="hr-profile__school--icon" />
          <h2 className="hr-profile__school--name">{profile.model.school}</h2>
          <p className="hr-profile__school--timeline">
            Information Technology, B.Tech, | <span>July 2019 - Present</span>
          </p>
        </div>
      </Section>
    </div>
  );
};

const HackerrankProfile = () => {
  const hrProfile = useSelector((store) => store.hackerrank.userProfile);
  const certificates = useSelector((store) => store.hackerrank.certificates);
  const badges = useSelector(store => store.hackerrank.badges);

  return (
    <>
      {hrProfile ? (
        <div className="hr-profile">
          <LeftProfileUi profile={hrProfile} />
          <RightProfileUi profile={hrProfile} certificates={certificates} badges={badges} />
        </div>
      ) : (
        <h1>Loading...</h1>
      )}
    </>
  );
};

export default HackerrankProfile;
