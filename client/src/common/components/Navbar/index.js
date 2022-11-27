import React from 'react'
import NavItem from './NavItem';
import Button from 'common/components/Button';

const Navbar = ({left, middle, right}) => {
  const button1 = right? right[0] : {
    title: 'Login',
    onlick: () => {},
    type: "type2",
  };

  const button2 = right? right[1] : {
    title: 'Signup',
    onlick: () => {},
    type: "type1",
  };

  return (
    <div className='nav'>
        <div className="nav__left">
            <div className="nav__left--title">
                {left || 'HackerPortfolio'}
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
            <Button {...button1} />
            <Button {...button2} />
        </div>
    </div>
  )
}

export default Navbar