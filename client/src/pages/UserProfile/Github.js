import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import FixedNavigation from 'components/FixedNavigation';

import { ReactComponent as GhConnectionsIcon } from "assets/svg/gh/connections.svg";
import { ReactComponent as GhLocationIcon } from "assets/svg/gh/location.svg";
import { ReactComponent as GhOverviewIcon } from "assets/svg/gh/overview.svg";
import { ReactComponent as GhReposIcon } from "assets/svg/gh/repos.svg";
import { ReactComponent as GhProjectsIcon } from "assets/svg/gh/projects.svg";
import { ReactComponent as GhPackagesIcon } from "assets/svg/gh/packages.svg";
import { ReactComponent as GhCompanyIcon } from "assets/svg/gh/company.svg";
import { ReactComponent as GhBlogIcon } from "assets/svg/gh/blog.svg";
import { ReactComponent as GhTwitterIcon } from "assets/svg/gh/twitter.svg";
import GhOverview from "ui/gh-profile-ui-components/GhOverview";
import GhRepositories from "ui/gh-profile-ui-components/GhRepositories";
import GhOpenSource from "ui/gh-profile-ui-components/GhOpenSource";
import GhPackagaes from "ui/gh-profile-ui-components/GhPackagaes";
import { useParams } from "react-router-dom";
import { loadUser } from "stores/userProfile";
import { loadGithubProfile } from "stores/githubProfile";

const ProfileInfo = ({ type, detail }) => {
	if (!type || !detail) return null;

	const Icon = {
		company: <GhCompanyIcon className="gh-profile__info--icon" />,
		blog: <GhBlogIcon className="gh-profile__info--icon" />,
		twitter: <GhTwitterIcon className="gh-profile__info--icon" />,
		location: <GhLocationIcon className="gh-profile__info--icon" />,
	};

	const Detail = {
		company: <>{detail}</>,
		blog: <a target="_blank" rel="noreferrer" href={detail}>{detail}</a>,
		twitter: <a target="_blank" rel="noreferrer" href={`https://twitter.com/${detail}`}>{detail}</a>,
		location: <>{detail}</>,
	};

	return (
		<div className="gh-profile__info">
			<div className="gh-profile__info--detail">{Icon[type]} {Detail[type]}</div>
		</div>
	);
};

const Github = () => {
 const dispatch = useDispatch();

	const { userProfile, followers, following, orgs, repos } = useSelector(
		(store) => store.github
	);
	
	const { profile } = useSelector((store) => store.user);

  const { username } = useParams();

  useEffect(() => {
    if (!profile.username) {
      dispatch(loadUser({username}))
    }else if(!userProfile && profile.githubUsername){
      dispatch(loadGithubProfile(profile.githubUsername));
    }
  }, [dispatch, profile, userProfile, username]);

	const [activeTab, setActiveTab] = useState(0);

	if (!userProfile || !followers || !following || !orgs || !repos)
		return <div>Loading...</div>;
	
	return (
		<>
    <FixedNavigation />
		<div className="gh-profile">
			<div className="gh-profile__nav">
				<div className="gh-profile__nav--items">
					<div
						className={`gh-profile__nav--item ${
							activeTab === 0 ? "gh-profile__nav--active" : ""
						}`}
						onClick={() => setActiveTab(0)}
					>
						<GhOverviewIcon className="gh-profile__nav--icon" /> Overview
					</div>

					<div
						className={`gh-profile__nav--item ${
							activeTab === 1 ? "gh-profile__nav--active" : ""
						}`}
						onClick={() => setActiveTab(1)}
					>
						{" "}
						<GhProjectsIcon className="gh-profile__nav--icon" /> Projects
					</div>

					<div
						className={`gh-profile__nav--item ${
							activeTab === 2 ? "gh-profile__nav--active" : ""
						}`}
						onClick={() => setActiveTab(2)}
					>
						{" "}
						<GhReposIcon className="gh-profile__nav--icon" /> Open Source Contributions
					</div>

					<div
						className={`gh-profile__nav--item ${
							activeTab === 3 ? "gh-profile__nav--active" : ""
						}`}
						onClick={() => setActiveTab(3)}
					>
						{" "}
						<GhPackagesIcon className="gh-profile__nav--icon" /> Packages
					</div>
				</div>
			</div>
			<div className="gh-profile__main">
				<div className="gh-profile__left">
					<div className="gh-profile__header">
						<div className="gh-profile__header--img">
							<img src={userProfile.avatar_url} alt={userProfile.login} />
						</div>
						<div className="gh-profile__header--details">
							<h1 className="gh-profile__header--name">{userProfile.name}</h1>
							<div className="gh-profile__header--username">
								{userProfile.login}
							</div>
						</div>
					</div>
					<div className="gh-profile__bio">
						{userProfile?.bio?.split(" ").map((str) => {
							if (str[0] === "@") {
								return (
									<>
										<a target="_blank" rel="noreferrer" href={`https://github.com/${str.slice(1)}`}>{str}</a>{" "}
									</>
								);
							}
							return str + " ";
						})}
					</div>
					<div className="gh-profile__connections">
						<GhConnectionsIcon className="gh-profile__connections--icon" />
						<div className="gh-profile__connections--followers">
							<span>{userProfile.followers}</span> followers
						</div>
						<div className="gh-profile__connections--following">
							<span>{userProfile.following}</span> following
						</div>
					</div>
					<ProfileInfo type="company" detail={userProfile.company} />
					<ProfileInfo type="location" detail={userProfile.location} />
					<ProfileInfo type="blog" detail={userProfile.blog} />
					<ProfileInfo type="twitter" detail={userProfile.twitter_username} />
				</div>
				<div className="gh-profile__right">
					{activeTab === 0 && <GhOverview username={userProfile.login} repos={repos} />}
					{activeTab === 1 && (
						<GhRepositories username={userProfile.login} repos={repos} />
					)}
					{activeTab === 2 && (
						<GhOpenSource />
					)}
					{activeTab === 3 && (
						<GhPackagaes />
					)}
				</div>
			</div>
		</div>
	</>
	);
};

export default Github;
