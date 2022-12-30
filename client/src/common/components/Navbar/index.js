import React from 'react'
import NavItem from './NavItem';
import { Link } from 'react-router-dom';

const Navbar = ({left, middle, right}) => {

  return (
    <div className='nav'>
        <div className="nav__left">
            <div className="nav__left--title">
                {left || 'CoderPortfolio'}
            </div>
        </div>
        {
            middle && (
                <div className="nav__middle">
                    {
                        middle.map((navItem)=> <NavItem item = {navItem}/>)
                    }
                </div>
            )
        }
        <div className="nav__right">
            <Link to={'/auth/login'} className="nav__login-btn"> Login </Link>
            <Link to={'/auth/signup'} className="nav__signup-btn"> Signup </Link>
        </div>
    </div>
  )
}

export default Navbar;
