import React, { useState } from 'react';

import { Link } from 'react-router-dom';

import './Navbar.css';
import logo from '../../assets/logo2.png';
import { getMenuData } from './MenuData';

import { useSelector } from "react-redux"
import { selectToken } from '../login/authslice'




export default function Navbar() {
  
  const token = useSelector(selectToken)
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(!clicked);
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
        {getMenuData(token).map((item, index)=>{
            return( 
              <li key={index}>
          <a href= {item.url} 
            className={item.nName}>
            <i className={item.icon}></i>
            {item.title}
          </a>
        </li>
            )
        })}
        
      </ul>
    </nav>
  );
}
