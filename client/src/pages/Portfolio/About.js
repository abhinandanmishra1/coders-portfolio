import React from "react";
import { FaLinkedin, FaGithub, FaTwitter, FaInstagram } from "react-icons/fa";
import { FaDownload, FaArrowRight } from "react-icons/fa";
import image from "assets/images/abhimanyu_bno.jpg";
import "./styles/about.scss";

const About = ({
  fullName,
  about,
  country,
  twitterUrl,
  linkedinUrl,
  githubUrl,
  instagramUrl,
  email,
  resumeUrl,
  designation,
}) => {
  const name = (fullName || '').split(' ');
  const firstName = name[0];
  const lastName = name.slice(1).join(' ');
  return (
    <div className="portfolio-about" id="portfolio-about-card">
	  <div className="portfolio-about__header">
		<div className="portfolio-about__logo">
			<span className="portfolio__logo">{firstName}</span>
			{lastName}
		</div>
		<button className="btn btn-sm">
			Hire me
		</button>
	  </div>
      <div className="portfolio-about__container">
        <div className="portfolio-about__image">
          <img src={image} alt="" />
        </div>
		<div className="portfolio-about__title">
			{fullName}
		</div>
		<div class="portfolio-about__description">
			<div class="portfolio-about__designation">
			I am a <span className="portfolio-about__designation--color">{designation}</span>
			</div>
			<div className="portfolio-about__summary">
				{about}
			</div>
		</div>
		<div className="portfolio-about__buttons">
			<button className="btn btn-lg">Contact Me</button>
			<a className="portfolio-about__resume text-gradient" href={resumeUrl} alt="resume"> Get Resume </a>
		</div>
		<div className="portfolio-about__socials">
		    <a href={githubUrl}> <FaGithub /> </a>
		    <a href={linkedinUrl}> <FaLinkedin /> </a>
		    <a href={twitterUrl}> <FaTwitter /> </a>
		    <a href={instagramUrl}> <FaInstagram /> </a>
		</div>
      </div>
    </div>
  );
};

export default About;
