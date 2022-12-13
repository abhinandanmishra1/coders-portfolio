import React from 'react';
import { Link } from 'react-router-dom';
import { MdOutlineMail } from 'react-icons/md';
import { FiUser, FiLock } from 'react-icons/fi';

const Input = ({ type, placeholder }) => {
  const icon = {
    email: <MdOutlineMail className='auth__inputs--icon'/>,
    username: <FiUser className='auth__inputs--icon'/>,
    password: <FiLock className='auth__inputs--icon'/>
  }
  return (
    <div className='auth__inputs--input'>
      {icon[type]}
      <input type={type} placeholder={placeholder} />
    </div>
  )
};

const Auth = ({type}) => {
  return (
    <div className='auth'>
      <div class="auth__main">
        <div class="auth__header">
          <div class="auth__header--title">HackerPortfolio</div>
        </div>
        <div class="auth__sub-header">
          <div class="auth__sub-header--title">For Developers</div>
          <div class="auth__sub-header--subtitle">Practice coding, prepare for interviews, and get hired.</div>
        </div>
      </div>

      <div class="auth__form">
        <div class="auth__buttons">
          <Link to={'/auth/signup'} className={`auth__buttons--btn ${type==='Login'? 'auth__buttons--active': ''}`}>Signup</Link>
          <Link to={'/auth/login'} className={`auth__buttons--btn ${type==='Signup'? 'auth__buttons--active': ''}`}>Login </Link>
        </div>
        <div class="auth__inputs">
          <Input type='username' placeholder={type==='Login'? 'Your username or Email' : 'Username'} />
          {type==='Signup' && <Input type='email' placeholder='Email' />}
          <Input type='password' placeholder='Password' />
        </div>
        <div class="auth__submit-btn">
          {type}
        </div>
      </div>
    </div>
  )
}

export default Auth