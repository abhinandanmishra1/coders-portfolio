import React from "react";

const About = ({fadeInClass, linkedinUrl, fullName, country, about}) => {
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
						Hi, I'm <span className="portfolio__about--name">{fullName || 'User Name'}</span> <br/> from <span className="portfolio__about--country">{country || 'Country'}</span>
					</div>
					<div className="portfolio__about--description">
						{
							about || 'Please add a valuable description about yourself to attract recruiters'
						}
					</div>
					<div className="portfolio__about--hire" onClick={() => {
						window.open(linkedinUrl || '', "_blank");
					}}>
						Hire me
					</div>
				</div>
			</div>
	);
};

export default About;
