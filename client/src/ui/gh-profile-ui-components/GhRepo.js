import React from "react";
import { ReactComponent as GhRepoIcon } from "assets/svg/gh/repos.svg";
import { ReactComponent as GhStarIcon } from "assets/svg/gh/star.svg";
import { ReactComponent as GhForkIcon } from "assets/svg/gh/fork.svg";

import { languageColors } from "utils/colors";

const GhRepo = ({
	username,
	repo,
	repoUrl,
	language,
	description,
	stars,
	forks,
}) => {
	return (
		<div className="gh-repo">
			<div className="gh-repo__title">
				<GhRepoIcon
					className="gh-repo__title--icon"
					style={{ fill: languageColors[language] }}
				/>
				<a
					target="_blank"
					rel="noreferrer"
					href={repoUrl}
					style={{ color: languageColors[language] }}
				>
					{" "}
					{repo}{" "}
				</a>
			</div>
			<div className="gh-repo__description">{description}</div>
			<div className="gh-repo__detail">
				{language && (
					<div className="gh-repo__detail--lang">
						<span
							className="gh-repo__detail--lang-color"
							style={{ backgroundColor: languageColors[language] }}
						></span>{" "}
						<span className="gh-repo__detail--lang-name">{language}</span>
					</div>
				)}
				{stars > 0 && (
					<div className="gh-repo__detail--stars">
						<GhStarIcon style={{ fill: languageColors[language] }} /> 
            <div className="gh-repo__detail--stars-count">
            {stars}
            </div>
					</div>
				)}
				{forks > 0 && (
					<div className="gh-repo__detail--forks">
						<GhForkIcon style={{ fill: languageColors[language] }} /> 
            <div className="gh-repo__detail--forks-count">
            {forks}
            </div>
					</div>
				)}
			</div>
		</div>
	);
};

export default GhRepo;
