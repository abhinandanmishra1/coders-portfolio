import React from 'react'

const Resume = ({fadeInClass}) => {
  return (
    <div className={`portfolio__card-inner portfolio__card-inner--${fadeInClass}`} id="about-card">
    <div className="portfolio__card-wrap">
      <div className="portfolio__content portfolio__about">
        <div className="portfolio__title">
          <span className="portfolio__first-word">Resume</span>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Resume