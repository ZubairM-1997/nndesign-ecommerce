import React, { useState, useEffect } from 'react';
import banner from '../images/banner.png'

import Product from './Product';
import './Home.css'


const Home = () => {

  return (
    <div className='home'>
        <div className='home__container'>
              <img className='home_image' src={banner} />
            
            <div className="home__row">
              <Product />
              <Product />
              <Product />
            </div>

            <div className="home__row">
              <Product />
            </div>

            <div className="home__row">
                

            </div>
        </div>
    </div>
  )
}

export default Home
