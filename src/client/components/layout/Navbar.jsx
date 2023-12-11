import React, { useState } from 'react';

import { Link } from 'react-router-dom';

import './Navbar.css';
import logo from '../../assets/logo2.png';
import { getMenuData } from './MenuData';

import { useDispatch, useSelector } from 'react-redux';
import { logout, selectToken } from '../login/authslice';

import { useNavigate } from 'react-router';

export default function Navbar() {
  const token = useSelector(selectToken);
  const [clicked, setClicked] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleClick = () => {
    setClicked(!clicked);
  };

  const handleNavClicks = {
    'logout-nav': () => {
      dispatch(logout());
      navigate('/');
    }
  };

  return (
    <nav className='NavbarItems'>
      <Link to='/' className='title'>
        <img src={logo} className='logo' alt='light house icon' />{' '}
      </Link>

      <div className='menu-icons' onClick={handleClick}>
        <i className={clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
      </div>

      <ul className={clicked ? 'nav-menu active' : 'nav-menu'}>
        {/* The fallowing block of code maps all of the navbar info, 
        to make any edits move over to MenuData and edit that code.  */}
        {getMenuData(token).map((item, index) => {
          if (item.id) {
            return (
              <>
                <li key={index} id={item.id} onClick={handleNavClicks[item.id]}>
                  <a href={item.url} className={item.nName}>
                    <i className={item.icon}></i>
                    {item.title}
                  </a>
                </li>
              </>
            );
          } else {
            return (
              <>
                <li key={index}>
                  <a href={item.url} className={item.nName}>
                    <i className={item.icon}></i>
                    {item.title}
                  </a>
                </li>
              </>
            );
          }
        })}
      </ul>
    </nav>
  );
}
