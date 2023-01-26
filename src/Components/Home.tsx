import React, { useState, useEffect } from 'react';
import banner from '../images/banner.png'

import Product from './Product';
import './Home.css'
import axios, {AxiosRequestConfig} from 'axios';
import { Product as Item } from '../reducer';

type ImageType = {
  attributes: {
    url: string
  }
}

const Home = () => {

  const [items , setItems] = useState<Item[]>([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const resp = await axios.get(process.env.REACT_APP_API_URL + "/products?pagination[page]=1&pagination[pageSize]=10&populate=*" as string, {
          headers: {
            Authorization: "bearer " + process.env.REACT_APP_API_TOKEN as string
          }
        } as AxiosRequestConfig)

        console.log(resp)
        
        const itemsState : Item[] = resp.data.data.map((item : any) => {

          const images : string[] = item.attributes.images.data.map((img : ImageType) => {
            return img.attributes.url
          })


          let itemToBePushed : Item = {
            uuid: item.attributes.UUID,
            name: item.attributes.name,
            description: item.attributes.description,
            smallSize_inStock: item.attributes.smallSize_inStock,
            extraLargeSize_inStock: item.attributes.extraLargeSize_inStock,
            largeSize_inStock: item.attributes.largeSize_inStock,
            mediumSize_inStock: item.attributes.mediumSize_inStock,
            price: item.attributes.price,
            images
          }

          return itemToBePushed
        })
        setItems(itemsState)

      } catch(error) {
        console.log(error)
      }
    };
    fetchData();
  }, [])

  console.log(items)

  return (
    <div className='home'>
        <div className='home__container'>
              <img className='home_image' src={banner} />
            
            {
              items[0] && items[0].images.length >0 &&
              <>
                <div className="home__row">
                  <Product {...items[0]}/>
                  <Product {...items[1]}/>
                  <Product {...items[2]}/>
                  <Product {...items[3]}/>
                  <Product {...items[4]}/>
                </div>

              <div className="home__row">
                  <Product {...items[5]}/>
                  <Product {...items[6]}/>
                  <Product {...items[7]}/>
              </div>

              <div className="home__row">
                  <Product {...items[8]}/>
              </div>
              </>
            }
        </div>
    </div>
  )
}

export default Home
