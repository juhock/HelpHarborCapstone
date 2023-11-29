import React from 'react';

import { Link } from 'react-router-dom';

import './navBar.css'
import { NavLink } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav>
      <Link to="/" className='title'>
        HelpHarbor</Link>

      <ul>
        <li>
          <NavLink to='/'>Home</NavLink>
        </li>
        <li>
          <NavLink to='/login'>Login</NavLink>
        </li>
        <li>
          <NavLink to='/users/me'>Account</NavLink>
        </li>
      </ul>
    </nav>
  );
}