import React, { useState, useEffect } from 'react';
import banner from '../images/banner.png'

import Product from './Product';
import './Home.css'
import axios, {AxiosRequestConfig} from 'axios';
// import "dotenv/config";
import { AddPrefixToKeys } from 'firebase/firestore';


const Home = () => {

  const [items, setItems] = useState([])


  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await axios.get(process.env.REACT_APP_API_URL + "/products?populate=*" as string, {
          headers: {
            Authorization: "bearer " + process.env.REACT_APP_API_TOKEN as string
          }
        } as AxiosRequestConfig)
        console.log(data)
      } catch(error) {
        console.log(error)
      }
    };
    fetchData();
  }, [])

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
