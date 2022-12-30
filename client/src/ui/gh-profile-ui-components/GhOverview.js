import React from 'react'
import GhCalendar from "ui/gh-profile-ui-components/GhCalendar";
import GhStats from "ui/gh-profile-ui-components/GhStats";
import GhStreakStats from "ui/gh-profile-ui-components/GhStreakStats";
import GhProject from './GhProject';

const GhOverview = ({ username, repos }) => {
	if (!username) return null;

	return (
		<div className="gh-profile__overview">
			<div className="gh-profile__stats">
				<GhStats username={username} />
				<GhStreakStats username={username} />
			</div>
			<div className="gh-profile__contributions">
				<GhCalendar username={username} />
			</div>
			{
				repos && repos.length > 0 && (
					<div className="gh-profile__live-projects">
						<h1>Live Projects</h1>
						<div className="gh-profile__live-projects--list">
						{
							repos.filter((repo) => repo.homepage).map((repo, index) => 
									<GhProject key={repo.id} repo={repo} projectNumber={index+1} />
							)
						}
						</div>
					</div>
				)
			}
			
		</div>
	);
};

export default React.memo(GhOverview);