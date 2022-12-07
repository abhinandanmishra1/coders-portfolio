import React from 'react';
import { ReactComponent as WorkExperience } from "assets/svg/lc/work-experience.svg";
import { ReactComponent as Location } from "assets/svg/lc/location.svg";
import { ReactComponent as Education } from "assets/svg/lc/education.svg";
import { ReactComponent as Github } from "assets/svg/lc/github.svg";
import { ReactComponent as Website } from "assets/svg/lc/website.svg";
import { ReactComponent as Twitter } from "assets/svg/lc/twitter.svg";
import { ReactComponent as Linkedin } from "assets/svg/lc/linkedin.svg";
import { ReactComponent as Skills } from "assets/svg/lc/skills.svg";

const LcIcon = ({type}) => {
  const Icons = {
    workExperience: <WorkExperience className='lc-profile__strip--icon'/>,
    location: <Location className='lc-profile__strip--icon'/>,
    education: <Education className='lc-profile__strip--icon'/>,
    github: <Github className='lc-profile__strip--icon'/>,
    website: <Website className='lc-profile__strip--icon'/>,
    twitter: <Twitter className='lc-profile__strip--icon'/>,
    linkedin: <Linkedin className='lc-profile__strip--icon'/>,
    skills: <Skills className='lc-profile__strip--icon'/>,
  }
  return (
    Icons[type]
  )
}

export default LcIcon