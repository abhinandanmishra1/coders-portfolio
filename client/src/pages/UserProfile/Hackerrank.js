import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FiGithub, FiGlobe } from "react-icons/fi";
import { RiLinkedinLine } from "react-icons/ri";
import { CgShapeHexagon } from "react-icons/cg";

import { getMonthName } from "utils/helpers";
import Section from "components/SectionCard";
import HrBadge from "ui/hr-profile-ui-components/HrBadge";
import HrCertificate from "ui/hr-profile-ui-components/HrCertificate";
import HrSectionHeader from "ui/hr-profile-ui-components/HrSectionHeader";
import FixedNavigation from "components/FixedNavigation";
import { useParams } from "react-router-dom";
import { loadUser } from "stores/userProfile";
import { loadHackerrankProfile } from "stores/hackerrankProfile";

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

const RightProfileUi = ({
	profile,
	certificates,
	badges,
	schools,
	experiences,
}) => {
	if (!profile) return null;
	return (
		<div className="hr-profile__right">
			<Section extraclassName="hr-profile__section">
				<HrSectionHeader title="Badges" />
				<div className="hr-profile__badges">
					{badges &&
						badges.map((badge) => (
							<HrBadge
								title={badge.title}
								shortTitle={badge.short_title}
								stars={badge.stars}
							/>
						))}
				</div>
			</Section>
			<Section extraclassName="hr-profile__section">
				<HrSectionHeader title="Certificates" />
				{certificates && (
					<>
						<div className="hr-profile__certificates">
							{certificates.map((certificate) => (
								<HrCertificate {...certificate} />
							))}
						</div>
					</>
				)}
				{!certificates && <>{profile.model.username} has no certificates.</>}
			</Section>
			<Section extraclassName="">
				<HrSectionHeader title="Work Experience" />
				{experiences &&
					experiences.map((experience) => {
						const {
							name,
							job_title,
							description,
							start_month,
							start_year,
							end_month,
							end_year,
						} = experience.attributes;
						return (
							<div className="hr-profile__experience">
								<div className="hr-profile__school">
									<CgShapeHexagon className="hr-profile__school--icon" />
									<h2 className="hr-profile__school--name">{job_title}</h2>
									<p className="hr-profile__school--timeline">
										{name} |{" "}
										<span>
											{getMonthName(start_month)} {start_year} -{" "}
											{end_month && end_year ? (
												<>
													{getMonthName(end_month)} {end_year}
												</>
											) : (
												"Present"
											)}
										</span>
									</p>
								</div>
								<p className="hr-profile__experience--description">
									{description}
								</p>
							</div>
						);
					})}

				{!experiences && (
					<div className="hr-profile__text">
						{profile.model.username} has not updated employment details yet.
					</div>
				)}
			</Section>
			<Section extraclassName="">
				<HrSectionHeader title="Education" />
				{schools &&
					schools.map((school) => {
						const {
							name,
							program,
							degree,
							start_month,
							start_year,
							end_month,
							end_year,
						} = school.attributes;
						return (
							<div className="hr-profile__school">
								<CgShapeHexagon className="hr-profile__school--icon" />
								<h2 className="hr-profile__school--name">{name}</h2>
								<p className="hr-profile__school--timeline">
									{program}, {degree}, |{" "}
									<span>
										{getMonthName(start_month)} {start_year} -{" "}
										{end_month && end_year ? (
											<>
												{getMonthName(end_month)} {end_year}
											</>
										) : (
											"Present"
										)}
									</span>
								</p>
							</div>
						);
					})}
				{!schools && (
					<div className="hr-profile__text">
						{profile.model.username} has not updated Education details yet.
					</div>
				)}
			</Section>
		</div>
	);
};

const HackerrankProfile = () => {
	const { badges, certificates, schools, userProfile, experiences } =
		useSelector((store) => store.hackerrank);

	const dispatch = useDispatch();
	const { profile } = useSelector((store) => store.user);

  const { username } = useParams();

  useEffect(() => {
    if (!profile.username) {
      dispatch(loadUser({username}))
    }else if(!userProfile && profile.hackerrankUsername){
      dispatch(loadHackerrankProfile(profile.hackerrankUsername));
    }
  }, [dispatch, profile, userProfile, username]);

	return (
		<>
			{userProfile ? (
				<>
					<FixedNavigation />
					<div className="hr-profile">
						<LeftProfileUi profile={userProfile} />
						<RightProfileUi
							profile={userProfile}
							certificates={certificates}
							badges={badges}
							schools={schools}
							experiences={experiences}
						/>
					</div>
				</>
			) : (
				<h1>Loading...</h1>
			)}
		</>
	);
};

export default HackerrankProfile;
