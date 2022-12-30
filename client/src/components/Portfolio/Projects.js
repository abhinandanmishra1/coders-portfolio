import React from "react";
import { FaGithub, FaGlobe } from "react-icons/fa";

const Projects = ({ fadeInClass }) => {
	const projects = [
		{
			name: "Task Tracker",
			description: "It is a task tracking web app created in angular",
			skills: ["Angular", "Node", "MongoDB"],
			githubLink: "dummyLink",
			websiteLink: "dummyLink",
		},
		{
			name: "Leetcode IDE Clone",
			description: "It is a task tracking web app created in angular",
			skills: ["React", "Tailwind", "MongoDB"],
			githubLink: "dummyLink",
			websiteLink: "dummyLink",
		},
		{
			name: "Portfolio Maker",
			description: "It is a webapp which helps you create your portfolio",
			skills: ["React", "Scss", "MongoDB", "Node"],
			githubLink: "dummyLink",
			websiteLink: "dummyLink",
		},
	];
	return (
		<div
			className={`portfolio__card-inner portfolio__card-inner--${fadeInClass}`}
			id="about-card"
		>
			<div className="portfolio__projects">
				{projects.map((project, index) => {
					return (
						<div class="portfolio__projects--card">
							<div class="portfolio__projects--name">{project.name}</div>
							<div class="portfolio__projects--description">
								{project.description}
							</div>
							<div class="portfolio__projects--skills">
								{project.skills.map((skill) => {
									return <div class="portfolio__projects--skill">{skill}</div>;
								})}
							</div>
							<div class="portfolio__projects--link">
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
