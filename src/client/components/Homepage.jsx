import React from 'react';
import { Link } from 'react-router-dom';
import hanger from '../assets/hanger.png';
import burgericon from '../assets/burgericon.png';
import couch from '../assets/couch.png';
import infinity from '../assets/infinity.png';
import './Homepage.css';

export default function HomePage() {
  return (
    <>
      <div className='background'>
        <section className="MessageAndIcons">
          <div className='welcomeMsg'>
            <h1 className="msg">Welcome to Help Harbor!</h1>
            <h2>Click the following icons to access our partners in need!</h2>
          
          </div>
          <div className='services'>
            <div className='clothesAndFood'>
              <Link to={'/categories/clothes'}>
                <img src={hanger} height={50} width={50} alt='Clothes' />
              </Link>
              <br />
              <Link to={'/categories/food'}>
                <img src={burgericon} height={50} width={50} alt='Food' />
              </Link>
              <br />
            </div>
            <div className='furnitureAndCharities'>
              <Link to={'/categories/furniture'}>
                <img src={couch} height={50} width={50} alt='Furniture' />
              </Link>
              <br />
              <Link to={'/charities'}>
                <img
                  src={infinity}
                  height={50}
                  width={50}
                  alt='All Charities'
                />
              </Link>
              <br />
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
