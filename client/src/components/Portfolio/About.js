import React from "react";

const About = ({fadeInClass}) => {
	return (
		<div
			className={`portfolio__card-inner portfolio__card-inner--${fadeInClass}`}
			id="about-card"
		>
				<div className="portfolio__about">
					<div className="portfolio__about--title">
						<span className="portfolio__about--first-word">About</span>
					</div>
					<div className="portfolio__about--greetings">
						Hi, I'm <span className="portfolio__about--name">Abhinandan Mishra</span> <br/> from <span class="portfolio__about--country">India</span>
					</div>
					<div className="portfolio__about--description">
						I'm a full stack web developer with a passion for building beautiful and functional websites.
						I have experience in building websites using React, Node, Express, MongoDB, and MySQL.
					</div>
					<div class="portfolio__about--hire">
						Hire me
					</div>
				</div>
			</div>
	);
};

export default About;
