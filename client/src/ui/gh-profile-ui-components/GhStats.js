import React from "react";

const GhStats = ({ username }) => {
	if (!username) return null;
  const baseUrl = "https://awesome-github-stats.azurewebsites.net/user-stats";
  const styleAttributes = "cardType=octocat&theme=dark&Ring=6B6C69&Text=FFFDFDCE&Title=DDDDDD&Border=94DD19"
	return (
		<div className="gh-stats">
			<img
				alt={`${username}'s GitHub Stats`}
				src={`${baseUrl}/${username}?${styleAttributes}}`}
			/>
		</div>
	);
};

export default React.memo(GhStats);
