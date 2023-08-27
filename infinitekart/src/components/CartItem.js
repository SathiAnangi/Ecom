import './cartItem.css'
import { incrementQuantity, decrementQuantity, removeItem} from '../redux/cartSlice'
import { useDispatch } from 'react-redux'
import Mobile from '../assets/images/mobile.jpg'

function CartItem({id, image, title, price, quantity=0}) {
  const dispatch = useDispatch()

  return (
    <div className="cartItem">
      <img className="cartItem__image" src={Mobile} alt='item'/>
      <div className="cartItem__info">
        <p className="cartItem__title">{title}</p>
        
        <div className='cartItem__incrDec'>
          <button onClick={() => dispatch(decrementQuantity(id))}>-</button>
          <p>{quantity}</p>
          <button onClick={() => dispatch(incrementQuantity(id))}>+</button>
        </div>
        <button
          className='cartItem__removeButton' 
          onClick={() => dispatch(removeItem(id))}>
            Remove
        </button>
      </div>
    </div>
  )
}

export default CartItem