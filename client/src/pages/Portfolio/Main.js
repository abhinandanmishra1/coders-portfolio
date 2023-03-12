import About from "./About";
import React, { useState } from "react";
import Blog from "./Blog";
import Contact from "./Contact";
import Projects from "./Projects";

import { useSelector } from "react-redux";
import Sidebar from "./Sidebar";

const Main = () => {
  const [activeCard, setActiveCard] = useState(1);

  const { profile } = useSelector((store) => store.user);

  const {
    resumeUrl,
    linkedinUrl,
    twitterUrl,
    githubUrl,
    instagramUrl,
    email,
    fullName,
    designation,
    about,
    country,
  } = profile || {};

  return (
    <div className="portfolio">
      <div className="portfolio__container">
        {/* <Sidebar /> */}

        <div className="portfolio__section">
          <About
            {...{
              linkedinUrl,
              fullName,
              about,
              country,
              twitterUrl,
              githubUrl,
              instagramUrl,
              email,
              resumeUrl,
              designation,
            }}
            fadeInClass={activeCard === 1 ? "fadeInLeft" : "fadeOutLeft"}
          />
        </div>
        {/* <div className="portfolio__section">
          <Projects
            fadeInClass={activeCard === 3 ? "fadeInLeft" : "fadeOutLeft"}
          />
        </div>
        <div className="portfolio__section">
          <Blog fadeInClass={activeCard === 4 ? "fadeInLeft" : "fadeOutLeft"} />
        </div>
        <div className="portfolio__section">
          <Contact
            fadeInClass={activeCard === 5 ? "fadeInLeft" : "fadeOutLeft"}
          />
        </div> */}
      </div>
    </div>
  );
};

export default Main;
