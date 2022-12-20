import React, {useState} from "react";
import { useSelector } from "react-redux";

import { ReactComponent as GhConnectionsIcon } from "assets/svg/gh/connections.svg";
import { ReactComponent as GhForkIcon } from "assets/svg/gh/fork.svg";
import { ReactComponent as GhStarIcon } from "assets/svg/gh/star.svg";
import { ReactComponent as GhTimeIcon } from "assets/svg/gh/time.svg";
import { ReactComponent as GhLocationIcon } from "assets/svg/gh/location.svg";
import { ReactComponent as GhOverviewIcon } from "assets/svg/gh/overview.svg";
import { ReactComponent as GhReposIcon } from "assets/svg/gh/repos.svg";
import { ReactComponent as GhProjectsIcon } from "assets/svg/gh/projects.svg";
import { ReactComponent as GhPackagesIcon } from "assets/svg/gh/packages.svg";
import { ReactComponent as GhCompanyIcon} from "assets/svg/gh/company.svg";
import { ReactComponent as GhBlogIcon} from "assets/svg/gh/blog.svg";
import { ReactComponent as GhTwitterIcon} from "assets/svg/gh/twitter.svg";
import GhStats from "ui/gh-profile-ui-components/GhStats";
import GhRepo from "ui/gh-profile-ui-components/GhRepo";
import GhStreakStats from "ui/gh-profile-ui-components/GhStreakStats";

const ProfileInfo = ({ type, detail }) => {
	if (!type || !detail) return null;

  const Icon = {
    company: <GhCompanyIcon className="gh-profile__info--icon"/>,
    blog: <GhBlogIcon className="gh-profile__info--icon"/>,
    twitter: <GhTwitterIcon className="gh-profile__info--icon"/>,
    location: <GhLocationIcon className="gh-profile__info--icon"/>,
  }

  const Detail = {
    company: <>{detail}</>,
    blog: <a href={detail}>{detail}</a>,
    twitter: <a href={`https://twitter.com/${detail}`}>{detail}</a>,
    location: <>{detail}</>,
  }

	return (
		<div className="gh-profile__info">
			{Icon[type]}
			<div className="gh-profile__info--detail">{Detail[type]}</div>
		</div>
	);
};

const Overview = ({ userProfile }) => {
  if (!userProfile) return null;

  return <div class="gh-profile__overview">
    <div class="gh-profile__stats">
      <GhStats username={userProfile.login}/>
      <GhStreakStats username={userProfile.login} />
    </div>
  </div>
}

const Repositories = ({ username, repos }) => {
  if (!username || !repos) return null;

  return (
    <div className="gh-profile__repos">
      {repos.map((repo) => (
        <GhRepo
          key={repo.id}
          username={username}
          repo={repo.name}
          repoUrl={repo.html_url}
          language={repo.language}
          description={repo.description}
          stars={repo.stargazers_count}
          forks={repo.forks_count}
        />
      ))}
    </div>
  );
}

const Github = () => {
	const { userProfile, followers, following, orgs, repos } = useSelector(
		(store) => store.github
	);

  const [activeTab, setActiveTab] = useState(0);
  
	console.log({
		userProfile,
		followers,
		following,
		orgs,
		repos,
	});

	if (!userProfile || !followers || !following || !orgs || !repos)
		return <div>Loading...</div>;

	return (
		<div className="gh-profile">
			<div className="gh-profile__nav">
				<div className="gh-profile__nav--items">
					<div className="gh-profile__nav--item" onClick={()=> setActiveTab(0)}>
						<GhOverviewIcon className="gh-profile__nav--icon"/> Overview
					</div>
					<div className="gh-profile__nav--item" onClick={()=> setActiveTab(1)}>
						{" "}
						<GhReposIcon className="gh-profile__nav--icon" /> Repositories
					</div>
					<div className="gh-profile__nav--item" onClick={()=> setActiveTab(2)}>
						{" "}
						<GhProjectsIcon className="gh-profile__nav--icon" /> Projects
					</div>
					<div className="gh-profile__nav--item" onClick={()=> setActiveTab(3)}>
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
										<a href={`https://github.com/${str.slice(1)}`}>{str}</a>{" "}
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
          {
            activeTab === 0 && <Overview userProfile={userProfile}/>
          }
          {
            activeTab === 1 && <Repositories username={userProfile.login} repos={repos}/>
          }
        </div>
			</div>
		</div>
	);
};

export default Github;
