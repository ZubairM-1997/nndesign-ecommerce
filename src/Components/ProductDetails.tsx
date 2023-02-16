import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Product, size } from '../reducer';
import { useParams } from "react-router-dom";
import { useStateValue } from '../StateProvider';
import './ProductDetails.css'
import { ImageType } from './Home';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

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
  const [selectedSize, selectSize] = useState<size>("S")
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

  const addToBasket = (size: size) => {
    alert("Successfully added item to the basket")
    dispatch({
      type: 'ADD_TO_BASKET',
      item : {
        quantity: 1,
        description: product.description,
        id: product.id,
        images: product.images,
        name: product.name,
        price: product.price,
        size,
        uuid: product.uuid
      }
    })
  }

  const checkBasket = () => {
    switch(selectedSize) {
      case "S": {
        if (product.smallSize_inStock === 0){
          alert("Small Size not in Stock")
        } else {
          addToBasket("S")
        }
        break;
      }

      case "M": {
        if (product.mediumSize_inStock === 0){
          alert("Medium Size not in Stock")
        } else {
          addToBasket("M")
        }
        break;
      }

      case "L": {
        if (product.largeSize_inStock === 0){
          alert("Large Size not in Stock")
        } else {
          addToBasket("L")
        }
        break;
      }

      case "XL": {
        if (product.extraLargeSize_inStock === 0){
          alert("Extra Large Size not in Stock")
        } else {
          addToBasket("XL")
        }
        break;
      }
    }
  }

  const onDropdownSelected = (e: any)  => {
    selectSize(e.target.value as size)
  }

  const renderStockLeft = (size: size) => {
    switch(size) {
      case "S": {
        if (product.smallSize_inStock === 0){
          return (
            <p>Out of Stock</p>
          )
        } else {
          return (
            <>
            <p>{product.smallSize_inStock} left</p>
            <button className="productDetails__button" onClick={checkBasket} >Add to Cart</button>
          </>
          )
        }
      }

      case "M": {
        if (product.mediumSize_inStock === 0){
          return (
            <p>Out of Stock</p>
          )
        } else {
          return (
            <>
            <p>{product.mediumSize_inStock} left</p>
            <button className="productDetails__button" onClick={checkBasket} >Add to Cart</button>
          </>
          )
        }
      }

      case "L": {
        if (product.largeSize_inStock === 0){
          return (
            <p>Out of Stock</p>
          )
        } else {
          return (
            <>
              <p>{product.largeSize_inStock} left</p>
              <button className="productDetails__button" onClick={checkBasket} >Add to Cart</button>
            </>
          )
        }
      }

      case "XL": {
        if (product.extraLargeSize_inStock === 0){
          return (
            <p>Out of Stock</p>
          )
        } else {
          return (
            <>
            <p>{product.extraLargeSize_inStock} left</p>
            <button className="productDetails__button" onClick={checkBasket} >Add to Cart</button>
            </>
          )
        }
      }

    }
  }

  return (
    <div className='productDetails'>
        {
            product.name && 
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
          </div>
          <div className="right">
            <h1>{product.name}</h1>
            <span className="price">£{product.price}</span>
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
        <Box sx={{ minWidth: 120 }}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Size</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={selectedSize}
              label="size"
              onChange={onDropdownSelected}
            >
              <MenuItem value="S">Small</MenuItem>
              <MenuItem value="M">Medium</MenuItem>
              <MenuItem value="L">Large</MenuItem>
              <MenuItem value="XL">Extra Large</MenuItem>
            </Select>
          </FormControl>
        </Box>
        {renderStockLeft(selectedSize)}
          </div>
        </>
        }
    </div>
  );
};

export default ProductDetails;
