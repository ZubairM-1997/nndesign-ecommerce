import React from 'react'
import { useStateValue } from '../StateProvider'
import "./Product.css"

const Product = () => {
  const {state, dispatch} = useStateValue()

  console.log('this is the basket', state.basket)

  const addToBasket = () => {
    // dispatch the item to data layer
    dispatch({
      type: 'ADD_TO_BASKET',
      item : {
        id: 1,
        name: "Example Title",
        price: 19.99,
        description: "it is a random example",
        image: 'https://ui.assets-asda.com/dm/9781408855669',
        smallSize_inStock: 0,
        mediumSize_inStock: 0,
        largeSize_inStock: 0,
        extraLargeSize_inStock: 0
      }
    })

  }
  return (
    <div className='product'>
        <div className="product__info">
            <p>Example Title</p>
            <p className="product__price">
                <small>£</small>
                <strong>19.99</strong>
            </p>
        </div>

        <img src='https://ui.assets-asda.com/dm/9781408855669'></img>

        <button onClick={addToBasket}>Add to Cart</button>

    </div>
  )
}

export default Product