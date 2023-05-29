import React from 'react'

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
                                <svg className='bellIconed' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0M3.124 7.5A8.969 8.969 0 015.292 3m13.416 0a8.969 8.969 0 012.168 4.5" />
                                </svg>

                            </div>
                        </div>
                        <div className='navProfile' >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                            </svg>

                        </div>
                    </div>
                </div>
            </div>
            <div className='centerCol' ></div>
        </div>
    )
}

export default UserPage