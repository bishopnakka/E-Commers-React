import React from 'react'
import { useParams } from 'react-router-dom'
import './singlepageCSS.css'
import { speakerData } from '../data/speaker'
import { useDispatch } from 'react-redux'
import { addToCart } from '../redux/ReduxSlice'

const SpeakerSingle = () => {
    const dispatch=useDispatch()
    const {id}=useParams()
    const product=speakerData.find(p=>p.id === id)
    if(!product){
        return(
           <h1>item not found</h1>
        );
    }
        const handleCart=()=>{
            dispatch(addToCart({
                ...product,cartId:`speaker-${product.id}`
            }))
            navigate("/cart")
        }
  return (
    <div className='single-page-section' id={product.id}>
        <div className='single-page-body'>
        <div className='single-page-img'> 
            <img src={product.image} alt={product.description}/>
        </div>
        <div className='single-page-content'>
            <h2>{product.brand} {product.model}</h2>
            <h2 className='discription'>{product.description}</h2>
            <h1>{product.price}</h1>
            <button className='single-page-btn' onClick={handleCart}>add to cart</button>
        </div>
    </div>
    </div>
  )
}

export default SpeakerSingle;
