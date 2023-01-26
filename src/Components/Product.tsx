import React from 'react'
import { useStateValue } from '../StateProvider'
import "./Product.css"
import { Product as Item } from '../reducer'

const Product = ( props : Item ) => {
  const {state, dispatch} = useStateValue()

  const addToBasket = () => {
    // dispatch the item to data layer
    if (
      props.smallSize_inStock === 0 && 
      props.mediumSize_inStock === 0 && 
      props.largeSize_inStock === 0 && 
      props.extraLargeSize_inStock === 0) {
        alert("This item is currently not in stock")
    } else {
        dispatch({
          type: 'ADD_TO_BASKET',
          item : props
        })
    }
  }
  return (
    <div className='product'>

      <div className="product__info">
            <p>{props.name}</p>
            <p className="product__price">
                <small>£</small>
                <strong>{props.price}</strong>
            </p>
        </div>

        <img src={'http://localhost:1337' + props.images[0]} />


        <button onClick={addToBasket}>Add to Cart</button>

    </div>
  )
}

export default Product