import React, {useState} from 'react';

import { Link } from 'react-router-dom';

import './Navbar.css'
import { NavLink } from 'react-router-dom';

export default function Navbar() {
   const [menuOpen, setMenuOpen] = useState(false)
  return (
    <nav>
      <Link to="/" className='title'>
        HelpHarbor</Link>
        <div className= "menu"
         onClick={() => {
          setMenuOpen(!menuOpen);
        }}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>

      <ul className={menuOpen ? "open" : ""}>
        <li>
          <NavLink to='/'>Home</NavLink>
        </li>
        <li>
          <NavLink to='/login'>Login</NavLink>
        </li>
        <li>
          <NavLink to='/users/me'>Account</NavLink>
        </li>
        <li>
          <NavLink to='/signup'>Signup</NavLink>
        </li>
      </ul>
    </nav>
  );
}