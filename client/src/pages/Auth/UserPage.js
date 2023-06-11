import PortfolioResumeBar from 'pages/Components/PortfolioResumeBar'
import Projects from 'pages/Components/Projects'
import Stats from 'pages/Components/Stats'
import Usercard from 'pages/Components/Usercard'
import Stack from '@mui/material/Stack';
import Badge from '@mui/material/Badge';
import MailIcon from '@mui/icons-material/Mail';
import React from 'react'
import user1 from '../../assets/images/user1.png'
const UserPage = () => {
    return (
        <div className='userPage'>
            <div className='profileNav'>
                <div className='textFrame' >
                    <p className='coderPortfolioText'>coderPortfolio</p>
                </div>
                <div className='secondFrame' >
                    <div className='searchFrame' >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                        </svg>
                        <input type='text' placeholder='Search' />
                        <select id="dino-select">
                            <optgroup label="Btech">
                                <option>Courses</option>
                                <option>Information Technology</option>
                                <option>Computer Science</option>
                                <option>Artificial Intelligence</option>
                            </optgroup>
                            <optgroup label="Mtech">
                                <option>Diplodocus</option>
                                <option>Saltasaurus</option>
                                <option>Apatosaurus</option>
                            </optgroup>
                        </select>
                    </div>
                    <div className='iconsandprofileFrame' >
                        <div className='lightbellFrame' >
                            <div className='lightnumberFrame' >
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                                </svg>
                                <h4>5</h4>
                            </div>
                            <div className='bellFrame' >
                                <Badge color="secondary" badgeContent={99}>
                                    <MailIcon className='size-mail' />
                                </Badge>
                            </div>
                        </div>
                        <div className='navProfile' >

                            <Badge color="primary" badgeContent={5}>
                                <img className='user1' src={user1}></img>
                            </Badge>
                        </div>
                    </div>
                </div>
            </div>
            <div className='centerCol' >
                <Usercard />
                <PortfolioResumeBar />
                {/* <Stats /> */}
                <Projects />
            </div>
        </div>
    )
}

export default UserPage