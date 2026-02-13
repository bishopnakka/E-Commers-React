import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import './checkout.css'
import api from '../api'
import { clearCart } from '../redux/ReduxSlice';

const CheckoutPage = () => {
    const cart=useSelector(state=>state.cart.items);
    const dispatch=useDispatch()
      const total=cart.reduce((sum,item)=>{
    return sum + Number(item.price) *item.qty;
  },0)
  const [address,setAddress]=useState("");

  const handlePayment = async()=>{
    const res=await api.post("/create-order",{
        amount:Math.round(total)
    })
    const options={
        key:"rzp_test_SFhwfipyQZkhK7",
        amount:res.data.amount,
        currency:"INR",
        name:"online Shop",
        description:"order payment",
        order_id:res.data.id,
        handler:function(response){
            alert("payment successfull"),
            dispatch(clearCart())
        }
    }
    const razor=new window.Razorpay(options)
    razor.open()
  }
  return (
    <div className='checkout-body'>
        <h1>Checkout Page</h1>
        <input type="text" placeholder='enter your address' 
        value={address} onChange={e=>setAddress(e.target.value)}/>
        {cart.map(p=>(
         <p key={p.id}>{p.model} x {p.qty}</p>
        ))}
        <h2>Total: {total.toFixed(2)}</h2>
        <button onClick={handlePayment}>pay now</button>
    </div>
  )
  
}

export default CheckoutPage
