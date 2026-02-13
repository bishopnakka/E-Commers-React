import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import './singlepageCSS.css'
import { fridgeData } from '../data/fridge'
import { useDispatch } from 'react-redux'
import { addToCart } from '../redux/ReduxSlice'

const FridgeSingle = () => {
    const dispatch=useDispatch()
    const navigate=useNavigate()
    const {id}=useParams()
    const product=fridgeData.find(p=>p.id === id)
    if(!product){
        return(
           <h1>item not found</h1>
        );
    }
    const handleCart=()=>{
        dispatch(addToCart(product))
        navigate("/cart")
    }
  return (
    <div className='single-page-section'>
        <div className='single-page-body'>
        <div className='single-page-img'>
            <img src={product.image} alt={product.description}/>
        </div>
        <div className='single-page-content'>
            <h2>{product.brand} {product.model}</h2>
            <h2 className='discription'>{product.description}</h2>
            <h1>${product.price}</h1>
            <button className='single-page-btn' onClick={handleCart}>add to cart</button>
        </div>
        </div>
    </div>
  )
  
}

export default FridgeSingle
