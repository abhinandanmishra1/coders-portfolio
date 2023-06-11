import React from 'react';
import banner from '../../assets/images/pro-banner.png';
import html from '../../assets/images/html.png';
import Ellipse from '../../assets/images/Ellipse.png';
import react from '../../assets/images/react.png';
import htmlBig from '../../assets/images/html-5.png';
import avatar1 from '../../assets/images/avatar1.png';
import avatar2 from '../../assets/images/avatar2.png';

const divArr = [1, 2];

const Projects = () => {
    return (
        <div className="projects-div">
            <div className='nav-projects'>
                <p className='nav-pro-headline'>Projects</p>
                <button className='nav-pro-newproject'>Create New Project</button>
            </div>
            <div className="grid-project">
                {divArr.map((item, index) => (
                    <div className="pro-row-one">
                        {divArr.map((item, index) => (
                            <div className="pro-col-one">
                                <img className='pro-banner' src={banner} alt="" />
                                <div className="frame-out">
                                    <div className="frame-i">
                                        <p className='personal-pr'>Personal Portfolio Website</p>
                                        <div className="small-out-di">
                                            <div className="small-in-di">
                                                <img src={html} alt="" />
                                                <p className='html-pro-text'>HTML/CSS</p>
                                            </div>
                                            <img className='ellipse-pro' src={Ellipse} alt="" />
                                            <div className="small-in-di">
                                                <img src={react} alt="" />
                                                <p className='html-pro-text'>HTML/CSS</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                ))}
            </div>
            <div className="playground">
                <div className='nav-projects'>
                    <p className='nav-pro-headline'>Playgrounds</p>
                    <button className='nav-pro-newproject'>Create New playground</button>
                </div>
                <div className="plg-grid">
                    {divArr.map((item, index) => (
                        <div className="plg-row-one">
                            {divArr.map((item, index) => (
                                <div className="plg-col-one">
                                    <div className="plg-card">
                                        <div className="card-inner">
                                            <img src={htmlBig} alt="" />
                                            <div className="card-content">
                                                <div className="card-texts">
                                                    <p className='card-title'>Playground Title</p>
                                                    <div className="plg-copy">
                                                        <p className='html-pro-text'>HTML/CSS</p>
                                                        <img className='ellipse-pro' src={Ellipse} alt="" />
                                                        <p className='html-pro-text'>1 min ago</p>
                                                    </div>
                                                </div>
                                                <div className="card-details">
                                                    <div className="avatars">
                                                        <img src={avatar1} alt="" />
                                                        <img src={avatar2} alt="" />
                                                    </div>
                                                    <p className='avatarText'>Shared with <b>Adam</b>, <b>Anna</b>.. +7 more</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Projects