import React, { useState } from 'react'
import { useStateValue } from '../StateProvider'
import "./Product.css"
import { Product as Item } from '../reducer'
import { useNavigate } from 'react-router-dom'
import { size } from '../reducer'
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { breadcrumbsClasses } from '@mui/material/Breadcrumbs'

const Product = ( props : Item ) => {
  const {state, dispatch} = useStateValue()
  const [selectedSize, selectSize] = useState<size >("S")

  const history = useNavigate();


  const viewDetails = () => {
    history(`/products/${props.id}`);
  }

  const addToBasket = (size: size) => {
    dispatch({
      type: 'ADD_TO_BASKET',
      item : {
        quantity: 1,
        description: props.description,
        id: props.id,
        images: props.images,
        name: props.name,
        price: props.price,
        size,
        uuid: props.uuid
      }
    })
  }

  const checkBasket = () => {
    switch(selectedSize) {
      case "S": {
        if (props.smallSize_inStock === 0){
          alert("Small Size not in Stock")
        } else {
          addToBasket("S")
        }
        break;
      }

      case "M": {
        if (props.mediumSize_inStock === 0){
          alert("Medium Size not in Stock")
        } else {
          addToBasket("M")
        }
        break;
      }

      case "L": {
        if (props.largeSize_inStock === 0){
          alert("Large Size not in Stock")
        } else {
          addToBasket("L")
        }
        break;
      }

      case "XL": {
        if (props.extraLargeSize_inStock === 0){
          alert("Extra Large Size not in Stock")
        } else {
          addToBasket("XL")
        }
        break;
      }
    }
  }

  const onDropdownSelected = (e: any)  => {
    selectSize(e.target.value)
  }


  return (
    <div id={`${props.id}`} className='product'>

      <div className="product__info">
            <p>{props.name}</p>
            <p className="product__price">
                <small>£</small>
                <strong>{props.price}</strong>
            </p>

      </div>

      <img onClick={viewDetails} src={'http://localhost:1337' + props.images[0]} />

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

        <button onClick={checkBasket}>Add to Cart</button>

    </div>
  )
}

export default Product