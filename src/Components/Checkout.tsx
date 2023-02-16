import { useStateValue } from '../StateProvider'
import './Checkout.css'
import CheckoutProduct from './CheckoutProduct'
import Subtotal from './Subtotal'


const Checkout = () => {
  const {state, dispatch} = useStateValue()
  return (
    <div className='checkout'>
        <div className="checkout__left">
            <h2 className="checkout__title">Your shopping Basket</h2>



        </div>
        <div>
          <h3>Hello, {state.user?.email}</h3>
          <h2 className="checkout__title">Your shopping Basket</h2>

          {state.basket.map(item  => (
            <CheckoutProduct
              id={item.id}
              name={item.name}
              image={item.images[0]}
              price={item.price}
              size={item.size}
              quantity={item.quantity}
            />
          ))}


        </div>

        <div className="checkout__right">
            <Subtotal />
        </div>
    </div>
  )
}

export default Checkout