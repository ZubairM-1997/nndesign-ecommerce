import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Product } from '../reducer';
import { useParams } from "react-router-dom";
import { useStateValue } from '../StateProvider';
import './ProductDetails.css'
import { ImageType } from './Home';

const ProductDetails = () => {

  const {state, dispatch} = useStateValue()
  const [product, setProduct] = useState<Product>({
    id: null,
    description: null,
    extraLargeSize_inStock: null,
    images: [],
    largeSize_inStock: null,
    name: null,
    uuid: null,
    mediumSize_inStock: null,
    price: null, 
    smallSize_inStock: null
  });
  let { id } = useParams(); 

  useEffect(() => {
    const fetchData = async () => {
      try {
        const resp = await axios.get(`${process.env.REACT_APP_API_URL}/products/${id}?populate=*`, {
          headers: {
            Authorization: `bearer ${process.env.REACT_APP_API_TOKEN}`
          }
        });

        
        const images : string[] = resp.data.data.attributes.images.data.map((img : ImageType) => {
            return img.attributes.url
        })
        let dataToBePushed : Product = {
            id: resp.data.data.id as number,
            uuid: resp.data.data.attributes.UUID,
            name: resp.data.data.attributes.name,
            description: resp.data.data.attributes.description,
            smallSize_inStock: resp.data.data.attributes.smallSize_inStock,
            extraLargeSize_inStock: resp.data.data.attributes.extraLargeSize_inStock,
            largeSize_inStock: resp.data.data.attributes.largeSize_inStock,
            mediumSize_inStock: resp.data.data.attributes.mediumSize_inStock,
            price: resp.data.data.attributes.price,
            images
          }
        setProduct(dataToBePushed);
    
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  const addToBasket = () => {
    // dispatch the item to data layer
    if (
      product.smallSize_inStock === 0 && 
      product.mediumSize_inStock === 0 && 
      product.largeSize_inStock === 0 && 
      product.extraLargeSize_inStock === 0) {
        alert("This item is currently not in stock")
    } else {
        dispatch({
          type: 'ADD_TO_BASKET',
          item : product
        })
    }
  }

  return (
    <div className='productDetails'>
        {
            product.uuid && 
            <>
          <div className="left">
            <div className="images">
              <img
                src={
                    'http://localhost:1337' + product.images[0]
                }
                alt=""
              />
              { product.images.length > 1 && 
                <img
                src={
                    'http://localhost:1337' + product.images[1]
                }
                alt=""
              />}
            </div>
            {/* <div className="mainImg">
              <img
                src={
                  process.env.REACT_APP_UPLOAD_URL +
                  data?.attributes[selectedImg]?.data?.attributes?.url
                }
                alt=""
              />
            </div> */}
          </div>
          <div className="right">
            <h1>{product.name}</h1>
            <span className="price">${product.price}</span>
            <p>{product.description}</p>
            {/* <div className="quantity">
              <button
                onClick={() =>
                  setQuantity((prev) => (prev === 1 ? 1 : prev - 1))
                }
              >
                -
              </button>
              {quantity}
              <button onClick={() => setQuantity((prev) => prev + 1)}>+</button>
            </div> */}
            <button className="productDetails__button" onClick={addToBasket}>Add to Cart</button>
          </div>
        </>
        }
    </div>
  );
};

export default ProductDetails;
