import React, {useState} from 'react';

import { Link } from 'react-router-dom';

import './Navbar.css'
import { NavLink } from 'react-router-dom';
import logo from '../../assets/logo2.png';

export default function Navbar() {
   const [clicked, setClicked] = useState(false);

  const handleClick =()=>{
    setClicked(!clicked)
   }

  return (
    <nav className= "NavbarItems">
     
      <Link to="/" className='title'>
         <img src={logo} className="logo" alt="light house icon" /> </Link>
        
        <div className="menu-icons" onClick={handleClick}>
          <i className= {clicked ?
           "fas fa-times" : "fas fa-bars"}></i>
        </div>

      <ul className={clicked ? "nav-menu active" : "nav-menu"}>
        <li>
          <i className='fa-solid fa-anchor fa-bounce'></i>
          <NavLink to='/'>Home</NavLink>
        </li>
        <li>
          <NavLink to='/charities/create'>Create</NavLink>
        </li>
        <li>
        <i className='fa-solid fa-person-shelter fa-bounce'></i>
          <NavLink to='/login'>Login</NavLink>
        </li>
        <li>
        <i className='fa-solid fa-house-flood-water fa-bounce'></i>
          <NavLink to='/users/me'>Account</NavLink>
        </li>
        <li>
        <i className='fa-solid fa-anchor-circle-exclamation fa-bounce'></i>
          <NavLink to='/signup'>Signup</NavLink>
        </li>
      </ul>
    </nav>
  );
}