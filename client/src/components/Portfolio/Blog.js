import React, { useCallback }from "react";
import { useNavigate } from "react-router-dom";

const Blog = ({ fadeInClass }) => {
  const navigate = useNavigate();

  const navigateTo = useCallback((e) => {
    const profilePath = e.target.innerText.toLowerCase();
    navigate(profilePath);
  }, [navigate]);

	return (
		<div
			className={`portfolio__card-inner portfolio__card-inner--${fadeInClass}`}
			id="about-card"
		>
			<div className="portfolio__profiles">
        <div class="portfolio__profiles--card box" onClick={navigateTo}>
          Leetcode
        </div>
        <div class="portfolio__profiles--card box" onClick={navigateTo}>
          Github
        </div>
        <div class="portfolio__profiles--card box" onClick={navigateTo}>
          Codechef
        </div>
        <div class="portfolio__profiles--card box" onClick={navigateTo}>
          Codeforces
        </div>
        <div class="portfolio__profiles--card box" onClick={navigateTo}>
          Hackerrank
        </div>
			</div>
		</div>
	);
};

export default Blog;
