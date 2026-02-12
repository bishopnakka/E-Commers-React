import React from 'react'
import { womanData } from '../data/woman'
import './singlepageCSS.css'
import { useParams } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { addToCart } from '../redux/ReduxSlice'

const WomenSingle = () => {
    const disptch=useDispatch()
    const {id}=useParams()
    const product=womanData.find(p=>p.id === id)
    if(!product){
        return(
           <h1>item not found</h1>
        );
    }
  return (
    <div className='single-page-section'>
        <div className='single-page-body'>
        <div>
            <img src={product.image} alt={product.description}/>
        </div>
        <div>
            <h2>{product.brand}</h2>
            <h2>{product.model}</h2>
            <h2>{product.description}</h2>
            <h1>{product.price}</h1>
            <button onClick={()=>{disptch(addToCart(product))}}>add to cart</button>
        </div>
        </div>
    </div>
  )
}

export default WomenSingle
