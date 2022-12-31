import React, { useState, useCallback } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { MdOutlineMail } from 'react-icons/md';
import { FiUser, FiLock } from 'react-icons/fi';

const Input = ({ type, placeholder, setState }) => {
  const icon = {
    email: <MdOutlineMail className='auth__inputs--icon'/>,
    username: <FiUser className='auth__inputs--icon'/>,
    password: <FiLock className='auth__inputs--icon'/>
  }
  return (
    <div className='auth__inputs--input'>
      {icon[type]}
      <input onChange={(e) => setState(e.target.value)} type={type} placeholder={placeholder} />
    </div>
  )
};

const Auth = ({type}) => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();
  const isLoggedIn = localStorage.getItem('loggedIn') === 'true';

  if (isLoggedIn) {
    navigate('/dashboard');
  }

  const login = useCallback(async () => {
    await axios.post('https://portfolio-backend-gq18.onrender.com/user/login', {
      username,
      password
    })
      .then(res => {
        // If the login is successful, store the token in local storage
        localStorage.setItem('token', res.data.json);
        // set loggedIn to true
        localStorage.setItem('loggedIn', true);

        navigate('/dashboard');
      })
      .catch(err => {
        // If there is an error, log it to the console
        console.error(err);
      });
  }, [username, password, navigate]);

  const signup = useCallback(async () => {
    await axios.post('https://portfolio-backend-gq18.onrender.com/user/signup', {
      username,
      password,
      email
    })
      .then(res => {
        // If the login is successful, store the token in local storage
        localStorage.setItem('token', res.data.json);
        // set loggedIn to true
        localStorage.setItem('loggedIn', true);
        
        navigate('/dashboard');
      })
      .catch(err => {
        // If there is an error, log it to the console
        console.error(err);
      });
  }, [username, password, email, navigate])

  return (
    <div className='auth'>
      <div className="auth__main">
        <div className="auth__header">
          <div className="auth__header--title">HackerPortfolio</div>
        </div>
        <div className="auth__sub-header">
          <div className="auth__sub-header--title">For Developers</div>
          <div className="auth__sub-header--subtitle">Practice coding, prepare for interviews, and get hired.</div>
        </div>
      </div>

      <div className="auth__form">
        <div className="auth__buttons">
          <Link to={'/auth/signup'} className={`auth__buttons--btn ${type==='Login'? 'auth__buttons--active': ''}`}>Signup</Link>
          <Link to={'/auth/login'} className={`auth__buttons--btn ${type==='Signup'? 'auth__buttons--active': ''}`}>Login </Link>
        </div>
        <div className="auth__inputs">
          <Input setState={setUsername} type='username' placeholder={type==='Login'? 'Your username or Email' : 'Username'} />
          {type==='Signup' && <Input setState={setEmail} type='email' placeholder='Email' />}
          <Input setState={setPassword} type='password' placeholder='Password' />
        </div>
        <div onClick={type === "Login" ? login : signup} className="auth__submit-btn">
          {type}
        </div>
      </div>
    </div>
  )
}

export default Auth