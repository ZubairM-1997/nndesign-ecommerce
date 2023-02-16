import { size } from '../reducer'
import { useStateValue } from '../StateProvider'
import "./CheckoutProduct.css"


type Params = {
  id: number | null,
  name: string | null, 
  image: string | null,
  price: number | null,
  size: size | null,
  quantity: number | null
}

const CheckoutProduct = ({ id , name, image, price, size, quantity} : Params ) => {
  const {state, dispatch} = useStateValue()
  const removeFromBasket = () => {
    // remove the item from the basket
    dispatch({
        type: 'REMOVE_FROM_BASKET',
        item : {
          id, 
          name,
          images: [image as string],
          price,
          size,
          description: "",
          quantity,
          uuid: ""
        },
    })
}
  return (
    <div className='checkoutProduct'>
        { image &&
            <>
              
              <img className='checkoutProduct__image' src={image} />

            <div className='checkoutProduct__info'>
                <p className='checkoutProduct__name'>{name}</p>
                <p className="checkoutProduct__size">{size}</p>
                <p className="checkoutProduct__price">
                    <small>£</small>
                    <strong>{price}</strong>
                </p>

                
                <button onClick={removeFromBasket}>Remove from Basket</button>
                
            </div>
        </>
        }
      </div>
    
  )
}

export default CheckoutProduct