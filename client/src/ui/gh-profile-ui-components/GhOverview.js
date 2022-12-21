import React from 'react'
import GhCalendar from "ui/gh-profile-ui-components/GhCalendar";
import GhStats from "ui/gh-profile-ui-components/GhStats";
import GhStreakStats from "ui/gh-profile-ui-components/GhStreakStats";
import GhProject from './GhProject';

const GhOverview = ({ username, repos }) => {
	if (!username) return null;

	return (
		<div class="gh-profile__overview">
			<div class="gh-profile__stats">
				<GhStats username={username} />
				<GhStreakStats username={username} />
			</div>
			<div class="gh-profile__contributions">
				<GhCalendar username={username} />
			</div>
			{
				repos && repos.length > 0 && (
					<div class="gh-profile__live-projects">
						<h1>Live Projects</h1>
						<div class="gh-profile__live-projects--list">
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