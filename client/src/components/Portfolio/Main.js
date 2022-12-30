import About from "./About";
import React, { useState } from "react";
import Blog from "./Blog";
import Contact from "./Contact";
import Projects from "./Projects";
import { FaUserAlt, FaLinkedin, FaGithub, FaTwitter, FaInstagram } from "react-icons/fa";
import { FaDownload, FaArrowRight } from "react-icons/fa";
import { IoIosBrush, IoMdContact} from "react-icons/io";
import { IoCodeSlash } from "react-icons/io5";
import { useSelector } from "react-redux";

const Main = () => {
	const [activeCard, setActiveCard] = useState(1);
	const { 
    profile
  } = useSelector((store) => store.user);

  const {
    username,
    leetcodeUsername,
    codeforcesUsername,
    githubUsername,
    codechefUsername,
    hackerrankUsername,
  } = profile || {};
	
	return (
		<div class="portfolio">
      
			<div className="portfolio__container">
				<header className="portfolio__header">
					<div className="portfolio__top-menu">
						<ul>
							<li className="">
								<a href="#about" onClick={() => setActiveCard(1)}>
									<span className="portfolio__top-menu--icon"><FaUserAlt /></span>
									<span className="portfolio__top-menu--link">About</span>
								</a>
							</li>
							<li className="">
								<a href="#work" onClick={() => setActiveCard(3)}>
									<span className="portfolio__top-menu--icon"><IoIosBrush /></span>
									<span className="portfolio__top-menu--link">Projects</span>
								</a>
							</li>
							<li>
								<a href="#blog" onClick={() => setActiveCard(4)}>
									<span className="portfolio__top-menu--icon"><IoCodeSlash /></span>
									<span className="portfolio__top-menu--link">Coding</span>
								</a>
							</li>
							<li>
								<a href="#contact" onClick={() => setActiveCard(5)}>
									<span className="portfolio__top-menu--icon"><IoMdContact /></span>
									<span className="portfolio__top-menu--link">Contact</span>
								</a>
							</li>
						</ul>
					</div>
				</header>

				<div className="portfolio__card-started" id="home-card">
					<div className="portfolio__profile portfolio__no-photo">
						<div
							className="portfolio__profile--slide"
						></div>

						<p className="portfolio__profile--title">Abhinandan Mishra</p>
						<div className="portfolio__profile--subtitle">Software Developer</div>

						<div className="portfolio__profile--social">
							<a
								target="_blank"
								rel="noreferrer"
								href="dummyLink"
							>
								<FaLinkedin />
							</a>
							<a
								target="_blank"
								rel="noreferrer"
								href="dummyLink"
							>
								<FaTwitter />
							</a>
							<a
								target="_blank"
								rel="noreferrer"
								href="dummyLink"
							>
								<FaGithub />
							</a>
							<a
								target="_blank"
								rel="noreferrer"
								href="dummyLink"
							>
								<FaInstagram />
							</a>
						</div>

						<div className="portfolio__profile--links">
							<a
								href="dummyLink"
								className="portfolio__profile--link"
							>
								<span className="portfolio__profile--text">Download CV</span>
								<FaDownload />
							</a>
							<a
								href="mailto:abhi@gmail.com"
								className="portfolio__profile--link"
							>
								<span className="portfolio__profile--text">Contact Me</span>
								<FaArrowRight />
							</a>
						</div>
					</div>
				</div>

				{activeCard === 1 && <About fadeInClass={activeCard === 1? 'fadeInLeft' : 'fadeOutLeft'} />}
				{activeCard === 3 && <Projects fadeInClass={activeCard === 3? 'fadeInLeft' : 'fadeOutLeft'} />}
				{activeCard === 4 && <Blog fadeInClass={activeCard === 4? 'fadeInLeft' : 'fadeOutLeft'} />}
				{activeCard === 5 && <Contact fadeInClass={activeCard === 5? 'fadeInLeft' : 'fadeOutLeft'} />}
			</div>
		</div>
	);
};

export default Main;
