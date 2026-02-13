import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import './singlepageCSS.css'
import { tvData } from '../data/tv'
import { useDispatch } from 'react-redux'
import { addToCart } from '../redux/ReduxSlice'

const TvSingle = () => {
    const dispatch=useDispatch()
    const navigate=useNavigate()
    const {id}=useParams()
    const product=tvData.find(p=>p.id === id)
    if(!product){
        return(
           <h1>item not found</h1>
        );
    }
        const handleCart=()=>{
            dispatch(addToCart({
                ...product,cartId:`tv-${product.id}`
            }))
            navigate("/cart")
        }
  return (
    <div className='single-page-section'>
        <div className='single-page-body'>
        <div className='single-page-img'>
            <img src={product.image} alt={product.description && "image is loading... click add to cart button to if you wnat this product" }/>
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

export default TvSingle;
