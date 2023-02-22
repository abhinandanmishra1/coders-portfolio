import React from 'react'
import { Link } from 'react-router-dom';
import Logo2 from 'assets/images/logo2.png';

const Navbar = ({left, middle, right}) => {

  return (
    <div className='nav'>
        <div className="nav__left">
            <div className="nav__logo">
                <img className='nav__logo--img' src={Logo2} alt="CodersPortfolio" />
                <p className='nav__logo--title'> CodersPortfolio </p>
            </div>
        </div>
        <div className="nav__right">
            <Link to={'/auth/login'} className="nav__login-btn"> Login </Link>
            <Link to={'/auth/signup'} className="nav__signup-btn"> Signup </Link>
        </div>
    </div>
  )
}

export default Navbar;
