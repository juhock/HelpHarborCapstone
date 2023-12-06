import React from 'react';
import './Footernav.css';
import { Link } from 'react-router-dom';
import { FooterMenuData } from './FooterMenuData';

export default function Footerbar() {
  return (
    <footernav className='FooterBarItems'>
      <ul>
        {FooterMenuData.map((item, index) => {
          return (
            <li key={index}>
              <a href={item.url} className={item.nName}>
                <i className={item.icon}></i>
                {item.title}
              </a>
            </li>
          );
        })}
      </ul>
    </footernav>
  );
}
