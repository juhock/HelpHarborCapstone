import React from 'react';
import './Footernav.css';
import { Link } from 'react-router-dom';

export default function Footerbar() {
  return (
    <footernav>
    <ul>
      <li>
        <Link to='/'>Home</Link>
      </li>
      <li>
        <Link to='/login'>Login</Link>
      </li>
      <li>
        <Link to='/users/me'>Account</Link>
      </li>
    </ul>
    </footernav>
  );
}
