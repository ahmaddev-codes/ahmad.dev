import React from 'react';
import { NavLink } from 'react-router-dom';
import './Nav.scss';
import logo from '../../logo.svg';

const Nav = () => {
  return (
    <nav className='nav'>
      <div className='nav__hamburger'>
        <span></span>
        <span></span>
        <span></span>
      </div>

      <div className='nav__link'>
        <NavLink to='/'>
            Home
        </NavLink>
        <NavLink to='/portfolio'>
            Portfolio
        </NavLink>
        <NavLink to='/bio'>
            Bio
        </NavLink>
        <NavLink to='/arsenal'>
            Arsenal
        </NavLink>
      </div>

      <img className='nav__logo' src={ logo } alt='logo'></img>

      <div className='nav__link'>
        <NavLink to='/skills'>
            Skills
        </NavLink>
        <NavLink to='/vouchers'>
            Vouchers
        </NavLink>
        <NavLink to='/contact'>
            Contact Me
        </NavLink>
      </div>
    </nav>
  )
}

export default Nav;