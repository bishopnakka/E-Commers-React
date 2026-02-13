import React from 'react'
import './cart.css'
import { useDispatch, useSelector } from 'react-redux'
import { removeFromCart } from '../redux/ReduxSlice'
import { Link } from 'react-router-dom'

const Cart = () => {
    const cart=useSelector(state=>state.cart.items)
    const dispatch=useDispatch()
  return (
    <div className='cart-section'>
        {cart.map(item=>{
            return(
                <div className='cart-body' key={item.id}>
                    <div className='cart-img'>
                        <img src={item.image} alt="" />
                    </div>
                    <div className='cart-name'>
                        <h3>{item.brand || item.company}</h3>
                    </div>
                    <div className='cart-price'><p>${item.price}</p></div>
                    <div className='cart-qty'><h5>({item.qty})</h5></div>
                    <button className='cart-button' onClick={()=>dispatch(removeFromCart(item.id))}>-</button>
                </div>
            )
        })}
           <div className='cart-checkout-btn'>
            <Link to='/checkout'>
                <button>Checkout</button>
            </Link>
            </div>
        
      
    </div>
  )
}

export default Cart
