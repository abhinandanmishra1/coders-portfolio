import React from "react";
import { FaGithub, FaGlobe } from "react-icons/fa";
import { useSelector } from "react-redux";

const Projects = ({ fadeInClass }) => {
	
	const { projects} = useSelector(store => store.user);

	return (
		<div
			className={`portfolio__card-inner portfolio__card-inner--${fadeInClass}`}
			id="about-card"
		>
			<div className="portfolio__projects">
				{projects.map((project, index) => {
					return (
						<div className="portfolio__projects--card rainbow">
							<div className="portfolio__projects--name">{project.name}</div>
							<div className="portfolio__projects--description">
								{project.description}
							</div>
							<div className="portfolio__projects--skills">
								{project.skills.split(',').map((skill) => {
									return <div className="portfolio__projects--skill">{skill}</div>;
								})}
							</div>
							<div className="portfolio__projects--link">
								<a href={project.githubLink} target="_blank" rel="noreferrer">
									<FaGithub />
								</a>
								<a href={project.websiteLink} target="_blank" rel="noreferrer">
									<FaGlobe />
								</a>
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default Projects;
