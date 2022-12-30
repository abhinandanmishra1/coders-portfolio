import React from "react";

const GhProject = ({ repo, projectNumber }) => {
	const projectUrl = `https://${repo.homepage}`;
	const githubUrl = repo.html_url;

	const openInNewTab = (url) => {
		window.open(url, "_blank", "noopener,noreferrer");
	};

	return (
		<div className="gh-project" onClick={() => openInNewTab(projectUrl)}>
			<div className="gh-project__card">
				<div className="gh-project__card-img">{projectNumber}</div>
				<div className="gh-project__card-content">
					<h2
						onClick={(event) => {
							openInNewTab(githubUrl);
							event.stopPropagation();
						}}
					>
						{repo.name}
					</h2>
					<p>{repo.description}</p>
				</div>
			</div>
		</div>
	);
};

export default GhProject;
