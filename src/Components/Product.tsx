import React from 'react'
import "./Product.css"

const Product = () => {
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

        <button>Add to Cart</button>

    </div>
  )
}

export default Product