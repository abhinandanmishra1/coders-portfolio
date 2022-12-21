import React from 'react'
import GhRepo from "ui/gh-profile-ui-components/GhRepo";

const GhRepositories = ({ username, repos }) => {
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
};

export default React.memo(GhRepositories);
