import React from 'react'
import './cart.css'
import { useDispatch, useSelector } from 'react-redux'
import { removeFromCart } from '../redux/ReduxSlice'

const Cart = () => {
    const cart=useSelector(state=>state.cart.items)
    const dispatch=useDispatch()
  return (
    <div className='cart-section'>
        {cart.map(item=>{
            return(
                <div className='cart-body' key={item.id}>
                    <div>
                        <img src={item.image} alt="" />
                    </div>
                    <div className='cart-name'>
                        <h3>{item.brand}</h3>
                    </div>
                    <div className='cart-price'><p>{item.price}</p></div>
                    <button className='cart-button' onClick={()=>dispatch(removeFromCart(item.id))}>remove</button>
                </div>
            )
        })}
        
      
    </div>
  )
}

export default Cart
